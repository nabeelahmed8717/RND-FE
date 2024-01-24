import { FC, useEffect, useState } from "react";
import {
  Grid,
} from "@mui/material";
import {
  QuestionList,
  questionList,
} from "../../common/constants/questionList";
import {
  getQuestion,
  postQuestionApi,
} from "../../redux/questions/question-api";
import {
  goToPreviousQuestion,
} from "../../redux/questions/question";
import {
  makeState,
  manipulateApiData,
} from "../../common/mockData/questions/QuestionDummyApi";
import {
  questionSchema,
} from "../../common/mockData/questions/Model";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";
import { STATUS } from "../../common/constants/store";
import ErrorIcon from "@mui/icons-material/Error";
import Image from "next/image";
import QuestionFifteen from "./questionFifteen/QuestionFifteen";
import QuestionFortyThree from "./questionFortyThree/QuestionFortyThree";
import QuestionFourty from "./questionFourty/QuestionFourty";
import QuestionFourtyFour from "./questionFourtyFour/QuestionFourtyFour";
import QuestionOne from "./questionOne/QuestionOne";
import QuestionSeven from "./questionSeven/QuestionSeven";
import QuestionSixtyTwo from "./questionSixtyTwo/QuestionSixtyTwo";
import QuestionThirteen from "./questionThirteen/QuestionThirteen";
import SuccessIcon from "../../assets/images/questionLayout/SuccessIcon.png";
import { checkForCorrectAns, getChildPath } from "../../common/utils/utils";
import errorIcon from "../../assets/images/questionLayout/errorIcon.png";
import infoIcon from "../../assets/images/questionLayout/infoicon.svg";
import QuestionSkeleton from "../../common/components/questionSkeleton/QuestionSkeleton";
import QuestionSidebar from "./questionSidebar/QuestionSidebar";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { useRouter } from "next/router";

