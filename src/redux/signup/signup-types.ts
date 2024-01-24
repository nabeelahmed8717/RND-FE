import { Role, STATUS } from "../../common/constants/store";

export interface IRigesterdUser {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    passwordConfirm?: string,
    roleType: Role,
    companyNumber?:string,
    companyName?: string,
    address?: string,
    postCode?: string,
    city?: string,
    country?: string,
    TermsConditions: boolean,
    newsletterStatus: boolean,
  };

  export interface IRigesterdUsersState {
    rigesterdUser:IRigesterdUser;
    status: STATUS;
    errors:any,
    message:string
  }