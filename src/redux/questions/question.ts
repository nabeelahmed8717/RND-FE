import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
// import { question } from "../../common/mockData/questions/QuestionDummyApi";
import { getQuestion, postQuestionApi, verfication } from "./question-api";
import { IVerficationState, QuestionState } from "./question-type";

let attemptedQuestionArray;
if(typeof window !== 'undefined'){
  attemptedQuestionArray = JSON.parse(localStorage.getItem("attemptedQuestion"));
}

const initialState: IVerficationState = {
  question: {},
  status: STATUS.IDLE,
  message: "",
  errors: null,
  questionNumber:attemptedQuestionArray?.length>0?attemptedQuestionArray[attemptedQuestionArray.length-1]: 0,
  previousQuestionNumber:0,
  attemptedQuestion:attemptedQuestionArray
};
const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setVerfication: (state, action) => {
      state.verification = action.payload.verification;
      state.message = action.payload.message;
      state.status = STATUS.SUCCEEDED;
    },
      goToPreviousQuestion: (state,action) => {
        state.questionNumber=state.attemptedQuestion[state.attemptedQuestion.length-2]
        state.attemptedQuestion.pop()
      let tempArray = JSON.parse(localStorage.getItem("attemptedQuestion"));
      tempArray.pop()
      localStorage.setItem("attemptedQuestion", JSON.stringify(tempArray));
    },
  },
  extraReducers(builder) {
    builder.addCase(getQuestion.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getQuestion.fulfilled, (state, action: PayloadAction<IVerficationState>) => {
      state.question = action.payload.data;
      state.message = action.payload.message;
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(getQuestion.rejected, (state, action: PayloadAction<any>) => {
      state.errors = action.payload.errors;
      state.message = action.payload.message;
      state.status = STATUS.FAILED;
    });

    builder.addCase(postQuestionApi.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(postQuestionApi.fulfilled, (state, action: PayloadAction<QuestionState>) => {
      state.previousQuestionNumber=action.payload.preQuestion!==null?action.payload.preQuestion:state.questionNumber;
      state.questionNumber=action.payload.nextQuestion;
      state.attemptedQuestion.push(state.questionNumber);
      let tempArray = JSON.parse(localStorage.getItem("attemptedQuestion"));
      tempArray.push(state.questionNumber)
      localStorage.setItem("attemptedQuestion", JSON.stringify(tempArray));
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(postQuestionApi.rejected, (state, action: PayloadAction<any>) => {
      state.errors = action.payload.errors;
      state.message = action.payload.message;
      state.status = STATUS.FAILED;
      
    });
  },

});


export const {goToPreviousQuestion} = questionSlice.actions;
export default questionSlice;

