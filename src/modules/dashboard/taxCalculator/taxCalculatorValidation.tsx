import * as Yup from "yup";

// Tax Calculator's validation
export const taxCalculatorValidate = Yup.object({
  Labour: Yup.number().required("Required Field").positive().integer(),
  Material: Yup.number().required("Required Field").positive().integer(),
  SubContracted: Yup.number().required("Required Field").positive().integer(),
  Profit: Yup.number().required("Required Field").positive().integer(),
  rndCoarporationCheck: Yup.string().required("Required Field"),
  rndInnovativeCheck: Yup.string().required("Required Field"),
});

// Tax Calculator Initial Values
export const taxCalculatorInitialValues = {
  Labour: "",
  Material: "",
  SubContracted: "",
  Profit: "",
  rndCoarporationCheck: "",
  rndInnovativeCheck: "",
};
