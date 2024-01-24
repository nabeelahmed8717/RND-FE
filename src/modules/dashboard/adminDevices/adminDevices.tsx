import { Box, Grid } from "@mui/material";

import { IAdminDevices } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import ReactEcharts from "echarts-for-react";
import { adminDevices } from "../../../common/mockData/dashboard";
import blueRectangleIcon from "../../../assets/images/common/blue-rectangle.png";
import { optionsForAdminDevices } from "../../../common/constants/dashboard";
import orangeRectangleIcon from "../../../assets/images/common/orange-rectangle.png";
import purpleRectangleIcon from "../../../assets/images/common/purple-rectangle.png";

const AdminDevices: React.FC = () => {
  return (
    <Box
      // maxWidth={{ xl: "353px" }}
      width="100%"
      height="423px"
      className="devices-wrapper gray-border-1 bg-white"
    >
      <h1 className="fs-18 fw-700 primary-color mt-0">Devices</h1>

      <div className="devices-chart">
        <div className="devices-chart-inner">
          <ReactEcharts
            option={optionsForAdminDevices}
            style={{ height: "304px" }}
            className="m-auto"
          />
        </div>
      </div>

      <Grid
        container
        top="67%"
        className="devices-info-grid justify-between position-absolute"
        columnSpacing={3}
      >
        {!!adminDevices.length &&
          adminDevices.map((singleData: IAdminDevices) => (
            <Grid item key={singleData.id} xs={12}>
              <div className="flex justify-between align-center stats-border-bottom">
                <div className="flex align-center">
                  <span className="mt-1">
                    <Image
                      src={
                        singleData.id === "01"
                          ? purpleRectangleIcon
                          : singleData.id === "02"
                          ? blueRectangleIcon
                          : orangeRectangleIcon
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
                  {singleData.percentage}%
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default AdminDevices;
