
//users
export interface IinitialUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:  number | string | undefined | any;
    userView: string;
    userPurchase: string;
  }
 export interface IUpsertUser {
    message: any;
    islodingValue: boolean | undefined;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    IsModalOpen: boolean;
    formik: any;
    editMode:boolean;
  }
  //my-profile
  export interface IChangePassword {
    IsProfileInfo: boolean,
    setIsProfileInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IChangeEmail {
  userEmail:string | undefined,
  IsProfileInfo: boolean,
  setIsProfileInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

//INVOICES
export interface IInvoices {
  id: string,
  date: string,
  time: string,
  description: string,
  total: number
}
export interface ISearchInvoice{
  setPage:React.Dispatch<React.SetStateAction<number>>;
  setSearchCard:React.Dispatch<React.SetStateAction<string>>;
  searchCard:string
}
//card 
export interface ISearchCardList {
  setSearchCard: React.Dispatch<React.SetStateAction<string>>;
  searchCard: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export interface ICardAddList {
  setIsAddCard: React.Dispatch<React.SetStateAction<boolean>>;
  IsAddCard: boolean;
  setCardListItems: React.Dispatch<React.SetStateAction<any>>;
  cardListItem: any;
}
export interface ICardList {
  id: number | NumberConstructor;
  holderName: string;
  cardNumber: number | NumberConstructor;
  expiryDate: string;
  ccv: number | NumberConstructor;
}