import React from "react";
import IndiviualStaffCost from "./forms/IndiviualStaffCost";
import QuestionOne from "../questionOne/QuestionOne";

const QuestionFourtyFour: React.FC = ({ setQuestionState, questionState,questionSchema,changeQuestionType,setButtonText, buttonText,questionNumber,setNextQuestionNumber}: any) => {
 
  return(

    <div className="wrapper-question-fourtyFour">
      <div className="question-fourtyFour-head">
         {questionState.hasOwnProperty('salaries')?
          <QuestionOne
           questionState={questionState}
           setQuestionState={setQuestionState}
           questionSchema={questionSchema}
           changeQuestionType={changeQuestionType}
         />:
         <IndiviualStaffCost setQuestionState={setQuestionState} questionState={questionState}  changeQuestionType={changeQuestionType} questionSchema={questionSchema} setButtonText={setButtonText} buttonText={buttonText} questionNumber={questionNumber} setNextQuestionNumber={setNextQuestionNumber}/>
                    } 
      </div>
    </div>
  );

};
export default QuestionFourtyFour;
