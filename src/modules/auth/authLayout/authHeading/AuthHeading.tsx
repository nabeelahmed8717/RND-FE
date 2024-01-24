import React, { useEffect, useState } from "react";

import Image from "next/image";

import { Box, Grid } from "@mui/material";

import { AuthSignInHeading } from "../../../../common/constants/auth";

import LogoImage from "../../../../assets/images/common/logo.png";

let prevPath: string | null = "/";

const AuthHeading = () => {
  const [prevURL, setPrevURL] = useState<string | null>("/");

  // animation
  useEffect(() => {
    setPrevURL(sessionStorage.getItem("prevPath"));
  }, [prevURL]);

  if (typeof window !== "undefined") {
    prevPath = sessionStorage.getItem("prevPath");
  }
  return (
    <Grid item lg={7} md={5} sm={12} sx={{ width: "100%" }}>
      <Box className="signin-form-heading w-100 flex direction-column">
        <Box className="logo" position="absolute" top="55px">
          <Image src={LogoImage} alt="logo" priority />
        </Box>
        <div
          className={`signin-heading flex direction-column ${
            prevPath === "/" && "transition-heading"
          } ${prevPath === "/forgotPassword" && "transition-heading"} ${
            prevPath === "/signUp" && ""
          }`}
        >
          <h2 className="fw-700 fs-100 white-color w-100 lh-95">
            Welcome to RND Tax Claims
          </h2>
          <p className="fs-29 white-color lh-48">{AuthSignInHeading}</p>
        </div>
        <Box className="auth-form-footer" position="absolute" bottom="0">
          <h2 className="white-color fs-16 fw-400">
            Copyrights © 2022 All Rights Reserved by{" "}
            <span className="secondary-color fw-600">RND Tax Claims</span>
          </h2>
        </Box>
      </Box>
    </Grid>
  );
};

export default AuthHeading;
