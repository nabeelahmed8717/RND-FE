import { Box, Grid } from "@mui/material";

import { IDataActivity } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import TimeLine from "../../../assets/images/dashboard/recentActivities/recent cicle.png";
import TimeLine1 from "../../../assets/images/dashboard/recentActivities/timeline.png";
import { recentActivityData } from "../../../common/mockData/dashboard";
import { useAppSelector } from "../../../hooks/use-store.hooks";
import { IRecentActivity } from "../../../redux/recentActivites/recentActivites-types";
import { useEffect } from "react";

const RecentActivitiesMain = ({ showYesterdayActivities }: any) => {
  const { status, todayData, yesterdayData } = useAppSelector((state: any) => state.recentActivities);
  console.log(status, todayData, yesterdayData);
  useEffect(() => {}, []);

  return (
    <Grid container className={`${showYesterdayActivities === false ? " h-339 " : " h-579 "} recent-activities-wrapper bg-white`}>
      <Grid
        item
        md={12}
        sm={12}
        xs={12}
        sx={{
          border: "1px solid #DADEE8",
          boxShadow: "-8px 8px 12px rgba(218, 222, 232, 0.4)",
          borderRadius: "8px",
          p: "18px",
        }}
      >
        <Box>
          <p className="fs-24 fw-700 lh-32 primary-color recent-activity-heading" style={{ paddingLeft: "10px" }}>
            Recent Activities
          </p>
          {!!todayData.length && (
            <>
              <p className="fs-12 fw-700 dark-color half-opacity day-status-heading">Today</p>
              <Box className="day-activity-wrapper">
                {todayData.map((recent: IRecentActivity, index: any) => {
                  return (
                    <Grid key={recent.id} container className="timeline-content-wrapper" mt="2px">
                      <Box
                        position="relative"
                        sx={{
                          borderLeft: "3px solid #34bc85",
                          paddingRight: "10px",
                          paddingLeft: "5%",
                          ml: 1,
                        }}
                        minHeight="70px"
                        width="100%"
                      >
                        <Box position="absolute" top="13px" left="-10px" marginTop="-15px">
                          <Image className="timeline-before-circle" src={index === 0 ? TimeLine : TimeLine1} alt="" />
                        </Box>
                        <Box width="100%" display="flex" justifyContent="space-between">
                          <p className="dark-color fs-14 fw-600 lh-20 activity-details m-0">{recent.activityMessage}</p>
                          <span style={{ marginTop: "2px", marginLeft: "50px" }} className="dark-color fw-700 fs-12 half-opacity text-no-wrap activity-time">
                            {/* {recent.time} */}
                          </span>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
        {!!yesterdayData.length && showYesterdayActivities && (
          <Box>
            <p className="dark-color fw-700 fs-12 half-opacity day-status-heading">Yesterday</p>
            <Box className="yesterday-activity-wrapper">
              {yesterdayData.map((singleYesterday: IRecentActivity) => {
                return (
                  <Grid key={singleYesterday?.id} container className="timeline-content-wrapper" mt="2px">
                    <Box
                      position="relative"
                      sx={{
                        borderLeft: "3px solid #34bc85",
                        paddingRight: "16px",
                        paddingLeft: "5%",
                        ml: 1,
                      }}
                      minHeight="70px"
                      width="100%"
                    >
                      <Box position="absolute" top="13px" left="-10px" marginTop="-15px">
                        <Image className="timeline-before-circle" src={TimeLine1} alt="" />
                      </Box>
                      <Box width="100%" display="flex" justifyContent="space-between">
                        <p className="dark-color fs-14 fw-600 lh-20 activity-details m-0">{singleYesterday.activityMessage}</p>
                        <span style={{ marginTop: "2px", marginLeft: "50px" }} className="dark-color fw-700 fs-12 half-opacity text-no-wrap activity-time">
                          {/* {singleYesterday.time} */}
                        </span>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default RecentActivitiesMain;
