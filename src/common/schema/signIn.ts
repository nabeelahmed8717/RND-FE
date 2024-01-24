import * as Yup from "yup";

export const sigInValidateSchema = Yup.object({
    email: Yup.string().required("Required Field").email("Enter a valid email"),
    password: Yup.string().required("Required Field"),
  });

export const  initialValues = { email: "", password: "", rememberMe:false }