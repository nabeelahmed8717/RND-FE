import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import { ApiInventoryConstants } from "../../common/constants/apiInventory";
import { ApiInventoryList } from "../../common/mockData/apiInventory/ApiInventoryList";
import { ApiInventoryTableData } from "../../common/interfaces/apiInventoryInterface";
import CommonTable from "../../common/components/commonTable/commonTable";
import CommonTableTwo from "../../common/components/commonTable/commonTableTwo";
import Image from "next/image";
import { NextPage } from "next";
import { searchIcon } from "../../assets/export";

const ApiInventoryMain: NextPage = () => {
  const [apiInventoryTableData, setTableData] =
    useState<ApiInventoryTableData[]>(ApiInventoryList);
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  return (
    <div className="wrap-api-inventory bg-white-shadow  bg-white border-radius-8">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <h2 className="fw-700 fs-36 lh-32 primary-color font-source-sans-pro ">
            API Inventory
          </h2>

          {/* Search Input */}
          <Box className="wrap-api-search flex">
            <Box
              className="api-search-input border-radiues-3 flex justifyCenter"
              height="54px"
              width={{ xs: "300px", md: "350px", lg: "400px" }}
            >
              <input
                className="border-radiues-3 fw-600 fs-16 lh-24 w-100"
                type="text"
                placeholder="Search by name"
                onChange={(e) => setSearchedVal(e.target.value)}
              />
              <Box className="api-inventory-search-icon">
                <Image
                  src={searchIcon}
                  alt="Search Here"
                  width="24px"
                  height="24px"
                  priority
                />
              </Box>
            </Box>
          </Box>
          {/* search bar end here */}

          {/* common table start here */}
          <div className="wrap-table-api-inventory">
            <CommonTableTwo
              cols={ApiInventoryConstants()}
              data={apiInventoryTableData.filter(
                (row) =>
                  !searchedVal.length ||
                  row.apiName
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toString().toLowerCase())
              )}
              isPagination={true}
              recordsPerPage={8}
              heightOfTable={520}
              setPage={setPage}
              page={page}
            />
          </div>
          {/* common table end here */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ApiInventoryMain;
