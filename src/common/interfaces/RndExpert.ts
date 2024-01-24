export interface IAddUpdateRndUser {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    IsModalOpen: boolean;
    formik: any;
    editRndUser:boolean;
  }
export interface IRndExpert {
    id: number;
    firstName:string,
    lastName:string,
    email:string;
    phone:string;
    consultationFee:string|number;
    consultedUsers:number;
    status:boolean;
    ratingStar:number,
}
