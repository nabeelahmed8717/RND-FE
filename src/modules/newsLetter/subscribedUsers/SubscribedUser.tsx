import * as Yup from "yup";

import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { CheckBox } from "@mui/icons-material";
import CommonModal from "../../../common/components/commonModal/commonModal";
import CommonTable from "../../../common/components/commonTable/commonTable";
import ErrorIcon from "@mui/icons-material/Error";
import { ISubscribedUserTable } from "../../../common/interfaces/subscribedUserInterface";
import NewsletterSearchFilter from "../searchFilter/NewsletterSearchFilter";
import SubscribeUserSearchFilter from "./subscribeUserSearchFilter/SubscribeUserSearchFilter";
import { Typography } from "@mui/material";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { newsLetterCommonModalSxStyling } from "../../../common/components/commonModal/commonModalSxStyle";
import { subscribedUsersTableConstants } from "../../../common/constants/subscribedUsers";
import { subscribedUsersTabledata } from "../../../common/mockData/subscribedUsers";
import { useAppDispatch } from "../../../hooks/use-store.hooks";
import { useFormik } from "formik";
import { useAppSelector } from "../../../hooks/use-store.hooks";

import { createSubscribedUser, fetchSubscribedUser } from "../../../redux/newsLetter/subscribedUserSlice";
import { apiGetRequest } from "../../../helpers/request";
import { endpoints } from "../../../config/endpoints";
// import CheckBox from '../../../common/components/checkBox/CheckBox';

const validation = Yup.object({
  name: Yup.string().required("Required Field"),
  email: Yup.string().email("Email is in valid").required("Required Field"),
});

