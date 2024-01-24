import * as Yup from "yup";

import {
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { FC,useEffect, useState } from "react";
import {
  changeCostStatus,
  createCollaborator,
  deleteCollaborator,
  getCollaborators,
} from "../../redux/collaborator/collaborators-api";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";

import CommonModal from "../../common/components/commonModal/commonModal";
import CommonTableTwo from "../../common/components/commonTable/commonTableTwo";
import ErrorIcon from "@mui/icons-material/Error";
import { ICollaboratorTable } from "../../common/interfaces/collaboratorsInterface";
import Image from "next/image";
import { STATUS } from "../../common/constants/store";
import SearchIcon from "../../assets/images/collaborators/searchicon.svg";
import { addCollaboratorModalSxStyling } from "../../common/components/commonModal/commonModalSxStyle";
import { collaboratorsTableConstants } from "../../common/constants/collaborators";
import { fetchClaims } from "../../redux/claims/claimsSlice";
import { setMessage } from "../../redux/collaborator/collaboratorSlice";
import { useFormik } from "formik";
import ClaimsModal from "../../common/components/claimsModal/claimsModal";
import { displayToastr } from "../../redux/toaster/toasterSlice";

// Collaborator Icons
const claimsList = ["99 News Limited", "Ansai Limited"];
// collaborator initail values state
const initialValues: IInitialValues = {
  claims: [],
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const validation = Yup.object({
  claims: Yup.array().nullable().required("Required Field"),
  firstName: Yup.string().required("Required Field"),
  lastName: Yup.string().required("Required Field"),
  email: Yup.string().email("Email is in valid").required("Required Field"),
  role: Yup.string().required("Required Field"),
});

const CollaboratorsMain: FC = () => {
  const [ModalType, setModalType] = useState("");
  const dispatch = useAppDispatch();
  const { collaborators,status:collaboratorsApiStatus,message } = useAppSelector((state) => state.collaborator);
  const {claimsData} = useAppSelector(
    (state) => state.claims
  );
  const [collaboratorTable, setcollaboratorTable] = useState<
    ICollaboratorTable[]
  >();
  const [collaboratorArray, setcollaboratorArray] = useState<
    ICollaboratorTable[]
  >([]);
  const [filterString, setfilterString] = useState<string>("");
  const filteredData = filterString ? collaboratorArray : collaboratorTable;
  const [claims, setClaims] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimsIds, setClaimsIds] = useState([]);
  const [page, setPage] = useState<number>(0);
  const [idForDelete, setIdForDelete] = useState<string>("");


  console.log("collaboratorsApiStatus-------", collaboratorsApiStatus);

  // __SEARCH HANDLER
  const searchcollaboratorHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchcollaborator = event.target.value.toLowerCase().trim();
    setfilterString(searchcollaborator);
    const filteredItem = collaboratorTable.filter(
      (collaborator) =>
        collaborator.firstName.toLowerCase().includes(searchcollaborator) ||
        collaborator.lastName.toLowerCase().includes(searchcollaborator)
    );
    setcollaboratorArray(filteredItem);
    setPage(0);
  };

  // __TOGGLE COST QUESTIONS
  const toggleCostQuestions = (id: number,status:boolean): void => {
    let payload={
      "collaboratorId": id,
      "status": status
    }
    dispatch(changeCostStatus(payload));
  };

  // __DELETE HANDLER
  const deleteHandler = (id: string): void => {
    setModalType("deleteUser");
    setIdForDelete(id)
  };
  const ResetAccount = () => {
    setModalType("");
  };
  const DeleteUser = () => {
    setModalType("");
        dispatch(deleteCollaborator(idForDelete));
  };
  // ___FORMIK
  const {
    values,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      let payload={...values,claims:claimsIds}
      dispatch(createCollaborator(payload));
    },
  });

  // __SELECT CLAIMS
  const changeClaims = (event: SelectChangeEvent<typeof claims>): void => {
    const {
      target: { value },
    } = event;
    setClaims(typeof value === "string" ? value.split(",") : value);
  };

  // __FORM SELECT HANDLER
  const formSelectHandler = (
    event: SelectChangeEvent<string[]>,
    obj: any
  ): void => {
    console.log("event", claimsData[obj.key.slice(2)]);
    handleChange(event);
    changeClaims(event);
    setClaimsIds([...claimsIds, claimsData[obj.key.slice(2)]["client"].id]);
  };

  // __Open Modal Handler
  const modalOpenHandler = () => {
    setIsModalOpen(true);
     resetForm()
     setClaims([])
     dispatch(setMessage(""))
  };


  useEffect(() => {
    if (collaborators.length === 0 && !message) {
      dispatch(getCollaborators());
    } else {
      setcollaboratorTable(collaborators);
    }
    if (claimsData.length === 0) {
      dispatch(fetchClaims({ page: 1, isArchived: false }));
    }
  }, [collaborators]);



  useEffect(() => {
    if(message==='user_create_success'){
     setIsModalOpen(false);
    }
 }, [message]);

  return (
    <div className="collaborator-main-wrapper border-radius-8 bg-white-shadow ">
      <div>
        <div>
          <div>
            <div className="head-wrapper flex justify-between align-center">
              <span className="fw-700 fs-36 primary-color font-source-sans-pro lh-32">
                Collaborators
              </span>

              <button
                onClick={modalOpenHandler}
                className="bg-gradient-green add-collaborator font-source-sans-pro lh-24 white-color fw-700 fs-16 cursor-pointer border-radiues-3"
              >
                Add Collaborator
              </button>
            </div>

            <CommonModal
              title="Add Collaborator"
              buttonText="Add"
              className="bg-secondary"
              modalopenHandler={isModalOpen}
              setModalOpenHandler={setIsModalOpen}
              addSubmitHandler={handleSubmit}
              isLoading={collaboratorsApiStatus === STATUS.PENDING}
              modalSxStyle={addCollaboratorModalSxStyling}
              resetForm={resetForm}
              // isLoading={isLoading}
            >
              <form className="collaborator-modal-form-input font-source-sans-pro">
                <Grid container className="position-relative">
                  <Grid xs={12} className="position-relative">
                    <label className="dark-color lh-32 fs-18 fw-700">
                      Claims
                    </label>
                    <FormControl
                      className="position-relative global-modal-collaborator-select"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "48px",
                          "&:hover fieldset": {
                            borderColor: "#198754",
                          },
                        },
                        width: { xs: "100%", md: "540px" },
                      }}
                    >
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="claims"
                        multiple
                        displayEmpty
                        value={values.claims}
                        name="claims"
                        onChange={(event, obj) => formSelectHandler(event, obj)}
                        onBlur={handleBlur}
                        placeholder="Select"
                        error={!!(errors.claims && touched.claims)}
                        className={
                          errors.claims && touched.claims ? "input-error" : ""
                        }
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <span className="label-color">Select</span>;
                          }

                          return selected.join(",");
                        }}
                      >
                        {claimsData.length > 0 &&
                          claimsData.map((ele, index) => (
                            <MenuItem
                              key={index}
                              value={ele.client?.companyName}
                            >
                              <Checkbox
                                checked={
                                  claims.indexOf(ele.client?.companyName) > -1
                                }
                                sx={{
                                  color: "#0F5156",
                                  "&.Mui-checked": {
                                    color: "#0F5156",
                                  },
                                }}
                              />
                              <ListItemText primary={ele.client?.companyName} />
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    {errors.claims && touched.claims && (
                      <div className="flex collaborator-input-error fw-600 align-center error-color position-absolute">
                        <ErrorIcon
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{errors.claims}</span>
                      </div>
                    )}
                  </Grid>

                  <Grid xs={12} mt="3rem" className="position-relative">
                    <label className="dark-color lh-32 fs-18 fw-700">
                      First Name
                    </label>
                    <TextField
                      id="firstName"
                      type="text"
                      variant="outlined"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter first name"
                      error={!!(errors.firstName && touched.firstName)}
                      className={
                        errors.firstName && touched.firstName
                          ? "input-error"
                          : ""
                      }
                      // sx={{ width: { xs: '100%', md: '540px' }, height: "48px" }}
                      sx={{
                        "&.MuiTextField-root, .MuiOutlinedInput-root": {
                          height: "48px",
                          width: { xs: "100%", md: "540px" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            border: "1px solid #198754",
                          },
                        },
                      }}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="flex fw-600 collaborator-input-error align-center error-color position-absolute">
                        <ErrorIcon
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{errors.firstName}</span>
                      </div>
                    )}
                  </Grid>

                  <Grid xs={12} mt="3rem" className="position-relative">
                    <label className="dark-color lh-32 fs-18 fw-700">
                      Last Name
                    </label>
                    <TextField
                      id="lastName"
                      type="text"
                      variant="outlined"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter last name"
                      error={!!(errors.lastName && touched.lastName)}
                      className={
                        errors.lastName && touched.lastName ? "input-error" : ""
                      }
                      sx={{
                        "&.MuiTextField-root, .MuiOutlinedInput-root": {
                          height: "48px",
                          width: { xs: "100%", md: "540px" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            border: "1px solid #198754",
                          },
                        },
                      }}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="flex collaborator-input-error fw-600 align-center error-color position-absolute">
                        <ErrorIcon
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />{" "}
                        <span>{errors.lastName}</span>
                      </div>
                    )}
                  </Grid>

                  <Grid xs={12} mt="3rem" className="position-relative">
                    <label className="dark-color lh-32 fs-18 fw-700">
                      Email
                    </label>
                    <TextField
                      id="email"
                      type="text"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter email"
                      error={!!(errors.email && touched.email)}
                      className={
                        errors.email && touched.email ? "input-error" : ""
                      }
                      sx={{
                        "&.MuiTextField-root, .MuiOutlinedInput-root": {
                          height: "48px",
                          width: { xs: "100%", md: "540px" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            border: "1px solid #198754",
                          },
                        },
                      }}
                    />
                    {errors.email && touched.email && (
                      <Grid className="flex collaborator-input-error fw-600 align-center error-color position-absolute">
                        <ErrorIcon
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{errors.email}</span>
                      </Grid>
                    )}
                  </Grid>

                  <Grid
                    xs={12}
                    mt="3rem"
                    mb="2rem"
                    className="position-relative"
                  >
                    <label className="dark-color lh-32 fs-18 fw-700">
                      Role
                    </label>
                    <TextField
                      id="role"
                      type="text"
                      variant="outlined"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter role"
                      error={!!(errors.role && touched.role)}
                      className={
                        errors.role && touched.role ? "input-error" : ""
                      }
                      sx={{
                        "&.MuiTextField-root, .MuiOutlinedInput-root": {
                          height: "48px",
                          width: { xs: "100%", md: "540px" },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            border: "1px solid #198754",
                          },
                        },
                      }}
                    />
                    {errors.role && touched.role && (
                      <div className="flex collaborator-input-error fw-600 align-center error-color position-absolute">
                        <ErrorIcon
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{errors.role}</span>
                      </div>
                    )}
                  </Grid>
                  {message.length >0 &&  (
                    <Grid
                      xs={12}
                      className="flex errors-labels fw-600 align-center error-color"
                    >
                      <ErrorIcon
                        sx={{ marginRight: "5px", marginTop: "5px" }}
                        fontSize="medium"
                        style={{ color: "#DC3545" }}
                      />
                      <span>{message}</span>
                    </Grid>
                  )}
                </Grid>
              </form>
            </CommonModal>
          </div>
          <TextField
            id="outlined-size-small"
            placeholder="Search by name"
            className="search-collaborator border-radiues-3 mb-15"
            sx={{
              width: { xs: "auto", md: "400px" },
              height: "48px",
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  border: "1px solid #198754",
                },
              },
            }}
            onChange={searchcollaboratorHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image src={SearchIcon} alt="search" priority />
                </InputAdornment>
              ),
            }}
          />
           {/* Delete Modal */}
        <ClaimsModal
          title={
            ModalType === "resetAccount"
              ? "Are you sure you want to reset account?"
              : ModalType === "deleteUser"
              ? "Are you sure you want to delete?"
              : ""
          }
          submitButtonText={
            ModalType === "resetAccount"
              ? "Proceed"
              : ModalType === "deleteUser"
              ? "Delete"
              : ""
          }
          SubmitClass={
            ModalType === "resetAccount"
              ? "bg-gradient-green"
              : ModalType === "deleteUser"
              ? "bg-red"
              : ""
          }
          CancelClass="bg-white"
          SubmitHandler={
            ModalType === "resetAccount" ? ResetAccount : DeleteUser
          }
          setModalType={setModalType}
          cancelButtonText="Cancel"
          open={
            ModalType === "resetAccount"
              ? true
              : ModalType === "deleteUser"
              ? true
              : false
          }
        />
          <CommonTableTwo
            cols={collaboratorsTableConstants(
              toggleCostQuestions,
              deleteHandler
            )}
            data={filteredData}
            isPagination={true}
            recordsPerPage={8}
            heightOfTable={1000}
            setPage={setPage}
            page={page}
            status={collaboratorsApiStatus}
          />
        </div>
      </div>
    </div>
  );
};
export default CollaboratorsMain;
