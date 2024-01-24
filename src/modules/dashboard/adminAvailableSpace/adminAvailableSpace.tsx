import { Box, CircularProgress, Grid, Stack } from "@mui/material";

import { IAdminAvailableSpace } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import ReactEcharts from "echarts-for-react";
import { adminAvailableSpace } from "../../../common/mockData/dashboard";
import darkRectangleIcon from "../../../assets/images/admin-dashboard/dark-rectangle.png";
import greenRectangleIcon from "../../../assets/images/admin-dashboard/green-rectangle.png";
import { optionsForAdminAvailableSpace } from "../../../common/constants/dashboard";

const AdminAvailableSpace: React.FC = () => {
  return (
    <Box
      // maxWidth={{ xl: "353px" }}
      width="100%"
      height="423px"
      className="available-spaces-wrapper gray-border-1 bg-white"
    >
      <h1 className="fs-18 fw-700 primary-color mt-0">Available Space</h1>

      <div className="devices-chart">
        <div className="devices-chart-inner">
          <ReactEcharts
            option={optionsForAdminAvailableSpace}
            style={{ height: "250px" }}
            className="m-auto"
          />
        </div>
      </div>

      <Grid
        container
        top="76.5%"
        className="devices-info-grid justify-between position-absolute"
        columnSpacing={3}
      >
        {!!adminAvailableSpace.length &&
          adminAvailableSpace.map((singleData: IAdminAvailableSpace) => (
            <Grid item key={singleData.id} xs={12}>
              <div className="flex justify-between align-center stats-border-bottom">
                <div className="flex align-center">
                  <span className="mt-1">
                    <Image
                      src={
                        singleData.id === "01"
                          ? greenRectangleIcon
                          : darkRectangleIcon
                      }
                      alt="rectangle image"
                      width="20px"
                      height="20px"
                      priority
                    />
                  </span>
                  <p className="fs-12 fw-600 dark-color">{singleData.text}</p>
                </div>
                <p className="fs-12 fw-600 float-right">
                  {singleData.percentage} mb
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default AdminAvailableSpace;
