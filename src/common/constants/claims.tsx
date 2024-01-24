import ArchiveIcon from "../../assets/icons/common/ArchiveIcon";
import BuyCardIcon from "../../assets/icons/common/BuyCardIcon";
import DocumentCopyIcon from "../../assets/icons/common/DocumentCopyIcon";
import DocumentReviewIcon from "../../assets/icons/common/DocumentReviewIcon";
import DraftIcon from "../../assets/icons/common/DraftIcon";
import Image from "next/image";
import PDFIcon from "../../assets/icons/common/PDFIcon";
import Restore from "../../assets/images/claims/restore.png";
import ProgressDisplay from "../components/commonTable/ProgressDisplay";
import WordIcon from "../../assets/images/claims/word-icon.png";
import styled from "@emotion/styled";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import CommonStatus from "../components/commonStatus/commonStatus";

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

export const claimsTableConstants = (
  duplicateClient: Function,
  archiveClaim: Function,
  restoreClaim: Function,
  downloadPDF: Function,
  reviewClaim: Function,
  handleClientRedirect: Function,
  downloadWord: Function
) => {
  return [
    {
      title: "Client",
      render: (rowData: any) => {
        return (
          <span
            className="cursor-pointer text-no-wrap"
            onClick={() => handleClientRedirect(rowData)}
          >
            {rowData.cName}
          </span>
        );
      },
    },
    {
      title: "User",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            {rowData?.user.firstName + " " + rowData?.user.lastName}
          </span>
        );
      },
    },
    {
      title: "Claim Period",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            {rowData?.startDate && rowData?.endDate === "Not yet specified"
              ? "Not yet specified"
              : rowData?.startDate + "-" + rowData?.endDate}
          </span>
        );
      },
    },
    {
      title: "Progress",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            <ProgressDisplay progress={rowData.status} />
          </span>
        );
      },
    },
    {
      title: "Status",
      render: (rowData: any) => {
        return (
          <span className="text-no-wrap">
            {rowData.status === "inreview" && rowData.isArchived === false ? (
              <div>
                <CommonStatus className="bg-blue" title="In Review" />
              </div>
            ) : rowData.status === "ineligible" &&
              rowData.isArchived === false ? (
              <CommonStatus className="bg-red" title="In Eligible" />
            ) : rowData.status === "readyToDownload" &&
              rowData.isArchived === false ? (
              <CommonStatus
                className="bg-dark-green"
                title="Ready to download"
              />
            ) : rowData.status === "purchased" &&
              rowData.isArchived === false ? (
              <CommonStatus className="bg-secondary" title="Purchased" />
            ) : rowData.status && rowData.isArchived === true ? (
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
            {rowData.status === "inreview" && rowData.isArchived === false ? (
              <div>
                <span onClick={() => duplicateClient(rowData)}>
                  <DuplicateClaim />
                </span>
                <span onClick={() => archiveClaim(rowData.id)}>
                  <ArchiveClaims />
                </span>

                <ClaimTooltip title="Review">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => reviewClaim(rowData.id)}
                  >
                    <DocumentReviewIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status === "ineligible" &&
              rowData.isArchived === false ? (
              <div>
                <span onClick={() => duplicateClient(rowData)}>
                  <DuplicateClaim />
                </span>
                <span onClick={() => archiveClaim(rowData.id)}>
                  <ArchiveClaims />
                </span>
                <EditClaims />
              </div>
            ) : rowData.status === "readyToDownload" &&
              rowData.isArchived === false ? (
              <div>
                <span onClick={() => duplicateClient(rowData)}>
                  <DuplicateClaim />
                </span>
                <span onClick={() => archiveClaim(rowData.id)}>
                  <ArchiveClaims />
                </span>
                <ClaimTooltip title="Pay">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => alert(rowData.id)}
                  >
                    <BuyCardIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status === "purchased" &&
              rowData.isArchived === false ? (
              <div>
                <span onClick={() => duplicateClient(rowData)}>
                  <DuplicateClaim />
                </span>
                <span onClick={() => archiveClaim(rowData.id)}>
                  <ArchiveClaims />
                </span>
                <ClaimTooltip title="Word">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => downloadWord(rowData.id)}
                  >
                    <Image src={WordIcon} alt="Document" priority />
                  </span>
                </ClaimTooltip>
                <ClaimTooltip title="PDF">
                  <span
                    className="claims-ml claims-mr cursor-pointer"
                    onClick={() => downloadPDF(rowData)}
                  >
                    <PDFIcon />
                  </span>
                </ClaimTooltip>
              </div>
            ) : rowData.status && rowData.isArchived === true ? (
              <Image
                className="cursor-pointer"
                src={Restore}
                onClick={() => restoreClaim(rowData)}
                alt="restore"
                priority
              />
            ) : (
              <div>
                <span onClick={() => duplicateClient(rowData)}>
                  <DuplicateClaim />
                </span>
                <span onClick={() => archiveClaim(rowData.id)}>
                  <ArchiveClaims />
                </span>
                <EditClaims />
              </div>
            )}
          </span>
        );
      },
    },
  ];
};

export function DuplicateClaim() {
  return (
    <ClaimTooltip title="Duplicate">
      <span className="claims-mr cursor-pointer">
        <DocumentCopyIcon />
      </span>
    </ClaimTooltip>
  );
}

export const ArchiveClaims = () => {
  return (
    <ClaimTooltip title="Archive">
      <span className="claims-ml claims-mr cursor-pointer">
        <ArchiveIcon />
      </span>
    </ClaimTooltip>
  );
};
export const EditClaims = () => {
  return (
    <ClaimTooltip title="Edit">
      <span
        className="claims-ml claims-mr cursor-pointer"
        onClick={() => alert("Edit Claims")}
      >
        <DraftIcon />
      </span>
    </ClaimTooltip>
  );
};
