import { IClientState } from "../../redux/clients/clientsSlice";

export interface IClient {
  id: number;
  name: string;
  phoneNumber: number | NumberConstructor;
  userName: string;
  claimsInProgress: number | NumberConstructor;
  claimsInReview: number | NumberConstructor;
  claimsReadyToDownload: number | NumberConstructor;
  purchasedClaims: number | NumberConstructor;
  ineligibleClaims: number | NumberConstructor;
}
export interface ISearchClient {
    clientArrays: IClientState[];
    setSearchClient: React.Dispatch<React.SetStateAction<string>>;
    searchClient: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    setPage:React.Dispatch<React.SetStateAction<number>>
    isNameExists: any;
    catchedName:any;
    role:string | null
  }
