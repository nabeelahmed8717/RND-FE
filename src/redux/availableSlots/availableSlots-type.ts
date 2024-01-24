import { STATUS } from "../../common/constants/store";

export interface ISlots {
  start: string;
  end: string;
  status: string;
}
export interface IInitialState {
  slots: ISlots[];
  message: string;
  statusCode: string;
  status: STATUS;
  error: null;
}
