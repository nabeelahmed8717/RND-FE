import { STATUS } from "../../common/constants/store";

export interface IVeriffSession {
  firstName: string;
  lastName: string;
  country: string;
  documentType: string;
  id:string
}
export interface IVeriffSessionResponse {
  host: string;
  id: string;
  sessionToken: string;
  status: string;
  url: string;
};

export interface IVeriffSessionState {
  data: IVeriffSessionResponse;
  status: STATUS;
  errors: null;
  message: string;
}
