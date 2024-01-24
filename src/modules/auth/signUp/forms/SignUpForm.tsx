import { Box, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, InputLabel, MenuItem, RadioGroup, Select, Stack, Typography, createFilterOptions } from "@mui/material";
import { Error } from "@mui/icons-material";
import { IFilterOptions, IInitialValues } from "../../../../common/interfaces/signUp";
import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { Role, STATUS } from "../../../../common/constants/store";
import { UKFlag, addressIcon, callIcon, cityIcon, countryIcon, emailIcon, postCodeIcon, userIcon } from "../../../../assets/export";
import { companyValidationSchema, individualValidationSchema, initialValues } from "./validation";
import { useAppDispatch, useAppSelector } from "../../../../hooks/use-store.hooks";

import AuthFooter from "../../authLayout/authFooter/AuthFooter";
import AutoComplete from "../../../../common/components/autoComplete/AutoComplete";
import BpRadio from "../../../../common/components/buttons/BpRadio";
import CheckBox from "../../../../common/components/checkBox/CheckBox";
import CommonButton from "../../../../common/components/buttons/CommonButton";
import FormWrapper from "./FormWrapper";
import Image from "next/image";
import Link from "next/link";
import PasswordErrorMessage from "./PasswordErrorMessage";
import PasswordInput from "../../../../common/components/inputs/PasswordInput";
import TextInput from "../../../../common/components/inputs/TextInput";
import { createRegisteredUser } from "../../../../redux/signup/signup-api";
import { getCompaniesData } from "../../../../redux/companiesHouse/companies-house.api";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  // fetching data from redux store
  const { message, status } = useAppSelector((state) => state.signup);
  const { items, companyStatus } = useAppSelector((state) => state.companiesList);

  const [companiesList, setCompaniesList] = useState(items);
  const [userType, setUserType] = useState(Role.INDIVIDUAL);
  const [searchedValue, setSearchedValue] = useState<string>(""); // for company data
  const [checkAllSchema, setCheckAllSchema] = useState<boolean>(false);
  const [signupMessage, setSignupMessage] = useState(message);

  // form on submit manipupaltion and validation
  const handleSubmitValidation = (values: IInitialValues) => {
    values.password === values.passwordConfirm &&
      checkAllSchema &&
      dispatch(createRegisteredUser({...values,phoneNumber: "+" + values.phoneNumber.toString()}));
  };
  // formik
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, setValues } = useFormik({
    initialValues,
    validationSchema: userType === Role.COMPANY ? companyValidationSchema : individualValidationSchema,
    onSubmit: (values) => {
      handleSubmitValidation(values);
    },
  });

  // to show limit of suggestions for matching results for company name and number search
  const OPTIONS_LIMIT = 20;
  const filterOptions: IFilterOptions = createFilterOptions({
    limit: OPTIONS_LIMIT,
  });
  // set company data autoPopup
  const handleCompanyData = (e: SyntheticEvent<Element, Event>, selectedValue: string) => {
    const value = selectedValue ? selectedValue : ""; // to check either search input has value or not

    setSearchedValue(value);
    //find searched company data
    const companyObject = companiesList.find((item) => value === item.companyName || value === item.companyNumber);
    if (companyObject) {
      // set company data
      values.companyName = companyObject.companyName;
      values.companyNumber = companyObject.companyNumber;
      values.postCode = companyObject.postCode;
      values.city = companyObject.city;
      values.address = companyObject.address;
      values.country = companyObject.country;
    } else {
      //Reset company data
      values.companyName = "";
      values.companyNumber = "";
      values.postCode = "";
      values.city = "";
      values.address = "";
      values.country = "";
    }
  };
  console.log(values);

  const updateMessage = useCallback(() => {
    setSignupMessage(message);
    signupMessage === "user_create_success" && push({ pathname: "/emailVerify", query: { email: values.email } });
  }, [message, signupMessage, push, values.email]);

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

  useEffect(() => {
    setCompaniesList(items);
    updateMessage();
    setUserType(values.roleType);
    values.password.length < 8 && setCheckAllSchema(false);
  }, [searchedValue, values.roleType, values.password, checkAllSchema, updateMessage, items]);

  return (
    <FormWrapper>
      <Box height="calc(100% - 35px)" sx={{ overflowY: "auto" }} className="no-scrollbar">
        <form onSubmit={handleSubmit} className="form-lg-spacing">
          <Typography variant="h2" m={0} mb={3.5} className="fs-56  lh-64 primary-color fw-700 font-source-sans-pro">
            Create Account
          </Typography>
          <Grid container spacing={"1.25rem"}>
            <Grid item md={6} xs={12} className="position-relative" mb={"2.5rem"}>
              <TextInput error={errors.firstName} touched={touched.firstName} handleChange={handleChange} handleBlur={handleBlur} label="First Name" name="firstName" value={values.firstName} placeholder="Enter first name" adornmentIcon={userIcon} />
            </Grid>

            <Grid item md={6} xs={12} className="position-relative" mb={"2.5rem"}>
              <TextInput error={errors.lastName} touched={touched.lastName} handleChange={handleChange} handleBlur={handleBlur} name="lastName" label="Last Name" value={values.lastName} placeholder="Enter last name" adornmentIcon={userIcon} />
            </Grid>
          </Grid>
          <Grid container spacing={"1.25rem"} mb={"2.5rem"}>
            <Grid item md={6} xs={12} className="position-relative">
              <TextInput error={errors.email} touched={touched.email} handleChange={handleChange} handleBlur={handleBlur} name="email" label="Email" value={values.email} placeholder="Enter email" adornmentIcon={emailIcon} />
            </Grid>

            <Grid item md={6} xs={12} className="position-relative">
              <TextInput
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                handleChange={handleChange}
                handleBlur={handleBlur}
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
                placeholder="Enter phone number"
                type="number"
                adornmentIcon={callIcon}
              />
            </Grid>
          </Grid>
          <Grid container spacing={"1.25rem"}>
            <Grid item md={6} xs={12} className="position-relative">
              <PasswordInput error={errors.password} touched={touched.password} handleChange={handleChange} handleBlur={handleBlur} name="password" label="Password" value={values.password} placeholder="Enter Password" />
            </Grid>
            <Grid item md={6} xs={12} className="position-relative">
              <PasswordInput
                error={errors.passwordConfirm}
                touched={touched.passwordConfirm}
                handleChange={handleChange}
                handleBlur={handleBlur}
                name="passwordConfirm"
                label="Confirm Password"
                value={values.passwordConfirm}
                placeholder="Re-type password"
              />
              {touched.passwordConfirm && values.passwordConfirm.length > 0 && values.password !== values.passwordConfirm && (
                <Typography className="error-color flex align-center cursor-pointer fs-18 fw-400 lh-24 dark-color" variant="body2">
                  <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                  Password doesn't match
                </Typography>
              )}
            </Grid>
          </Grid>
          {values.password.length > 0 && !checkAllSchema && <PasswordErrorMessage password={values.password} setCheckAllSchema={setCheckAllSchema} />}
          <Grid container mt={4} mb={1}>
            <FormControl>
              <FormLabel focused={false} className="fs-16 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro">
                Legal Status
              </FormLabel>
              <RadioGroup
                row
                sx={{ gap: { sm: "80px", xs: "10px" } }}
                defaultValue={Role.INDIVIDUAL}
                name="roleType"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value, TermsConditions: false });
                }}
              >
                <FormControlLabel value={Role.INDIVIDUAL} control={<BpRadio />} label="Individual" />
                <FormControlLabel value={Role.COMPANY} control={<BpRadio />} label="Company" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {values.roleType === Role.COMPANY && (
            <>
              <Grid item xs={12} mb={5.5} mt={4} className="position-relative">
                <AutoComplete
                  filterOptions={filterOptions}
                  error={errors.companyNumber}
                  touched={touched.companyNumber}
                  handleCompanyData={handleCompanyData}
                  handleBlur={handleBlur}
                  searchedComapny={searchedComapny}
                  options={companiesList}
                  id="companyNumber"
                  label="Company Number"
                  value={values.companyNumber}
                  placeholder="Search company number..."
                  isLoading={companyStatus === STATUS.PENDING}
                />
              </Grid>
              <Grid item xs={12} mb={5.5} mt={4.5} className="position-relative">
                <AutoComplete
                  filterOptions={filterOptions}
                  error={errors.companyName}
                  touched={touched.companyName}
                  handleCompanyData={handleCompanyData}
                  handleBlur={handleBlur}
                  searchedComapny={searchedComapny}
                  options={companiesList}
                  id="companyName"
                  label="Company Name"
                  value={values.companyName}
                  placeholder="Search company name..."
                  isLoading={companyStatus === STATUS.PENDING}
                />
              </Grid>

              <Grid container spacing={3} mb={5.5}>
                <Grid item md={6} xs={12} className="position-relative">
                  <TextInput
                    error={errors.postCode}
                    touched={touched.postCode}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    name="postCode"
                    label="Post Code"
                    value={values.postCode}
                    placeholder="Enter post code"
                    adornmentIcon={postCodeIcon}
                  />
                </Grid>

                <Grid item md={6} xs={12} className="position-relative">
                  <TextInput error={errors.city} touched={touched.city} handleChange={handleChange} handleBlur={handleBlur} name="city" label="City" value={values.city} placeholder="Enter city" adornmentIcon={cityIcon} />
                </Grid>
              </Grid>

              <Grid item xs={12} mb={5.5} className="position-relative">
                <TextInput error={errors.address} touched={touched.address} handleChange={handleChange} handleBlur={handleBlur} name="address" label="Address" value={values.address} placeholder="Enter address" adornmentIcon={addressIcon} />
              </Grid>

              <Grid item xs={12} mb={5.5} className="position-relative">
                <InputLabel className={`${errors.country && touched.country && "error-color"} fs-18 text-capitalize fw-700 line-height-24 dark-color`} htmlFor="country">
                  Country
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    defaultValue={values.country}
                    displayEmpty
                    onBlur={handleBlur}
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    error={!!(errors.country && touched.country)}
                    renderValue={(value) => {
                      return (
                        <InputAdornment
                          sx={{
                            display: "flex",
                            height: "100%",
                            marginRight: { xs: "0.5rem" },
                          }}
                          position="start"
                        >
                          <Image src={countryIcon} alt="country Icon" className="user-icon" priority width={24} height={24} objectFit="fill" />
                          <span className="fs-18 dark-color fw-400" style={{ marginLeft: "1rem", height: "100%" }}>
                            {value}
                          </span>
                        </InputAdornment>
                      );
                    }}
                    sx={{
                      "&:hover": {
                        "&& fieldset": {
                          borderColor: "#17884D",
                        },
                      },
                    }}
                  >
                    <MenuItem sx={{ display: "flex", gap: 1, height: "100%" }} key={"UK"} value={"UK"}>
                      <Image width={24} height={24} src={UKFlag} alt="icon" priority />
                      {"UK"}
                    </MenuItem>
                  </Select>
                </FormControl>
                {errors.country && touched.country && (
                  <Typography className="fs-18 fw-400 error-color flex align-center cursor-pointer" variant="body2">
                    <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                    {errors.country}
                  </Typography>
                )}
              </Grid>
            </>
          )}
          <Grid sx={{ flexDirection: "column" }} container mt={"0.5rem"} mb={3.5}>
            <Box className="custom-Checkbox-wrapper" display="flex" alignItems="center" gap="8px">
              <input
                style={{ marginLeft: "0px" }}
                type="checkbox"
                // value={values.TermsConditions}
                checked={values.TermsConditions}
                name={"TermsConditions"}
                id={"TermsConditions"}
                onChange={handleChange}
                className="remember-checkbox"
              />
              <label htmlFor={"TermsConditions"} className="fs-16 fw-600 lh-24 font-source-sans-pro cursor-pointer">
                I have read and accept the Terms & Conditions
              </label>
            </Box>
            {errors.TermsConditions && touched.TermsConditions && (
              <Typography mb={1} className="fs-18 fw-400 error-color flex font-source-sans-pro cursor-pointer" variant="body2">
                <Error sx={{ fontSize: "25px", paddingTop: "3px" }} />
                {errors.TermsConditions}
              </Typography>
            )}

            <Box className="custom-Checkbox-wrapper" display="flex" alignItems="center" gap="8px">
              <input
                type="checkbox"
                style={{ marginLeft: "0px" }}
                name="newsletterStatus"
                id="newsletterStatus"
                // value={values.newsletterStatus}
                checked={values.newsletterStatus}
                // id={"rememberMe"}
                onChange={handleChange}
                className="remember-checkbox"
              />
              <label htmlFor={"newsletterStatus"} className="fs-16 fw-600 lh-24 font-source-sans-pro cursor-pointer">
                I would like to receive newsletter for latest updates
              </label>
            </Box>

            {/* <CheckBox name="TermsConditions" value={values.TermsConditions} handleChange={handleChange} error={errors.TermsConditions} touched={touched.TermsConditions} label="I have read and accept the Terms & Conditions" />
            {errors.TermsConditions && touched.TermsConditions && (
              <Typography mb={1} className="fs-18 fw-400 error-color flex align-center cursor-pointer" variant="body2">
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {errors.TermsConditions}
              </Typography>
            )}
            <CheckBox name="newsletterStatus" value={values.newsletterStatus} handleChange={handleChange} error={errors.newsletterStatus} touched={touched.newsletterStatus} label="I would like to receive newsletter for latest updates" /> */}
          </Grid>
          <CommonButton type="submit" value="Sign Up" width="100%" classNames="w-100 h-48 common-button-hover" flexClasses="flex align-center justify-center" whenToShow={status === STATUS.PENDING} />
          {signupMessage && status !== STATUS.SUCCEEDED && (
            <Typography mt={1} sx={{alignItems:"baseline"}} className="fs-18 fw-400 error-color flex cursor-pointer" variant="body2">
              <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
              {signupMessage}
            </Typography>
          )}
          <Stack direction="row" justifyContent="center" my={2}>
            <Link href="./signIn">
              <span className="fw-700 fs-18 primary-color text-decoration-none cursor-pointer font-source-sans-pro">
                Already have an account?
                <span className="secondary-color"> Sign In</span>
              </span>
            </Link>
          </Stack>
        </form>
      </Box>
      <AuthFooter />
    </FormWrapper>
  );
};

export default SignUpForm;
