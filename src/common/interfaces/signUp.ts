import { FilterOptionsState } from '@mui/material';
import {SyntheticEvent} from 'react';
import { Role } from '../constants/store';

export interface IInitialValues {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
  passwordConfirm: string,
  roleType: Role,
  companyNumber:string,
  companyName: string,
  address: string,
  postCode: string,
  city: string,
  country: string,
  TermsConditions: boolean,
  newsletterStatus: boolean,
};
  export interface IHandleBlur {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

export interface IHandleChange {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: any) => void;
}

export interface ICompanyData {
  companyNumber: string;
  companyName: string;
  postCode: string;
  city: string;
  address: string;
  country: string;
}

export interface IHandleCompanyData { (e: SyntheticEvent<Element, Event>, selectedValue: string) : void }

export interface IFilterOptions { (options: ICompanyData[], state: FilterOptionsState<unknown>) : ICompanyData[]}