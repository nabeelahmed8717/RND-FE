import { Grid, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { collectionsData } from "../../../common/mockData/dashboard";

const Collections = () => {
  return (
    <Grid container className="collection-wrapper">
      <Grid item xs={12}>
        <Box className="bg">
          <Box className="layers">
            <Box
              className=""
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="20px"
            >
              <Box display="flex">
                <div>
                  <h2 className="fw-700 fs-24 white-color">
                    {collectionsData.title}
                  </h2>
                  <h4 className="fw-700 fs-24 white-color">
                    £ {collectionsData.amount}
                  </h4>
                </div>
                <div className="card-img">
                  <Image
                    src={collectionsData.img}
                    alt="pound symbol"
                    priority
                  />
                </div>
              </Box>

              <h2 className="fw-600 fs-14 card-title">
                {collectionsData.accountNumber}
              </h2>
            </Box>
            <Box
              className=""
              display="flex"
              justifyContent="space-between"
              p="20px"
            >
              <div>
                <h2 className="fw-400 fs-14 card-title">Account Name</h2>
                <h4 className="fw-700 fs-16 white-color card-count">
                  {collectionsData.accountName}
                </h4>
              </div>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Collections;
