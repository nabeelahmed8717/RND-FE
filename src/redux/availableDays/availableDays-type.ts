import { STATUS } from "../../common/constants/store";

export interface IDays {
  date: string;
  status: string;
}
export interface IInitialState {
  days: IDays[];
  message: string;
  statusCode: string;
  status: STATUS;
  error: null;
}
