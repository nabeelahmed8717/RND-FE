import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import CommonTable from "../../common/components/commonTable/commonTable";
import CollectionsSearchFilters from "./rndexpertsearchfilter/RndExpertCollectionSearchFilter";
import { CollectionsTableData } from "../../common/mockData/rndExpertCollections";
import { CollectionsTableConstants } from "../../common/constants/collections";

import { fetchCollections } from "../../redux/collections/collectionSlice";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/use-store.hooks";
import { TableSkeleton } from "../../common/components/tableSkeleton/TableSkeleton";
// Main function
const RndExpertCollectionsMain = () => {

  const dispatch = useDispatch();
  const [page, setPage] = React.useState<number>(1);
  const { totalRecords, collectionsData, status } = useAppSelector(
    (state) => state.collections
  );
  const [collectionData, setCollectionData] = useState(collectionsData)

  const [searchRndExpertCollectionsName, setSearchRndExpertCollectionsName] =
    useState("");
  const [filterByRndExpertCollectionName, setFilterByRndExpertCollectionName] =
    useState("");
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);


  // console.log("collectionsData", collectionsData)
  // console.log("status", status)


  // Search Filter Function
  const CollectionFilter = (data: any) => {
    if (
      searchRndExpertCollectionsName &&
      searchRndExpertCollectionsName.length > 0
    ) {
      return data.filter((userSearch: any) =>
        userSearch.user
          .toLowerCase()
          .includes(searchRndExpertCollectionsName.toLowerCase())
      );
    } else if (filterByRndExpertCollectionName) {
      return data.filter((collectionSearch: any) =>
        collectionSearch.user
          .toLowerCase()
          .includes(filterByRndExpertCollectionName.toLocaleLowerCase())
      );
    } else {
      return data;
    }
  };

  // console.log(status)

  useEffect(() => {
    if(status === 'PENDING'){
      setIsloading(true)
    }else{
      setIsloading(false)
    }
    dispatch(fetchCollections(page));
  }, [page, totalRecords]);

  return (
    <>
      {/* Wrapper div */}
      <div className="wrapper-rnd-expert-collections border-radius-8 bg-white-shadow bg-white ">
        <Grid
          container
          spacing={2}
          className="flex justify-between align-center wrap-rnd-expert-collection-content "
        >
          <Grid sx={12} md={6} xl={6} lg={6}>
            <h2 className="fw-700 fs-36 lh-32 primary-color font-source-sans-pro flex align-center rnd-expert-title ">
              Collections
            </h2>
          </Grid>

          {/* RND Expert Search Filter */}
          <CollectionsSearchFilters
            rndExperCollectionsArray={CollectionsTableData}
            setSearchRndExpertCollectionsName={
              setSearchRndExpertCollectionsName
            }
            searchRndExpertCollectionsName={searchRndExpertCollectionsName}
            setUserName={setUserName}
            filterByRndExpertCollectionName={filterByRndExpertCollectionName}
            setFilterByRndExpertCollectionName={
              setFilterByRndExpertCollectionName
            }
            userName={userName}
            setPage={setPage}
            className="wrap-rnd-expert-collections-filter flex align-center"
          />
        </Grid>
        {/* Reset Modal */}

        {/* common table */}
        <div className="wrap-rnd-expert-collections-table ">


          {isLoading ? (
            <TableSkeleton />
          ) : (
            <CommonTable
              cols={CollectionsTableConstants()}
              data={collectionsData}
              // data={CollectionFilter(collectionsData)}
              isPagination={true}
              recordsPerPage={8}
              heightOfTable={500}
              setPage={setPage}
              page={page}
              totalRecords={totalRecords}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RndExpertCollectionsMain;
