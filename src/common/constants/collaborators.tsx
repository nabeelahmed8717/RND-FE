import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import SwithcOffIcon from "../../assets/icons/common/SwitchOff";
import SwithcOnIcon from "../../assets/icons/common/SwitchOn";
import TickCircleIcon from "../../assets/icons/common/TickCircleIcon";

export const collaboratorsTableConstants = (
  toggleCostQuestions: Function,
  deleteHandler: Function
) => {
  return [
    {
      title: "Name",
      render: (rowData: any) => {
        return <span>{rowData?.firstName + " " + rowData?.lastName} </span>;
      },
    },
    {
      title: "Email",
      render: (rowData: any) => {
        return <span>{rowData?.email}</span>;
      },
    },
    {
      title: "Claims",
      render: (rowData: any) => {
        return (
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            {""}
          </span>
        );
      },
    },
    {
      title: "Invited",
      render: (rowData: any) => {
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
            }}
          >
            <TickCircleIcon status={rowData.collaborator.invited} />
          </span>
        );
      },
    },
    {
      title: "Joined",
      render: (rowData: any) => {
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
            }}
          >
            <TickCircleIcon status={rowData.collaborator.joined} />
          </span>
        );
      },
    },
    {
      title: "Submitted",
      render: (rowData: any) => {
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
            }}
          >
            <TickCircleIcon status={rowData.Submitted} />
          </span>
        );
      },
    },
    {
      title: "Cost questions",
      render: (rowData: any) => {
        return (
          <span
            onClick={() =>
              toggleCostQuestions(
                rowData.id,
                !rowData.collaborator.costQuestions
              )
            }
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "0.6rem",
              cursor: "pointer",
            }}
          >
            {rowData.collaborator.costQuestions ? (
              <SwithcOnIcon />
            ) : (
              <SwithcOffIcon />
            )}
          </span>
        );
      },
    },

    {
      title: "Action",
      render: (rowData: any) => {
        return (
          <div className="flex fitContent marginAuto alignCenter">
            <span
              onClick={() => deleteHandler(rowData.id)}
              className="cursor-pointer"
            >
              <DeleteIcon />
            </span>
          </div>
        );
      },
    },
  ];
};
