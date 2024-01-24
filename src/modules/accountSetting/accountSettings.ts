import { StaticImageData } from "next/image";
import searchIcon from "../../assets/icons/guideLines/SearchIcon.png";
import { useAppSelector } from "../../hooks/use-store.hooks";

//myprofile
export interface ITextFieldData {
  label: string;
  name: string;
  value: string;
  IsDisable: boolean;
  adornmentIcon?: string | StaticImageData;
  placeholder: string;
  xlScreen?: number | string;
  xsScreen?: number;
  smScreen?: number;
  mdScreen?: number;
  minWidth?: string;
  inputType: string;
}
export const TextFieldValues = [
  {
    label: "First Name",
    name: "firstName",
    IsDisable: true,
    placeholder: "Enter first name",
    width: "250px",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    backGroundColor: "bg-disable",
    inputType: "text",
  },
  {
    label: "Last Name",
    name: "lastName",
    IsDisable: true,
    placeholder: "Enter last name",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    width: "250px",
    backGroundColor: "bg-disable",
    inputType: "text",
  },
  {
    label: "Email",
    name: "email",
    IsDisable: true,
    placeholder: "Enter email",
    xsScreen: 12,
    width: "540px",
    minWidth: "540px",
    className: "flex",
    backGroundColor: "bg-disable",
    bgHover: "#fff",
    inputType: "email",
    changeProfile: "email",
    button: "Change",
  },
  {
    label: "Password",
    name: "password",
    className: "flex",
    IsDisable: true,
    placeholder: "Enter number",
    xsScreen: 12,
    width: "540px",
    minWidth: "540px",
    backGroundColor: "bg-disable",
    bgHover: "#fff",
    inputType: "password",
    changeProfile: "password",
    button: "Change",
  },
  {
    label: "Phone",
    name: "phoneNumber",
    value: "+44 7999 6464463",
    IsDisable: false,
    placeholder: "Enter phone number",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    width: "250px",
    inputType: "text",
  },
  {
    label: "Postal Code",
    name: "postCode",
    IsDisable: false,
    adornmentIcon: searchIcon,
    placeholder: "Enter code",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    width: "250px",

    inputType: "text",
  },
  {
    label: "Address",
    name: "address",
    IsDisable: false,
    placeholder: "Enter address",
    xsScreen: 12,
    width: "540px",
    inputType: "text",
  },
  {
    label: "Building Number",

    name: "buildingNo",

    IsDisable: false,
    placeholder: "Enter building number",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    width: "250px",
    inputType: "text",
  },
  {
    label: "City",
    name: "city",
    IsDisable: false,
    placeholder: "Enter city",
    xsScreen: 12,
    smScreen: 6,
    xlScreen: "auto",
    width: "250px",
    inputType: "text",
  },
];
