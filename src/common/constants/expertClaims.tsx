import { Box, Tooltip, TooltipProps, tooltipClasses } from "@mui/material";

import CommonStatus from "../components/commonStatus/commonStatus";
import DraftIcon from "../../assets/icons/common/DraftIcon";
import Edit from "../../assets/icons/common/expert-edit.png";
import Image from "next/image";
import ProgressDisplay from "../components/commonTable/ProgressDisplay";
import View from "../../assets/icons/common/view.png";
import styled from "@emotion/styled";

const ClaimTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        arrow
        placement="top"
        sx={{ my: 4, px: 1 }}
        classes={{ popper: className }}
    />
))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#0F5156",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#0F5156",
        color: "white",
        padding: "8px 11px 8px 11px",
    },
}));

export const expertClaimsTableConstants = (role: string) => {
    return [


        {
            title: "User",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{rowData.username}</span>;
            },
        },
        {
            title: "Client",
            render: (rowData: any) => {
                return (
                    <span
                        className="cursor-pointer text-no-wrap"

                    >
                        {rowData.name}
                    </span>
                );
            },
        },
        {
            title: "Claim Period",
            render: (rowData: any) => {
                return <span className="text-no-wrap">{rowData.claimPeriod}</span>;
            },
        },
        {
            title: "Progress",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap">
                        <ProgressDisplay progress={rowData.progress} />
                    </span>
                );
            },
        },
        {
            title: "Status",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap">
                        {rowData.status === "inreview" && rowData.IsArchive === false ? (
                            <div>
                                <CommonStatus className="bg-blue" title="In Review" />
                            </div>
                        ) : rowData.status === "ineligible" &&
                            rowData.IsArchive === false ? (
                            <CommonStatus className="bg-red" title="In Eligible" />
                        ) : rowData.status === "readyToDownload" &&
                            rowData.IsArchive === false ? (
                            <CommonStatus
                                className="bg-dark-green"
                                title="Ready to download"
                            />
                        ) : rowData.status === "purchased" &&
                            rowData.IsArchive === false ? (
                            <CommonStatus className="bg-secondary" title="Purchased" />
                        ) : rowData.status && rowData.IsArchive === true ? (
                            <CommonStatus className="bg-dark-yellow" title="Archive" />
                        ) : (
                            <CommonStatus className="bg-yellow" title=" In Progress" />
                        )}
                    </span>
                );
            },
        },
        {
            title: "Action",
            render: (rowData: any) => {
                return (
                    <span className="text-no-wrap">
                        <div  >
                            <EditClaims />
                            {role !== 'COLLABORATOR' && <Image src={View} alt="view" priority width='25px' height='25px' />}
                        </div>
                    </span>
                );
            },
        },
    ];
};


export const EditClaims = () => {
    return (
        <ClaimTooltip title="Edit" >
            <span
                className="claims-mr cursor-pointer"
            >
                <Image src={Edit} alt='edit' priority width='24px' height='24px' onClick={() => alert("Edit Claims")} />
            </span>


        </ClaimTooltip>
    );
};

