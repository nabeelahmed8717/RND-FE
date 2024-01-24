import Image from "next/image";
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import iconCurrency from "../../../assets/icons/common/PlaceholderCurrency.svg";

import SuccessIcon from "../../../assets/icons/question/success-icon.svg";
import { InputAdornment, TextField } from "@mui/material";

// interface IInitialValuesNumbers {
//   inputNumberValues?: number,
// }

const initialValues = {
  inputNumberValues: null,
};
const validation = Yup.object({
  inputNumberValues: Yup.number().integer().required(""),
});

const CommonNumberType = (props: any) => {
  const [inputNumberValues, setInputNumberValues] = useState<any>();
  console.log(inputNumberValues);

  const validateSucessMessageStepOne: number =
    props.validateSucessMessageStepOne;
  const validateSucessMessageStepTwo: number =
    props.validateSucessMessageStepTwo;

  // __Formik
  const { values, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: () => {
      setInputNumberValues(values.inputNumberValues);
    },
  });

  return (
    <div className="group-question-number-wrapper">
      <p className="fw-600 lh-24">{props.questionMainHeading}</p>
      <p className="fw-400 lh-24">{props.questionSubHeading}</p>

      <TextField
        id="inputNumberValues"
        name="inputNumberValues"
        type="number"
        size="small"
        placeholder="0.00"
        className="search-collaborator border-radiues-3 mb-15"
        value={values.inputNumberValues}
        onChange={handleChange}
        sx={{
          width: { xs: "auto", md: "400px", lg: "400px" },
          height: { xs: "48px", md: "48px", lg: "48px" },
          marginBottom: "30px",
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              border: "1px solid #9f9f9f",
            },
          },
        }}
        defaultValue={null}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src={iconCurrency} alt="currency" priority />
            </InputAdornment>
          ),
        }}
      />

      <div className="wrapper-alert-messages">
        {values?.inputNumberValues >= validateSucessMessageStepTwo && (
          <div className="question-alert-messages mt-15">
            <div
              className={`alert-message flex align-center bg-white-shadow border-radius-8 ${props.messageType}`}
            >
              <Image src={props.iconType} alt={props.iconType} priority />
              <span className="fit-content">{props.messageTextStepTwo}</span>
            </div>
          </div>
        )}
        {values?.inputNumberValues >= validateSucessMessageStepOne && (
          <div className="question-alert-messages mt-15">
            <div
              className={`alert-message flex align-center bg-white-shadow border-radius-8 ${props.messageType}`}
            >
              <Image src={props.iconType} alt={props.iconType} priority />
              <span className="fit-content">{props.messageTextStepOne}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonNumberType;
