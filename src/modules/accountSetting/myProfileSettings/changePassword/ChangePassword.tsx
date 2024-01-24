import * as Yup from "yup";

import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  ErrorRounded,
  Info,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { FC, useEffect, useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import { IChangePassword } from "../../../../common/interfaces/accountSettingsInterface";
import { ISHOWPASSWORD } from "../../../../common/interfaces/signIn";
import Image from "next/image";
import PasswordErrorMessage from "../../../auth/signUp/forms/PasswordErrorMessage";
import { apiPostRequest } from "../../../../helpers/request";
import axios from "axios";
import hidePasswordIcon from "../../../../assets/images/common/hide-password.png";
import showPasswordIcon from "../../../../assets/images/common/show-password.png";
import { useFormik } from "formik";

const ChangeProfilePassword: FC<IChangePassword> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState<ISHOWPASSWORD>({
    password: false,
    confirmPassword: false,
    currentPassword: false,
  });
  const [checkAllSchema, setCheckAllSchema] = useState<boolean>(false); // password valodation schema
  const [isUserMessage, setIsUserMessage] = useState<string>("");
  const [isUserInvalid, setIsUserInvalid] = useState<boolean>(false);
  const newPasswordValidateSchema = Yup.object({
    currentPassword: Yup.string().required("Required Field"),
    password: Yup.string().required("Required Field"),
    confirmPassword: Yup.string().required("Required Field"),
  });

  const changePasswordHandler = async (values: any) => {
    if (values.password === values.confirmPassword) {
      try {
        await apiPostRequest("/users/change-password", {
          currentPassword: values.currentPassword,
          newPassword: values.password,
        });
        setIsUserInvalid(false);
      } catch (error: any) {
        setIsUserInvalid(true);
        setIsUserMessage(error?.response?.data?.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "", currentPassword: "" },
    onSubmit: (values) => {
      changePasswordHandler(values);
    },
    validationSchema: newPasswordValidateSchema,
  });

  useEffect(() => {
    formik.values.password.length < 8 && setCheckAllSchema(false);
  }, [formik.values.password, checkAllSchema]);
  return (
    <div className="change-password">
      <p className="fw-700 fs-24 dark-color">Change Password</p>
      <form onSubmit={formik.handleSubmit}>
        {isUserInvalid && (
          <span className="dark-red top-errorMessage">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <ErrorRounded sx={{ marginRight: "5px" }} />
              <p className="fs-18 m-0" style={{ margin: "0", padding: "0" }}>
                {isUserMessage ||
                  "Attempt limit exceeded, please try after some time."}
              </p>
            </Box>
          </span>
        )}
        <Grid container sx={{ width: { xl: "540px", lg: "450px" } }}>
          <Grid item xs={12} mt={"2.5rem"} className=" position-relative">
            <FormControl className="form-password w-100 ">
              <label className="dark-color fs-18 fw-700 lh-24">
                Current Password
              </label>
              <TextField
                className="account-setting-change-pswrd"
                fullWidth
                id="password"
                name="currentPassword"
                variant="outlined"
                type={isShowPassword.currentPassword ? "text" : "password"}
                placeholder="Enter current password"
                error={
                  !!(
                    formik.errors.currentPassword &&
                    formik.touched.currentPassword
                  )
                }
                value={formik.values.currentPassword}
                onChange={(e) =>
                  formik.handleChange("currentPassword")(e.target.value.trim())
                }
                onBlur={formik.handleBlur}
                sx={{
                  maxWidth: { lg: "540px" },

                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ width: "30px" }}>
                      {isShowPassword.currentPassword ? (
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
                              currentPassword: false,
                            })
                          }
                        />
                      ) : (
                        // <Visibility fontSize="medium" sx={{ color: "rgba(52,58,64,0.5)" }} className="cursor-pointer icon-color" onClick={() => setIsShowPassword({ ...isShowPassword, currentPassword: false })} />
                        // <VisibilityOff
                        //   sx={{ color: "rgba(52,58,64,0.5)" }}
                        //   fontSize="medium"
                        //   className="cursor-pointer icon-color"
                        //   onClick={() =>
                        //     setIsShowPassword({
                        //       ...isShowPassword,
                        //       currentPassword: true,
                        //     })
                        //   }
                        // />
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
                              currentPassword: true,
                            })
                          }
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.currentPassword &&
                formik.touched.currentPassword && (
                  <>
                    <div
                      className="flex errors-labels fw-600 align-start error-color position-absolute lh-32"
                      style={{ bottom: "-30px" }}
                    >
                      <ErrorIcon
                        fontSize="medium"
                        style={{ color: "#DC3545" ,marginTop:"6px"}}
                      />
                      <span style={{marginLeft:"5px"}}>{formik.errors.currentPassword}</span>
                    </div>
                  </>
                )}
            </FormControl>
          </Grid>
          <Grid item xs={12} mt={"2.5rem"} className=" position-relative">
            <FormControl className="form-password w-100 ">
              <label className="dark-color fs-18 fw-700 lh-24">
                New Password
              </label>
              <TextField
                className="account-setting-change-pswrd"
                fullWidth
                id="password"
                name="password"
                variant="outlined"
                type={isShowPassword.password ? "text" : "password"}
                placeholder="Enter new password"
                error={!!(formik.errors.password && formik.touched.password)}
                value={formik.values.password}
                onChange={(e) =>
                  formik.handleChange("password")(e.target.value.trim())
                }
                onBlur={formik.handleBlur}
                sx={{
                  maxWidth: { lg: "540px" },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ width: "30px" }}>
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
                <>
                  <div
                    className="flex errors-labels fw-600 align-start error-color lh-32 position-absolute"
                    style={{ bottom: "-30px" }}
                  >
                    <ErrorIcon fontSize="medium" style={{ color: "#DC3545" ,marginTop:"6px"}} />
                    <span style={{marginLeft:"5px"}}>{formik.errors.password}</span>
                  </div>
                </>
              )}
            </FormControl>
            {formik.values.password.length > 0 && !checkAllSchema && (
              <PasswordErrorMessage
                password={formik.values.password}
                setCheckAllSchema={setCheckAllSchema}
              />
            )}
          </Grid>

          <Grid item xs={12} mt={"2.5rem"} className=" position-relative">
            <FormControl className="form-cpassword w-100 ">
              <label className="dark-color fs-18 fw-700 lh-24">
                Confirm Password
              </label>
              <TextField
                className="account-setting-change-pswrd"
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                variant="outlined"
                type={isShowPassword.confirmPassword ? "text" : "password"}
                placeholder="Enter new password"
                error={
                  !!(
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                  )
                }
                value={formik.values.confirmPassword}
                onChange={(e) =>
                  formik.handleChange("confirmPassword")(e.target.value.trim())
                }
                onBlur={formik.handleBlur}
                sx={{
                  maxWidth: { lg: "540px" },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ width: "30px" }}>
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
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <>
                    <div
                      className="flex errors-labels fw-600 align-start error-color lh-32 position-absolute"
                      style={{ bottom: "-30px" }}
                    >
                      <ErrorIcon
                        fontSize="medium"
                        style={{ color: "#DC3545" ,marginTop:"6px"}}
                      />
                      <span style={{marginLeft:"5px"}}>{formik.errors.confirmPassword}</span>
                    </div>
                  </>
                )}
            </FormControl>
            {!formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              formik.values.password !== formik.values.confirmPassword && (
                <div className="flex errors-labels fw-600 align-start error-color  lh-32">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545",marginTop:"6px" }} />
                  <span style={{marginLeft:"5px"}}>Password does not match</span>
                </div>
              )}
          </Grid>

          <Grid item xs={12} mt={"2.5rem"} className="flex justify-between ">
            <button
              className="primary-color  cursor-pointer flex justify-center align-center border-radiues-3 bg-white gray-border-1 
                                         cancel-Profile-Button fw-700 fs-16 font-source-sans-pro"
              onClick={() => props.setIsProfileInfo(!props.IsProfileInfo)}
            >
              Cancel
            </button>
            <button
              className="save-button bg-secondary cursor-pointer common-button-hover
                                     white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
            >
              Save
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChangeProfilePassword;
