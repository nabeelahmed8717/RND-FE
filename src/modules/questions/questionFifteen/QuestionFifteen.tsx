import React from "react";
import { formDetailsData, fieldsModifications, questionFifteen } from "../../../common/mockData/questions/questionFifteen";
import QuestionDynamicFields from '../../../common/components/questionDynamicFields/QuestionDynamicFields'

const QuestionFifteen = ({ setQuestionState, questionState,questionSchema, setButtonText, buttonText,questionNumber,comapnyName, setNextQuestionNumber}: any) => {
  return(
    <QuestionDynamicFields
    questionMianHeading={questionFifteen[0].questionMainHeading}
    questionSubHeading={questionFifteen[0].questionSubHeading}
    formFields={questionFifteen[0].formFields}
    // selectData={questionFifteen[0].selectData}
    formDetailsData={formDetailsData}
    fieldsModifications={fieldsModifications}
    setQuestionState={setQuestionState}
    questionState={questionState}
    questionSchema={questionSchema}
    setButtonText={setButtonText}
    buttonText={buttonText}
    questionNumber={questionNumber}
    comapnyName={comapnyName}
    setNextQuestionNumber={setNextQuestionNumber}
  />
)
};
export default QuestionFifteen;
