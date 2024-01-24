import CollectionsPdf from "../../assets/icons/common/CollectionsPdf";

export const CollectionsTableConstants = () => {
  return [
    {
      title: "User",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.user}</span>;
      },
    },
    {
      title: "Client",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.client} </span>;
      },
    },
    {
      title: "Claim Period",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.claimPeriod}</span>;
      },
    },
    {
      title: "Client Fees",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.fee}</span>;
      },
    },
    {
      title: "Session Duration ",
      render: (rowData: any) => {
        return (
          <span className="flex justifyCenter align-center dark-color">
            {rowData.duration}
          </span>
        );
      },
    },
    {
      title: "Session Date",
      render: (rowData: any) => {
        return <span className="dark-color">{rowData.sessionDate}</span>;
      },
    },
    {
      title: "Session Time",
      render: (rowData: any) => {
        return (
          <span className="wrap-rating-rnd-expert flex justifyCenter align-center">
            {rowData.sessionTime}{" "}
          </span>
        );
      },
    },

    {
      title: (
        <span
          className="flex justify-center align-center"
          style={{ marginRight: "20px" }}
        >
          Action
        </span>
      ),
      render: (rowData: any) => {
        return (
          <div className=" fitContent flex justify-center align-center  cursor-pointer">
            <span
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="cursor-pointer flex justify-center align-center "
            >
              <CollectionsPdf />
            </span>
          </div>
        );
      },
    },
  ];
};
