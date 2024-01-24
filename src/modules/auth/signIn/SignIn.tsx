import { Box, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import { Error, ErrorRounded } from "@mui/icons-material";
import React, { useCallback, useEffect, useState } from "react";
import { STATUS, VeriffStatus } from "../../../common/constants/store";
import { initialValues, sigInValidateSchema } from "../../../common/schema/signIn";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";

import ActionToaster from "../../../common/components/toaster/actionToaster/ActionToaster";
import AuthFooter from "../authLayout/authFooter/AuthFooter";
import CommonButton from "../../../common/components/buttons/CommonButton";
import CustomCheckBox from "../../../common/components/checkBox/CustomCheckBox";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "../../../assets/images/common/lock.png";
import UserIcon from "../../../assets/images/common/user.png";
import { getSignedIn } from "../../../redux/signin/signin.api";
import hidePasswordIcon from "../../../assets/images/common/hide-password.png";
import { setRememberMe } from "../../../helpers/Tokens";
import showPasswordIcon from "../../../assets/images/common/show-password.png";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  // geting values fron sign in slice
  const {
    //collaborator intial login to set password
    session = "",
    message = "",
    status = "",
    user: { firstName = "", lastName = "" },
    verifInfo: { verificationStatus = "", sessionId = "", sessionUrl },
  } = useAppSelector((state: any) => state.signin);

  const dispatch = useAppDispatch();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isUserInvalid, setIsUserInvalid] = useState(false);
  const [prevURL, setPrevURL] = useState<string | null>("/");
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);
  const [isShowToast, setIsShowToast] = useState<boolean>(true);

  const handleUserValidation = async (values: any) => {
    values.rememberMe && setRememberMe(values.rememberMe);
    setIsShowToast(true);
    setIsShowSpinner(true);
    const payload = { email: values.email, password: values.password };
    dispatch(getSignedIn(payload));
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    validationSchema: sigInValidateSchema,
    onSubmit: (values) => {
      setIsShowSpinner(true);
      handleUserValidation(values);
    },
  });

  const handleLogin = useCallback(() => {
    // if (status === STATUS.SUCCEEDED && message === "user_login_success" && message !== "user_logout_token_success") {
    //   router.push("/dashboard");
    // } else if (status === STATUS.SUCCEEDED && message === "user_new_password_required" && values.email) {
    //   router.push({
    //     pathname: "/newPassword",
    //     query: {
    //       collaboratorEmailPassword: values.email,
    //       collaboratorSession: session,
    //     },
    //   });
    // } else {
    //   setIsUserInvalid(true);
    //   setIsShowSpinner(false);
    // }
    // // setIsUserInvalid(false);
    router.push("/dashboard");
    setIsShowSpinner(false);
  }, [message, router, status, session]);

  //   animation and update values
  useEffect(() => {
    handleLogin();
    setPrevURL(sessionStorage.getItem("prevPath"));
  }, [prevURL, message, firstName, lastName, verificationStatus, sessionId, handleLogin]);

  const handleVeriff = () => {
    router.push({
      pathname: "/identityVerfication",
      query: { id: sessionId, firstName, lastName, sessionUrl },
    });
  };
  const handleClose = (value: boolean) => {
    setIsShowToast(value);
  };
  // CREATING VERIFFSTATUS LIST FOR ERROR TEXT AND TOAST DISPLAY
  const VeriffStatusList = [VeriffStatus.IDLE, VeriffStatus.CREATED, VeriffStatus.STARTED, VeriffStatus.SUBMITTED, VeriffStatus.DECLINED];
  return (
    <>
      <Grid
        item
        lg={5}
        md={7}
        sm={12}
        sx={{ width: "100%", pb: { xs: "40px", sm: "24px", lg: "0", xl: "0" } }}
      >
        <div
          className={`signin-form bg-white w-100 ${
            (prevURL === "/" || prevURL === "/forgotPassword") &&
            "transition-form"
          } ${prevURL === "/signUp" && "transition-left-form"} `}
        >
          {/* transition-form */}
          <Box className="featured-signin">
            <Box
              className="form-content flex direction-column justify-between"
              padding={{
                xs: "0em 20px",
                sm: "0em 50px",
                md: "10px 45px 5px 45px",
                xl: "20px 80px 10px 80px",
              }}
              maxWidth="590px"
              position="relative"
            >
              {VeriffStatusList.some((status) => status === message) && <ActionToaster message={`Hi ${firstName} ${lastName}, ${VeriffStatus.MESSAGE} `} action={handleVeriff} handleClose={handleClose} isDisplay={isShowToast} />}
              <div className="form-wrapper flex direction-column">
                <div className="form-heading signIn-heading">
                  <h2 className="fs-56 primary-color lh-32">Sign In</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  {isUserInvalid && message && status !== STATUS.SUCCEEDED && (
                    <span className="dark-red top-errorMessage">
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <ErrorRounded sx={{ marginRight: "5px" }} />
                        <p className="fs-18 m-0" style={{ margin: "0", padding: "0" }}>
                          {VeriffStatusList.some((status) => status === message) ? VeriffStatus.MESSAGE : message || "Incorrect email or password"}
                        </p>
                      </Box>
                    </span>
                  )}
                  <Box paddingTop="10px">
                    <FormControl className="form-email w-100">
                      <label className="dark-color fs-18 fw-700">Email</label>
                      <TextField
                        fullWidth
                        name="email"
                        variant="outlined"
                        placeholder="Enter email"
                        autoFocus
                        error={!!(errors.email && touched.email)}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size="medium"
                        className="sign-in-input"
                        sx={{
                          height: "56px",
                          "&:hover .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "1.5px solid #198754",
                            },
                          },
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
                              <Image src={UserIcon} alt="User Icon" className="user-icon" priority width={24} height={24} objectFit="fill" />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {errors.email && touched.email && (
                        <span className="dark-red form-errors fs-18 fw-400 flex align-center position-absolute">
                          <Error sx={{ fontSize: "25px", paddingTop: "2px" }} />
                          {errors.email}
                        </span>
                      )}
                    </FormControl>
                    <FormControl className="form-password w-100 position-relative" sx={{ paddingTop: "50px " }}>
                      <label className="dark-color fs-18 fw-700">Password</label>
                      <TextField
                        fullWidth
                        id="password"
                        name="password"
                        variant="outlined"
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Enter password"
                        error={!!(errors.password && touched.password)}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        size="medium"
                        className="sign-in-input"
                        sx={{
                          height: "56px",
                          "&:hover .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "1.5px solid #198754",
                            },
                          },
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
                              {isShowPassword ? (
                                <Image src={showPasswordIcon} alt="Password show" objectFit="fill" width={24} height={24} priority className="eye-password-icon cursor-pointer icon-color" onClick={() => setIsShowPassword(!isShowPassword)} />
                              ) : (
                                <Image src={hidePasswordIcon} alt="Password hide" objectFit="fill" width={24} height={24} priority className="eye-password-icon cursor-pointer icon-color" onClick={() => setIsShowPassword(!isShowPassword)} />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      {errors.password && touched.password && (
                        <span className="dark-red form-errors fs-18 fw-400 flex align-center position-absolute">
                          <Error sx={{ fontSize: "25px", paddingTop: "2px" }} />
                          {errors.password}
                        </span>
                      )}
                    </FormControl>
                  </Box>
                  <Box className="remember-forgot" display="flex" justifyContent="space-between" alignItems="center" paddingTop="38px" marginBottom="1rem">
                    <Box className="custom-Checkbox-wrapper" display="flex" alignItems="center" gap="8px">
                      <input type="checkbox" name={"rememberMe"} id={"rememberMe"} onChange={handleChange} className="remember-checkbox" />
                      <label htmlFor={"rememberMe"} className="fs-16 fw-600 font-source-sans-pro cursor-pointer">
                        Remember Me
                      </label>
                    </Box>

                    <Link href="/forgotPassword">
                      <span className="primary-color cursor-pointer fw-700 lh-24 fs-16 text-right">Forgot password?</span>
                    </Link>
                  </Box>
                  <CommonButton type="submit" value="Sign In" width="100%" classNames="w-100 h-48 common-button-hover" flexClasses="flex align-center justify-center" whenToShow={isShowSpinner} />
                </form>
                <Box
                  className="create-account"
                  // display={{ xs: "block", sm: "flex" }}
                  // justifyContent={{ sm: "space-between" }}
                  // alignItems={{ sm: "center" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <h2 className="fs-18 primary-color  cursor-pointer">
                    New here? &nbsp;
                    <Link href="/signUp">
                      <span className="secondary-color">Create an account</span>
                    </Link>
                  </h2>
                </Box>
              </div>
              {/* ========================= */}
              <AuthFooter />
            </Box>
          </Box>
        </div>
      </Grid>
    </>
  );
};

export default Signin;
