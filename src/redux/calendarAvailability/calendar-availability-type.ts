import { STATUS } from "../../common/constants/store";

export interface IIntervals {
    from: string;
    to: string;
  }

  export interface IRules {
    type: string;
    wday: string;
    intervals: IIntervals[];
  }

  export interface IData {
    id: string;
    name: string;
    amount: number;
    duration: number;
    availability: string;
    rules: IRules[];
  }

  export interface IInitialState {
    status: STATUS;
    message: string;
    error: null;
    data: IData;
  }