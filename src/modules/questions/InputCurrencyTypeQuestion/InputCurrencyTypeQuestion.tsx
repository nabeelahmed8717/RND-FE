import React from "react";
import {  InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import iconCurrency from "../../../assets/icons/common/PlaceholderCurrency.svg";

const InputCurrencyTypeQuestion = ({ setQuestionState, questionState ,option }: any) => {
  
    function handleChange(e: any) {
        setQuestionState({
          ...questionState,
          [e.target.name]:
            e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
        });
      }
      // {questionState[option.name]===0?null:questionState[option.name]}
    return (
      <div className="InputCurrencyQuestion">
      <TextField
      name={option.name}
      value={questionState[option.name]===0?"":questionState[option.name]}
      type="number"
      size="small"
      placeholder="0.00"
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
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Image src={iconCurrency} />
          </InputAdornment>
        ),
      }}
    />
      </div>
    );
};
export default InputCurrencyTypeQuestion;
