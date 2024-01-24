import { STATUS } from "../../common/constants/store";
export interface IUserConfirmData {
  email: string;
  code: string;
}

export interface IUserConfirmState {
  userConfirmData: IUserConfirmData;
  errors: null;
  status: STATUS;
  message: string;
}
