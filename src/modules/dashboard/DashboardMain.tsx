import { Box, Grid, Paper, Stack } from "@mui/material";
import { IAdminSystemPerformance, ICardData, IDashboardPeople } from "../../common/interfaces/dashboardInterface";
import React, { useEffect, useState,useCallBack } from "react";
import { adminSystemPerformance, cardDataCollaborator, dashboardPeople } from "../../common/mockData/dashboard";

import AdminAvailableSpace from "./adminAvailableSpace/adminAvailableSpace";
import AdminDevices from "./adminDevices/adminDevices";
import AuditLog from "../auditLog/AuditLog";
import Cards from "../../modules/dashboard/cards/Cards";
import Collections from "./collections/Collections";
import Image from "next/image";
import Link from "next/link";
import RecentActivitiesMain from "../../modules/dashboard/recentActivities/RecentActivitiesMain";
import Reminders from "../../modules/dashboard/reminders/Reminders";
import RndExperts from "./rndExperts/RndExpertsMain";
import SystemPerformance from "./systemPerformance/systemPerformance";
import TaxCalculator from "./taxCalculator/TaxCalculatorMain";
import TaxClaimsStats from "./taxClaimsStats/taxClaimsStats";
import User from "./user/user";
import { getDummyRoles } from "../../helpers/Tokens";
import localStorage from "redux-persist/es/storage";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";
import { getRndExpertList } from "../../redux/rndExpertList/rndExpertList.api";
import { getRecentActivities } from "../../redux/recentActivites/recentActivites-api";

// import { getDummyRoles } from "../../helpers/Tokens";

// import TaxClaimsStats from "./taxClaimsStats/taxClaimsStats";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderRadius: "0",
  padding: theme.spacing(1),
  border: "none",
}));

