import { CalenderIcon, MessageIcon, horizantalImg } from "../../../../assets/export";
// import Avatar from '@mui/joy/Avatar';
import { Grid, Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { rndExpertUserInterface } from "../../../../common/interfaces/dashboardInterface";
// import { rndExpertUsers } from "../../../../common/mockData/dashboard";

const RndExpertUser: React.FC<rndExpertUserInterface> = (props) => {
  const { handleOpenRndExpertModal, rndExpertUsers,handleRndExpertCurrentUser } = props;
  console.log(rndExpertUsers);
  

  return (
    <Grid
      container
      // mt="0.5rem"
      style={{ boxSizing: "border-box" }}
      flexDirection="row"
      // sx={{ height: { xs: "270px", sm: "136px", md: "136px", xl: "132px" } }}
      // height="579px"
      className="expert-users-grid"
      pb="1em"
    >
      {!!rndExpertUsers.length &&
        rndExpertUsers.slice(0, 2).map((singleUser: any) => (
          <React.Fragment key={singleUser.id}>
            <Grid item xs={12} lg={5.7} margin="0.2rem" className={`${singleUser.id === "2" && "d-none-media"}  expert-users flex align-start border-radius-8`}>
              <div>
                {/* {singleUser.img */}
                <Avatar
                alt={`${singleUser.firstName} ${singleUser.lastName}`}
                className="capitalize"
                src={singleUser.img}
                sx={{ width: 50, height: 50 }}
                >
                  {`${singleUser.firstName.slice(0,1)} ${singleUser.lastName.slice(0,1)}`}
                  </Avatar>
                {/* <Image
                    src={singleUser.img}
                    alt="kris"
                    className="expert-left-img border-radius-50"
                    layout="fixed"
                    width="50%"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                      width: "100%",
                    }}
                    height={50}
                    priority
                    objectFit="contain"
                  /> */}
                {/* // <Avatar>JG</Avatar> */}
                {/* } */}
              </div>
              <div className="expert-inner-div" style={{ marginLeft: "1rem" }}>
                <p className="fs-16 fw-600 lh-24 dark-color m-0 text-no-wrap capitalize">{`${singleUser.firstName} ${singleUser.lastName}`}</p>
                {/* <p className="fs-14 fw-600 lh-20 dark-color half-opacity m-0 capitalize">
                  {singleUser.visibile}
                </p> */}
                <div className="flex expert-icons">
                  <div style={{ margin: "1rem 1.5rem 0 0" }} className="cursor-pointer" onClick={()=>{handleOpenRndExpertModal();handleRndExpertCurrentUser(singleUser.id)}}>
                    <CalenderIcon />
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <MessageIcon />
                  </div>
                </div>
              </div>
            </Grid>
            {singleUser.id === "1" && (
              <Grid item xs={0.05} margin="0.2rem auto" className="expert-middle-line" sx={{ display: { xs: "none", xl: "block" } }}>
                <Image src={horizantalImg} alt="horizantal" priority />
                {singleUser.length}
              </Grid>
            )}
          </React.Fragment>
        ))}
    </Grid>
  );
};
export default RndExpertUser;
