import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { logo } from "../../../assets/export";

const SignUpText = () => {
  return (
    <Stack
      className="sign-up-text"
      direction={"column"}
      alignItems={"flex-end"}
    >
      <Box zIndex={0} className="log">
        <Image src={logo} alt="logo" priority />
      </Box>
      <Stack height={"100%"} justifyContent="center">
        <Typography
          variant="h1"
          className="text-right fw-700 fs-100 lh-95 white-color font-source-sans-pro"
        >
          Sign Up to
          <br /> Get Started
        </Typography>
        <Typography className="text-right fs-29 lh-48 fw-400 white-color signup-text font-source-sans-pro">
          You can sign up to be a part of RND Tax Claims
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUpText;
