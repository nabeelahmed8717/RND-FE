import { StaticImageData } from "next/image";
import { IRndExpert } from "../../redux/rndExpertList/rndExpertList-type";

export interface ICardData {
  id: number;
  title: string;
  amount: number;
  img: StaticImageData;
  color: string;
  link: string;
  classWrap: string;
}

// ############################# Tax Calculator #############################
export interface IclaimLimitData {
  id: string;
  text: string;
}

export interface ITaxCalculatorFieldsData {
  id: string;
  label: string;
  name: string;
}

export interface ITaxCalculatorRadioButtonsData {
  id: string;
  name: string;
  desc: string;
}

// ############################# Tax Claims #############################
export interface IClaimStatsData {
  id: string;
  img: StaticImageData;
  text: string;
  percentage?: string;
}

export interface IRndExpertAvailableDate {
  year: number;
  month: number;
  day: number;
}

export interface IRndExpertUser {
  id: string;
  img: any;
  firstName: string;
  lastName: string;
  availableDates?: IRndExpertAvailableDate[];
}

// rndExpertUser Props interface
export interface IRndExpertModal {
  rndCurrentExpertUser: string | undefined;
  rndExpertsData:IRndExpert[],
  handleRndExpertCurrentUser: (singleRndUser: string | undefined, date?: string | null) => void;
}

export interface IRndExpertClaim {
  id: number;
  claimName: string;
  claimDate: string;
}
export interface IRndExpertClaimProps {
  handleRndSelectUserClaim: (singleSelectedClaim: number) => void;
  rndExpertSelectedClaim: number;
  handleSetPayment: () => void;
  handleCloseRndExpertModal: () => void;
}

export interface IDataActivity {
  id: string;
  description: string;
  time: string;
}
export interface IRecentActivity {
  todayData: IDataActivity[];
  yesterdayData: IDataActivity[];
}

export interface ICollections {
  id: number;
  title: string;
  amount: number;
  img: StaticImageData;
  accountNumber: string;
  accountName: string;
}

export interface IRndExpertUsers {
  id: string | boolean;
  name: string;
  img: StaticImageData | string;
  companyName: string;
}

export interface IDefaultValueInterface {
  year: number;
  month: number;
  day: number;
}

export interface ITaxCalculator {
  Labour: string;
  Material: string;
  SubContracted: string;
  Profit: string;
  rndCoarporationCheck: string;
  rndInnovativeCheck: string;
}

export interface rndExpertUserInterface {
  handleRndExpertCurrentUser:any,
  rndExpertUsers:IRndExpert[],
  handleOpenRndExpertModal: () => void;
}

// Admin Dashboard

export interface IDashboardPeople {
  id: string;
  name: string;
  pathLink: string;
  quantity: string;
  active: string;
  inactive: string;
}

export interface IAdminDevices {
  id: string;
  text: string;
  percentage: string;
}

export interface IAdminAvailableSpace {
  id: string;
  text: string;
  percentage: string;
}

export interface IAdminSystemPerformance {
  id: string;
  name: string;
  performanceTime: string;
  performancePercentage: string;
}
