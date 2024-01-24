import React from "react";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

const CheckboxStringTypeQuestion = ({ setQuestionState, questionState, questionSchema, option }: any) => {

  function handleCheckboxType(data, value) {
    let temp = [...data];
      if (temp.indexOf(value) !== -1) {
        temp.splice(temp.indexOf(value), 1);
      } else {
        temp = [...temp, value];
      }
      return temp; 
  }
  function handleChangeForCheckBox(e) {
      setQuestionState({
        ...questionState,
        [e.target.name]: handleCheckboxType(
          questionState[e.target.name],
          e.target.value
        ),
      });
    
  }

  return (
    option.labels.map((item, index) => {
      return (
        <div key={index}>
          <FormControlLabel
            control={
              <Checkbox
                value={item}
                checked={questionState[
                  option.name
                ].includes(item)}
                name={option.name}
                onChange={(e) =>
                  handleChangeForCheckBox(e)
                }
                sx={{
                  color: "#0F5156",
                  "& .MuiSvgIcon-root": {
                    borderRadius: "6px",
                  },
                  "&.Mui-checked": {
                    color: "#0F5156",
                    borderRadius: "6px",
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
                {item}
              </Typography>
            }
          />
        </div>
      );
    })
  );
};
export default CheckboxStringTypeQuestion;
