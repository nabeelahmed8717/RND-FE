import React from "react";
import AuthLayout from "../../modules/auth/authLayout/AuthLayoutMain";
import SignUpText from "../../modules/auth/signUp/SignUpText";
import { useRouter } from "next/router";
import SystemErrorForm from "../../modules/auth/signUp/forms/SystemErrorForm";
import { Stack } from "@mui/material";
import EmailVeriffForm from "../../modules/auth/signUp/forms/EmailVeriffForm";

const EmailVerify = () => {
  const {query:{email}} = useRouter();
  const useEmail:string = email ? email.toString():"";
  return (
    <>
      <AuthLayout>
        <Stack className="sign-up" width={"100%"} height="100%" justifyContent="space-between" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }} gap={2}>
          <EmailVeriffForm email={useEmail} />
          <SignUpText />
        </Stack>
      </AuthLayout>
    </>
  );
};

export default EmailVerify;
