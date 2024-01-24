import * as Yup from "yup";
import { IinitialUser } from "../../../interfaces/accountSettingsInterface";

export const UsersData = [
  {
    id: 1,
    firstName: "Arthur ",
    lastName: "Lewin",
    phoneNumber: "98465345444",
    email: "Arthur@google.co.uk",
    userView: "All client & claims",
    userPurchase: "All client & claims",
  },
];
export interface IUserList {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  userView: string;
  userPurchase: string;
}

export const userinitialValues: IinitialUser = {
  id:'',
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  userView: "",
  userPurchase: "",
};
export const uservalidationSchema = Yup.object({
  firstName: Yup.string().nullable().required("Required Field"),
  lastName: Yup.string().required("Required Field"),
  email: Yup.string().email("Enter a valid email").required("Required Field"),
  // phoneNumber: Yup.number().positive().integer().required("Required Field"),
  phoneNumber: Yup.string().required("Required Field"),
  userView: Yup.string().required("Required Field"),
  userPurchase: Yup.string().required("Required Field"),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const UserControlItem = [
  {
    id: 1,
    name: "Assigned clients & claims",
  },
  {
    id: 2,
    name: "All Clients & claims",
  },
];
export const UserPurchaseItem = [
  {
    id: 1,
    name: "None",
  },
  {
    id: 2,
    name: "Assigned clients & claims",
  },
  {
    id: 3,
    name: "All Clients & claims",
  },
];
