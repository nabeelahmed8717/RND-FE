export interface IVerfication {
  id: string;
  code: string;
}
export interface IVerficationState {
  verification: IVerfication;
  status: string;
  message: string;
  errors: any;
  questionNumber:number,
  question:any,
  previousQuestionNumber:number,
  attemptedQuestion:any
}

export interface QuestionVerfication {
  id: string;
  code: string;
}

export interface QuestionState {
  QuestionVerification: QuestionVerfication;
  question: any,
  questionAns: any,
  status: string;
  message: string;
  errors: any;
  questionNumber:number
}
