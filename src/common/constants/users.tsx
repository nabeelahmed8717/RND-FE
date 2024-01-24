import EditIcon from "../../assets/icons/common/EditIcon";
export const UserTableConstants = (UserEditHandler: Function) => {
  return [
    {
      title: "Name",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            {rowData?.firstName + " " + rowData?.lastName}
          </span>
        );
      },
    },
    {
      title: "Phone number",
      render: (rowData: any) => {
        return <span className="text-no-wrap">{rowData?.phoneNumber}</span>;
      },
    },
    {
      title: "Email",
      render: (rowData: any) => {
        return <span className="text-no-wrap">{rowData?.email}</span>;
      },
    },
    {
      title: "User can view",
      render: (rowData: any) => {
        return <span className="text-no-wrap">{rowData?.subIndividual?.userView}</span>;
      },
    },
    {
      title: "User can purchase",
      render: (rowData: any) => {
        return <span className="text-no-wrap">{rowData?.subIndividual?.userPurchase}</span>;
      },
    },
    {
      title: "Action",
      render: (rowData: any) => {
        return (
          <div className="text-no-wrap fitContent cursor-pointer">
            <span onClick={() => UserEditHandler(rowData?.id)}>
              <EditIcon />
            </span>
          </div>
        );
      },
    },
  ];
};
