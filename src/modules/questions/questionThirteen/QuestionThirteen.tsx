import React from "react";

import { formDetailsData, fieldsModifications, questionThirteen } from "../../../common/mockData/questions/questionThirteen";
import QuestionDynamicFields from '../../../common/components/questionDynamicFields/QuestionDynamicFields'


const QuestionThirteen: React.FC = ({ setQuestionState, questionState,questionSchema, setButtonText, buttonText,questionNumber,comapnyName,setNextQuestionNumber}: any) => {
  return(
      <QuestionDynamicFields
      questionMianHeading={questionThirteen[0].questionMainHeading}
      questionSubHeading={questionThirteen[0].questionSubHeading}
      formFields={questionThirteen[0].formFields}
      selectData={questionThirteen[0].selectData}
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
export default QuestionThirteen;
