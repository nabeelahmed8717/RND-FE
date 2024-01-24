import React from "react";

interface PropsType {
  progress: string;
}

const ProgressDisplay = (props: PropsType) => {
  const { progress } = props;
  const width =
    progress === "ineligible"
      ? "0px"
      : progress === "inprogress"
      ? "25%"
      : progress === "inreview"
      ? "85%"
      : progress === "readyToDownload"
      ? "90%"
      : "97%";
  return (
    <div
      style={{
        width: "200px",
        height: "20px",
        borderRadius: "100px",
        border: "1px  #0F5156 solid",
      }}
    >
      <div
        style={{
          background: "#0F5156",
          width: width,
          height: "15px",
          borderRadius: "100px",
          margin: "3px",
        }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
