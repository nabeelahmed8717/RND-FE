import React, { FC, useEffect, useState } from "react";
import { Error } from "@mui/icons-material";
import { Typography, Stack } from "@mui/material";
import { STATUS } from "../../../../common/constants/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks/use-store.hooks";
import { getSignupEmailVeriff } from "../../../../redux/signupEmailVeriff/signupEmailVeriff-api";
import { displayToastr } from "../../../../redux/toaster/toasterSlice";
import FormWrapper from "./FormWrapper";

const EmailVeriffForm: FC<{ email: string }> = (props) => {
  const dispatch = useAppDispatch();
  // geting data from signup-email-veriff slice
  const { message, status } = useAppSelector((state) => state.signupEmailVeriff);
// api request for resend verificatuion email
 let isDisplayToast = false;
  const handleResentMail = async (email: string) => {
    dispatch(getSignupEmailVeriff({ email: email }));
    isDisplayToast=true
  };

  useEffect(() => {
    // display a toast message
    status === STATUS.SUCCEEDED && isDisplayToast && dispatch(displayToastr({ message: "Verfication Email sent successfully" }));
    isDisplayToast=false
  }, [status, message, dispatch, isDisplayToast]);

  return (
    <FormWrapper>
      <Stack width="100%" height="100%" minHeight={680} justifyContent="center" alignItems="center" spacing={4} className="cursor-pointer email-veriff">
        <Typography className="fs-40 fw-700 lh-48 primary-color text-center heading">Verify your email</Typography>
        <Typography pt={3} className="fs-18 fw-700 lh-32 dark-color text-center veriff-text opacity-4">
          To continue using RND Tax Claims, please verify your email:
        </Typography>
        <Typography width="80%" sx={{ wordWrap: "break-word" }} className="fs-18 fw-700 lh-32 primary-color email text-center opacity-4">
          {props.email}
        </Typography>

        <Typography onClick={() => handleResentMail(props.email)} pt={8} className={`fs-18 lh-32 primary-color text-center opacity-4 resend-txt`}>
          Did not receive email? <span className={`fw-700 ${status === STATUS.PENDING ? "label-color" : "secondary-color"}`}> {status === STATUS.PENDING ? "Please wait..." : "Resend"}</span>
        </Typography>
      {status === STATUS.FAILED && message && (
        <Typography mb={1} className="fs-18 fw-400 error-color flex align-center cursor-pointer" variant="body2">
          <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
          {message}
        </Typography>
      )}
      </Stack>
    </FormWrapper>
  );
};

export default EmailVeriffForm;
