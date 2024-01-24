import { STATUS } from "../../common/constants/store";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IVerifInfo {
  sessionId: string;
  sessionUrl: string;
  verificationStatus: string;
}

export interface IUser {
  cognitoId: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  individual: {
    address: string;
    buildingNo: string;
    city: string;
    postCode: string;
  };
  profileImage: string;
  newsletterStatus: BooleanConstructor;
}

export interface IRoleInfo {
  id: string;
  name: string;
  permissions: never[];
  roles: string[];
  roleType: string;
}

export interface ILoginState {
  session?: string;
  tokens?: ITokens;
  verifInfo?: IVerifInfo;
  user?: IUser;
  roleInfo?: IRoleInfo;
  status: STATUS;
  errors: any;
  message: string;
}
