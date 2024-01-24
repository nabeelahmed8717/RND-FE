import React from "react";
import QuestionDynamicFields from "../../../../common/components/questionDynamicFields/QuestionDynamicFields";
import { questionFortyFour,fieldsModifications,formDetailsData } from "../../../../common/mockData/questions/questionFourtyFour";

const IndiviualStaffCost = ({ setQuestionState, questionState, changeQuestionType,questionSchema,setButtonText, buttonText,questionNumber,setNextQuestionNumber}: any) => {

    return (
      
            <QuestionDynamicFields
            questionMianHeading={questionFortyFour[0].questionMainHeading}
            questionSubHeading={questionFortyFour[0].questionSubHeading}
            formFields={questionFortyFour[0].formFields}
            // selectData={questionFortyFour[0].selectData}
            formDetailsData={formDetailsData}
            fieldsModifications={fieldsModifications}
            setQuestionState={setQuestionState}
            questionState={questionState}
            changeQuestionType={changeQuestionType}
            questionSchema={questionSchema}
            setButtonText={setButtonText} 
            buttonText={buttonText} 
            questionNumber={questionNumber}
            setNextQuestionNumber={setNextQuestionNumber}
            />
    )
}

export default IndiviualStaffCost