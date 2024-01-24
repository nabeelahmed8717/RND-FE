import * as yup from "yup";

import {
  DeleteClients,
  IClientState,
  fetchClients,
  searchClientTyping,
  updateClients,
} from "../../redux/clients/clientsSlice";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  createFilterOptions,
} from "@mui/material";
import { STATUS, UnAuthorized } from "../../common/constants/store";
import {
  apiDeleteRequest,
  apiGetRequest,
  apiPatchRequest,
  apiPostRequest,
} from "../../helpers/request";
import { createClients } from "../../redux/clients/clientsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";

import AutoComplete from "../../common/components/autoComplete/AutoComplete";
import ClaimsModal from "../../common/components/claimsModal/claimsModal";
import ClientSearchFilter from "./ClientSearchFilters/ClientSearchFilters";
import CommonModal from "../../common/components/commonModal/commonModal";
import CommonTable from "../../common/components/commonTable/commonTable";
import DeleteIcon from "../../assets/icons/common/DeleteIcon";
import { Error } from "@mui/icons-material";
import { IClaim } from "../../common/interfaces/claimInterface";
import { IClient } from "../../common/interfaces/clientInterface";
import { IFilterOptions } from "../../common/interfaces/signUp";
import Image from "next/image";
import { TableSkeleton } from "../../common/components/tableSkeleton/TableSkeleton";
import { addClientModalSxStyling } from "../../common/components/commonModal/commonModalSxStyle";
import { claimsTabledata } from "../../common/mockData/claims";
import { clientsTableConstants } from "../../common/constants/clients";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { endpoints } from "../../config/endpoints";
import { getCompaniesData } from "../../redux/companiesHouse/companies-house.api";
import { getDummyRoles } from "../../helpers/Tokens";
import { manageClientTableData } from "../../common/mockData/manageClients";
import { manageClientsTableConstants } from "../../common/constants/manageClients";
import searchIcon from "../../assets/icons/guideLines/SearchIcon.png";
import { selectedClaimsTableConstants } from "../../common/constants/selectedClientClaims";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// import axios from "axios";

const initialValues = {
  companyName: "",
  companyNumber: "",
  id: "",
  userName: "",
  claimsInProgress: Number,
  claimsInReview: Number,
  claimsReadyToDownload: Number,
  purchasedClaims: Number,
  ineligibleClaims: Number,
};

const validationSchema = yup.object({
  companyName: yup.string().required("Company Name is required"),
  companyNumber: yup.string().required("Company Number is required"),
});

