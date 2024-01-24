import { Grid,Avatar } from "@mui/material";

import Image, { StaticImageData } from "next/image";

import calanderImg from "../../../../assets/images/dashboard/rndExperts/calendar-add.png";
import messageImg from "../../../../assets/images/dashboard/rndExperts/message-text.png";
import { Dispatch, SetStateAction } from "react";
import {
  IRndExpertUser,
  IRndExpertModal,
} from "../../../../common/interfaces/dashboardInterface";
// import { rndExpertsData } from "../../../../common/mockData/dashboard";

const RndExpertModalUser: React.FC<IRndExpertModal> = (props) => {
  const { rndCurrentExpertUser, handleRndExpertCurrentUser,rndExpertsData } = props;

  return (
    <>
      <h1 className="fs-24 fw-600 dark-color lh-32 modal-heading">
        RND Expert
      </h1>
      {!!rndExpertsData.length &&
        rndExpertsData.map((singleRndUser) => (
          <div
            key={singleRndUser.id}
            onClick={() => handleRndExpertCurrentUser(singleRndUser.id)}
          >
            <Grid
              id="modal-expert"
              container
              className={` ${
                rndCurrentExpertUser === singleRndUser.id &&
                "selected-rnd-expert"
              } align-center justify-between modal-expert primary-bg-hover`}
            >
              <Grid item xs={2} paddingLeft="30px">
              <Avatar
                alt={`${singleRndUser.firstName} ${singleRndUser.lastName}`}
                className="capitalize"
                src={singleRndUser.img}
                sx={{ width: 50, height: 50 }}
                >
                  {`${singleRndUser.firstName.slice(0,1)} ${singleRndUser.lastName.slice(0,1)}`}
                  </Avatar>
              </Grid>
              <Grid
                item
                style={{ marginLeft: "0.5rem" }}
                xs
                className="flex justify-between align-center"
                borderBottom="1px solid #343a4038"
                sx={{ height: "107px" }}
              >
                <div>
                  <p className="fs-16 fw-600 lh-24 m-0 capitalize">{`${singleRndUser.firstName} ${singleRndUser.lastName}`}</p>
                  {/* <p className="fs-14 fw-600 lh-20 half-opacity m-0 capitalize">
                    {singleRndUser.visibile}
                  </p> */}
                </div>
                <div style={{ padding: "0em 2em 0em 0em" }}>
                  <span className="calender-span">
                    <Image
                      src={calanderImg}
                      alt="calander"
                      className="calender-hover"
                      priority
                    />
                  </span>
                  <Image
                    src={messageImg}
                    alt="message"
                    className="message-hover"
                    priority
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
    </>
  );
};
export default RndExpertModalUser;
