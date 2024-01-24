export interface ICommonModal {
  children?: React.ReactNode;
  resetForm?: any;
  width?: string;
  title: string;
  className?: string;
  buttonText?: string;
  addSubmitHandler?: any;
  modalopenHandler: boolean;
  setModalOpenHandler: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?:boolean;
  modalSxStyle?:any;
}
