import React from "react";
import { TextField } from "@mui/material";

const InputNumberTypeQuestion = ({ setQuestionState, questionState, option }: any) => {

  function handleChange(e: any) {
    setQuestionState({
      ...questionState,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  }

  return (
    <TextField
      className="input-number-arrow-field"
      name={option.name}
      value={questionState[option.name]===0?"":questionState[option.name]}
      type="number"
      size="small"
      placeholder="enter a number"
      onChange={(e) => handleChange(e)}
      sx={{
        width: { xs: "auto", md: "304px", lg: "304px" },
        height: { xs: "48px", md: "48px", lg: "48px" },
        marginBottom: "10px",
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            border: "1px solid #9f9f9f",
          },
        },
      }}
    />
  );
};
export default InputNumberTypeQuestion;
