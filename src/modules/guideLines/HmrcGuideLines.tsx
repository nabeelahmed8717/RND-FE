import type { NextPage } from "next";
import Image from "next/image";
import searchIcon from "../../assets/icons/guideLines/SearchIcon.png";
import React, { useState } from "react";
import { HmrcGuideLinesTableConstants } from "../../common/constants/guideLines";
import { GuidLinesList } from "../../common/mockData/guideLinesList/GuideLinesList";
import CommonTable from "../../common/components/commonTable/commonTable";
import Grid from "@mui/material/Grid";

import { IGuideLinesTableData } from "../../common/interfaces/hmrcGuideLinesInterface";

const HMRCGuidLines: NextPage = () => {
  const [guideLinesTableData, setTableData] =
    useState<IGuideLinesTableData[]>(GuidLinesList);
  const [searchedVal, setSearchedVal] = useState<string>("");
  const [page, setPage] = React.useState<number>(0);

  return (
    <>
      {/* Wrapper div */}
      <div className="wrapper-hrmc-guidelines border-radius-8">
        <h2 className="fw-700 fs-36 lh-32 primary-color font-source-sans-pro flex align-center">
          HMRC Guidelines
        </h2>
        {/* search input */}
        <div className="hmrc-search flex">
          <div className="hmrc-input-search flex justifyCenter">
            <Grid xs={12} md={12}>
              <input
                className="border-radiues-3 fw-600 fs-16 lh-24 font-source-sans-pro"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchedVal(e.target.value)}
              />
            </Grid>
            <div className="hmrc-icon">
              <Image
                src={searchIcon}
                alt="Search Here"
                width="24px"
                height="24px"
                priority
              />
            </div>
          </div>
        </div>
        {/* table */}
        <div className="hmrc-table ">
          <CommonTable
            cols={HmrcGuideLinesTableConstants()}
            data={guideLinesTableData.filter(
              (row) =>
                !searchedVal.length ||
                row.list
                  .toString()
                  .toLowerCase()
                  .includes(searchedVal.toString().toLowerCase())
            )}
            isPagination={false}
            recordsPerPage={19}
            heightOfTable={520}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default HMRCGuidLines;