const DashboardMain: React.FC = () => {
  const dispatch = useAppDispatch();
  // from redux persist
  // const localStorageRole = useAppSelector(
  //   (state: any) => state.signin.authPersist?.roleInfo?.roles[0]
  // );
  const [localStorageRole, setLocalStorageRole] = useState<string | null>();

  // const rndExpertsListGet = useCallack(() => {
  //   getRndExpertList()
  // }, [])

  var loggedUserRole: any;

  useEffect(() => {
    dispatch(getRndExpertList())
    dispatch(getRecentActivities())
    loggedUserRole = getDummyRoles();
    if (loggedUserRole) setLocalStorageRole(loggedUserRole);
  }, []);

  return (
    <Grid width="100%" height="100%" container flexGrow={1} className="dashboard-main font-source-sans-pro mb-0 pb-0">
      <h1 className="fw-700 fs-40 primary-color lh-48 dashboard-heading font-source-sans-pro">Dashboard</h1>
      {localStorageRole === "INDIVIDUAL" && (
        <>
          <Grid item xs={12} sx={{ pb: { xs: "1rem", md: "1.5rem" } }}>
            <Cards />
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
            <Grid item xs={12} md={6} xl={4} minWidth={280}>
              <TaxCalculator />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                  <RndExperts />
                </Grid>
                <Grid item xs={12}>
                  <Reminders />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} xl={4}>
              <RecentActivitiesMain showYesterdayActivities={true} />
            </Grid>
          </Grid>
        </>
      )}

      {localStorageRole === "COLLABORATOR" && (
        <>
          <Grid
            container
            columnSpacing={{
              xs: "1.125rem",
              md: "2.188rem",
            }}
            rowSpacing={{ xs: "1.125rem", md: "2.125rem", lg: "3.125rem" }}
            // width="100%"
            // height="100%"
            // flexGrow={1}
          >
            <Grid item xs={12} xl={7.8}>
              <Grid
                container
                columnSpacing={{
                  xs: "1.125rem",
                  md: "2.188rem",
                }}
                rowSpacing={{ xs: "1.125rem", md: "2.125rem", lg: "3.125rem" }}
              >
                {cardDataCollaborator.map((card: ICardData) => (
                  <Grid key={card.id} item xs={12} sm={6} className="collaborator-card">
                    <Link href={card.link}>
                      <div className={`flex justify-between card-wrap ${card.classWrap}`}>
                        <div>
                          <h2 className="fw-700 fs-24 white-color card-title">{card.title}</h2>
                          <h4 className="fw-700 fs-56 white-color card-count">{card.amount}</h4>
                        </div>
                        <Box className="card-img">
                          <Image src={card.img} alt="card" priority />
                        </Box>
                      </div>
                    </Link>
                  </Grid>
                ))}
                <Grid item xl={6} md={6}>
                  <TaxCalculator />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <RecentActivitiesMain showYesterdayActivities={true} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} xl={4}>
              <Grid container spacing={{ xs: "1.125rem", md: "2.188rem" }}>
                <Grid item xs={12} md={6} xl={12}>
                  <TaxClaimsStats />
                </Grid>
                <Grid item xs={12} md={6} xl={12}>
                  <Reminders />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}

      {localStorageRole === "SYS_ADMIN" && (
        <>
          <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} mb={{ xs: 2, md: 3, lg: 4 }}>
            <Grid item xs={12} lg={6}>
              <Grid container columnSpacing={{ xs: 2, md: 3, lg: 4 }} rowSpacing={{ xs: 2, md: 3, lg: 3 }}>
                {!!dashboardPeople.length &&
                  dashboardPeople.map((singlePeople: IDashboardPeople) => (
                    <Grid item xs={12} sm={6} lg={12} xl={6} key={singlePeople.id}>
                      <User id={singlePeople.id} name={singlePeople.name} pathLink={singlePeople.pathLink} quantity={singlePeople.quantity} active={singlePeople.active} inactive={singlePeople.inactive} />
                    </Grid>
                  ))}
              </Grid>

              <Grid container columnSpacing={{ xs: 2, md: 3, lg: 4 }} rowSpacing={{ sm: 2, md: 3, lg: 0, xl: 4 }}>
                {adminSystemPerformance.map((singleSPerformance: IAdminSystemPerformance) => (
                  <Grid item xs={12} sm={3} lg={6} xl={3} mt={{ xs: 2, md: 3 }} key={singleSPerformance.id}>
                    <SystemPerformance id={singleSPerformance.id} name={singleSPerformance.name} performanceTime={singleSPerformance.performanceTime} performancePercentage={singleSPerformance.performancePercentage} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Grid container spacing={{ xs: 2, md: 3, lg: 3, xl: 4 }}>
                <Grid item xs={12} sm={6} lg={12} xl={6}>
                  <AdminDevices />
                </Grid>
                <Grid item xs={12} sm={6} lg={12} xl={6}>
                  <AdminAvailableSpace />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <AuditLog isShowHeader={false} />
        </>
      )}

      {localStorageRole === "RND_EXPERT" && (
        <Grid
          container
          columnSpacing={{
            xs: "1.125rem",
            md: "2.188rem",
          }}
          rowSpacing={{ xs: "1.125rem", md: "2.125rem", lg: "3.125rem" }}
        >
          <Grid item xs={12} xl={7.8}>
            <Grid
              container
              columnSpacing={{
                xs: "1.125rem",
                md: "2.188rem",
              }}
              rowSpacing={{ xs: "1.125rem", md: "2.125rem", lg: "3.125rem" }}
            >
              {cardDataCollaborator.map((card: ICardData) => (
                <Grid key={card.id} item xs={12} sm={6} className="collaborator-card">
                  <Link href={card.link}>
                    <Box className={`card-wrap ${card.classWrap}`} display="flex" justifyContent="space-between">
                      <div>
                        <h2 className="fw-700 fs-24 white-color card-title">{card.title}</h2>
                        <h4 className="fw-700 fs-56 white-color card-count">{card.amount}</h4>
                      </div>
                      <Box className="card-img">
                        <Image src={card.img} alt="card" priority />
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
              <Grid item xl={6} md={6}>
                <TaxCalculator />
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Grid container spacing={{ xs: "1.125rem", md: "2.188rem" }}>
                  <Grid item xs={12}>
                    <Collections />
                  </Grid>
                  <Grid item xs={12}>
                    <RecentActivitiesMain showYesterdayActivities={false} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* gap={{ xs: 2, md: 3, lg: 4 }} */}
          <Grid item xs={12} xl={4}>
            <Grid container spacing={{ xs: "1.125rem", md: "2.188rem" }}>
              <Grid item xs={12} md={6} xl={12}>
                <TaxClaimsStats />
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <Reminders />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DashboardMain;
