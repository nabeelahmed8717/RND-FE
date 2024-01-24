import { STATUS } from "../../common/constants/store";

  export interface ISignupEmailVeriff {
    status: STATUS;
    errors:any,
    message:string
  }