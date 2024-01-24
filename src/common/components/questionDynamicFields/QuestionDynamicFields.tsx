import React, { useState } from "react";
import * as Yup from "yup";
import DynamicFormFields from "./forms/DynamicFormFields";


const QuestionDynamicFields = (props:any) => {

  console.log('props.questionSchema.questionTitle+++++++',props.questionSchema);

  return (
    <div className="wrapper-question-fourtyFour">
      <div className="question-fourtyFour-head">
        <p className="fs-16 lh-24 fw-600 font-source-sans-pro">
          {props.questionMianHeading}
        </p>
        <p className="mt-50 text-normal-color">
        {props.questionSubHeading}
        </p>
        {props.questionSchema.questionTitle === 44 &&
         <button
          className="question-toggle-button fs-16 fw-700 mt-30 mb-30 font-source-sans-pro cursor-pointer"
          onClick={() => {props.changeQuestionType()}}
        >
          {props.questionState.hasOwnProperty('salaries')?"Enter Overall Staff Cost":"Enter Individual Staff Cost"}
        </button>
        }
       
        <DynamicFormFields
        formFields={props.formFields}
        formDetailsData={props.formDetailsData}
        fieldsModifications={props.fieldsModifications}
        selectData={props.selectData}
        setQuestionState={props.setQuestionState}
        questionState={props.questionState}
        setButtonText={props.setButtonText}
        questionSchema={props.questionSchema}
        buttonText={props.buttonText}
        questionNumber={props.questionNumber}
        comapnyName={props.comapnyName}
        setNextQuestionNumber={props.setNextQuestionNumber}
        />
      </div>
    </div>
  );
};

export default QuestionDynamicFields;
