import React, { useState } from "react";
import { Grid, Slider } from "@mui/material";

const SliderTypeQuestion = ({ setQuestionState, questionState, questionSchema, option }: any) => {

  function handleChange(e: any) {
    setQuestionState({
      ...questionState,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  }

  return (
    <div className="question-common-slider-ui w-100">
      <Slider
        className="common-slider-ui"

        value={
          questionState[option.name]
            ? questionState[option.name]
            : 0
        }
        name={option.name}
        onChange={(e) => handleChange(e)}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={questionSchema.step}
        marks={questionSchema.marks}
        min={0}
        max={100}
        sx={{
          maxWidth: '90%',
          "& .MuiSlider-rail": {
            background: '#9dacae',
            borderRadius: '4px',
            opacity: 1,
          },
          "& .MuiSlider-thumb": {
            width: "24px",
            height: '24px',
            background: "#FFFFFF",
            border: "3px solid #0F5156",
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)",
          },
          "& .MuiSlider-track": {
            color: "#0F5156",
            borderRadius: '4px',
          },
          "& .MuiSlider-mark": {
            width: '12px',
            height: "12px",
            borderRadius: '50%',
            background: "#9dacae",
            boxShadow: " 0px 0px 6px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)",
          },
          "& .MuiSlider-markActive": {
            width: '12px',
            height: "12px",
            borderRadius: '50%',
            background: "#0F5156",
            boxShadow: " 0px 0px 6px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)",
          },
        }}
      />
      <Grid container className="wrap-slider-text flex">
        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          xl={6}
          className="wrap-slider-text-left "
        >
          <p className="fw-600 fs-14 lh-20 font-source-sans-pro primary-color slider-text-left">
            {questionSchema.start}
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          xl={6}
          className="wrap-slider-text-right flex justify-end "
        >
          <p className="fw-600 fs-14 lh-20 font-source-sans-pro primary-color slider-text-right">
            {questionSchema.end}
          </p>
        </Grid>
      </Grid>
    </div>

  );
};
export default SliderTypeQuestion;
