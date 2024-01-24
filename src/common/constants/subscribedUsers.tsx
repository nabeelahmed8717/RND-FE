import { Box } from "@mui/material";
import CheckBox from "../components/checkBox/CheckBox";
import CheckCheckedIcon from "../../assets/icons/common/CheckChecked";
import CheckUnCheckedIcon from "../../assets/icons/common/CheckUnChecked";
import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import Image from "next/image";
import SwithcOffIcon from "../../assets/icons/common/SwitchOff";
import SwithcOnIcon from "../../assets/icons/common/SwitchOn";
import TickCircleIcon from "../../assets/icons/common/TickCircleIcon";

export const subscribedUsersTableConstants = (
  toggleCostQuestions: Function,
  toggleStatus: Function
) => {
  return [
    {
      title: "No",
      render: (rowData: any, index:any) => {
        return <div className="overflow-ellipsis">{index+1}</div>;
      },
    },
    {
      title: "Avatar",
      render: (rowData: any) => {
        return (
          <Box className="default-img-table">
            {rowData.avatar ? (
              <Image src={rowData.avatar} alt="search" priority />
            ) : null}
          </Box>
        );
      },
    },
    {
      title: "Name",
      render: (rowData: any) => {
        return (
          <div
            className="overflow-name-ellipsis"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {rowData.name}
          </div>
        );
      },
    },
    {
      title: "Email",
      render: (rowData: any) => {
        return (
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            {rowData.email}
          </span>
        );
      },
    },
    {
      title: "Subscription Date",
      render: (rowData: any) => {
        return (
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            {rowData.subscriptionDate}
          </span>
        );
      },
    },
    {
      title: "Status",
      render: (rowData: any) => {
        return (
          <span
            onClick={() => toggleCostQuestions(rowData.id)}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
              cursor: "pointer",
              width: "fit-content",
            }}
            className="cursor-pointer"
          >
            {rowData.status ? <SwithcOnIcon /> : <SwithcOffIcon />}
          </span>
        );
      },
    },
    {
      title: "Send to",
      render: (rowData: any) => {
        return (
          <span
            onClick={() => toggleStatus(rowData.id)}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            {rowData.sendTo ? <CheckCheckedIcon /> : <CheckUnCheckedIcon />}
          </span>
          // <div className="custom-Checkbox-wrapper abs-checkbox cursor-pointer">
          //   <input
          //     // key={item.newsId}
          //     type="checkbox"
          //     id={rowdata.id}
          //     name={rowdata.id}
          //     checked={checkboxSingleSelected.includes(rowdata.id)}
          //     onChange={(e) => {
          //       handleSingleChecked(e, rowdata);
          //     }}
          //     className="remember-checkbox"
          //   />
          // </div>
        );
      },
    },

    // {
    //   title: "Action",
    //   render: (rowData: any) => {
    //     return (
    //       <div className="flex fitContent marginAuto alignCenter">
    //         <span onClick={() => deleteHandler(rowData.id)}>
    //           <DeleteIcon />
    //         </span>
    //       </div>
    //     );
    //   },
    // },
  ];
};
