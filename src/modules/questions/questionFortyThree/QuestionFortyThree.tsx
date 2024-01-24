import React from "react";

import { formDetailsData, fieldsModifications, questionFourtyThree } from "../../../common/mockData/questions/questionFortyThree";
import QuestionDynamicFields from '../../../common/components/questionDynamicFields/QuestionDynamicFields'


const QuestionFortyThree: React.FC = ({ setQuestionState, questionState,questionSchema,setButtonText, buttonText,questionNumber,setNextQuestionNumber}: any) => {
  return(
      <QuestionDynamicFields
      questionMianHeading={questionFourtyThree[0].questionMainHeading}
      questionSubHeading={questionFourtyThree[0].questionSubHeading}
      formFields={questionFourtyThree[0].formFields}
      // selectData={questionFortyFour[0].selectData}
      formDetailsData={formDetailsData}
      fieldsModifications={fieldsModifications}
      setQuestionState={setQuestionState}
      questionState={questionState}
      questionSchema={questionSchema}
      setButtonText={setButtonText}
      buttonText={buttonText}
      questionNumber={questionNumber}
      setNextQuestionNumber={setNextQuestionNumber}
    />
  )

};
export default QuestionFortyThree;
