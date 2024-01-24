import React, { useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MultiSelectTypeQuestion = ({ setQuestionState, questionState, questionSchema}: any) => {

  const [show, setShow] = useState<string | number>("");
  
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
    <div className="wrapper-accordion-questions-answer">
    <div className="wrap-accordion-quesions-ans">
      {questionSchema.options.map((item: any, index: number) => (
        <div className="wrap-accordion-content" key={index}>
          <div>
            <div
              className={
                show && show == index
                  ? "accordion-question flex justify-between align-center border-radiues-3"
                  : "accordion-question flex justify-between align-center border-radiues-3 mb-15"
              }
            >
              <h2 className="fw-600 fs-18 lh-24 dark-color font-source-sans-pro  align-center">
                {item.question}
              </h2>
              <div className="selected-item flex justify-between align-center">
                <p className="dark-color fs-18 fw-400 font-source-sans-pro opacity-8">
                  {questionState[item.name]?.length} selected
                </p>
                <a className="flex justify-end accordion-arrow-icons align-center">
                  {show === index ? (
                    <ArrowDropUpIcon
                      className="cursor-pointer"
                      sx={{ color: "#343A40", opacity: ".5" }}
                      onClick={() => setShow("")}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      className="cursor-pointer"
                      onClick={() => setShow(index)}
                      sx={{ color: "#343A40", opacity: ".5" }}
                    />
                  )}
                </a>
              </div>
            </div>
            <div className="flex">
              {show === index && (
                <>
                  <div className="accordion-checkbox gray-border-1 w-100 mb-15">
                    {item.labels?.map(
                      (checkbox: any, ind: number) => {
                        return (
                          <div key={ind}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value={checkbox}
                                  checked={
                                    questionState[
                                      item.name
                                    ]?.indexOf(checkbox) > -1
                                      ? true
                                      : false
                                  }
                                  name={item.name}
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
                                  sx={{
                                    fontFamily: "Source Sans Pro",
                                  }}
                                >
                                  {checkbox}
                                </Typography>
                              }
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
export default MultiSelectTypeQuestion;
