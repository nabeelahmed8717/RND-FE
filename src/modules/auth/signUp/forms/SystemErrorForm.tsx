import { Error } from "@mui/icons-material";
import { Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { STATUS } from "../../../../common/constants/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks/use-store.hooks";
import { getSignupEmailVeriff } from "../../../../redux/signupEmailVeriff/signupEmailVeriff-api";
import { displayToastr } from "../../../../redux/toaster/toasterSlice";
import FormWrapper from "./FormWrapper";

const SystemErrorForm= () => {

  const {query:{email}} = useRouter();
  const useEmail:string = email ? email.toString():"";

  const dispatch = useAppDispatch();
  // geting data from signup-email-veriff slice
  const { message, status } = useAppSelector((state) => state.signupEmailVeriff);
// api request for resend verificatuion email
  const handleResentMail = async (email:string) => {
    console.log("clicked");
        dispatch(getSignupEmailVeriff({ email: email }));
  }

  useEffect(() => {
    // display a toast message
    status === STATUS.SUCCEEDED && dispatch(displayToastr({ message: "Verfication Email sent successfully" }));
  }, [status, message, dispatch]);
  
  return (
    <FormWrapper>
      <Stack width="100%" height="100%" minHeight={680} justifyContent="center" alignItems="center" spacing={4} className="cursor-pointer">
        <Typography className="fs-40 fw-700 lh-48 primary-color text-center">System Error</Typography>
        <Typography pt={3} sx={{ opacity: 0.8 }} className="fs-18 fw-700 lh-32 dark-color text-center font-source-sans-pro">
          Unable to send verification email.
        </Typography>
        <Typography sx={{ opacity: 0.8 }} className="fs-18 fw-700 lh-32 primary-color text-center font-source-sans-pro">
          {useEmail}
        </Typography>

        <Typography onClick={()=>handleResentMail(useEmail)} pt={8} sx={{ opacity: 0.8 }} className={`fw-700 ${status === STATUS.PENDING ? "label-color" : "secondary-color"}`}>
        {status === STATUS.PENDING ? "Please wait..." : "Try Again"}
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

export default SystemErrorForm;
