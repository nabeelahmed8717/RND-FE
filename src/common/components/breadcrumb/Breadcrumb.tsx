import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import DashboardIcon from "../../../assets/icons/common/DashboardIcon";
import Image from "next/image";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import { Toaster } from "../toaster/toaster";
import Typography from "@mui/material/Typography";

export default function Breadcrumb(props: any) {
  return (
    <div className="warapper-wrap_breadcrumbs flex justify-between">
      <Stack spacing={2}>
        <div className="wrap_breadcrumbs flex align-center  fit-content border-radius-8">
          {/* <Image src={DashboardIcon} alt="DashboardIcon" /> */}
          <DashboardIcon />
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            style={{ marginLeft: "1.094rem" }}
          >
            <Link key="1" href="/dashboard">
              <a className="flex primary-color fw-600 fs-14 half-opacity font-source-sans-pro">
                {props.title}
              </a>
            </Link>
            <Typography
              key="3"
              className={`font-source-sans-pro primary-color fw-700 fs-14 ${
                !!props?.mainComponent && `half-opacity`
              }`}
            >
              {props.currentComp}
            </Typography>

            {!!props?.mainComponent && (
              <Typography
                key="2"
                className="primary-color  font-source-sans-pro fw-700 fs-14 "
              >
                {props?.mainComponent}
              </Typography>
            )}
          </Breadcrumbs>
        </div>
      </Stack>

      <div className="warp-alert-notification flex justify-end ">
        <Toaster />
      </div>
    </div>
  );
}
