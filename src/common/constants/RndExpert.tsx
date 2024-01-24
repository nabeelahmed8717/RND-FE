import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import EditIcon from "../../assets/icons/common/EditIcon";
import SwithcOffIcon from "../../assets/icons/common/SwitchOff";
import SwithcOnIcon from "../../assets/icons/common/SwitchOn";
import ResetPassword from "../../assets/icons/common/ResetPassword";
import Rating from '@mui/material/Rating';


export const RndExpertTableConstants = (
  rndExpertDeleteHandler: Function,
  rndExpertEditHandler: Function,
  rndExpertToggleStatusHandler: Function,
  rndExpertResetPasswordHandler:Function,
) => {
  return [
    {
      title: "No",
      render: (rowData: any) => {
        return (
          <span className="dark-color">
            {rowData.id} 
           
          </span>
        );
      },
    },
    {
      title: "Name",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.firstName} {rowData.lastName}</span>;
      },
    },
    {
      title: "Email",
      render: (rowData: any) => {
        return (
          <span className="dark-color" >
            {rowData.email}
          </span>
        );
      },
    },
    {
      title: "Phone",
      render: (rowData: any) => {
        return (
          <span className="dark-color" >
            {rowData.phone}
          </span>
        );
      },
    },
    {
      title: "Consultation Fee ",
      render: (rowData: any) => {
        return (
          <span className="flex justifyCenter align-center dark-color"
          style={{marginLeft:"30px"}} >
            {rowData.consultationFee}
          </span>
        );
      },
    },
    {
      title: "Consulted Users",
      render: (rowData: any) => {
        return (
          <span className="dark-color"
          style={{marginLeft:"30px"}} >
            {rowData.consultedUsers}
          </span>
        );
      },
    },
    {
      title: "Rating",
      render: (rowData: any) => {
        return (
          <span className="wrap-rating-rnd-expert flex  align-center">  <Rating name="half-rating-read" defaultValue={rowData.ratingStar}  readOnly /></span>
        
        );
      },
    },
    {
        title: "Status",
        render: (rowData: any) => {
          return (
            <span
              onClick={() => rndExpertToggleStatusHandler(rowData.id)}
              className="cursor-pointer"
            >
              {rowData.status ? <SwithcOnIcon /> : <SwithcOffIcon />}
            </span>
          );
        },
      },
    { 
      title: <span className="flex justify-center align-center">Action</span>,
      render: (rowData: any) => {
        return (
          <div className=" fitContent flex justify-center align-center  cursor-pointer">
             <span
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="cursor-pointer flex justify-center align-center "
              onClick={() => rndExpertResetPasswordHandler(rowData.id)}
            >
              <ResetPassword />
            </span>
            <span onClick={() => rndExpertEditHandler(rowData.id)}  className="cursor-pointer flex justify-center align-center ">
              <EditIcon />
            </span>
            <span
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="cursor-pointer flex justify-center align-center"
              onClick={() => rndExpertDeleteHandler(rowData.id)}
            >
              <DeleteIcon />
            </span>
          </div>
        );
      },
    },
  ];
};

