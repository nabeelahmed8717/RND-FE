
import React, { useState } from "react";
import DateTypeQuestion from "../dateTypeQuestion/DateTypeQuestion";
import SliderTypeQuestion from "../sliderTypeQuestion/SliderTypeQuestion";
import { boolean } from "yup";
import InputCurrencyTypeQuestion from "../InputCurrencyTypeQuestion/InputCurrencyTypeQuestion";
import InputNumberTypeQuestion from "../inputNumberTypeQuestion copy/InputNumberTypeQuestion";
import InputTextTypeQuestion from "../inputTextTypeQuestion/InputTextTypeQuestion";
import RadioButtonTypeQuestion from "../radioButtonTypeQuestion/RadioButtonTypeQuestion";
import CheckboxStringTypeQuestion from "../checkboxStringTypeQuestion/CheckboxStringTypeQuestion";
import CheckboxBooleanTypeQuestion from "../checkboxBooleanTypeQuestion/CheckboxBooleanTypeQuestion";
import MultiSelectTypeQuestion from "../multiSelectTypeQuestion/MultiSelectTypeQuestionTypeQuestion";

const QuestionOne = ({
  setQuestionState,
  questionState,
  questionSchema,
  changeQuestionType,
  setShowMessage,
  setButtonText,
  setNextQuestionNumber
}: any) => {
  return (
    <div className="questions-wrapper">
      <div className="question-card-wrap bg-white w-100 border-radius-8 ">
        <div className="questions-content flex direction-column">
          <div>
            <div className="question-ten-card">
              <p className="dark-color fs-16 fw-600 lh-24 m-0 question-parapragh opacity-8">
                {questionSchema.mainQuestion}
              </p>
              {questionSchema.subQuestion.length > 0 &&
                questionSchema.subQuestion.map((item) => {
                  return (
                    <div
                      className={
                        questionSchema.type === "readonlyList"
                          ? "wrapper-question-sixteen-data"
                           : questionSchema.questionTitle === 26 ?
                           "wrapper-question-sixteen-data mt-20" 
                           : questionSchema.questionTitle===39 ? 
                            "pl-25": ""
                      }
                    >
                      <div className="question-sixteen-Ulist-style">
                        <p className={`dark-color fs-16 ${(questionSchema.type === "readonlyList" || questionSchema.questionTitle === 26) ? "fw-400" : "fw-600"} lh-24 m-0 question-parapragh opacity-8 question-sixteen-list-style`}>
                          {item}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {questionSchema.questionTitle === 44 &&
                      <button
                        className="question-toggle-button fs-16 fw-700 mt-30 mb-30 font-source-sans-pro cursor-pointer"
                        onClick={() => {changeQuestionType()}}
                      >
                        {questionState.hasOwnProperty('salaries')?"Enter Overall Staff Cost":"Enter Individual Staff Cost"}
                      </button>
                }
                   
            </div>

            {questionSchema.type === "radio" ? (
              <RadioButtonTypeQuestion questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema}/>
            ) : questionSchema.type == "slider" ||
              questionSchema.type == "checkbox" ||
              questionSchema.type === "inputCurrency" ||
              questionSchema.type === "inputText" ||
              questionSchema.type === "inputNumber" ? (
              <div className="wrapper-question-common-slider mt-30">
                {questionSchema.options.map((option: any, index: number) => {
                  return (
                    <>
                      {option.type !== "readonly"  && (
                        <p className={`fs-16 ${questionSchema.type == "slider" || questionSchema.type === "inputNumber" || questionSchema.type === "inputText" || option.type === "checkbox" || questionSchema.questionTitle === 36 || questionSchema.questionTitle === 37 ? "fw-400 opacity-8":"fw-700"} dark-color mt-30 font-source-sans-pro`}>
                          {option.question}
                        </p>
                      )}
                      {option.type === "slider" && (
                      <SliderTypeQuestion questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} option={option}/>

                      )}
                      {option.type === "inputCurrency" && (
                        <InputCurrencyTypeQuestion questionState={questionState} setQuestionState={setQuestionState} option={option}/>
                      )}
                      {option.type === "inputNumber" && (
                        <InputNumberTypeQuestion questionState={questionState} setQuestionState={setQuestionState} option={option}/>
                     
                      )}
                      {option.type === "inputText" && (
                        <InputTextTypeQuestion questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} option={option} />
                  
                      )}
                      {option.type === "checkbox" &&
                        typeof option.labels[0] === "string" &&
                        <CheckboxStringTypeQuestion questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} option={option} />
                        }
                      {option.type === "checkbox" &&
                        typeof option.labels[0] === "boolean" && (
                          <CheckboxBooleanTypeQuestion questionState={questionState} setQuestionState={setQuestionState} option={option} />
                        )}
                    </>
                  );
                })}
              </div>
            ) : 
            questionSchema.type == "multiSelect" ? (
              <MultiSelectTypeQuestion questionState={questionState} setQuestionState={setQuestionState} questionSchema={questionSchema} />
            ) : questionSchema.type == "date" ? (
              <DateTypeQuestion
                questionState={questionState}
                setQuestionState={setQuestionState}
                questionSchema={questionSchema} 
                 setShowMessage={setShowMessage}
                 setButtonText={setButtonText}
                 setNextQuestionNumber={setNextQuestionNumber}
              />
            ): (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
