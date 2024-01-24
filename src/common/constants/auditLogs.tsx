import { Box } from "@mui/material";
import CheckBox from "../components/checkBox/CheckBox";
import CheckCheckedIcon from "../../assets/icons/common/CheckChecked";
import CheckUnCheckedIcon from "../../assets/icons/common/CheckUnChecked";
import CommonStatus from "../components/commonStatus/commonStatus";
import CommonStatusInline from "../components/commonStatusInline/CommonStatusInline";
import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import Image from "next/image";
import SwithcOffIcon from "../../assets/icons/common/SwitchOff";
import SwithcOnIcon from "../../assets/icons/common/SwitchOn";
import TickCircleIcon from "../../assets/icons/common/TickCircleIcon";
import moment from "moment";

export const auditLogsTableConstants = () =>
  {
    
    return [
      
      {
        title: "S.No",
        render: (rowData: any, index:any) => {
          return <span>{index+1}</span>;
        },
      },
      {
        title: "Image",
        render: (rowData: any) => {
          return (
            <Box className="wrapper-avatar-auditLogs">
              <Image src={rowData.image} alt="search" priority />
            </Box>
          );
        },
      },
      {
        title: "User Name",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {rowData.userName}
            </span>
          );
        },
      },
      {
        title: "User Role",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {rowData.userRole}
            </span>
          );
        },
      },
      {
        title: "Event Name",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {(() => {
                switch (rowData.event) {
                  case "claim added":
                    return (
                      <CommonStatus
                        className="bg-dark-green"
                        title="Claim Added"
                      />
                    );
                    case "client added":
                    return (
                      <CommonStatus
                        className="bg-dark-green"
                        title="Client Added"
                      />
                    );
                  case "collaborator added":
                    return (
                      <CommonStatus
                        className="bg-dark-green"
                        title="Collaborator Added"
                      />
                    );
                  case "collaborator deleted":
                    return (
                      <CommonStatus
                        className="bg-red"
                        title="Collaborator Deleted"
                      />
                    );
                  case "client deleted":
                    return (
                      <CommonStatus className="bg-red" title="Client Deleted" />
                    );
                  case "password changed":
                    return (
                      <CommonStatus
                        className="bg-yellow"
                        title="Password Changed"
                      />
                    );
                  case "claim reviewed":
                    return (
                      <CommonStatus
                        className="bg-blue"
                        title="Claim Reviewed"
                      />
                    );
                  case "claim finalised":
                    return (
                      <CommonStatus
                        className="bg-blue"
                        title="Claim Finalised"
                      />
                    );
                  case "claim paid":
                    return (
                      <CommonStatus
                        className="bg-secondary"
                        title="Claim Paid"
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </span>
          );
        },
      },
      {
        title: "Event Date",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {/* {rowData.eventDate} */}
              {moment(rowData.timeStamp).format("MM/DD/YYYY")}
            </span>
          );
        },
      },
      {
        title: "Event Time",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {moment(rowData.timeStamp).format("LTS")}
            </span>
          );
        },
      },
      {
        title: "User Status",
        render: (rowData: any) => {
          return (
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              {/* {rowData.userStatus} */}

              {(() => {
                switch (rowData.userStatus) {
                  case "Active":
                    return (
                      <CommonStatusInline
                        className="status-active"
                        label="Active"
                      />
                    );
                  case "Inactive":
                    return (
                      <CommonStatusInline
                        className="status-inActive"
                        label="Inactive"
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </span>
          );
        },
      },
    ];
  };
