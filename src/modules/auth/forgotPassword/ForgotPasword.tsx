import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";

import {
  FormControl,
  TextField,
  InputAdornment,
  Box,
  Grid,
} from "@mui/material";

import { Error, ErrorRounded } from "@mui/icons-material";

import { useFormik } from "formik";
import * as Yup from "yup";

import { registeredUsers } from "../../../common/mockData/auth";
import AuthFooter from "../authLayout/authFooter/AuthFooter";

import UserIcon from "../../../assets/images/common/user.png";
import CommonButton from "../../../common/components/buttons/CommonButton";
import { forgotPasswordFetch } from "../../../redux/forgotPassword/forgotPasswordSlice";
import { IForgotPassword } from "../../../common/interfaces/forgotPasswordInterface";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const route = useRouter();
  const forgotPasswordIn = useAppSelector(
    (state: any) => state.forgotPassword.message
  );
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
  const [isResetPassword, setIsResetPassword] = useState<boolean>(false);
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);

  const forgotValidateSchema = Yup.object({
    email: Yup.string().required("Required Field").email("Enter a valid email"),
  });

  const dispatch = useAppDispatch();
  const handleForgotPassword = async (values: any) => {
    setIsShowSpinner(true);
    const forgotPasswordDispatch: any = await dispatch(
      forgotPasswordFetch(values)
    );
    //  await dispatch(recentCodeFetch(values));
    if (forgotPasswordDispatch?.payload?.message === "user_password_success") {
      setIsErrorMessage(false);
      route.push('/forgotPasswordSuccessful')
    } else {
      setIsErrorMessage(true);
      route.push('/forgotPassword')
      setIsShowSpinner(false);
    }
    setIsShowSpinner(false);
  };

  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      handleForgotPassword(values);
    },
    validationSchema: forgotValidateSchema,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsErrorMessage(false), setIsResetPassword(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [formik.handleSubmit, isErrorMessage, isResetPassword]);

  return (
    <>
      <Grid item lg={5} md={7} sm={12} sx={{ width: "100%" }}>
        <div className="signin-form bg-white w-100">
          <Box
            className="featured-signin"
            padding={{
              xs: "0px 20px",
              sm: "10px 50px",
              xl: "20px 80px 10px 80px",
            }}
            marginBottom={{ xs: "50px", sm: "20px", md: "0" }}
          >
            <div className="form-content flex direction-column justify-between">
              <div className="forgot-wrapper">
                  <div className="forgot-password">
                    <div className="form-heading text-center lh-32">
                      <h2 className="fs-56 fw-700 primary-color">
                        Reset Password
                      </h2>
                      <p className="fs-24 primary-color fw-400 lh-32">
                        Enter the email assosiated with your account and we’ll
                        send an email with instructions to reset your password.
                      </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <FormControl className="form-email w-100 position-relative">
                        <label className="dark-color fs-18 fw-700">Email</label>
                        <TextField
                          fullWidth
                          name="email"
                          variant="outlined"
                          placeholder="Enter email"
                          error={
                            !!(formik.errors.email && formik.touched.email)
                          }
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          size="medium"
                          className="forgot-email-input"
                          sx={{
                            borderRadius: "3px",
                            fontSize: "18px",
                            color: "#343A40",
                            marginTop: "3px",
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{
                                  width: "40px",
                                  marginRight: { sm: "1rem" },
                                }}
                              >
                                <Image
                                  src={UserIcon}
                                  alt="User Icon"
                                  className="user-icon"
                                  priority
                                  width={24}
                                  height={24}
                                  objectFit="fill"
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <span className="dark-red form-errors fs-18 fw-400 flex align-center position-absolute">
                            <Error
                              sx={{ fontSize: "25px", paddingTop: "2px" }}
                            />
                            {formik.errors.email}
                          </span>
                        )}
                      </FormControl>

                      {isErrorMessage && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: "5px",
                          }}
                          className="dark-red top-errorMessage fs-18 lh-24 fw-400"
                        >
                          <ErrorRounded sx={{ mr: "5px" }} />
                          {forgotPasswordIn ||
                            "We could’nt find an account with that email address. "}
                        </Box>
                      )}

                      {/* {(isErrorMessage && forgotPasswordIn !== 'user_password_success') &&
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: "5px" }} className="dark-red top-errorMessage fs-18 lh-24 fw-400">
                          <ErrorRounded sx={{ mr: '5px' }} />{forgotPasswordIn || "We could’nt find an account with that email address. "}
                        </Box>
                      } */}

                      <div className="forgot-btn w-100">
                        {/* <button
                          type="submit"
                          className="w-100 bg-gradient-green-hover fs-18 fw-700 cursor-pointer white-color lh-24 font-source-sans-pro bg-gradient-green"
                        >
                          Continue
                        </button> */}
                        <CommonButton
                          type="submit"
                          value="Continue"
                          width="100%"
                          classNames="w-100 h-48 common-button-hover"
                          flexClasses="flex align-center justify-center"
                          ml="-7rem"
                          whenToShow={isShowSpinner}
                        />
                      </div>
                    </form>

                    <Box className="create-account text-center">
                      <p className="fs-18 primary-color fw-700 email-back-btn cursor-pointer">
                        <Link
                          href="/signIn"
                          className="secondary-color text-decoration"
                        >
                          <span>
                            Back to{" "}
                            <span className="secondary-color">Login</span>
                          </span>
                        </Link>
                      </p>
                    </Box>
                  </div>
              </div>
              <AuthFooter />
            </div>
          </Box>
        </div>
      </Grid>
    </>
  );
};

export default ForgotPassword;
