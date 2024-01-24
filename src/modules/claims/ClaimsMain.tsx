import * as Yup from "yup";

import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import {
  apiGetRequest,
  apiPatchRequest,
  apiPostRequest,
} from "../../helpers/request";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import ClaimSearchFilters from "./ClaimSearchFilters/ClaimSearchFilters";
import ClaimsModal from "../../common/components/claimsModal/claimsModal";
import CommonModal from "../../common/components/commonModal/commonModal";
import CommonTable from "../../common/components/commonTable/commonTable";
import { DocumentCreator } from "./claimsWordDownload/claimsGenerator";
import ErrorIcon from "@mui/icons-material/Error";
import { IClaim } from "../../common/interfaces/claimInterface";
import { PDFDownload } from "./claimPdfDownload/claimPdfDownload";
import { Packer } from "docx";
import QuestionLayout from "../questions/questionLayout";
import ReviewClaims from "./reviewClaims/ReviewClaims";
import { TableSkeleton } from "../../common/components/tableSkeleton/TableSkeleton";
import { addClaimModalSxStyling } from "../../common/components/commonModal/commonModalSxStyle";
import { claimsTableConstants } from "../../common/constants/claims";
import { claimsTabledata } from "../../common/mockData/claims";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { education } from "./claimsWordDownload/claimsData";
import { endpoints } from "../../config/endpoints";
import { expertClaimsTableConstants } from "../../common/constants/expertClaims";
import { fetchClients } from "../../redux/clients/clientsSlice";
import { getDummyRoles } from "../../helpers/Tokens";
import { jsPDF } from "jspdf";
import { manageClaimsTableConstants } from "../../common/constants/manageClaims";
import { renderToString } from "react-dom/server";
import { saveAs } from "file-saver";
import { useAppSelector } from "../../hooks/use-store.hooks";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import {
  archivedClaim,
  duplicateClaim,
  fetchClaims,
  restoreClaim,
} from "../../redux/claims/claimApi";

//Material UI

//components

//common

//mock data

//interfaces

//images

//library

