import React from "react";
import { Stack } from "@mui/material";
import SignUpText from "./SignUpText";
import SignUpForm from "./forms/SignUpForm";

const SignUp = () => {
  return (
    <Stack
      className="sign-up"
      width={"100%"}
      height="100%"
      justifyContent="space-between"
      sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      gap={2}
    >
      <SignUpForm />
      <SignUpText />
    </Stack>
  );
};

export default SignUp;
