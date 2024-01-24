import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const CheckboxBooleanTypeQuestion = ({ setQuestionState, questionState, option }: any) => {

  function handleChangeForCheckBox(e, type) {
    if (type === "boolean") {
      setQuestionState({ [e.target.name]: !questionState[e.target.name] });
    }
  }


  return (
    <div>
    <FormControlLabel
      control={
        <Checkbox
          value={questionState[option.name]}
          checked={
            questionState[option.name] === true
              ? true
              : false
          }
          name={option.name}
          onChange={(e) =>
            handleChangeForCheckBox(e, "boolean")
          }
          sx={{
            color: "#0F5156",
            "& .MuiSvgIcon-root": {
              borderRadius: "6px",
            },
            "&.Mui-checked": {
              color: "#0F5156",
            },
          }}
        />
      }
      label={
        <Typography
          component="div"
          fontSize="16px"
          fontWeight={600}
          color="#343A40"
          sx={{ fontFamily: "Source Sans Pro" }}
        >
          {option.question}
        </Typography>
      }
    />
  </div>
  );
};
export default CheckboxBooleanTypeQuestion;
