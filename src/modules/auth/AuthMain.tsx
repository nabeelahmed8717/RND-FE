import { Box, Grid } from "@mui/material";
import React, { FC } from "react";

import AuthHeading from "./authLayout/authHeading/AuthHeading";

type IProps = {
  children: React.ReactNode;
};

const AuthMain: FC<IProps> = (props: IProps) => {
  return (
    <Box className="signin-wrapper flex direction-column">
      <Box className="signin-container" width="92%" sx={{ margin: "0 auto" }}>
        <Box
          className="signin-content"
          position="relative"
          sx={{
            pt: { xs: "16px", sm: "32px", lg: "40px", xl: "56px" },
            pb: { xs: "16px", sm: "32px", lg: "35px", xl: "40px" },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <AuthHeading />
            {props.children}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthMain;
