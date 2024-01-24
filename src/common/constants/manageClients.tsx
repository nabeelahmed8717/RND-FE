

import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import DoubleGreaterThanIcon from "../../assets/icons/common/DoubleGreaterThanIcon";
import EditIcon from "../../assets/icons/common/EditIcon";

export const manageClientsTableConstants = (
    manageClientdeleteHandler: Function,
    manageClientEditHandler: Function
) => {
    return [
        {
            title: "Clients Name",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{rowData.name}</span>;
            },
        },
        {
            title: "User",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{rowData.userName}</span>;
            },
        },
        {
            title: "Email",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{rowData.email}</span>;
            },
        },
        {
            title: "Total Claims",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" style={{ marginLeft: "3rem" }}>
                        {rowData.totalClaims}&nbsp;
                        <span onClick={() => alert("clicked")}>
                            <DoubleGreaterThanIcon />
                        </span>
                    </span>
                );
            },
        },
        {
            title: "Purchased claims",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" style={{ marginLeft: "3rem" }}>
                        {rowData.manageClientPurchasedClaims}
                    </span>
                );
            },
        },
        {
            title: "Action",
            render: (rowData: any) => {
                return (
                    <div className="text-no-wrap fitContent cursor-pointer">
                        <span onClick={() => manageClientEditHandler(rowData)}>
                            <EditIcon />
                        </span>
                        <span
                            style={{ marginLeft: "10px", marginRight: "15px" }}
                            className="cursor-pointer"
                            onClick={() => manageClientdeleteHandler(rowData.id)}
                        >
                            <DeleteIcon />
                        </span>
                    </div>
                );
            },
        },
    ];
};