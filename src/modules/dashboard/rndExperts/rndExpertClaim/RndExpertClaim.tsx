import React from "react";
import Image from "next/image";
import { Button, Grid } from "@mui/material";
import crossBlackImg from "../../../../assets/images/dashboard/rndExperts/close-circle-icon.png";
import { rndExpertClaims } from "../../../../common/mockData/dashboard";
import {
  IRndExpertClaim,
  IRndExpertClaimProps,
} from "../../../../common/interfaces/dashboardInterface";

const RndExpertClaim: React.FC<IRndExpertClaimProps> = (props) => {
  const {
    handleRndSelectUserClaim,
    handleSetPayment,
    rndExpertSelectedClaim,
    handleCloseRndExpertModal,
  } = props;

  console.log(rndExpertSelectedClaim);

  return (
    <Grid
      item
      xs={12}
      lg={8}
      paddingRight={3}
      margin={{ xs: "15px", lg: "15px 0 0 0" }}
      style={{ paddingLeft: "1em" }}
    >
      <div className="flex justify-between align-center">
        <h1 className="fs-24 fw-600 dark-color">Select Claim</h1>
        <Image
          src={crossBlackImg}
          alt="cross"
          className="cursor-pointer"
          onClick={() => handleCloseRndExpertModal()}
          priority
        />
      </div>
      {!!rndExpertClaims.length &&
        rndExpertClaims.map((singleSelectedClaim: IRndExpertClaim) => (
          <div
            key={singleSelectedClaim.id}
            style={{
              height: "107px",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              paddingLeft: "47px",
            }}
            onClick={() => handleRndSelectUserClaim(singleSelectedClaim.id)}
            className={` ${
              rndExpertSelectedClaim === singleSelectedClaim.id &&
              "selected-rnd-expert"
            }  primary-bg-hover`}
          >
            <p className="fs-16 fw-600 lh-24 m-0">
              {singleSelectedClaim.claimName}
            </p>
            <p className="fs-16 fw-600 lh-24 half-opacity m-0">
              {singleSelectedClaim.claimDate}
            </p>
          </div>
        ))}
      <Button
        type="submit"
        disableRipple
        className="fs-16 fw-600 font-source-sans-pro white-color add-payment-btn bg-gradient-green"
        style={{
          marginTop: "1rem",
          width: "122px",
          float: "right",
          textTransform: "capitalize",
        }}
        onClick={() => handleSetPayment()}
      >
        Continue
      </Button>
    </Grid>
  );
};
export default RndExpertClaim;
