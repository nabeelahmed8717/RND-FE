import * as yup from "yup";

import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";

import ChangeEmail from "./changeEmail/ChangeEmail";
import ChangeProfilePassword from "./changePassword/ChangePassword";
import ErrorIcon from "@mui/icons-material/Error";
import Image from "next/image";
import { useFormik } from "formik";
import {
  getUserProfile,
  profileUpdate,
  updateProfileImage,
} from "../../../redux/accountSettings/myProfile/myProfileApi";
import { STATUS } from "../../../common/constants/store";
import { TextFieldValues } from "../accountSettings";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { getDummyRoles, setUserInfo } from "../../../helpers/Tokens";
import { getSignedIn } from "../../../redux/signin/signin.api";

const MyProfileSettings = () => {
  const dispatch = useAppDispatch();

  const { status, message, profileValue } = useAppSelector((state) => state.myProfile);
  const user = useAppSelector((state) => state.signin.user);
  console.log(profileValue, "address user");

  const [localStorageRole, setLocalStorageRole] = useState<string | null>();
  var loggedUserRole: any;
  useEffect(() => {
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Number is required "),
    city: yup.string().required("City is required "),
    address: yup.string().required("Address is required"),
    postCode: yup.string().required("Post code is required "),
    buildingNo: yup.string().required("Building no is required "),
  });
  const personalDetailsFormValues = {
    firstName: profileValue?.firstName,
    lastName: profileValue?.lastName,
    email: profileValue?.email,
    password: "*********",
    phoneNumber: "+",
    postCode: profileValue?.individual?.postCode || "",
    address: profileValue?.individual?.address || "",
    city: profileValue?.individual?.city || "",
    buildingNo: profileValue?.individual?.buildingNo || "",
  };

  const formSubmitHandler = (formValues: any) => {
    const invidiual = {
      role: localStorageRole,
      phoneNumber: formValues.phoneNumber,
      postCode: formValues.postCode,
      address: formValues.address,
      buildingNo: formValues.buildingNo,
      city: formValues.city,
    };
    
    dispatch(profileUpdate({ invidiual, dispatch }));
  };
  const formik = useFormik({
    initialValues: personalDetailsFormValues,
    validationSchema: validationSchema,
    onSubmit: formSubmitHandler,
    onReset(values, formikHelpers) {
      formik.resetForm();
    },
  });
  const [IsProfileInfo, setIsProfileInfo] = useState(true);
  const [valuesField, setValuesField] = useState<any>();

  const IsProfileInfoHandler = (values: any) => {
    setValuesField(values);
    setIsProfileInfo(!IsProfileInfo);
  };

  return (
    <div className="my-profile">
      {IsProfileInfo && (
        <>
          <Grid className="fw-700 fs-24 dark-color">Profile Information</Grid>
          {/* <Image src={imageProfile} alt='dfdf' priority
            width={24}
            height={24} /> */}
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              // rowSpacing="1.3rem"
              pt="2rem"
              // columnSpacing="2.5rem"
              columnSpacing="2.5rem"
              rowSpacing="1.2rem"
              sx={{ width: { xl: "688px" } }}
            >
              {TextFieldValues.map((values, index) => (
                <Grid
                  item
                  xl={values.xlScreen}
                  md={values.mdScreen}
                  sm={values.smScreen}
                  xs={values.xsScreen}
                  key={index}
                >
                  <label className="fw-700 fs-16 lh-24 dark-color font-source-sans-pro">
                    {values.label}
                  </label>
                  <Grid
                    className={`align-center ${values.className} account-setting-profile-info`}
                    gap="1.5rem"
                  >
                    <TextField
                      // value={values.value}
                      size="small"
                      type={values.inputType}
                      fullWidth
                      disabled={values.IsDisable}
                      name={values.name}
                      placeholder={values.placeholder}
                      value={
                        formik.values[
                        values.name as keyof typeof personalDetailsFormValues
                        ]
                      }
                      error={
                        formik.touched[
                        values.name as keyof typeof personalDetailsFormValues
                        ] &&
                        !!formik.errors[
                        values.name as keyof typeof personalDetailsFormValues
                        ]
                      }
                      className={`${values.backGroundColor} ${values.bgHover}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={`${!!values.adornmentIcon && "search-input-w-40"
                              }`}
                          >
                            {values.adornmentIcon && (
                              <Image
                                src={values.adornmentIcon}
                                alt="icon"
                                width={19}
                                height={19}
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "#17884D",
                          },
                        },
                        width: { xl: values.width },
                        minWidth: { xl: values?.minWidth },
                      }}
                    />
                    {formik.touched[
                      values.name as keyof typeof personalDetailsFormValues
                    ] &&
                      formik.errors[
                      values.name as keyof typeof personalDetailsFormValues
                      ] && (
                        <Grid className="flex errors-labels fw-600 align-start error-color position-absolute lh-32">
                          <ErrorIcon
                            sx={{ marginRight: "5px",marginTop:"6px" }}
                            fontSize="medium"
                            style={{ color: "#DC3545" }}
                          />
                          <span>
                            {
                              formik.errors[
                              values.name as keyof typeof personalDetailsFormValues
                              ]
                            }
                          </span>
                        </Grid>
                      )}

                    {/* {!isButtonShown===reduxUserRole &&  */}

                    {values.button && (
                      <Grid
                        sx={{ pl: 4 }}
                        className="primary-color profile-info-change-pswrd-email fw-700 cursor-pointer font-source-sans-pro profile-info-change-pswrd-email-btn"
                        onClick={() => IsProfileInfoHandler(values)}
                      >
                        {values.button}
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              ))}
              {/* <Box className="position-absolute flex direction-column " mt={17} ml={75}>
                  <button className=" profile-info-change-pswrd-email mb-50">Change</button>
                  <button className=" profile-info-change-pswrd-email mb-50">Change</button>
                </Box> */}

              <Grid item xs={12} xl={10.05} className="flex justify-end">
                <button
                  type="submit"
                  className="save-button green-gradient flex justify-center align-center border-radiues-3 common-button-hover white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
                >
                  Save
                </button>
              </Grid>
            </Grid>
          </form>
        </>
      )}

      {!IsProfileInfo && valuesField.changeProfile === "email" && (
        <ChangeEmail
          userEmail={profileValue?.email}
          setIsProfileInfo={setIsProfileInfo}
          IsProfileInfo={IsProfileInfo}
        />
      )}
      {!IsProfileInfo && valuesField.changeProfile === "password" && (
        <ChangeProfilePassword
          setIsProfileInfo={setIsProfileInfo}
          IsProfileInfo={IsProfileInfo}
        />
      )}
    </div>
  );
};

export default MyProfileSettings;
