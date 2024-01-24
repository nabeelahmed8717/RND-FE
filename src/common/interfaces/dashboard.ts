import { StaticImageData } from "next/image";

export interface cardDataInterface {
  id: number;
  title: string;
  amount: number;
  img: string;
  color: string;
  link: string;
  classWrap: string;
}

// ############################# Tax Calculator #############################
export interface claimLimitDataInterface {
  id: string;
  text: string;
}

export interface taxCalculatorFieldsDataInterface {
  id: string;
  label: string;
  name: string;
}

export interface taxCalculatorRadioButtonsDataInterface {
  id: string;
  name: string;
  desc: string;
}

// ############################# Tax Claims #############################
export interface claimStatsDataInterface {
  id: string;
  img: StaticImageData;
  text: string;
  percentage?: string;
}

export interface rndExpertAvailableDateInterface {
  year: number;
  month: number;
  day: number;
}

export interface rndExpertUserInterface {
  id: string;
  img: StaticImageData;
  name: string;
  companyName: string;
  availableDates?: rndExpertAvailableDateInterface[];
}

// rndExpertUser Props interface
export interface rndExpertModalInterface {
  rndCurrentExpertUser: string | undefined;
  handleRndExpertCurrentUser: (singleUser: string | undefined) => void;
}

export interface rndExpertClaimInterface {
  id: number;
  claimName: string;
  claimDate: string;
}
export interface rndExpertClaimPropsInterface {
  handleRndSelectUserClaim: (singleSelectedClaim: number | undefined) => void;
  rndExpertSelectedClaim: number;
  handleSetPayment: () => void;
  handleCloseRndExpertModal: () => void;
}
