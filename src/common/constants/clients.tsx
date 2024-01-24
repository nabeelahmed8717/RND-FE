import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import DoubleGreaterThanIcon from "../../assets/icons/common/DoubleGreaterThanIcon";
import EditIcon from "../../assets/icons/common/EditIcon";

export const clientsTableConstants = (
  clientdeleteHandler: Function,
  clientEditHandler: Function
) => {
  return [
    {
      title: "Name",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{width:"40px",whiteSpace:"nowrap",overflow:"hidden",textOverflow: "ellipsis"}}>
            {rowData.companyName} &nbsp;
            <span onClick={() => alert("clicked")}>
              <DoubleGreaterThanIcon />
            </span>
          </span>
        );
      },
    },
    {
      title: "User",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            {rowData.user?.firstName + "" + rowData.user?.lastName}
          </span>
        );
      },
    },
    {
      title: "Claims in progress",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{ marginLeft: "3.5rem" }}>
            {rowData.claimsInProgress}
          </span>
        );
      },
    },
    {
      title: "Claims in review",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{ marginLeft: "3rem" }}>
            {rowData.claimsInReview}
          </span>
        );
      },
    },
    {
      title: "Claims ready to download",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{ marginLeft: "5rem" }}>
            {rowData.claimsReadyToDownload}
          </span>
        );
      },
    },
    {
      title: "Purchased claims",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{ marginLeft: "3rem" }}>
            {rowData.purchasedClaims}
          </span>
        );
      },
    },
    {
      title: "Ineligible claims",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap" style={{ marginLeft: "3rem" }}>
            {rowData.ineligibleClaims}
          </span>
        );
      },
    },
    {
      title: "Action",
      render: (rowData: any) => {
        return (
          <div className="text-no-wrap fitContent cursor-pointer">
            <span onClick={() => clientEditHandler(rowData)}>
              <EditIcon />
            </span>
            <span
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="cursor-pointer"
              onClick={() => clientdeleteHandler(rowData.id)}
            >
              <DeleteIcon />
            </span>
          </div>
        );
      },
    },
  ];
};
