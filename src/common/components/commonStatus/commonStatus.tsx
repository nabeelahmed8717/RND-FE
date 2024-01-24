import React, { FC } from "react";
interface ICommonStatus {
  title: string;
  className: string;
}
const CommonStatus: FC<ICommonStatus> = (props) => {
  return (
    <div className="status-main">
      <span
        className={`common-status white-color text-center fw-700 fs-14 font-source-sans-pro ${props.className}`}
      >
        {props.title}
      </span>
    </div>
  );
};

export default CommonStatus;
