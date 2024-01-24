import { STATUS } from "../../common/constants/store";

export interface ICompanyData {
    companyName:string,
    companyNumber:string,
    address: string,
    postCode: string,
    city: string,
    country: string,
}

export interface ICompaniesDataState {
    message:string,
    data:any,
    items:ICompanyData[],
    companyStatus:STATUS,
    errors:any
}