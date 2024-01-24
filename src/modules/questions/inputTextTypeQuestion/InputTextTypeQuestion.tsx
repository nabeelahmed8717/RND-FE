import React from "react";
import { TextField } from "@mui/material";

const InputTextTypeQuestion = ({ setQuestionState, questionState, questionSchema, option }: any) => {

  function handleChange(e: any) {
    setQuestionState({
      ...questionState,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  }

  return (
    <div className="company-input-field">
    <label className="dark-color fs-16 fw-400 lh-24 m-0">
      {questionSchema.InpuLabel}
    </label>

    <TextField
      fullWidth
      name={option.name}
      variant="outlined"
      placeholder="enter company name"
      autoFocus
      value={questionState[option.name]}
      size="medium"
      onChange={(e) => handleChange(e)}
      sx={{
        borderRadius: "3px",
        fontSize: "18px",
        color: "#343A40",
        marginTop: "20px",
        width: "540px",
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "#343A40",
          background: "#F1F1F1",
        },
      }}
    />
  </div>
  );
};
export default InputTextTypeQuestion;
