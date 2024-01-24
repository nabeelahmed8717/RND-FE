import React from "react";
import AuthLayout from "../../modules/auth/authLayout/AuthLayoutMain";
import { Stack } from "@mui/material";
import VerficationText from "../../modules/auth/identityVerfication/IdentityVerificationText";
import VerificationForm from "../../modules/auth/identityVerfication/IdentityVerificationForm";
import { useRouter } from "next/router";

const IdentityVerfication = () => {

  const router = useRouter();
  // console.log("query",router);

  // const fName:string = firstName ?firstName.toString():""
  // const lName:string = lastName ?lastName.toString():""

  return (
    <AuthLayout>
      <Stack
        className="identity-verification"
        width={"100%"}
        height="100%"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        gap={2}
      >
        <VerificationForm />
        <VerficationText />
      </Stack>
    </AuthLayout>
  );
};

export default IdentityVerfication;
