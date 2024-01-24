import * as Yup from "yup";
import { Role } from "../../../../common/constants/store";
import { IInitialValues } from "../../../../common/interfaces/signUp";

export const initialValues: IInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  roleType: Role.INDIVIDUAL,
  companyNumber: "",
  companyName: "",
  address: "",
  postCode: "",
  city: "",
  country: "UK",
  TermsConditions: false,
  newsletterStatus: false,
};

export const individualValidationSchema = Yup.object({
  firstName: Yup.string().required("Required Field"),

  lastName: Yup.string().required("Required Field"),

  email: Yup.string().required("Required Field").email(),

  phoneNumber: Yup.string().required("Required Field"),

  password: Yup.string().required("Required Field"),

  passwordConfirm: Yup.string().required("Required Field"),

  roleType: Yup.string().required("Required Field"),

  TermsConditions: Yup.bool().oneOf([true], "You must accept the Terms & Conditions"),
});

export const companyValidationSchema = Yup.object({
  firstName: Yup.string().required("Required Field"),

  lastName: Yup.string().required("Required Field"),

  email: Yup.string().required("Required Field").email(),

  phoneNumber: Yup.string().required("Required Field"),

  password: Yup.string().required("Required Field"),

  passwordConfirm: Yup.string().required("Required Field"),

  roleType: Yup.string().required("Required Field"),

  companyNumber: Yup.string().required("Required Field"),

  companyName: Yup.string().required("Required Field"),

  address: Yup.string().required("Required Field"),

  postCode: Yup.string().required("Required Field"),

  city: Yup.string().required("Required Field"),

  country: Yup.string().required("Required Field"),

  TermsConditions: Yup.bool().oneOf([true], "You must accept the Terms & Conditions"),
});
