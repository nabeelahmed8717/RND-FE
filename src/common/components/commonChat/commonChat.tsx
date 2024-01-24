import React from "react";
import { Box, Grid, Stack, Modal, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";
import smiley from "../../../assets/icons/chat/smiley.png";
import CircleIcon from "@mui/icons-material/Circle";
import ChatIcon from "@mui/icons-material/Chat";
import {chatData} from "../../mockData/chatData/chatData"
const style = {
  position: "absolute" as "absolute",
  top: "29%",
  left: "30%",
  width: 134,
  height: 84,
  transform: "translate(-50%, -50%)",
  background: "#FCFAFA",
  border: "transparent",
  outline: "none",
  cursor: "pointer",
  borderRadius: "4px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)",
  p: 2,
};
const CommonChat = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const chatClickHandler = () =>{

  }
  return (
    <div className="wrap-main-chat-box">
      <Box
      sx={{width:{xl:"350px",lg:"350px",md:"350px",sm:"350px",xs:"auto"}}} className="wrapper-chat-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
              <div className="chat-top-main-heading flex justify-between align-center ">
                <h3 className="fw-500 fs-32  white-color chat-heading ">
                  Welcome!
                </h3>
                <MoreVertIcon
                  onClick={handleOpen}
                  className="white-color"
                  sx={{ cursor: "pointer" }}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={style}
                    className="chat-modal-ui  flex justify-center align-center flex direction-column"
                  >
                    <Typography
                      id="modal-modal-description"
                      className="fw-400 fs-16 lh-20"
                      sx={{ color: "#152536" }}
                    >
                      Help Guide
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      className="fw-400 fs-16 lh-20"
                      sx={{ mt: 2, color: "#152536" }}
                    >
                      My Enquiries
                    </Typography>
                  </Box>
                </Modal>
              </div>

              <p className="fw-400 fs-12  white-color chat-text ">
                Questions? Chat with us.
              </p>
              <p className="fw-400 fs-12  white-color chat-text">
                Support is offline
                <CircleIcon
                  sx={{ color: "#7A8DA0", width: "8px", height: "8px" }}
                />
              </p>
              <Box className="wrap-chat-main-content"
              sx={{width:{xl:"350px",lg:"350px",md:"350px",sm:"350px",xs:"auto"}}} >
                <div className="wrap-chat-default-message flex direction-column  justify-center">
                  <div className=" flex justify-center align-center chat-hi">
                    <p className=" fs-12 fw-400  font-source-sans-pro  primary-color flex justify-center align-center">
                      Hi!
                    </p>
                  </div>
                  <Stack direction="row" spacing={1} >
                    <div className="flex justify-center align-center bg-primary white-color chatbot-icon">
                      <ChatIcon sx={{ width: "15px", height: "15px" }} />
                    </div>
                    <div className=" flex justify-center align-center chat-what">
                      <p className=" fs-12 fw-400  font-source-sans-pro flex justify-center align-center primary-color">
                        What Can I help with you with?
                      </p>
                    </div>
                  </Stack>
                </div>

                <div className="wrap-chat-default-message flex direction-column  justify-center">
                  <Stack direction="row-reverse" spacing={1} >
                    <div className="flex justify-center align-center bg-primary white-color chatbot-icon">
                      <ChatIcon sx={{ width: "15px", height: "15px" }} />
                    </div>
                    <div className=" fs-12 fw-400  font-source-sans-pro flex justify-center align-center chat-what">
                      <p className=" fs-12 fw-400  font-source-sans-pro flex justify-center align-center primary-color">
                        What Can I help with you with?
                      </p>
                    </div>
                  </Stack>
                </div>

                <div className="wrap-chat-options flex direction-column  justify-center">
                  {chatData.map((data:any,id:number)=>{
                      return(
                        <p className=" chat-margin border-radius-20 font-source-sans-pro fw-400 fs-12 primary-color flex justify-center align-center  chat-options-text-tax-relief" key={id} onClick={(item)=>chatClickHandler()}>
                          {data.questions}
                      </p>
                      )
                  })}
                  {/* <p className="border-radius-20 font-source-sans-pro fw-400 fs-12 primary-color flex justify-center align-center  chat-options-text-tax-relief">
                    How to claim tax relief?
                  </p>

                  <p className="border-radius-20 font-source-sans-pro fw-400 fs-12 primary-color flex justify-center align-center chat-options-text-eligibilty"> 
                    Eligibility criteria for RND projects
                  </p> */}
                </div>

                <div className="chat-footer-action">
                  <div className="chat-input flex justify-between align-center">
                    <input
                      type="text"
                      placeholder="Enter text here... "
                      className="chat-input-field"
                    />
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ marginRight: "13px" }}
                      className="file-input  justify-end align-center fw-400 fs-12"
                    >
                      <Image
                        src={smiley}
                        alt="emoji"
                        width="18px"
                        height="18px"
                        style={{ cursor: "pointer" }}
                      />
                      <AddCircleIcon
                        sx={{
                          color: "#ADADAE",
                          width: "22px",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      />
                    </Stack>
                  </div>
                </div>

                {/* <div className="wrap-chat-person-two"></div> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CommonChat;