const ClientsMain: FC = () => {
  //clients data
  const { clients, message, status, totalRecords } = useAppSelector(
    (state) => state.clients
  );

  // all companies data
  const { items, companyStatus } = useAppSelector(
    (state) => state.companiesList
  );
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IClientState[]>(clients);
  const [addClientMessage, setAddClientMessage] = useState<string>(message);
  const [searchClient, setSearchClient] = useState("");
  const [userName, setUserName] = useState<string>("1");
  const [selectedRecord, setSelectedRecord] = useState<any>({});
  const [IsAddModal, setIsAddModal] = useState(false);
  const [IsEditModal, setIsEditModal] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [modalType, setModalType] = useState("");
  const [ModalOpenHandler, setModalOpenHandler] = useState("");
  const [SelectedClaim, setSelectedClaim] = useState<any>();
  const [claimData, setClaimData] = useState<any>(claimsTabledata);
  const [clientId, setClientId] = useState<any>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [totalRecords2, setTotalRecords2] = useState<number>(1);
  // const [userRole, setUserRole] = useState<string | null>("INDIVIDUAL");
  const [clientClaim, setClientClaim] = useState<any>([]);
  const [searchedValue, setSearchedValue] = useState<string>(""); // for company data

  const [companiesList, setCompaniesList] = useState(items);
  // const reduxUserRole = useAppSelector(
  //   (state: any) => state.signin.authPersist?.roleInfo?.roles[0]
  // );
  const [localStorageRole, setLocalStorageRole] = useState<string | null>();
  var loggedUserRole: any;
  useEffect(() => {
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);
  // const [clientsData, setClientsData] = useState([]);
  const router = useRouter();
  // __Getting selected client value
  const { name, company } = router.query;
  console.log(name, "dfsds");
  // __Check if selected user exists
  const isNameExists = name?.length;
  console.log(isNameExists);
  const deleteHandler = (id: any) => {
    setClientId(id);
    setModalType("deleteClient");
  };
  const setEditValues = (clientData: any) => {
    values.companyName = clientData.companyName;
    values.companyNumber = clientData.companyNumber;
    setIsEditModal(true);
    setSelectedRecord(clientData);
  };
  const getSpecificClientClaim = async () => {
    try {
      const response =
        await apiGetRequest(`${endpoints.claims}?client=${name}&page=${page}&limit=8
      `);

      if (response.data.error) {
        setIsloading(false);
        // setErrorMessage("error occured");
      } else {
        console.log("response", response.data);
        setClientClaim(response.data.data.data);
      }
    } catch (error) {
      // setErrorMessage("error occured");
    }
  };
  useEffect(() => {
    getSpecificClientClaim();
  }, [name]);
  const { errors, values, handleBlur, handleReset, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: any) => {
        setIsloading(true);
        dispatch(
          createClients({
            companyName: values.companyName,
            companyNumber: values.companyNumber,
            dispatch
          })
        );
        setIsloading(false);
        setIsAddModal(false);
        setSearchClient("");
      },
    });

  const editValuesHandlers = () => {
    setIsloading(true);
    dispatch(
      updateClients({
        companyName: values.companyName,
        companyNumber: values.companyNumber,
        clientID: selectedRecord.id,
        page: page,
        dispatch
      })
    );
    setIsloading(false);
    setIsEditModal(false);
  };

  const deleteApiHandler = async () => {
    dispatch(DeleteClients({ clientId, dispatch }));
    setModalType("");
  };
  useEffect(() => {
    dispatch(fetchClients(page));

  }, [page, totalRecords]);

  // async function filter(){
  //   if(userName!=='1'){
  //     try {
  //       setIsloading(true)

  //  let  response = await apiGetRequest(`${endpoints.clients}/search?userId=${userName}`);

  //       if(response.data.error){
  //         alert("error")
  //         setIsloading(false)
  //         setErrorMessage("error occured")
  //       }else{
  //         setData(response.data.data)
  //         setIsloading(false)
  //       }
  //     } catch (error) {
  //       alert("error")
  //       setIsloading(false)
  //       setErrorMessage("error occured")
  //     }
  //   }else{

  //     fetchClients()
  //   }
  // }


  const [claimId, setClaimId] = useState(Number);
  const DuplicateClaimHandler = (claim: any) => {
    setModalOpenHandler("duplicateClaim");
    setSelectedClaim(claim);
  };
  const ArchiveClaimHandler = (id: number) => {
    setModalOpenHandler("archiveClaim");
    setClaimId(id);
  };
  const CancelModalHandler = () => {
    setModalOpenHandler("");
  };
  const ClaimDuplicated = () => {
    setClaimData((claims: IClaim[]) => [...claims, SelectedClaim]);
    setModalOpenHandler("");
  };
  const claimsArchived = () => {
    const updatedData = claimData.map((claims: IClaim) => {
      claims.id === claimId && (claims.IsArchive = true);
      return claims;
    });

    setModalOpenHandler("");
    setClaimData(updatedData);
  };

  useEffect(() => {
    setData(clients);
  }, [clients]);

  const onStopTyping = async (e: any) => {
    if (searchClient.trim() !== "") {
      const response = await apiGetRequest(
        `${endpoints.clientSearch}?limit=8&q=${searchClient}`
      )
        .then((res) => {
          setData(res.data.data);
          setTotalRecords2(1);
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(fetchClients(page));
    }
  };

  // const deleteApiHandler=()=>{
  //   dispatch(DeleteClients)
  // }
  // const onStopTyping = async () => {

  //   // dispatch(searchClientTyping({ searchClient, page }))
  //   //   // if (searchClient.trim() !== "") {
  //   //   //   try {
  //   //   //     setIsloading(true);

  //   //   //     let response = await apiGetRequest(
  //   //   //       `${endpoints.clients}/search?q=${searchClient}`
  //   //   //     );
  //   //   //     console.log("responsewaqas", response);
  //   //   //     if (response.data.error) {
  //   //   //       // alert("error");
  //   //   //       setIsloading(false);
  //   //   //       setErrorMessage("error occured");
  //   //   //     } else {
  //   //   //       setData(response.data.data);
  //   //   //       setTotalRecords2(response.data.total);
  //   //   //       setIsloading(false);
  //   //   //     }
  //   //   //   } catch (error) {
  //   //   //     // alert("error");
  //   //   //     setIsloading(false);
  //   //   //     setErrorMessage("error occured");
  //   //   //   }
  //   //   // } else {
  //   //   //   dispatch(fetchClients(page));
  //   //   // }
  // };

  useEffect(() => {
    const timeoutId = setTimeout(function () {
      onStopTyping();
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [searchClient]);

  // useEffect(() => {
  //   const loggedUserRole = getDummyRoles();
  //   if (loggedUserRole) setUserRole(loggedUserRole);
  // }, []);

  // useEffect(() => {
  //   filter()
  // }, [userName]);

  // const RemoveDuplicates = () => {
  //   // clientClaim.filter((item: any, index: number) => clientClaim.indexOf(item) === index);
  //   console.log(clientClaim.filter((item: any, index: number) => clientClaim.indexOf(item) === index), 'iufdrsyfugihgiuvwrh');

  // }

  const showClientData = () => {
    switch (localStorageRole) {
      case "INDIVIDUAL":
        return isNameExists ? clientClaim : data;
      case "SYS_ADMIN":
        return manageClientTableData;
      default:
        return "";
    }
  };
  const showClientsConstants = () => {
    switch (localStorageRole) {
      case "INDIVIDUAL":
        return isNameExists
          ? selectedClaimsTableConstants(deleteHandler, setEditValues)
          : clientsTableConstants(deleteHandler, setEditValues);
      case "SYS_ADMIN":
        return manageClientsTableConstants(deleteHandler, setEditValues);
      default:
        return "";
    }
  };

  //--------> companies house api implementation
  // to show limit of suggestions for matching results for company name and number search
  const OPTIONS_LIMIT = 20;
  const filterOptions: IFilterOptions = createFilterOptions({
    limit: OPTIONS_LIMIT,
  });

  // set company data autoPopup
  const handleCompanyData = (
    e: SyntheticEvent<Element, Event>,
    selectedValue: string
  ) => {
    const value = selectedValue ? selectedValue : ""; // to check either search input has value or not
    setSearchedValue(value);
    //find searched company data
    const companyObject = companiesList.find(
      (item) => value === item.companyName || value === item.companyNumber
    );
    if (companyObject) {
      // set company data
      values.companyName = companyObject.companyName;
      values.companyNumber = companyObject.companyNumber;
    } else {
      //Reset company data
      values.companyName = "";
      values.companyNumber = "";
    }
  };

  //companies api call function
  const searchedComapny = async (value: string) => {
    setSearchedValue(value);
    if (value.length > 2) {
      // company house api call after 3 characters
      try {
        await dispatch(getCompaniesData(value));
      } catch (error) {
        return error;
      }
    }
  };

  // to update companies list
  useEffect(() => {
    setCompaniesList(items);
    setAddClientMessage(message);
    if (message === "Client Created Successfully!") {
      values.companyName = "";
      values.companyNumber = "";
      dispatch(displayToastr({ message: "client added successfully" }));
      setIsAddModal(false);
    }
  }, [items, values, addClientMessage]);

  const handleAddModel = () => {
    values.companyName = "";
    values.companyNumber = "";
    setIsAddModal(true);
  };

  return (
    <div className="clients">
      <Grid
        sx={{
          padding: "20px 30px 10px 30px",
          mt: 0,
        }}
        className="clients-main bg-white-shadow"
      >
        <div className="flex justify-between align-center">
          {!isNameExists ? (
            <span className="fw-700 fs-36 primary-color ">
              {localStorageRole === "SYS_ADMIN" ? "Manage Clients" : "Clients"}
            </span>
          ) : (
            <span className="fw-700 fs-36 primary-color ">
              {/* { RemoveDuplicates()} */}
              {/* {clientClaimsds} */}
              {company}
            </span>
          )}
          {localStorageRole !== "SYS_ADMIN" &&
            (!isNameExists ? (
              <button
                onClick={handleAddModel}
                className="bg-gradient-green add-client white-color  fw-700 fs-16 cursor-pointer font-source-sans-pro"
              >
                Add Client
              </button>
            ) : (
              <button className="bg-gradient-green add-client white-color  fw-700 fs-16 cursor-pointer font-source-sans-pro">
                Add Claim
              </button>
            ))}
        </div>

        <ClientSearchFilter
          clientArrays={data}
          setSearchClient={setSearchClient}
          searchClient={searchClient}
          setUserName={setUserName}
          userName={userName}
          setPage={setPage}
          isNameExists={isNameExists}
          catchedName={name}
          role={localStorageRole}
        />

        {status === "PENDING" ? (
          <TableSkeleton />
        ) : (
          // <CommonTable
          //   cols={clientsTableConstants(deleteHandler, setEditValues)}
          //   data={makeTableData(data)}
          //   isPagination={true}
          //   recordsPerPage={8}
          //   heightOfTable={1000}
          //   setPage={setPage}
          //   page={page}
          // />
          <CommonTable
            cols={showClientsConstants()}
            data={showClientData()}
            isPagination={true}
            recordsPerPage={8}
            heightOfTable={1000}
            setPage={setPage}
            page={page}
            totalRecords={
              name ? 1 : searchClient ? totalRecords2 : totalRecords
            }
          />
        )}
        <ClaimsModal
          title={
            ModalOpenHandler === "duplicateClaim"
              ? "Are you sure you want to duplicate?"
              : ModalOpenHandler === "archiveClaim"
                ? "Are you sure you want to archive?"
                : ""
          }
          submitButtonText={
            ModalOpenHandler === "duplicateClaim"
              ? "Duplicate"
              : ModalOpenHandler === "archiveClaim"
                ? "Archive"
                : ""
          }
          SubmitClass="bg-gradient-green"
          CancelClass="bg-white"
          SubmitHandler={
            ModalOpenHandler === "duplicateClaim"
              ? ClaimDuplicated
              : claimsArchived
          }
          setModalType={setModalOpenHandler}
          cancelButtonText="Cancel"
          open={
            ModalOpenHandler === "duplicateClaim" ||
            ModalOpenHandler === "archiveClaim"
          }
        />

        <CommonModal
          title="Update Client"
          buttonText="Update"
          className="bg-secondary "
          addSubmitHandler={editValuesHandlers}
          modalopenHandler={IsEditModal}
          setModalOpenHandler={setIsEditModal}
          modalSxStyle={addClientModalSxStyling}
          isLoading={isLoading}
        >
          <form>
            <Grid sx={{ marginBottom: "50px" }}>
              <AutoComplete
                error={errors.companyName}
                touched={touched.companyName}
                id="companyName"
                label="Company Name"
                handleCompanyData={handleCompanyData}
                handleBlur={handleBlur}
                value={values.companyName}
                placeholder="Search company name"
                filterOptions={filterOptions}
                options={companiesList}
                searchedComapny={searchedComapny}
                isLoading={companyStatus === STATUS.PENDING}
              />
            </Grid>
            <Grid sx={{ marginBottom: "50px" }}>
              <AutoComplete
                error={errors.companyNumber}
                touched={touched.companyNumber}
                id="companyNumber"
                label="Company Number"
                handleCompanyData={handleCompanyData}
                handleBlur={handleBlur}
                value={values.companyNumber}
                placeholder="Search company number"
                filterOptions={filterOptions}
                options={companiesList}
                searchedComapny={searchedComapny}
                isLoading={companyStatus === STATUS.PENDING}
              />
            </Grid>
          </form>
        </CommonModal>

        <CommonModal
          title="Add Client"
          buttonText="Add"
          className="bg-gradient-green"
          addSubmitHandler={handleSubmit}
          modalopenHandler={IsAddModal}
          setModalOpenHandler={setIsAddModal}
          resetForm={handleReset}
          modalSxStyle={addClientModalSxStyling}
          isLoading={isLoading}
        >
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} mb="3rem">
                <AutoComplete
                  error={errors.companyName}
                  touched={touched.companyName}
                  id="companyName"
                  label="Company Name"
                  handleCompanyData={handleCompanyData}
                  handleBlur={handleBlur}
                  value={values.companyName}
                  placeholder="Search company name"
                  filterOptions={filterOptions}
                  options={companiesList}
                  searchedComapny={searchedComapny}
                  isLoading={companyStatus === STATUS.PENDING}
                />
              </Grid>
              <Grid item xs={12} mb="3rem">
                <AutoComplete
                  error={errors.companyNumber}
                  touched={touched.companyNumber}
                  id="companyNumber"
                  label="Company Number"
                  handleCompanyData={handleCompanyData}
                  handleBlur={handleBlur}
                  value={values.companyNumber}
                  placeholder="Search company number"
                  filterOptions={filterOptions}
                  options={companiesList}
                  searchedComapny={searchedComapny}
                  isLoading={companyStatus === STATUS.PENDING}
                />
              </Grid>
            </Grid>
          </form>
        </CommonModal>

        {/* <CommonModal
          title="Add Client"
          buttonText="Add"
          className="bg-gradient-green"
          addSubmitHandler={handleSubmit}
          modalopenHandler={IsAddModal}
          setModalOpenHandler={setIsAddModal}
          resetForm={handleReset}
        >
          <form onSubmit={handleSubmit}>
            <Grid sx={{ marginBottom: "50px" }}>
              <AutoComplete
                error={errors.companyName}
                touched={touched.companyName}
                id="companyName"
                label="Company Name"
                handleCompanyData={handleCompanyData}
                handleBlur={handleBlur}
                value={values.companyName}
                placeholder="Company Name"
                filterOptions={filterOptions}
                options={companiesList}
                searchedComapny={searchedComapny}
                isLoading={companyStatus === STATUS.PENDING}
              />
            </Grid>
            <Grid sx={{ marginBottom: "50px" }}>
              <AutoComplete
                error={errors.companyNumber}
                touched={touched.companyNumber}
                id="companyNumber"
                label="Company Number"
                handleCompanyData={handleCompanyData}
                handleBlur={handleBlur}
                value={values.companyNumber}
                placeholder="Company Number"
                filterOptions={filterOptions}
                options={companiesList}
                searchedComapny={searchedComapny}
                isLoading={companyStatus === STATUS.PENDING}
              />
            </Grid>
            {message && status === STATUS.FAILED && (
              <Typography
                mt={3}
                mb={2}
                className="fs-18 fw-400 error-color flex align-center cursor-pointer position-absolute"
                variant="body2"
              >
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {message === UnAuthorized.error ? UnAuthorized.text : message}
              </Typography>
            )}
          </form>
        </CommonModal> */}

        <ClaimsModal
          title="Are you sure you want to Delete Client?"
          submitButtonText="Delete"
          SubmitClass="bg-red"
          CancelClass="bg-white"
          SubmitHandler={deleteApiHandler}
          setModalType={setModalType}
          cancelButtonText="Cancel"
          open={modalType === "deleteClient"}
        />
      </Grid>
    </div>
  );
};
export default ClientsMain;
