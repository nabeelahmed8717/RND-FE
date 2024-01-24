import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  country: "UK",
  documentType: '',
};

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required Field"),

  lastName: Yup.string().required("Required Field"),

  country: Yup.string().required("Required Field"),

  documentType: Yup.string().required("Required Field"),
});
