import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  background: "red",
  width: 22,
  height: 22,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px #0F5156, inset 0 -1px 0 #0F5156",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#0F5156",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 22,
    height: 22,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#0F5156",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps | any) {
  return (
    <Radio
      sx={{
        ml: "0.2rem",
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default BpRadio;
