import React, { useEffect, useState } from "react";
import { Box, InputLabel, InputAdornment, Typography, FormControl, Select, MenuItem, Button, Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import {personIcon, countryIcon, documentIcon, UKFlag} from "../../../assets/export";
import { initialValues, validationSchema } from "./validation";

import { Error } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import { documentTypes } from "../../../common/constants/identityVerfication";
import TextInput from "../../../common/components/inputs/TextInput";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";
import { createVeriffSession } from "../../../redux/verficationSession/verfication-session-api";
import { useRouter } from "next/router";
import { createVeriffFrame, MESSAGES } from '@veriff/incontext-sdk';
import IdenityInfoDialog from "./Dialogs/IdenityInfoDialog";
import CommonButton from "../../../common/components/buttons/CommonButton";
import { STATUS } from "../../../common/constants/store";

const VerificationForm = () => {
  const {
    data: { url },
  } = useAppSelector((state) => state.identityVeriff);
  const {push,
    query: { firstName, lastName, id, sessionUrl },
  } = useRouter();

  const [veriffData, setVeriffData] = useState({ fName: "", lName: "", userId: "", sessionUrl:"" });
  const {status} = useAppSelector(state => state.identityVeriff)
  const dispatch = useAppDispatch();
  // formik
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(createVeriffSession({ ...values, id: veriffData.userId }));
    },
  });

  useEffect(() => {
    // to re-render component for update the input values state
    setVeriffData({
      fName: firstName ? firstName.toString() : "",
      lName: lastName ? lastName.toString() : "",
      userId: id ? id.toString() : "",
      sessionUrl: sessionUrl ? sessionUrl.toString() : "",
    });

    //to update the formik values object for auto papolate first name and last name in form
    values.firstName = veriffData.fName;
    values.lastName = veriffData.lName;
  }, [veriffData.fName, veriffData.lName, values, firstName, lastName, id, sessionUrl]);

  useEffect(()=>{
    if(url || veriffData.sessionUrl){
    const veriffFrame = createVeriffFrame({ url: url || veriffData.sessionUrl,
      onEvent: (msg)=> {
        switch(msg) {
          case MESSAGES.CANCELED:
            //
            break;
            case MESSAGES.FINISHED:
              veriffFrame.close();
              push("/signIn")
              break;
        }
      } })
    }
  },[url,veriffData.sessionUrl, push])

  return (
    <Box
      sx={{
        overflowY: "auto",
        width: { xl: "750px", lg: "600px", md: "550px", xs: "100%" },
        maxWidth: "750px",
        px: { xs: "16px", sm: "32px", lg: "48px", xl: "80px" },
        py: { xs: "16px", sm: "24px", lg: "30px", xl: "40px" },
        boxSizing: "border-box",
      }}
      className="bg-white border-radius-40 no-scrollbar identity-form"
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h2"
          mt={4}
          mb={5}
          className="fs-40 line-height-48 primary-color fw-700"
        >
          Verify your identity
        </Typography>
        <Grid container spacing={3} mb={4}>
          <Grid item md={6} xs={12}>
            <TextInput
              error={errors.firstName}
              touched={touched.firstName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="First Name"
              name="firstName"
              value={values.firstName}
              placeholder="Enter first name"
              adornmentIcon={personIcon}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextInput
              error={errors.lastName}
              touched={touched.lastName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              name="lastName"
              label="Last Name"
              value={values.lastName}
              placeholder="Enter last name"
              adornmentIcon={personIcon}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} mb={5.5}>
          <InputLabel
            className={`${
              errors.country && touched.country && "error-color"
            } fs-18 text-capitalize fw-700 line-height-24 dark-color`}
            htmlFor="country"
          >
            Country
          </InputLabel>
          <FormControl fullWidth>
            <Select
              defaultValue="UK"
              displayEmpty
              onBlur={handleBlur}
              error={!!(errors.country && touched.country)}
              renderValue={(value) => {
                return (
                  <InputAdornment
                    sx={{ display: "flex", gap: 1, height: "100%" }}
                    position="start"
                  >
                    <Image src={countryIcon} alt="icon" />
                    {value}
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
              <MenuItem
                sx={{ display: "flex", gap: 1, height: "100%" }}
                key={"UK"}
                value={"UK"}
              >
                <Image src={UKFlag} alt="icon" />
                {"UK"}
              </MenuItem>
            </Select>
          </FormControl>
          {errors.country && touched.country && (
            <Typography
              className="error-color flex align-center cursor-pointer"
              variant="body2"
            >
              <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
              {errors.country}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} mb={4}>
          <InputLabel
            sx={{ pb: 1 }}
            className={`${
              errors.country && touched.country && "error-color"
            } fs-18 text-capitalize fw-700 line-height-24 dark-color`}
            htmlFor="documentType"
          >
            Document Type
          </InputLabel>
          <FormControl fullWidth>
            <Select
              displayEmpty
              name="documentType"
              value={values.documentType}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(errors.documentType && touched.documentType)}
              renderValue={(value) => {
                if (values.documentType.length === 0) {
                  return (
                    <InputAdornment
                      sx={{ display: "flex", gap: 1, height: "100%" }}
                      position="start"
                    >
                      <Image src={documentIcon} alt="icon" />
                      <Typography sx={{ opacity: 0.8 }} component="span">
                        Select document type{" "}
                      </Typography>
                    </InputAdornment>
                  );
                } else {
                  return (
                    <InputAdornment
                      sx={{ display: "flex", gap: 1, height: "100%" }}
                      position="start"
                    >
                      <Image src={documentIcon} alt="icon" priority />
                      {value}
                    </InputAdornment>
                  );
                }
              }}
              sx={{
                "&:hover": {
                  "&& fieldset": {
                    borderColor: "#17884D",
                  },
                },
              }}
            >
              {documentTypes.map((item) => (
                <MenuItem
                  sx={{ display: "flex", gap: 1, height: "100%" }}
                  key={item.value}
                  value={item.value}
                >
                  {item.lable}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.documentType && touched.documentType && (
            <Typography
              className="error-color flex align-center cursor-pointer"
              variant="body2"
            >
              <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
              {errors.documentType}
            </Typography>
          )}
        </Grid>
        <CommonButton type="submit" value="Continue" width="100%" classNames="w-100 h-48 fw-700 fs-18 common-button-hover" flexClasses="flex align-center justify-center" whenToShow={status === STATUS.PENDING} />
        <Stack direction="row" justifyContent="center" mt={3.5}>
          <IdenityInfoDialog />
        </Stack>
      </form>
    </Box>
  );
};

export default VerificationForm;
