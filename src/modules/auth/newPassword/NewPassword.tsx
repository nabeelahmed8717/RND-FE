import * as Yup from "yup";

import { Box, FormControl, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Error, ErrorRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import AuthFooter from "../authLayout/authFooter/AuthFooter";
import CommonButton from "../../../common/components/buttons/CommonButton";
import { IVisibilityPassword } from "../../../common/interfaces/signInInterface";
import Image from "next/image";
// import LockIcon from "../../../assets/images/common/lock.png";
import LockIcon from "../../../assets/images/common/lock.png";
import PasswordErrorMessage from "../signUp/forms/PasswordErrorMessage";
import { apiPostRequest } from "../../../helpers/request";
import hidePasswordIcon from "../../../assets/images/common/hide-password.png";
import showPasswordIcon from "../../../assets/images/common/show-password.png";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const NewPassword = () => {
  const { query, push } = useRouter();
  const { email, code, collaboratorEmailPassword, collaboratorSession } = query;
  const [isShowPassword, setIsShowPassword] = useState<IVisibilityPassword>({
    password: false,
    confirmPassword: false,
  });
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);
  const [checkAllSchema, setCheckAllSchema] = useState<boolean>(false); // password valodation schema
  const [isUserMessage, setIsUserMessage] = useState<string>("");
  const [isUserInvalid, setIsUserInvalid] = useState<boolean>(false);
  const newPasswordValidateSchema = Yup.object({
    password: Yup.string().required("Required Field"),
    confirmPassword: Yup.string().required("Required Field"),
  });

  const newPasswordHandler = async (values: any) => {
    setIsShowSpinner(true);
    if (values.password === values.confirmPassword) {
      if (checkAllSchema) {
        try {
          if (collaboratorSession) {
            await apiPostRequest("/users/create-collaborator-password", {
              email: collaboratorEmailPassword,
              newPassword: values.password,
              session: collaboratorSession,
            });
          } else {
            await apiPostRequest("/users/confirm-password", {
              email: email,
              password: values.password,
              code: code,
            });
          }
          push({
            pathname: "/newPasswordSuccessful",
            query: {
              collaboratorSession: collaboratorSession,
            },
          });
        } catch (error: any) {
          setIsUserMessage(error.response.data.message);
          setIsUserInvalid(true);
          push("/newPassword");
        }
      }
    }
    setIsShowSpinner(false);
  };

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    onSubmit: (values) => {
      newPasswordHandler(values);
    },
    validationSchema: newPasswordValidateSchema,
  });

  useEffect(() => {
    formik.values.password.length < 8 && setCheckAllSchema(false);
  }, [formik.values.password, checkAllSchema]);

  return (
    <>
      <Grid item lg={5} md={7} sm={12} sx={{ width: "100%" }}>
        <Box className="signin-form bg-white w-100" marginBottom={{ md: "40px" }}>
          <Box
            className="featured-signin"
            padding={{
              xs: "0em 20px",
              sm: "0em 50px",
              md: "10px 45px 5px 45px",
              xl: "20px 80px 10px 80px",
            }}
            marginBottom={{ xs: "50px", sm: "20px", md: "0" }}
          >
            <div className="form-content flex direction-column justify-between">
              <div className="form-wrapper flex direction-column">
                <div>
                  <div className="form-heading newPassword-heading">
                    <Typography
                      className="primary-color text-center fw-700 lh-64 m-0 font-source-sans-pro"
                      sx={{
                        lineHeight: {
                          xs: "45px",
                          lg: "64px",
                        },
                        fontSize: { xs: "40px", lg: "56px" },
                      }}
                    >
                      Create New Password
                    </Typography>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    {isUserInvalid && (
                      <span className="dark-red top-errorMessage">
                        <Box display="flex" alignItems="center" justifyContent="center" paddingBottom="10px">
                          <ErrorRounded sx={{ marginRight: "5px" }} />
                          <p className="fs-18 m-0" style={{ margin: "0", padding: "0" }}>
                            {isUserMessage || "Attempt limit exceeded, please try after some time."}
                          </p>
                        </Box>
                      </span>
                    )}
                    <FormControl className="form-password w-100" sx={{ paddingTop: "35px" }}>
                      <label className="dark-color fs-18 fw-700 lh-24">New Password</label>
                      <TextField
                        fullWidth
                        id="password"
                        name="password"
                        variant="outlined"
                        type={isShowPassword.password ? "text" : "password"}
                        placeholder="Enter password"
                        error={!!(formik.errors.password && formik.touched.password)}
                        value={formik.values.password}
                        onChange={(e) => formik.handleChange("password")(e.target.value.trim())}
                        onBlur={formik.handleBlur}
                        size="medium"
                        sx={{
                          borderRadius: "3px",
                          fontSize: "18px",
                          color: "#343A40",
                          marginTop: "3px",
                          maxWidth: "590px",
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
                              <Image src={LockIcon} alt="Lock icon" className="lock-icon" priority width={24} height={24} objectFit="fill" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                width: "40px",
                                // marginRight: { sm: "0.5rem" },
                              }}
                            >
                              {isShowPassword.password ? (
                                <Image
                                  src={showPasswordIcon}
                                  alt="Password show"
                                  objectFit="fill"
                                  width={24}
                                  height={24}
                                  priority
                                  className="eye-password-icon cursor-pointer icon-color"
                                  onClick={() =>
                                    setIsShowPassword({
                                      ...isShowPassword,
                                      password: false,
                                    })
                                  }
                                />
                              ) : (
                                <Image
                                  src={hidePasswordIcon}
                                  alt="Password hide"
                                  objectFit="fill"
                                  width={24}
                                  height={24}
                                  priority
                                  className="eye-password-icon cursor-pointer icon-color"
                                  onClick={() =>
                                    setIsShowPassword({
                                      ...isShowPassword,
                                      password: true,
                                    })
                                  }
                                />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formik.errors.password && formik.touched.password && (
                        <span className="dark-red form-errors fs-18 fw-400 flex align-center">
                          <Error sx={{ fontSize: "25px", paddingTop: "2px" }} />
                          {formik.errors.password}
                        </span>
                      )}
                    </FormControl>

                    {formik.values.password.length > 0 && !checkAllSchema && <PasswordErrorMessage password={formik.values.password} setCheckAllSchema={setCheckAllSchema} />}

                    <FormControl className="form-cpassword w-100">
                      <label className="dark-color fs-18 fw-700 lh-24">Confirm Password</label>
                      <TextField
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        variant="outlined"
                        type={isShowPassword.confirmPassword ? "text" : "password"}
                        placeholder="Re-type password"
                        error={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}
                        value={formik.values.confirmPassword}
                        onChange={(e) => formik.handleChange("confirmPassword")(e.target.value.trim())}
                        onBlur={formik.handleBlur}
                        size="medium"
                        sx={{
                          borderRadius: "3px",
                          fontSize: "18px",
                          color: "#343A40",
                          marginTop: "3px",
                          maxWidth: "590px",
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
                              <Image src={LockIcon} alt="Lock icon" className="lock-icon" priority width={24} height={24} objectFit="fill" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                width: "40px",
                                // marginRight: { sm: "0.5rem" },
                              }}
                            >
                              {isShowPassword.confirmPassword ? (
                                <Image
                                  src={showPasswordIcon}
                                  alt="Password show"
                                  objectFit="fill"
                                  width={24}
                                  height={24}
                                  priority
                                  className="eye-password-icon cursor-pointer icon-color"
                                  onClick={() =>
                                    setIsShowPassword({
                                      ...isShowPassword,
                                      confirmPassword: false,
                                    })
                                  }
                                />
                              ) : (
                                <Image
                                  src={hidePasswordIcon}
                                  alt="Password hide"
                                  objectFit="fill"
                                  width={24}
                                  height={24}
                                  priority
                                  className="eye-password-icon cursor-pointer icon-color"
                                  onClick={() =>
                                    setIsShowPassword({
                                      ...isShowPassword,
                                      confirmPassword: true,
                                    })
                                  }
                                />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <span className="dark-red form-errors fs-18 fw-400 flex align-center">
                          <Error sx={{ fontSize: "25px", paddingTop: "2px" }} />
                          {formik.errors.confirmPassword}
                        </span>
                      )}
                    </FormControl>
                    {!formik.errors.confirmPassword && formik.touched.confirmPassword && formik.values.password !== formik.values.confirmPassword && (
                      <p className="dark-red fs-18 fw-400 lh-24 m-0" style={{ paddingTop: "5px" }}>
                        {" "}
                        New Password and Confirm Password does not match.{" "}
                      </p>
                    )}

                    <Box className="form-btn w-100" paddingTop="50px">
                      <CommonButton type="submit" value="Change Password" width="100%" classNames="w-100 h-48 common-button-hover" flexClasses="flex align-center justify-center" whenToShow={isShowSpinner} />
                    </Box>
                  </form>
                </div>
              </div>
              <AuthFooter />
            </div>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default NewPassword;
