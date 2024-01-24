export interface IAnswerList {
    id: string;
    list: string;
  }
  
  export interface IRdecClaim {
    id: string;
    list: string;
  }
  export interface IRdecClaimCredit {
    id: string;
    list: string;
  }
  export interface ICreditList {
    id: string;
    list: string;
  }
  
  export interface IDatesList {
    id: string;
    list: string;
    option1?: string;
    option2?: string;
  }
  
  export interface IUserGuide {
    id: string;
    question: string;
    answer: string;
    projectDesc?: string;
    listLabel?: string;
    accountingPeriodLabel?: string;
    accountinPeriodText?: string;
    listEndDescription?: string;
    rdecClaim?: IRdecClaim[];
    rdecClaimCredit?: IRdecClaimCredit[];
    answerList?: IAnswerList[];
    research?: string;
    needText?: string;
    smeRNDRelief?: string;
    creditList?: ICreditList[];
    datesList?: IDatesList[];
  }