const QuestionLayout: FC = (props: any) => {
  const { clientId } = props;
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [questionState, setQuestionState] = useState(0);
  const [currentQuestionSchema, setCurrentQuestionSchema] = useState(null);
  const [buttonText, setButtonText] = useState<string>("Disable");
  const [showMessage, setShowMessage] = useState("");
  const [isIndividual, setIsIndividual] = useState(
    questionState.hasOwnProperty("salaries")
  );
  const [nextquestionNumber, setNextQuestionNumber] = useState<number>(0);
  const [testPreviousQuestionNumber, setTestPreviousQuestionNumber] = useState<number>(0);


  const attemptedQuestion:any = [];
  const dispatch = useAppDispatch();

  const QuestionApidataFrontEnd: any = useAppSelector(
    (state) => state.question.question?.data
  );
 
  const questionNumberRedux: any = useAppSelector(
    (state) => state.question.questionNumber
  );

  const status: any = useAppSelector((state) => state.question.status);
  const comapnyName = useAppSelector((state) => state.question.question.cname);
  const questionnireId = useAppSelector((state) => state.question.question.id);

  const router = useRouter();
  let parts = router.asPath.split("/");
  
  const questionSevenData: QuestionList | undefined = questionList.find(
    (question) => question.id === 7
  );

  function postQuestion() {
    let data = {};
    if (questionNumber === 43) {
      if (questionState.hasOwnProperty("salaries")) {
        data = {
          questionNumber: questionNumber + 1,
          answer: { overallStaffCost: questionState },
        };
      } else {
        data = {
          questionNumber: questionNumber + 1,
          answer: { individualStaffCost: questionState },
        };
      }
    } else {
      data = {
        questionNumber: questionNumber + 1,
        answer: questionState,
      };
    }
    let payload={data,nextQuestion:nextquestionNumber-1,preQuestion:testPreviousQuestionNumber, attemptedQuestion:attemptedQuestion[questionNumber],questionnireId}
    // localStorage.setItem("payload++++++++++", payload.attemptedQuestion);
    //  console.log("payload.attemptedQuestion++++++++++", payload);
     
    dispatch(postQuestionApi(payload));
  }

  function goToPreviousQuestionAndGetQuestion(){
    dispatch(getQuestion());
    dispatch(goToPreviousQuestion(testPreviousQuestionNumber!==null?testPreviousQuestionNumber:questionNumber-1));
  }
  
  useEffect(() => {
    if (!QuestionApidataFrontEnd && (parts[4].length>5)) {
      dispatch(getQuestion(parts[4]));
    }

    if (QuestionApidataFrontEnd) {

      setQuestionState(
        makeState(QuestionApidataFrontEnd[questionNumberRedux]).tempArray
          .length > 0
          ? makeState(QuestionApidataFrontEnd[questionNumberRedux]).tempArray
          : makeState(QuestionApidataFrontEnd[questionNumberRedux]).tempObj
      );
      setCurrentQuestionSchema({
        ...manipulateApiData(questionNumberRedux),
        ...makeState(QuestionApidataFrontEnd[questionNumberRedux]),
      });
      setQuestionNumber(questionNumberRedux);
    }
  }, [QuestionApidataFrontEnd, questionNumberRedux,router]);

  function changeQuestionTypeForFourtyFour() {
    setIsIndividual(!isIndividual);
    setQuestionState(
      makeState(
        QuestionApidataFrontEnd[questionNumberRedux],
        true,
        questionState.hasOwnProperty("salaries")
      ).tempArray.length > 0
        ? makeState(
          QuestionApidataFrontEnd[questionNumberRedux],
          true,
          questionState.hasOwnProperty("salaries")
        ).tempArray
        : makeState(
          QuestionApidataFrontEnd[questionNumberRedux],
          true,
          questionState.hasOwnProperty("salaries")
        ).tempObj
    );
    setCurrentQuestionSchema(
      makeState(
        QuestionApidataFrontEnd[questionNumberRedux],
        true,
        questionState.hasOwnProperty("salaries")
      )
    );
  }

  useEffect(() => {
    if (status === STATUS.FAILED) {
      dispatch(
        displayToastr({
          message: "Something went wrong",
          alertType: "error",
        })
      );
    }
  }, [status]);

  useEffect(() => {
         if (questionState) {
           if(questionNumber !== 3 && questionNumber !== 12 && questionNumber !== 14 && questionNumber !== 31 && questionNumber !== 39 && questionNumber !== 42 && questionNumber !== 43 && questionNumber !== 61){
            //  setNextQuestionNumber(nextquestionNumber+1)
             let answer = checkForCorrectAns(questionState, questionNumberRedux,comapnyName)
            setButtonText(answer[answer.length - 1])
            setShowMessage(answer[answer.length - 2])
            setNextQuestionNumber(answer[answer.length - 3])
           }
         }
       

  }, [questionState])

  const showQuestions = () => {
    switch (questionNumber) {
      case 61:
        return <QuestionSixtyTwo questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema[questionNumber]} questionSchemaTwo={currentQuestionSchema} setNextQuestionNumber={setNextQuestionNumber} setButtonText={setButtonText} buttonText={buttonText} comapnyName={comapnyName}/>
      case 39:
        return <QuestionFourty questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema[questionNumber]} setButtonText={setButtonText} buttonText={buttonText} setNextQuestionNumber={setNextQuestionNumber}/>
      case 12:
        return <QuestionThirteen questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} setButtonText={setButtonText} buttonText={buttonText} questionNumber={questionNumber} comapnyName={comapnyName} setNextQuestionNumber={setNextQuestionNumber}/>
      case 14:
        return <QuestionFifteen questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} setButtonText={setButtonText} buttonText={buttonText} questionNumber={questionNumber} comapnyName={comapnyName} setNextQuestionNumber={setNextQuestionNumber}/>
      case 43:
        return <QuestionFourtyFour questionState={questionState} setQuestionState={setQuestionState} questionSchema={currentQuestionSchema} isIndividual={isIndividual} changeQuestionType={changeQuestionTypeForFourtyFour} setButtonText={setButtonText} buttonText={buttonText} questionNumber={questionNumber} setNextQuestionNumber={setNextQuestionNumber}/>
      case 42:
        return <QuestionFortyThree questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} setButtonText={setButtonText} buttonText={buttonText} questionNumber={questionNumber} setNextQuestionNumber={setNextQuestionNumber}/>
      case 6:
        return <QuestionSeven questionData={questionSevenData} questionState={questionState} setQuestionState={setQuestionState} />
      default:
        return <QuestionOne questionState={questionState} setQuestionState={setQuestionState} questionSchema={currentQuestionSchema} setShowMessage={setShowMessage} setButtonText={setButtonText} setNextQuestionNumber={setNextQuestionNumber}/>
    }
  };

  // PENDING
  return (
    <>
        <>
          <div className="questions-progress-bar">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={2.79} md={4}>
                <QuestionSidebar questionNumber={questionNumber} />
              </Grid>
              <Grid item xs={12} lg={9.1} md={8}>
                <div className="border-radius-8 bg-white question-body position-relative">
                  {/* This is Main Question Number Heading change color and Question number on click on proceed */}
                  <h1
                    className={`fs-36 font-source-sans-pro mt-0 ${questionNumber < 7 ? "qualify-question" : questionNumber < 15 ? "Company-question" : questionNumber < 44 ? "Projects-question"
                          : questionNumber < 65 ? "Costs-question": "" }`} >
                    Question {questionNumber + 1}
                  </h1>

                  {/* Render all questions */}
                  {status === "PENDING" ? (
                   <QuestionSkeleton />
                  
                  ) : !questionState || !QuestionApidataFrontEnd || !questionSchema ? (
                    <h1>No Data Found</h1>
                  ) : ( 
                       <div className="question-wrapper">
                    {showQuestions()}
                    {/* showing messages on selection or enter any thing */}
                    {(questionNumber !== 15 && questionNumber !== 17 && questionNumber !== 12 && questionNumber !== 14 && questionNumber !== 39 && questionNumber !== 42 && questionNumber !== 43 && questionNumber !== 61) &&
                      <div className={(buttonText == null || buttonText === "Disable") ? '' : "show-messages border-radius-8 fit-content flex align-center"} style={{ background: buttonText === "End" ? 'rgba(220, 53, 69, 0.1)' : buttonText === "proceed" ? 'rgba(25, 135, 84, 0.1)' : buttonText === "info" ? 'rgba(13, 202, 240, 0.1)' : '' }}>
                        {buttonText === "End" ? <Image src={errorIcon} alt='errorIcon' width={22} height={22} /> : buttonText === "proceed" ? <Image src={SuccessIcon} alt='SuccessIcon' width={22} height={22} /> : buttonText === "info" ? <Image src={infoIcon} alt='infoicon' width={22} height={22} /> : ''}
                        <p className="font-source-sans-pro dark-color m-0 fw-400 fs-16">{showMessage}</p>
                      </div>
                    }
                  </div>

                  )}
                  <div className="flex justify-end" style={{ marginTop: "27px" }} >
               
                    <div className="flex align-center">
                      <button
                        className="fw-700 fs-16 gray-border-1  bg-light-white border-radiues-3 question-btn question-btn-back cursor-pointer font-source-sans-pro"
                        disabled={questionNumber == 0}
                        onClick={() => {goToPreviousQuestionAndGetQuestion();
                        }}
                      >
                        Back
                      </button>

                      {questionNumber < 64 && buttonText !== "End" ? (
                        <button
                          disabled={
                            buttonText == null || buttonText === "Disable"
                          }
                          className={
                            questionNumber > 61
                              ? "bg-gradient-blue white-color border-radiues-3 fw-700 fs-16 question-btn border-0 cursor-pointer ml-10 hover-btn font-source-sans-pro"
                              : "bg-gradient-green  white-color border-radiues-3 fw-700 fs-16 question-btn border-0 cursor-pointer ml-10 hover-btn font-source-sans-pro"
                          }
                          style={{ background: (buttonText == null || buttonText === "Disable") ? '#B6BABF' : '' }}
                          onClick={() => {
                            questionNumber < 62 && postQuestion();
                          }}
                        >
                          {questionNumber > 61  ? "Review" : "Proceed"}
                        </button>
                      ) : (
                        <button className="Question-end-btn white-color border-radiues-3 fw-700 fs-16 question-btn border-0 cursor-pointer ml-10 hover-btn font-source-sans-pro">
                          End
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </>
     
    </>
  );
};
export default QuestionLayout;
