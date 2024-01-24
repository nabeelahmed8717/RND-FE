import Image from "next/image";
import ReactEcharts from "echarts-for-react";
import { Grid } from "@mui/material";
import { claimStatsData } from "../../../common/mockData/dashboard";
import { IClaimStatsData } from "../../../common/interfaces/dashboardInterface";
import { optionsForTaxClainmsChart } from "../../../common/constants/dashboard";

const Devices: React.FC = () => {
  return (
    <div className="tax-claims-stats gray-border-1 bg-white">
      <h1 className="fs-24 primary-color fw-700 mt-0">Recent Claim Stats</h1>
      <p className="fs-14 fw-600 lh-20 dark-color half-opacity m-0">
        Nov 29 2020 to Nov 29 2021
      </p>
      <p className="fs-14 fw-600 lh-20 dark-color half-opacity m-0">
        Capso Therapeutics
      </p>

      <div className="tax-claims-chart">
        <div className="tax-claim-inner">
          <ReactEcharts
            option={optionsForTaxClainmsChart}
            style={{ height: "400px" }}
            className="m-auto"
          />
        </div>
      </div>

      <Grid
        container
        top="70%"
        className="stats-grid justify-between position-absolute"
        columnSpacing={3}
      >
        {!!claimStatsData.length &&
          claimStatsData.map((singleData: IClaimStatsData) => (
            <Grid item key={singleData.id} xs={6}>
              <div className="flex justify-between align-center stats-border-bottom">
                <div className="flex align-center">
                  <span className="mt-1">
                    <Image
                      src={singleData.img}
                      alt={singleData.text}
                      priority
                    />
                  </span>
                  <p className="fs-12 fw-600 dark-color">{singleData.text}</p>
                </div>
                <p className="fs-12 fw-600 float-right">
                  {singleData.percentage}
                  {!!singleData.percentage && "%"}
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Devices;
