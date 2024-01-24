import Card from "../../../assets/images/accountsettings/card.svg";
import Consultation from "../../../assets/images/accountsettings/messages-3.svg";
import Invoice from "../../../assets/images/accountsettings/invoices.svg";
import MyProfile from "../../../assets/images/accountsettings/profile.svg";
import { StaticImageData } from "next/image";
import User from "../../../assets/images/accountsettings/users.svg";

//account-settings
export interface IAccountManagement {
  accountType: string;
  accountIcon: string | StaticImageData;
  accountDetails: string;
}
export const AccountManagement = (role: string) => {
  const AccountSettings = [
    {
      accountType: "My Profile",
      accountIcon: MyProfile,
      accountDetails: "myProfile",
    },
    role === "INDIVIDUAL"
      ? {
          accountType: "Users",
          accountIcon: User,
          accountDetails: "users",
        }
      : {},
    role === "INDIVIDUAL"
      ? {
          accountType: "Invoices",
          accountIcon: Invoice,
          accountDetails: "invoices",
        }
      : {},
    role === "SYS_ADMIN"
      ? {
          accountType: "Users",
          accountIcon: User,
          accountDetails: "users",
        }
      : {},
    role === "INDIVIDUAL"
      ? {
          accountType: "Cards",
          accountIcon: Card,
          accountDetails: "cards",
        }
      : {},
    role === "RND_EXPERT"
      ? {
          accountType: "Consultation",
          accountIcon: Consultation,
          accountDetails: "consultation",
        }
      : {},
  ];
  return AccountSettings;
};
