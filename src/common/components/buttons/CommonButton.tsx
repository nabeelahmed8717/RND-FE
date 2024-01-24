import React from "react";
import { CircularProgress } from "@mui/material";

const CommonButton = (props: any) => {
  const { type, value, width, classNames, flexClasses, ml, whenToShow, handleSubmit } = props;
  return (
    <button
      onClick={handleSubmit}
      type={type}
      // disabled={whenToDisable}
      className={`${width} ${classNames} ${flexClasses} fs-18 fw-700 cursor-pointer white-color lh-24 font-source-sans-pro border-0 position-relative`}
    >
      {whenToShow ? (
        <span
          style={{
            marginTop: "0.3rem",
            marginLeft: `${ml}`,
            position: "absolute",
          }}
        >
          <CircularProgress size={20} thickness={4} className="white-color" />
        </span>
      ): value}
    </button>
  );
};

export default CommonButton;