const initialValues = {
  selectedClient: "",
};
const validation = Yup.object({
  selectedClient: Yup.string().required("Required Field"),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const ClaimsMain: FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const { clients } = useAppSelector((state) => state.clients);
  const { totalRecords, claimsData, status } = useAppSelector(
    (state) => state.claims
  );
  const [ModalType, setModalType] = useState("");
  const [isArchived, setIsArchived] = useState(false);
  const [searchClaim, setSearchClaim] = useState("");
  const [claimStatus, setClaimStatus] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [IsShowArchive, setIsShowArchive] = useState(false);
  const [claimData, setClaimData] = useState(claimsData);
  const [SelectedClaim, setSelectedClaim] = useState<any>({});
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [localStorageRole, setLocalStorageRole] = useState<string | null>();
  const attemptedQuestion:any = [];
  var loggedUserRole: any;
  useEffect(() => {
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);
  const dispatch = useDispatch();
  const addClaim = async (payload: any | undefined) => {
    try {
      setIsloading(true);
      const response = await apiPostRequest(endpoints.claims, payload);
      if (response.data.error) {
        setIsloading(false);
        dispatch(
          displayToastr({ alertType: "error", message: "Claim Not Added" })
        );
      } else {
         localStorage.setItem("attemptedQuestion", JSON.stringify(attemptedQuestion));
        setClaimData(response.data.data);
        router.push(`/claims/questions/${payload?.cName}/${response.data.data.claim.data.id}`);
      }
    } catch (error) {
      setIsloading(false);
      dispatch(
        displayToastr({ alertType: "error", message: "Claim Not Added" })
      );
    }
  };
  useEffect(() => {
    dispatch(fetchClients(page));
  }, []);
  useEffect(() => {
    setClaimData(claimsData);
  }, [claimsData]);

  useEffect(() => {
    dispatch(fetchClaims({ page, isArchived, claimStatus, searchClaim }));
  }, [page, totalRecords, isArchived, claimStatus, searchClaim]);

  const DuplicateClaimHandler = (claim: IClaim) => {
    setModalType("duplicateClaim");
    setSelectedClaim(claim);
  };
  const ClaimDuplicated = () => {
    dispatch(duplicateClaim({ SelectedClaim, dispatch }));
    setModalType("");
    router.push(
      `/claims/questions/${SelectedClaim?.client?.companyName}/${SelectedClaim?.client?.id}`
    );
    if (status === "Failed") {
      dispatch(
        displayToastr({
          alertType: "error",
          message: "Claim Has not been Duplicated",
        })
      );
    }
  };
  const ArchiveClaimHandler = (claim: IClaim) => {
    setModalType("archiveClaim");
    setSelectedClaim(claim);
  };
  const claimsArchived = () => {
    dispatch(archivedClaim(SelectedClaim));
    setModalType("");
    dispatch(displayToastr({ message: "Claim Archived Successfully" }));
  };
  const RestoreClaimHandler = (claim: IClaim) => {
    setModalType("restoreClaim");
    setSelectedClaim(claim);
  };
  const ClaimRestored = () => {
    dispatch(restoreClaim(SelectedClaim));
    setModalType("");
    dispatch(displayToastr({ message: "Claim Restored Successfully" }));
  };
  const handleClientRedirect = async (rowData: any) => {
    console.log(rowData, "claims main");
    router.push({
      pathname: "/clients",
      query: { name: rowData.client.id, company: rowData.client.companyName },
    });
  };
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validation,
      onSubmit: () => {
        const client = clients.find(
          (client: any) => client.companyName === selectedClient
        );
        console.log("id", client);

        const clientData = {
          client: client?.id,
          cName: client?.companyName,
        };
        console.log(clientData, "clientData");

        addClaim(clientData);
        setSelectedClient(values.selectedClient);
        setIsModalOpen(false);
       
        // setIsShowQuestion(true);
      },
    });

  const formSelectHandler = (event: any) => {
    handleChange(event);
    setSelectedClient(event.target.value);
  };

  const createPDF = (clientClaim: IClaim) => {
    const pdf = new jsPDF("portrait", "pt", [800, 850]);
    setSelectedClaim(clientClaim);
    const string = renderToString(<PDFDownload />);
    pdf.setFontSize(9);
    pdf.html(string).then(() => {
      pdf.save(`${clientClaim.name}`);
    });
  };

  const downloadWordHandler = () => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([education]);
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };

  const ReviewClaim = () => {
    setIsShow(!isShow);
  };
  const tableConstants = () => {
    switch (localStorageRole) {
      case "INDIVIDUAL":
        return claimsTableConstants(
          DuplicateClaimHandler,
          ArchiveClaimHandler,
          RestoreClaimHandler,
          createPDF,
          ReviewClaim,
          handleClientRedirect,
          downloadWordHandler
        );
      case "SYS_ADMIN":
        return manageClaimsTableConstants(
          ArchiveClaimHandler,
          RestoreClaimHandler,
          createPDF,
          ReviewClaim,
          handleClientRedirect,
          downloadWordHandler
        );
      case "RND_EXPERT":
        return expertClaimsTableConstants(localStorageRole);
      case "COLLABORATOR":
        return expertClaimsTableConstants(localStorageRole);

      default:
        return "";
    }
  };

  return (
    <div className="Claims">
      <Grid
        padding={"20px 30px 10px 30px"}
        className="claims-main bg-white-shadow"
      >
        {isShow && (
          <div>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <Box className="fw-700 fs-36 primary-color ">
                  {localStorageRole === "SYS_ADMIN"
                    ? " Manage Claims"
                    : "Claims"}
                </Box>
              </Grid>
              {(localStorageRole === "INDIVIDUAL" ||
                localStorageRole == "SYS_ADMIN") && (
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                      },
                      justifyContent: "flex-end",
                      gap: "30px",
                    }}
                  >
                    {IsShowArchive && (
                      <button
                        onClick={() => {
                          setIsShowArchive(false);
                          setIsArchived(false);
                        }}
                        className=" archive-claims primary-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
                      >
                        Back to Claims
                      </button>
                    )}
                    {!IsShowArchive && (
                      <button
                        onClick={() => {
                          setIsShowArchive(true);
                          setPage(1);
                          setIsArchived(true);
                          // fetchClaims(true)
                        }}
                        className=" archive-claims primary-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
                      >
                        Archived Claims
                      </button>
                    )}

                    {localStorageRole !== "SYS_ADMIN" && (
                      <button
                        className="bg-gradient-green add-claims white-color  fw-700 fs-16 cursor-pointer font-source-sans-pro"
                        onClick={() => setIsModalOpen(true) }
                      >
                        Add Claim
                      </button>
                    )}
                  </Grid>
                )}
            </Grid>

            <ClaimSearchFilters
              setSearchClient={setSearchClaim}
              searchClient={searchClaim}
              setUserName={setUserName}
              setClaimStatus={setClaimStatus}
              claimStatus={claimStatus}
              userName={userName}
              setPage={setPage}
            />

            <CommonModal
              title="Select Client"
              buttonText="Add "
              className="bg-secondary "
              modalopenHandler={isModalOpen}
              setModalOpenHandler={setIsModalOpen}
              addSubmitHandler={handleSubmit}
              modalSxStyle={addClaimModalSxStyling}
              isLoading={isLoading}
            >
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      border: "1px solid #198754",
                    },
                  },
                }}
              >
                <Grid
                  sx={{ marginBottom: "50px" }}
                  className="flex direction-column position-relative"
                >
                  <label
                    htmlFor="selectedClient"
                    className="fs-18 fw-700 lh-24 dark-color"
                  >
                    Client
                  </label>
                  <Select
                    sx={{ height: "48px" }}
                    displayEmpty
                    id="selectedClient"
                    name="selectedClient"
                    value={values.selectedClient}
                    onChange={(event) => formSelectHandler(event)}
                    onBlur={handleBlur}
                    placeholder="Select"
                    error={!!(errors.selectedClient && touched.selectedClient)}
                    className="fw-400 fs-16 font-source-sans-pro label-color"
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <span>Select</span>;
                      }
                      return selected;
                    }}
                    MenuProps={MenuProps}
                  >
                    {clients?.map((option: any) => (
                      <MenuItem
                        key={option.id}
                        value={option.companyName}
                        className="fw-400 fs-16 font-source-sans-pro "
                      >
                        {option.companyName}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.selectedClient && touched.selectedClient && (
                    <Grid
                      className="flex errors-labels fw-600 align-center error-color position-absolute"
                      sx={{ mt: 9.5 }}
                    >
                      <ErrorIcon
                        sx={{ marginRight: "5px" }}
                        fontSize="medium"
                        style={{ color: "#DC3545" }}
                      />
                      <span>{errors.selectedClient}</span>
                    </Grid>
                  )}
                </Grid>
              </FormControl>
            </CommonModal>
            {isLoading ? (
              <TableSkeleton />
            ) : (
              <CommonTable
                cols={tableConstants()}
                data={claimData}
                isPagination={true}
                recordsPerPage={8}
                heightOfTable={1000}
                setPage={setPage}
                page={page}
                totalRecords={totalRecords}
              />
            )}

            <ClaimsModal
              title={
                ModalType === "duplicateClaim"
                  ? "Are you sure you want to duplicate?"
                  : ModalType === "archiveClaim"
                    ? "Are you sure you want to archive?"
                    : ModalType === "restoreClaim"
                      ? "Are you sure you want to restore?"
                      : ""
              }
              submitButtonText={
                ModalType === "duplicateClaim"
                  ? "Duplicate"
                  : ModalType === "archiveClaim"
                    ? "Archive"
                    : ModalType === "restoreClaim"
                      ? "Restore"
                      : ""
              }
              SubmitClass="bg-gradient-green"
              CancelClass="bg-white"
              SubmitHandler={
                ModalType === "duplicateClaim"
                  ? ClaimDuplicated
                  : ModalType === "restoreClaim"
                    ? ClaimRestored
                    : claimsArchived
              }
              setModalType={setModalType}
              cancelButtonText="Cancel"
              open={
                ModalType === "duplicateClaim" ||
                ModalType === "archiveClaim" ||
                ModalType === "restoreClaim"
              }
            />
          </div>
        )}

        {!isShow && <ReviewClaims />}
      </Grid>

      {/* {isShowQuestion && <QuestionLayout clientId={clientId}/>} */}
    </div>
  );
};

export default ClaimsMain;
