import { STATUS } from "../../common/constants/store";
import RndExpert from "../../pages/rndExpert";

export interface IRndExpert {
  img?: any;
  isDeleted: boolean;
  visibile: string;
  firstName: string;
  lastName: string;
  cognitoId: string;
  newsletterStatus: boolean;
  roleInfo: string;
  verificationStatus?: string;
  sessionId?: string;
  sessionUrl?: string;
  id: string;
  email: string;
}

export interface IRndExpertState {
  data: IRndExpert[];
  message: string;
  error: any;
  status: STATUS;
}
