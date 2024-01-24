import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import CommonTable from "../../common/components/commonTable/commonTable";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RndExpertTableData } from "../../common/mockData/RndExpert/RndExpert";
import { IRndExpert } from "../../common/interfaces/RndExpert";
import { RndExpertTableConstants } from "../../common/constants/RndExpert";
import RndExpertSearchFilters from "./rndExpertSearchFilters/RndExpertSearchFilters";
import {
  addRndExpert,
  updateRndExpert,
  deleteRndExpert,
  toggleSwitch,
} from "../../redux/rndExpert/rndExpertSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";
import RndModal from "./rndModal/RndModal";
import ClaimsModal from "../../common/components/claimsModal/claimsModal";
import CommonTableTwo from "../../common/components/commonTable/commonTableTwo";
import { displayToastr } from "../../redux/toaster/toasterSlice";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Validations
const validation = Yup.object({
  firstName: Yup.string().required("Required Field"),
  lastName: Yup.string().required("Required Field"),
  email: Yup.string().email("Email is in valid").required("Required Field"),
  phone: Yup.string()
  // .min(11, "too short")
  // .max(12, "too long")
    // .matches(phoneRegExp, "Required Field")
    .required("Required Field"),
});

// Main function
const RndExpertsSystemAdmin = () => {
  // UseStates
  const [page, setPage] = React.useState<number>(0);
  const [UserID, setUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ModalType, setModalType] = useState("");
  const [searchRndExpertName, setSearchRndExpertName] = useState("");
  const [filterByRndExpertName, setFilterByRndExpertName] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [editMode, setEditMode] = useState(false);

  const { users: rndExpertTableData }: { users: any } = useAppSelector(
    (state) => state.rndExpert
  );

  const dispatch = useAppDispatch();

  // Edit and Update Function
  const rndExpertEditHandler = (id: number) => {
    const rndUpdateUser = rndExpertTableData.find(
      (rndData: any) => rndData.id === id
    );
    setUserId(id);
   
    if (id) {
      setEditMode(true);
      formik.values.firstName = rndUpdateUser.firstName;
      formik.values.lastName = rndUpdateUser.lastName;
      formik.values.email = rndUpdateUser.email;
      formik.values.phone = rndUpdateUser.phone;
    }
    setIsModalOpen(true);
    formik.resetForm()
  };
  const [rndExpertTable, setRndExpertTable] =
    useState<IRndExpert[]>(RndExpertTableData);
  const rndExpertUser = (id: number) => {
    const newUser = {
      id: id,
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      phone: formik.values.phone,
      rndExpert: formik.values.rndExpert,
    };
    return newUser;
  };
  // Delete Function
  const rndExpertDeleteHandler = (id: number): void => {
    setModalType("deleteUser");
    setUserId(id);
  };
  // Toggle Function
  const rndExpertToggleStatusHandler = (id: number): void => {
    dispatch(toggleSwitch({ id: id }));
  };
  // Reset Account Function
  const rndExpertResetPasswordHandler = (id: number): void => {
    setModalType("resetRndExpert");
  };

  const ResetAccount = () => {
    setModalType("");
  };
  const DeleteUser = () => {
    setModalType("");
    dispatch(deleteRndExpert({ id: UserID }));
    dispatch(displayToastr({message:'RND Expert deleted successfully'}))
  };
  // ___FORMIK
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      rndExpert: [],
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      const rndExpertData = {
        id: Math.random(),
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        phone: formik.values.phone,
        status: false,
        rndExpert: formik.values.rndExpert,
      };
      const data = values;
      // Add,Edit and Update Data
      if (UserID && editMode) {
        const editUserData = rndExpertUser(UserID);
        dispatch(updateRndExpert({ id: UserID, editedUser: editUserData }));
         dispatch(displayToastr({message:'RND Expert updated successfully'}))

        setEditMode(false);
      } else {
        const newUserCreated = rndExpertUser(Math.random());
        dispatch(addRndExpert(newUserCreated));
        dispatch(displayToastr({message:'RND Expert added successfully'}))
      }

      setRndExpertTable((rndExpertTable: any) => [
        ...rndExpertTable,
        rndExpertData,
      ]);
      setIsModalOpen(false);
      resetForm();
    },
  });
  function clearForm() {
    formik.values.firstName = "";
    formik.values.lastName = "";
    formik.values.email = "";
    formik.values.phone = "";
  }
  // __Open Modal Handler
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };
  // Search Filter Function
  const makeTableData = (data: any) => {
    if (searchRndExpertName && searchRndExpertName.length > 0) {
      return data.filter((userSearch: any) =>
        userSearch.firstName
          .toLowerCase()
          .includes(searchRndExpertName.toLowerCase())
      );
    } else if (filterByRndExpertName) {
      return data.filter((rndsearch: any) =>
        rndsearch.firstName
          .toLowerCase()
          .includes(filterByRndExpertName.toLocaleLowerCase())
      );
    } else {
      return data;
    }
  };

  return (
    <>
      {/* Wrapper div */}
      <div className="wrapper-rnd-expert-admin border-radius-8 bg-white-shadow bg-white">
        <Grid container spacing={2} className="wrap-rnd-expert-content">
          <Grid
            xs={12}
            className="flex justify-between rnd-expert-add-btn align-center"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <h2 className="fw-700 fs-36 lh-32 primary-color font-source-sans-pro  rnd-expert-title ">
              RND Experts
            </h2>
            <Button
              variant="contained"
              sx={{
                width: {
                  xs: "90%",
                  sm: "182px",
                },
                marginRight: {
                  xs: "0px",
                  sm: "11px",
                },
              }}
              className="add-rnd-expert-btn fw-700 fs-16 lh-24 border-radiues-3 font-source-sans-pro   flex align-center"
              onClick={() => {
                setIsModalOpen(true), clearForm(), setEditMode(false),formik.resetForm()
              }}
            >
              Add RND Expert
            </Button>

             {/* Reset Modal */}
        <ClaimsModal
          title={
            ModalType === "resetRndExpert"
              ? "Are you sure you want to reset account?"
              : ModalType === "deleteUser"
              ? "Are you sure you want to delete?"
              : ""
          }
          submitButtonText={
            ModalType === "resetRndExpert"
              ? "Proceed"
              : ModalType === "deleteUser"
              ? "Delete"
              : ""
          }
          SubmitClass={
            ModalType === "resetRndExpert"
              ? "bg-gradient-green"
              : ModalType === "deleteUser"
              ? "bg-red"
              : ""
          }
          CancelClass="bg-white"
          SubmitHandler={
            ModalType === "resetRndExpert" ? ResetAccount : DeleteUser
          }
          setModalType={setModalType}
          cancelButtonText="Cancel"
          open={
            ModalType === "resetRndExpert"
              ? true
              : ModalType === "deleteUser"
              ? true
              : false
          }
        />
          </Grid>

          {/* RND Expert Search Filter */}
          <RndExpertSearchFilters
            rndExpertArray={rndExpertTable}
            setSearchRndExpertName={setSearchRndExpertName}
            searchRndExpertName={searchRndExpertName}
            setUserName={setUserName}
            filterByRndExpertName={filterByRndExpertName}
            setFilterByRndExpertName={setFilterByRndExpertName}
            userName={userName}
            setPage={setPage}
            className="wrap-rnd-expert-filter flex align-center"
          />
        </Grid>

       
        {/* Common Modal */}

        <RndModal
          setIsModalOpen={setIsModalOpen}
          IsModalOpen={isModalOpen}
          formik={formik}
          editRndUser={editMode}
        />

        {/* common table */}
        <div className="rnd-expert-admin-table ">
          <CommonTableTwo
            cols={RndExpertTableConstants(
              rndExpertDeleteHandler,
              rndExpertEditHandler,
              rndExpertToggleStatusHandler,
              rndExpertResetPasswordHandler
            )}
            data={makeTableData(rndExpertTableData)}
            isPagination={true}
            recordsPerPage={8}
            heightOfTable={600}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default RndExpertsSystemAdmin;
