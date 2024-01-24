import { Box, Grid } from "@mui/material";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { ICardData } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cardData } from "../../../common/mockData/dashboard";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetRequest } from "../../../helpers/request";

import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";
import { fetchDashboardCount, IDashboardCount, IDashboardCountState } from "../../../redux/dashboardCount/dashboardCountSlice";
import { useDispatch } from "react-redux";

import { ClaimsLogo, ClientsLogo, CollaboratorsLogo} from "../../../assets/export";
import { RootState } from "../../../redux/store";

const Cards = () => {
  
  const  { dashboardCount } : any = useAppSelector((state: RootState) => state.dashboardCount)
  
  const dispatch = useAppDispatch();

  // console.log("dashboardCount", dashboardCountt);

  useEffect(() => {
    dispatch(fetchDashboardCount());
  }, []);

  return (
    // {
    //   id: 1,
    //   title: "Clients",
    //   amount: 3,
    //   img: ClientsLogo,
    //   color: "linear-gradient(275.51deg, #5AC996 0%, #C0F6B8 100%)",
    //   link: "/clients",
    //   classWrap: "clientsLayer",
    // },
    // {
    //   id: 2,
    //   title: "Claims",
    //   amount: 10,
    //   img: ClaimsLogo,
    //   color: "linear-gradient(275.51deg, #006E77 0%, #54C8D1 100%)",
    //   link: "/claims",
    //   classWrap: "claimsLayer",
    // },
    // {
    //   id: 3,
    //   title: "Collaborators",
    //   amount: 3,
    //   img: CollaboratorsLogo,
    //   color: "linear-gradient(275.51deg, #035E5E 0%, #14AAAA 100%)",
    //   link: "/collaborators",
    //   classWrap: "collaboratorsLayer",
    // },

    <Box className="dashboard-cards-wrapper">
      <Grid container gap={{ xs: 2, md: 3, lg: 4 }}>
        <Grid flex={1} minWidth={280} className="cards-wrapper">
          <Link href={"/clients"}>
            <Box
              className="card-wrap clientsLayer"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <h2 className="fw-700 fs-24 white-color card-title">Clients</h2>

                <h4 className="fw-700 fs-56 white-color card-count">
                  {dashboardCount.clientCount}
                </h4>
              </div>
              <Box className="card-img">
                <Image src={ClientsLogo} alt="Card" priority />
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid flex={1} minWidth={280} className="cards-wrapper">
          <Link href={"/claims"}>
            <Box
              className="card-wrap claimsLayer"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <h2 className="fw-700 fs-24 white-color card-title">Claims</h2>

                <h4 className="fw-700 fs-56 white-color card-count">
                  {dashboardCount.claimCount}
                </h4>
              </div>
              <Box className="card-img">
                <Image src={ClaimsLogo} alt="Card" priority />
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid flex={1} minWidth={280} className="cards-wrapper">
          <Link href={"/collaborators"}>
            <Box
              className="card-wrap collaboratorsLayer"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <h2 className="fw-700 fs-24 white-color card-title">
                  Collaborators
                </h2>

                <h4 className="fw-700 fs-56 white-color card-count">
                  {dashboardCount.collaboratorCount}
                </h4>
              </div>
              <Box className="card-img">
                <Image src={CollaboratorsLogo} alt="Card" priority />
              </Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Cards;
