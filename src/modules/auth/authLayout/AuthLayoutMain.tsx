import { Box } from "@mui/material";
import React from "react";

const AuthLayout = (props: any) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: { xs: "16px", sm: "32px", md: "60px", lg: "5rem" },
        paddingTop: { lg: "4rem" },
        paddingBottom: { lg: "4rem" },
      }}
      className="auth-layout-main"
    >
      {props.children}
      <p className="auth-footer-text white-color fw-400">
        Copyrights © 2022 All Rights Reserved by{" "}
        <span className="secondary-color fw-600"> RND Tax Claims</span>
      </p>
    </Box>
  );
};

export default AuthLayout;
