export interface IVerfication {
  id: string;
  code: string;
}
export interface IVerficationState {
  verification: IVerfication;
  status: string;
  message: string;
  errors: any;
}
