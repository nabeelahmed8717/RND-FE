import ArchiveIcon from "../../assets/icons/common/ArchiveIcon";
import BuyCardIcon from "../../assets/icons/common/BuyCardIcon";
import DocumentCopyIcon from "../../assets/icons/common/DocumentCopyIcon";
import DocumentReviewIcon from "../../assets/icons/common/DocumentReviewIcon";
import DraftIcon from "../../assets/icons/common/DraftIcon";
import IneligibleStatusIcon from "../../assets/icons/common/IneligibleStatusIcon";
import InprogressStatusIcon from "../../assets/icons/common/InprogressStatusIcon";
import InreviewStatus from "../../assets/icons/common/InreviewStatus";
import PDFIcon from "../../assets/icons/common/PDFIcon";
import PurchasedStatusIcon from "../../assets/icons/common/purchasedStatus";
import ReadyToDownloadStatusIcon from "../../assets/icons/common/ReadyToDownloadStatus";
import ProgressDisplay from "../components/commonTable/ProgressDisplay";
import WordIcon from "../../assets/images/claims/word-icon.png";
import Image from "next/image";
import styled from "@emotion/styled";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const ClaimTooltip = styled(({ className, ...props }: any) => (
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

export const selectedClaimsTableConstants = (
  duplicateClient: Function,
  archiveClaim: Function
) => {
  return [
    // {
    //   title: "Client",
    //   render: (rowData: any) => {
    //     return <span className="cursor-pointer" onClick={() => handleClientRedirect(rowData)}>{rowData.name} </span>;
    //   },
    // },
    {
      title: "Claim Period ",
      render: (rowData: any) => {
        return (
          <span className="flex">
            {rowData?.startDate && rowData?.endDate === "Not yet specified"
              ? "Not yet specified"
              : rowData?.startDate + "-" + rowData?.endDate}
          </span>
        );
      },
    },
    {
      title: "User",
      render: (rowData: any) => {
        return (
          <span>{rowData?.user?.firstName + " " + rowData?.user?.lastName}</span>
        );
      },
    },
    {
      title: "Progress",
      render: (rowData: any) => {
        return (
          <span className="flex">
            <ProgressDisplay progress={rowData.status} />
          </span>
        );
      },
    },
    {
      title: "Status",
      render: (rowData: any) => {
        return (
          <span className="flex">
            {rowData.status === "inreview" ? (
              <InreviewStatus />
            ) : rowData.status === "ineligible" ? (
              <IneligibleStatusIcon />
            ) : rowData.status === "readyToDownload" ? (
              <ReadyToDownloadStatusIcon />
            ) : rowData.status === "purchased" ? (
              <PurchasedStatusIcon />
            ) : (
              <InprogressStatusIcon />
            )}
          </span>
        );
      },
    },
    {
      title: (
        <span
          className="fw-700 fs-16 lh-24 primary-color font-source-sans-pro text-no-wrap"
          style={{ marginLeft: "3.5px" }}
        >
          Action
        </span>
      ),
      render: (rowData: any) => {
        return (
          <span className="flex justify-between align-center">
            {rowData.status === "inreview" ? (
              <div className="interview">
                <ClaimTooltip title="Duplicate">
                  <span
                    className="claims-mr cursor-pointer"
                    onClick={() => duplicateClient(rowData)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentCopyIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Archive">
                  <span
                    className="claims-ml claims-mr cursor-pointer "
                    onClick={() => archiveClaim(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <ArchiveIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Review">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentReviewIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status === "ineligible" ? (
              <div className="ineligible">
                <ClaimTooltip title="Duplicate">
                  <span
                    className="claims-mr cursor-pointer"
                    onClick={() => duplicateClient(rowData)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentCopyIcon />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="Archive">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => archiveClaim(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <ArchiveIcon />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="Edit">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <DraftIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status === "readyToDownload" ? (
              <div className="readyToDownload">
                <ClaimTooltip title="Duplicate">
                  <span
                    className="claims-mr cursor-pointer"
                    onClick={() => duplicateClient(rowData)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentCopyIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Archive">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => archiveClaim(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <ArchiveIcon />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="Pay">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <BuyCardIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status === "purchased" ? (
              <div className="purchased">
                <ClaimTooltip title="Duplicate">
                  <span
                    className="claims-mr cursor-pointer"
                    onClick={() => duplicateClient(rowData)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentCopyIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Archive">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => archiveClaim(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <ArchiveIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Word">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <Image src={WordIcon} alt="Document" priority />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="PDF">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <PDFIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : (
              <div className="selected-claims flex justify-between align-start">
                <ClaimTooltip title="Duplicate">
                  <span
                    className="claims-mr cursor-pointer"
                    onClick={() => duplicateClient(rowData)}
                    style={{ marginRight: "15px" }}
                  >
                    <DocumentCopyIcon />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="Archive">
                  <span
                    className="claims-ml claims-mr cursor-pointer "
                    onClick={() => archiveClaim(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <ArchiveIcon />
                  </span>
                </ClaimTooltip>

                <ClaimTooltip title="Edit">
                  <span
                    className="claims-ml claims-mr cursor-pointer "
                    onClick={() => alert(rowData.id)}
                    style={{ marginRight: "15px" }}
                  >
                    <DraftIcon />
                  </span>
                </ClaimTooltip>
              </div>
            )}
          </span>
        );
      },
    },
  ];
};
