import { Box } from "@mui/material";
import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import DoubleGreaterThanIcon from "../../assets/icons/common/DoubleGreaterThanIcon";

export const cardTableConstants = (
    clientdeleteHandler: Function,
) => {
    return [
        {
            title: "Card Number",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap flex" >
                        <Box className=" fs-18 fw-600" sx={{ pt: 0.5, pr: 0.5 }}>**** **** ****</Box>   {rowData.lastDigits}
                    </span>
                );
            },
        },
        {
            title: "Country",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" >
                        {rowData.country}
                    </span>
                );
            },
        },
        {
            title: "Card Brand",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" >
                        {rowData.brand}
                    </span>
                );
            },
        },
        {
            title: "Expiry Date",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap" >
                        {rowData.expiryMonth + '/' + rowData.expiryYear}
                    </span>
                );
            },
        },
        {
            title: "Action",
            render: (rowData: any) => {
                return (
                    <div className="text-no-wrap fitContent cursor-pointer">
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
