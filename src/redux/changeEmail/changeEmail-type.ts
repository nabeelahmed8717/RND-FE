import { STATUS } from "../../common/constants/store";

export interface IInitialState {
    message: string;
    error: any;
    codeStatus:STATUS,
    emailStatus:STATUS,
}