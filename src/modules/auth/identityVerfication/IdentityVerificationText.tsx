import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { logo } from "../../../assets/export";

const VerficationText = () => {
  return (
    <Stack
      className="identity-text"
      direction={"column"}
      alignItems={"flex-end"}
    >
      <div className="log">
        <Image src={logo} alt="logo" priority />
      </div>
      <Stack height={"100%"} justifyContent="center">
        <h1 className=" text-right fw-700 fs-100 lh-95 white-color">
          Verify your identity
          <br /> to Get Started
        </h1>
      </Stack>
    </Stack>
  );
};

export default VerficationText;