const SubscribedUser = ({
  setScreenToShow,
  setSubscribedUserMainData,
  selectedAddNewsLetter,
  selectedNewsLetterArray,
  setSelectedUserArray,
}: any) => {
  const dispatch = useAppDispatch();
  const [subscribedUsersTable, setsubscribedUsersTable] = useState([]);
  const [subscribedUsersArray, setsubscribedUsersArray] = useState([]);
  const [filterString, setfilterString] = useState<string>("");
  // const filteredData = filterString ? subscribedUsersArray : subscribedUsersTable;
  const [page, setPage] = React.useState<number>(1);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const [searchSubscribedUser, setSearchSubscribedUser] = useState("");
  const [userName, setUserName] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [isCheckedNewsLetter, setIsCheckedNewsLetter] = useState(false);


  const { totalRecords, subscribedUserData, status } = useAppSelector(
    (state) => state.subscribedUser
  );

  // console.log(totalRecords, "totalRecords..")


  const subscribedUserGet = async () => {
    const response = await apiGetRequest( `${endpoints.getSubscribedUser}?page=${page}&limit=8`);
    console.log(response.data.data, 'response.sda.data');
    setsubscribedUsersTable(response.data.data);
}


  const toggleCostQuestions = (id: number): void => {
    const result = subscribedUsersTable.map((item: any) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setsubscribedUsersTable(result);
  };
  const toggleStatus = (id: number): void => {
    const result = subscribedUsersTable.map((item: any) => {
      if (item.id === id) {
        item.sendTo = !item.sendTo;
      }
      return item;
    });
    setsubscribedUsersTable(result);
  };

  const statusCheckAll = () => {
    setIsCheckedNewsLetter(!isCheckedNewsLetter);
    const newState = subscribedUsersTable.map((obj) => {
      if (obj.id === obj.id) {
        if (isCheckedNewsLetter === true) {
          return { ...obj, sendTo: false };
        } else if (isCheckedNewsLetter === false) {
          return { ...obj, sendTo: true };
        }
        return obj;
      }
      return obj;
    });
    setsubscribedUsersTable(newState);

    console.log(newState);
  };

  const makeTableData = (data: ISubscribedUserTable[]) => {
    if (searchSubscribedUser && searchSubscribedUser.length > 0) {
      return data.filter(
        (subscribedUser) =>
          subscribedUser.name
            .toLowerCase()
            .includes(searchSubscribedUser.toLowerCase()) ||
          subscribedUser.email
            .toLowerCase()
            .includes(searchSubscribedUser.toLowerCase()) ||
          subscribedUser.subscriptionDate
            .toLowerCase()
            .includes(searchSubscribedUser.toLowerCase())
      );
    } else {
      return data;
    }
  };

  const selectedUserArray = subscribedUsersTable.filter(
    (item) => item.sendTo === true
  );

  const subscribedUser = (values: any) => {
    dispatch(createSubscribedUser({
      name: values.name,
      email: values.email,
    }))
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validation,
    onSubmit: (values, { resetForm }) => {
      // const subscribeUserData = {
      //   id: Math.random(),
      //   name: formik.values.name,
      //   email: formik.values.email,
      //   subscriptionDate: "00-00-00",
      //   status: false,
      //   sendTo: false,
      // };
      // setsubscribedUsersTable((addSubscribeUser: any) => [
      //   ...addSubscribeUser,
      //   subscribeUserData,
      // ]);
      subscribedUser(values);
    
      setIsModalOpen(false);
      resetForm();

      dispatch(
        displayToastr({ isDisplay: true, message: "User Added successfully" })
      );
    },
  });

  // __Open Modal Handler
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  const handelNextHandler = () => {
    {
      selectedUserArray.length
        ? setScreenToShow("editNewsLetter")
        : dispatch(
            displayToastr({
              isDisplay: true,
              alertType: "error",
              message: "You have to select atleast one user to proceed",
            })
          );
    }
  };

  useEffect(() => {
    setSelectedUserArray(selectedUserArray);
    setSubscribedUserMainData(subscribedUsersTable);
  }, [
    // selectedUserArray,
    // setSelectedUserArray,
    // setSubscribedUserMainData,
    // subscribedUsersTable,
    // selectedAddNewsLetter,
  ]);


  useEffect(() => {
    subscribedUserGet();
    if(status === 'PENDING'){
      setIsloading(true)
    }else{
      setIsloading(false)
    }
  }, [page, totalRecords]);

  return (
    <div className="wrapper-main-newsletter font-source-sans-pro">
      <div className="wrapper-inner-newsletter bg-white-shadow">
        <Typography
          className="fw-700 primary-color font-source-sans-pro lh-32"
          sx={{
            fontSize: {
              xs: "23px",
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "30px",
            },
          }}
        >
          Subscribed Users
        </Typography>

        <Grid
          className="flex justify-between"
          sx={{
            mt: "30px",
            gap: "20px",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
              lg: "row",
            },
          }}
        >
          <Grid
            sx={{
              width: { xs: "100%", sm: "100%", md: "235px", lg: "400px" },
              height: "54px",
            }}
          >
            <SubscribeUserSearchFilter
              claimArrays={subscribedUsersTabledata}
              setSearchSubscribedUser={setSearchSubscribedUser}
              searchSubscribedUser={searchSubscribedUser}
              setUserName={setUserName}
              userName={userName}
              setPage={setPage}
            />
          </Grid>
          <Grid
            className="flex  align-center"
            sx={{
              justifyContent: {
                xs: "flex-end",
                sm: "flex-end",
                md: "flex-start",
                lg: "flex-start",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
              gap: {
                xs: "10px",
                sm: "50px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
            }}
          >
            <Box
              className="custom-Checkbox-wrapper"
              display="flex"
              alignItems="center"
              gap="8px"
            >
              <input
                type="checkbox"
                id="checkall"
                className="remember-checkbox"
                checked={isCheckedNewsLetter}
                onChange={() => statusCheckAll()}
              />
              <label
                htmlFor="checkall"
                className="cursor-pointer checkbox-label"
              >
                Select All
              </label>
            </Box>
            {/* <button  onClick={statusCheckAll}>ALL</button> */}
            <div className="flex gap-10">
              <button
                className="header-buttons cursor-pointer font-source-sans-pro common-button-hover add-btn"
                onClick={modalOpenHandler}
              >
                Add
              </button>
              <button
                className="header-buttons cursor-pointer font-source-sans-pro common-button-hover next-btn"
                onClick={handelNextHandler}
              >
                Next
              </button>
            </div>
          </Grid>
        </Grid>
        <div className="mt-30">
          <CommonTable
            cols={subscribedUsersTableConstants(
              toggleCostQuestions,
              toggleStatus
            )}
            data={makeTableData(subscribedUsersTable)}
            isPagination={true}
            recordsPerPage={8}
            heightOfTable={1000}
            setPage={setPage}
            page={page}
            totalRecords={totalRecords}
          />
        </div>
        <CommonModal
          title="Add User"
          buttonText="Add "
          className="bg-secondary"
          modalopenHandler={isModalOpen}
          setModalOpenHandler={setIsModalOpen}
          addSubmitHandler={formik.handleSubmit}
          modalSxStyle={newsLetterCommonModalSxStyling}
        >
          <div className="add-subscribe-user-form-wrapper">
            {/* <Container sx={{ width: "100%" }}> */}
            {/* <FormControl sx={{ width: "100%" }}> */}
            <form className="form-input flex">
              <div>
                <label className="dark-color lh-32 fs-18 fw-700">
                  First Name
                </label>
                <TextField
                  id="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter first name"
                  error={!!(formik.errors.name && formik.touched.name)}
                  className={
                    formik.errors.name && formik.touched.name
                      ? "input-error"
                      : ""
                  }
                />
                {formik.errors.name && formik.touched.name && (
                  <>
                    <div className="flex errors-labels fw-600 align-center error-color">
                      <ErrorIcon
                        sx={{ marginRight: "5px" }}
                        fontSize="medium"
                        style={{ color: "#DC3545" }}
                      />{" "}
                      <span>{formik.errors.name}</span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <label className="dark-color lh-32 fs-18 fw-700">Email</label>
                <TextField
                  id="email"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter email"
                  error={!!(formik.errors.email && formik.touched.email)}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "input-error"
                      : ""
                  }
                />
                {formik.errors.email && formik.touched.email && (
                  <>
                    <div className="flex errors-labels fw-600 align-center error-color">
                      <ErrorIcon
                        sx={{ marginRight: "5px" }}
                        fontSize="medium"
                        style={{ color: "#DC3545" }}
                      />{" "}
                      <span>{formik.errors.email}</span>
                    </div>
                  </>
                )}
              </div>
            </form>
            {/* </FormControl> */}
            {/* </Container> */}
          </div>
        </CommonModal>
      </div>
    </div>
  );
};

export default SubscribedUser;
