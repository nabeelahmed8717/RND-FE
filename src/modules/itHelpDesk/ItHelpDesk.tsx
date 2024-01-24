import { Grid, Box, Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { allUser, userData, InitialValues } from "../../common/mockData/itHelpDesk";
import Image from "next/image";
import Sendbtn from "../../assets/images/itHelpDesk/sendBtn.png";
import attachment from "../../assets/images/itHelpDesk/attachment.png";
import ProfilePic from "../../assets/images/itHelpDesk/profilepic.png";
import Doc1 from "../../assets/images/itHelpDesk/doc1.png";
import Doc2 from "../../assets/images/itHelpDesk/doc2.png";
import Doc3 from "../../assets/images/itHelpDesk/doc3.png";
import DocIcon from "../../assets/images/itHelpDesk/docIcon.png";
import DoubleTicks from "../../assets/images/itHelpDesk/doubleTicks.png";
import { searchIcon } from "../../assets/export";



const ItHelpDesk = () => {
  const [usersData, setUserData] = useState(allUser);
  const [selectedUser, setSelectedUser] = useState<any>(allUser[0]);

  console.log(selectedUser);

  const handleSearchFilter = (e: any) => {
    setUserData(
      allUser.filter((value: any) =>
        ["userName"].some((key: string) =>
          value[key].toString().toLowerCase().includes(e.target.value)
        )
      )
    );
  };

  return (
    <Box className="inbox-wrapper font-source-sans-pro" >

      {/* main container */}
      <Box className="inbox-container-wrapper">
        <Grid container>
          {/* left side */}
          <Grid item lg={2.6} md={5} sm={12} xs={12}>
            <Grid className="left-bar"
              sx={{ py: 2.5, height: "100%", background: "#F9F9FB", borderRadius: "7px 0px 0px 7px", }}>
              <TextField
                // fullWidth
                variant="outlined"
                onChange={(e) => handleSearchFilter(e)}
                type="text"
                placeholder="Search"
                sx={{
                  maxWidth: {
                    xs: "auto",
                    sm: "auto",
                    md: "279px",
                    lg: "279px",
                    xl: "279px",
                  },
                  margin: '0 auto',
                  padding: '0px 10px',
                  marginLeft: { xl: "14px", md: "14px", sm: "0px", xs: "0px" },

                  "&.MuiInputBase-root, .MuiOutlinedInput-root": {
                    height: "47px",
                    width: '100%',
                    maxWidth: "279px",
                    backgroundColor: "rgba(52, 58, 64, 0.1)",
                  },
                  "& fieldset": { border: 'none' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"
                      sx={{
                        width: "40px",
                        height: "48px",
                        marginRight: { sm: "1rem" },
                      }}
                    >
                      <Image src={searchIcon} alt="search" priority
                        width={24}
                        height={24}
                        objectFit="fill" />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ px: 4,py:3 }}>
                <h3 className="total-message fs-18 fw-600 lh-24 dark-color">
                  All Messages{" "}
                  <span className="dark-color half-opacity">(30)</span>
                </h3>
              </Box>

              {/*displaying all users */}
              <Box
                sx={{
                  height: "68vh",
                  overflowY: "scroll",
                  // border: "1px solid silver",
                }}
                className="custom-scroll"
              >
                {usersData.map((user: any, i: number) => (
                  <Box className="all-users" onClick={() => setSelectedUser(user)}>
                    <div className="all-msg-boarder">
                      <Divider />
                      <Box
                        className="border-radius-4 cursor-pointer"
                        key={i}
                        sx={{
                          // mt: 2,
                          p: "20px",
                          display: "flex",
                          // justifyContent: "space-between",
                          alignItems: "center",
                          justifyContent: "space-between"

                        }}
                      >
                        <Box sx={{ display: 'flex' }}>
                          <Box
                            sx={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              position: "relative",
                              flexBasis: "50px",
                            }}
                          >
                            <Image
                              src={user.userImg}
                              alt="chat profile image"
                              height="100%"
                              width="100%"
                              className="position-absolute"
                              style={{ objectFit: "cover" }}
                            />
                          </Box>
                          <Box sx={{ pl: "10px" }}>
                            <p className="text-capitalize dark-color opacity-4 fw-600 fs-16 lh-24 m-0">
                              {user.userName}
                            </p>
                            <p className="m-0 fw-600 lh-20 fs-14 mt-1 dark-color half-opacity">
                              {user.title}
                            </p>
                          </Box>
                        </Box>
                        {
                          user.notification &&
                          <Box
                            sx={{
                              height: "28px",
                              width: "28px",
                              borderRadius: "50px",
                              backgroundColor: '#34BC85',
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: '#FFFFFF',
                              ml: 0.5,
                            }}
                          >
                            {user.notification}
                          </Box>
                        }
                      </Box>
                    </div>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* user chat section */}
          {
            selectedUser.id !== '0' ?
              <Grid
                item
                lg={6.6}
                md={7}
                xs={12}

                // sx={{ pl: { md: 3, xs: 0 } }}
                className=""
              >
                <Box
                  className="right-bar"
                  sx={{
                    // px: { md: 2, xs: 1 },
                    position: "relative",
                    height: "100%",
                    background: "#fff",
                  }}
                >
                  {/* chat header */}
                  <Box
                    sx={{
                      p: { md: 2.5, xs: 1.5 },
                      background: "#FFFFFF",
                      boxShadow: "10px 54px 74px rgba(0, 0, 0, 0.03)",
                    }}
                    display="flex"
                    flexWrap="wrap"
                  >
                    <Box
                      sx={{
                        height: "40px",
                        width: "40px",
                        position: "relative",
                        borderRadius: "50%",
                        overflow: 'hidden'
                      }}
                    >
                      <Image
                        src={selectedUser.userImg}
                        alt="chat profile image"
                        style={{ objectFit: 'cover' }}
                        height="100%"
                        width="100%"
                      />
                    </Box>
                    <Box sx={{ pl: 1 }}>
                      <p className="fw-600 lh-24 fs-18 text-capitalize m-0 dark-color opacity-4">
                        {selectedUser.userName}
                      </p>
                      <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
                        <span className="online-sign">
                        </span>
                        <p className="fw-400 fs-14 lh-20 text-capitalize m-0 "></p>online
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ p: { md: 2, xs: 1 } }}>
                    {/* chat messages */}
                    <Box
                      sx={{
                        height: "60vh",
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                      className="custom-scroll"
                    >
                      {selectedUser.messages?.map((msg: any, i: number) => (
                        <Grid item lg={6} md={12} xs={12}
                          display="flex"
                          flexDirection="column"
                          sx={{ py: 1 }}
                          key={i}
                        >
                          <Box
                            className="border-radius-8"
                            sx={{
                              borderRadius: "10px 10px 10px 0px",
                              position: "relative",
                              backgroundColor: `${msg.isSender ? "#F5F7FB" : "#0F5156"
                                }`,
                              // p: { md: "15px", xs: "10px" },
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                xl: "16px",
                              },
                              // maxWidth: "40%",
                              mt: 3,
                              p: "15px",
                              mx: '30px',
                              wordBreak: "break-word",
                              wordWrap: "break-word",
                              overflowWrap: "break-word",
                              color: "#FFFFFF",
                            }}
                          >
                            <h3 className="fs-16 fw-400 lh-24">{msg.message}</h3>
                          </Box>
                          <Box className="fs-16 fw-400 lh-24 dark-color half-opacity" sx={{ mx: "30px" }}> {msg.time}</Box>
                        </Grid>
                      ))}
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {selectedUser.messages?.map((msg: any, i: number) => (
                          <Grid item lg={6} md={12} xs={12}
                            display="flex"
                            alignItems="flex-end"
                            flexDirection="column"
                            sx={{ py: 1 }}
                            key={i}
                          >
                            <Box
                              className="border-radius-8"
                              sx={{
                                borderRadius: "10px 10px 10px 0px",
                                position: "relative",
                                backgroundColor: `${msg.isSender ? "#F5F7FB" : "#F5F7FB"
                                  }`,
                                p: { md: "15px", xs: "10px" },
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  xl: "16px",
                                },
                                // maxWidth: "40%",
                                mt: 3,
                                mx: '30px',
                                wordBreak: "break-word",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                                color: "#5D5F60",
                              }}
                            >
                              <h3 className="fs-16 fw-400 lh-24">{msg.message}</h3>
                            </Box>
                            <Box sx={{ display: "flex", marginRight: '30px', gap: "10px" }}>
                              <h3 className="fs-16 fw-400 lh-24 dark-color half-opacity m-0"> {msg.time}</h3>
                              <Box sx={{ width: "15px", height: "7px" }}>
                                <Image src={DoubleTicks} alt="" width="100%" height="100%" />
                              </Box>
                            </Box>
                          </Grid>

                        ))}
                      </Box>
                    </Box>

                    {/* messages, emoji and attachment */}
                    <Box
                      className="chat-message-section"
                      sx={{pt:"10px",  mb: "10px", position: "relative", border: "1px solid rgba(52, 58, 64, 0.1)", boxShadow: "10px 24px 54px rgba(0, 0, 0, 0.04)", borderRadius: "10px", px: 2, mx: 3.7 }}
                    >
                        <Grid
                          container
                          flexWrap="wrap"
                          className="chat-message-section-inner"
                        >
                          <Grid item md={10} xs={12} >
                            <form>
                              <textarea
                                className="chat-message-input"
                                autoComplete="off"
                                wrap="hard"
                                placeholder="Type your mesage here . . ."
                                name="message"
                              />
                            </form>
                          </Grid>
                          <Grid item md={2} xs={12}>
                            <Box
                              sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                mr: "10px",
                              }}
                            >
                              <IconButton
                                disableRipple
                                aria-label="upload picture"
                                component="label"
                                sx={{ mr: "10px", opacity: "0.5" }}
                              >
                                <input hidden type="file" />
                                <Image
                                  src={attachment}
                                  className="cursor-pointer"
                                  alt="attachment file"
                                  priority
                                  width={24}
                                  height={24}
                                  objectFit="fill"
                                />
                              </IconButton>
                              <Image
                                src={Sendbtn}
                                className="cursor-pointer"
                                alt="emoji image"
                                priority
                                width={24}
                                height={24}
                                objectFit="fill"
                                chat-message-section
                                style={{ opacity: "0.5" }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>

              </Grid>
              :
              <Grid
                item
                md={7}
                xs={12}
                className=""
              >
                {/* some message or image */}
                <Box
                  className=" border-radius-8"
                  sx={{
                    background: "#FFFFFF",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "60vh",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p className="m-0 opacity-5">No Chat is selected</p>
                  </Box>
                </Box>
              </Grid>
          }

          {/* user profile */}
          <Grid item lg={2.6} md={12} sm={12} xs={12}>
            <Grid
              className=""
              sx={{
                py: 2.5,
                height: "100%",
                background: "#F9F9FB",
                borderRadius: "0px 7px 8px 0px",
              }}
            >
              <Box sx={{ px: "40px" }}>
                <Image src={ProfilePic} alt="" />
              </Box>
              <Box sx={{ px: 5, py: 4 }}>
                {userData.map((userProfile) => {
                  return (
                    <Box sx={{ marginBottom: "20px" }}>
                      <Box className="fs-14 fw-600 lh-20 dark-color half-opacity">
                        {userProfile.heading}
                      </Box>
                      <Box sx={{ wordBreak: "break-all" }} className="fs-16 fw-400 lh-24 dark-color">
                        {userProfile.span}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: "30px",
                }}
                className=""
              >
                <h3 className="fs-16 fw-700 lh-24 dark-color images-section">
                  Images
                </h3>
                <h3 className="fs-14 fw-400 lh-20 dark-color opacity-4 images-section cursor-pointer">
                  Show All
                </h3>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  px: "30px",
                  marginBottom: "20px",
                }}
                className=""
              >
                <Grid item md={3}>
                  <Image src={Doc1} alt="" />
                </Grid>
                <Grid item md={3}>
                  <Image src={Doc2} alt="" />
                </Grid>
                <Grid item md={3}>
                  <Image src={Doc3} alt="" />
                </Grid>
              </Box>

              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: "30px",
                }}
                className=""
              >
                <h3 className="fs-16 fw-700 lh-24 dark-color images-section">
                  Documents
                </h3>
                <h3 className="fs-14 fw-400 lh-20 dark-color opacity-4 images-section cursor-pointer">
                  Show All
                </h3>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: "30px",
                }}
              >
                <Image src={DocIcon} alt="" />
                <Box sx={{ paddingLeft: "10px" }}>
                  <h3 className="fs-14 fw-600 lh-20 dark-color m-0 doc-section">
                    My tax claim
                  </h3>
                  <h5 className="fs-14 fw-400 lh-20 dark-color m-0 opacity-half doc-section">
                    197 kb
                  </h5>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: "30px",
                  marginTop: "12px"
                }}
              >
                <Image src={DocIcon} alt="" />
                <Box sx={{ paddingLeft: "10px" }}>
                  <h3 className="fs-14 fw-600 lh-20 dark-color m-0 doc-section">
                    rnd doc
                  </h3>
                  <h5 className="fs-14 fw-400 lh-20 dark-color m-0 opacity-half doc-section">
                    523 kb
                  </h5>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default ItHelpDesk;