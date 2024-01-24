import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import DoubleGreaterThanIcon from "../../assets/icons/common/DoubleGreaterThanIcon";
import ResetIcon from "../../assets/icons/common/reset-icon";
import SwithcOffIcon from "../../assets/icons/common/SwitchOff";
import SwithcOnIcon from "../../assets/icons/common/SwitchOn";

export const manageUsersConstants = (
  toggleStatusHandler: Function,
  deleteHandler: Function,
  resetHandler: Function,
  
) => {
  return [
    {
      title: "User",
      render: (rowData: any) => {
        return <span className="fs-16 fw-600 lh-24 dark-color font-source-sans-pro">{rowData.manageUser} </span>;
      },
    },
    {
      title: "User Type",
      render: (rowData: any) => {
        return <span className="fs-16 fw-600 lh-24 dark-color font-source-sans-pro">{rowData.userType}</span>;
      },
    },
    {
      title: "Email",
      render: (rowData: any) => {
        return (
          <span
            className="fs-16 fw-600 lh-24 dark-color font-source-sans-pro"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {rowData.email}
          </span>
        );
      },
    },
    {
      title: "No of clients",
      render: (rowData: any) => {
        return (
          <div style={{marginLeft:"20px"}}>
            <span className="fs-16 fw-600 lh-24 dark-color font-source-sans-pro" style={{marginRight:"10px"}}>
              {rowData.noOfClients}
            </span>
          
            <span onClick={() => alert("clicked")} >
            {rowData.noOfClients===0?false :<DoubleGreaterThanIcon />}
            </span>
    
         
          </div>
        );
      },
    },
    {
      title: "Phone Number",
      render: (rowData: any) => {
        return (
          <span
            className="fs-16 fw-600 lh-24 dark-color font-source-sans-pro"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            {rowData.phoneNumber}
          </span>
        );
      },
    },
    {
      title: "Status",
      render: (rowData: any) => {
        return (
          <span
            onClick={() => toggleStatusHandler(rowData.id)}
          >
            {rowData.manageUsersStatus ? <SwithcOnIcon /> : <SwithcOffIcon />}
          </span>
        );
      },
    },

    {
      title: "Action",
      render: (rowData: any) => {
        return (
          <div className="flex fitContent  alignCenter">
            <span
              style={{ marginRight: "10px" }}
              onClick={() => resetHandler(rowData.id)}
            >
              <ResetIcon />
            </span>
            <span onClick={() => deleteHandler(rowData.id)}>
              <DeleteIcon />
            </span>
          </div>
        );
      },
    },
  ];
};
