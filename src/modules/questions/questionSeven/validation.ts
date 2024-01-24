import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required Field"),

  lastName: Yup.string().required("Required Field"),

  email: Yup.string().required("Required Field").email(),

  role: Yup.string().required("Required Field"),

});
