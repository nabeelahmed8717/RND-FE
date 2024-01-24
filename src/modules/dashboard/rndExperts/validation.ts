import * as Yup from "yup";

export const initialValues = {
  Name: "",
  CardNumber: "",
  ExpirationDate: "",
  CCV: "",

};

export const validationSchema = Yup.object({
  Name: Yup.string().required("Name Field Required"),
  CardNumber: Yup.string().required("CardNumber Field Required "),
  ExpirationDate: Yup.string().required("Expiration Date Field Required"),
  CCV: Yup.string().required("CCV Field Required"),
});
