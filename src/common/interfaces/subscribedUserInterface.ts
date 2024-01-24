import { StaticImageData } from "next/image";

export interface ISubscribedUserTable {
    id: number;
    avatar: StaticImageData;
    name: string;
    email: string;
    subscriptionDate: string;
    status: boolean;
    sendTo: boolean;
  }
