import React, { useEffect, useState } from "react";

import AuditLogSearchFilters from "./auditLogSearchFilters/AuditLogSearchFilters";
import CommonTable from "../../common/components/commonTable/commonTable";
import { auditLogTabledata } from "../../common/mockData/auditLogs";
import { auditLogsTableConstants } from "../../common/constants/auditLogs";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/use-store.hooks";

import { fetchAuditLogs } from "../../redux/auditLogs/auditLogsSlice";
import { TableSkeleton } from "../../common/components/tableSkeleton/TableSkeleton";
import moment from "moment";

const AuditLog = (props: any) => {

  const dispatch = useDispatch();
  const [page, setPage] = React.useState<number>(1);
  const { totalRecords, auditLogsData, status } = useAppSelector(
    (state) => state.auditLogs
  );
  const [isLoading, setIsloading] = useState<boolean>(false);
  // const [collectionData, setCollectionData] = useState(collectionsData)

  console.log("totalRecords", totalRecords)

  const { isShowHeader } = props;
  const [auditLogTable, setAuditLogTable] = useState(auditLogTabledata);
  // const [page, setPage] = React.useState<number>(0);
  const [searchAuditUser, setSearchAuditUser] = useState("");
  const [auditEventName, setAuditEventName] = useState("");
  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [isShowSearchFilter] = useState(isShowHeader ?? true);
  const router = useRouter();
  const makeTableData = (data: any) => {
    if (searchAuditUser && searchAuditUser.length > 0) {
      return data.filter(
        (auditUser: any) =>
          auditUser?.userName
            .toLowerCase()
            .includes(searchAuditUser.toLowerCase()) 
          // auditUser?.userRole
          //   .toLowerCase()
          //   .includes(searchAuditUser.toLowerCase()) ||
          // auditUser?.eventDate
          //   .toLowerCase()
          //   .includes(searchAuditUser.toLowerCase()) ||
          // auditUser?.eventName
          //   .toLowerCase()
          //   .includes(searchAuditUser.toLowerCase()) ||
          // auditUser?.eventTime
          //   .toLowerCase()
          //   .includes(searchAuditUser.toLowerCase())
      );
    } 
    // else if (auditEventName.length > 0) {
    //   return data.filter((eventName: any) =>
    //     eventName.eventName.toLowerCase().includes(auditEventName.toLowerCase())
    //   );
    // } 
    else if (startDate && endDate) {
      return data.filter(
        (item: any) => moment(item.timeStamp).format("MM/DD/YYYY") >= startDate && moment(item.timeStamp).format("MM/DD/YYYY") <= endDate
      );
    } else {
      return data;
    }
  };
  const clearFilterHandler = () => {
    setstartDate(null);
    setendDate(null);
  };
  useEffect(() => { }, [makeTableData]);

  useEffect(() => {
    if(status === 'PENDING'){
      setIsloading(true)
    }else{
      setIsloading(false)
    }
    dispatch(fetchAuditLogs(page));
  }, [page, totalRecords]);



  return (
    <div className="wrapper-main-audit-log">
      <div className="wrapper-inner-audit-log bg-white-shadow">
        <span
          className={`${!isShowSearchFilter ? "fs-18" : "fs-36"
            } fw-700 primary-color font-source-sans-pro lh-32`}
        >
          Audit Log
        </span>
        {!isShowSearchFilter && (
          <span
            className="fw-600 fs-14 blue-color font-source-sans-pro lh-20 float-right cursor-pointer"
            onClick={() => {
              router.push("/auditLog");
            }}
          >
            View All
          </span>
        )}

        {!!isShowSearchFilter && (
          <AuditLogSearchFilters
            auditLogsArray={auditLogTable}
            setSearchAuditUser={setSearchAuditUser}
            searchAuditUser={searchAuditUser}
            auditEventName={auditEventName}
            setAuditEventName={setAuditEventName}
            setPage={setPage}
            startDate={startDate}
            setstartDate={setstartDate}
            endDate={endDate}
            setendDate={setendDate}
            clearFilterHandler={clearFilterHandler}
          />
        )}

        <div className="mb-10" style={{ marginTop: "20px" }}>
        {isLoading ? (
            <TableSkeleton />
          ) : (
            <CommonTable
            cols={auditLogsTableConstants()}
            data={makeTableData(auditLogsData)}
            isPagination={true}
            recordsPerPage={!isShowHeader ? 5 : 8}
            heightOfTable={1000}
            setPage={setPage}
            page={page}
            totalRecords={totalRecords}
          />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default AuditLog;