import React, { FC, ReactNode } from "react";

import { Box } from "@mui/material";

const FormWrapper: FC<{ children: ReactNode }> = (props) => {
  return (
    <Box
      sx={{
        width: { xl: "750px", lg: "600px", md: "550px", xs: "100%" },
        maxWidth: "750px",
        px: { xs: "16px", sm: "32px", lg: "48px", xl: "80px" },
        py: { xs: "16px", sm: "24px", lg: "30px" },
        boxSizing: "border-box",
        zIndex:2
      }}
      className="bg-white border-radius-40 no-scrollbar sign-up-form showcase-text"
    >
      {props.children}
    </Box>
  );
};

export default FormWrapper;
