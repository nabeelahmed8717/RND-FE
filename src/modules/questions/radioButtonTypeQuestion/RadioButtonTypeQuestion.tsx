import React from "react";
import { Box, FormControlLabel, RadioGroup, TextField, Typography } from "@mui/material";
import BpRadio from "../../../common/components/buttons/BpRadio";

const RadioButtonTypeQuestion = ({ setQuestionState, questionState, questionSchema }: any) => {

  function handleChange(e: any) {
    setQuestionState({
      ...questionState,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  }

  return (
    questionSchema.options.map((option: any) => {
      return (
        <>
          <Box paddingTop="40px">
            <div className="company-input-field w-100">
              <label className="dark-color fs-16 fw-400 lh-24 m-0 opacity-8">
                {option.question}
              </label>
              <RadioGroup
                row
                sx={{
                  gap: {
                    sm: questionSchema.displayColumn ? "5px" : "80px",
                    xs: "10px",
                  },
                  paddingTop: "7px",
                  flexDirection: questionSchema.displayColumn
                    ? "column"
                    : "row",
                }}
                name={option.name}
                onChange={(e) => handleChange(e)}
              >
                <FormControlLabel
                  sx={{
                    marginTop: questionSchema.displayColumn && "10px",
                  }}
                  checked={
                    questionState[option.name] === option.labels[0]
                      ? true
                      : false
                  }
                  value={option.labels[0]}
                  control={<BpRadio />}
                  label={
                    <Typography
                      className="remember-me-content"
                      component="div"
                      fontSize="16px"
                      fontWeight={600}
                      color="#343A40"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      {option.labels[0]}
                    </Typography>
                  }
                />
                <FormControlLabel
                  checked={
                    questionState[option.name] === option.labels[1]
                      ? true
                      : false
                  }
                  value={option.labels[1]}
                  control={<BpRadio />}
                  label={
                    <Typography
                      className="remember-me-content"
                      component="div"
                      fontSize="16px"
                      fontWeight={600}
                      color="#343A40"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      {option.labels[1]}
                    </Typography>
                  }
                />
                {option.labels.length > 2 && (
                  <FormControlLabel
                    checked={
                      questionState[option.name] === option.labels[2]
                        ? true
                        : false
                    }
                    value={option.labels[2]}
                    control={<BpRadio />}
                    label={
                      <Typography
                        className="remember-me-content"
                        component="div"
                        fontSize="16px"
                        fontWeight={600}
                        color="#343A40"
                        sx={{ fontFamily: "Source Sans Pro" }}
                      >
                        {option.labels[2]}
                      </Typography>
                    }
                  />
                )}
              </RadioGroup>
            </div>
          </Box>
        </>
      );
    })
  );
};
export default RadioButtonTypeQuestion;
