import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { Avatar, Backdrop, Box, Button, Fade, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { CalendarPaymentIcon, addSquareImg, arrowLeftBlackImg, clockBlackImg, crossBlackImg, errorVector, krisSmImg, rightDoubleArrowImg, successTickImg } from "../../../assets/export";
import dayjs, { Dayjs } from "dayjs";
import { initialValues, validationSchema } from "./validation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BpRadio from "../../../common/components/buttons/BpRadio";
import { DayValue } from "react-modern-calendar-datepicker";
import { IRndExpertUser } from "../../../common/interfaces/dashboardInterface";
import Image from "next/image";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers";
import RndExpertClaim from "./rndExpertClaim/RndExpertClaim";
import RndExpertModalUser from "./rndExpertModalUser/RndExpertModalUser";
import RndExpertUser from "./rndExpertUser/RndExpertUser";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import calendarSmBlackImg from "../../../assets/images/dashboard/rndExperts/calendar-sm-black.png";
import { defaultValue } from "../../../common/mockData/dashboard";
// import { rndExpertsData } from "../../../common/mockData/dashboard";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { getSlots } from "../../../redux/availableSlots/availAbleSlots.api";
import { getdays } from "../../../redux/availableDays/availableDays.api";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";
import { createCalendarMeeting } from "../../../redux/calenderMeeting/calenderMeetingSlice";
import { IRndExpert, IRndExpertState } from "../../../redux/rndExpertList/rndExpertList-type";
import { ISlots } from "../../../redux/availableSlots/availableSlots-type";

// Date Picker Lib

// Date calendar

// import { rndExpertUserInterface } from "../../../common/interfaces/dashboard";

// Rnd Experts Modals
const rndExpertModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "auto", lg: "1000px" },
  height: { xs: "90vh", lg: "500px" },
  overflow: { xs: "auto", lg: "hidden" },
  // 1000px
  // height: "500px",
  background: "#FFFFFF",
  border: "none",
  outline: "none",
  borderRadius: "8px",
  boxShadow: "0px 2px 48px rgba(0, 0, 0, 0.08)",
  // p: 2,
};

// Add Payment Modal Style
const addPaymentModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // minWidth: "384px",
  minWidth: { xs: "290px", md: "340px", lg: "384px" },
  minHeight: "171px",
  background: "#FFFFFF",
  outline: "none",
  borderRadius: "8px",
  border: "1px solid #DADEE8",
  boxShadow: "-8px 8px 12px rgba(218, 222, 232, 0.4)",
  // p: 2,
};

const RndExpertsMain: React.FC = () => {
  // get rnd expert data from redux store
  const { message: rndExpertMessage, status: rndExpertStatus, data: rndExprtList } = useAppSelector((state: any) => state.rndExpertList);
  const { message: availableMessage, status: availDaysStatus, days: rndExpertAvailableDays } = useAppSelector((state: any) => state.rndExpertAvailableDays);
  const { message: slotsMessage, status: slotStatus, slots } = useAppSelector((state: any) => state.availableSlots);
  // rnd expert states for store data
  const [slotsList, setslotsList] = useState<ISlots[]>(slots);
  const [rndExpertsData, setRndExpertsData] = useState<IRndExpert[]>(rndExprtList);
  const [highlightedDays, setHighlightedDays] = useState(rndExpertAvailableDays);

  const [isRndExpertModal, setIsRndExpertModal] = useState<boolean>(false);
  const [isShowBookASession, setIsShowBookASession] = useState<boolean>(false);
  const [dateSet, setDateSet] = useState<string | null>();
  const [isSessionBooked, showIsSessionBooked] = useState<boolean>(false);
  const [isShowInitialPayment, setIsShowInitialPayment] = useState<boolean>(false);
  const [renderModalContent, setRenderModalContent] = useState<string>("");
  const [rndCurrentExpertUser, setRndCurrentExpertUser] = useState<string | undefined>("1");
  const [rndExpertSelectedClaim, setRndExpertSelectedClaim] = useState<number>(1);
  const [selectedClaim, setSelectedClaim] = useState<number>(1);
  const [bookSingleExpert, setBookSingleExpert] = useState<IRndExpertUser | undefined>();

  const [rndExpertPaymentCardValue, setRndExpertPaymentCardValue] = useState("firstCard");

  const [selectedDay, setSelectedDay] = useState<DayValue>(defaultValue);

  // api call method
  const dispatch = useAppDispatch();

  // select rnd expert onclick and show specific available dates for that exoert
  const setRndCurrentExpertUserrr = (singleRndUser: string | undefined, date?: string | null) => {
    let newDate = new Date();
    // get current month first and last date for rnd expert availability
    let firstDay = dayjs(new Date(newDate.getFullYear(), newDate.getMonth(), 1)).format("YYYY-MM-DD");
    let lastDay = dayjs(new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)).format("YYYY-MM-DD");
    //get request for single users available days
    singleRndUser && dispatch(getdays({ id: singleRndUser, startDate: firstDay, endDate: lastDay }));
    setRndCurrentExpertUser(singleRndUser);
    rndExpertsData.find((singleUser: any) => singleUser.id === singleRndUser && setSelectedDay(singleUser.availableDates)), rndExpertsData.find((singleUser: any) => singleUser.id === singleRndUser && setBookSingleExpert(singleUser));
  };

  // get slots method
  const handleSlots = (date: string | undefined, id: string) => {
    setDateSet(date);
    setIsShowBookASession(true);
    if (highlightedDays.some((day: any) => day.date === date && date)) {
      // gets available slots for selected date
      dispatch(getSlots({ id, date }));
    }
  };

  const setRndSelectUserClaim = (singleSelectedClaim: number) => {
    setRndExpertSelectedClaim(singleSelectedClaim);
  };

  const handleRndExpertPaymentCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRndExpertPaymentCardValue((event.target as HTMLInputElement).value);
  };

  // disabled weekend on calendar
  const isWeekend = (date: Dayjs) => {
    const day = date.day();
    return day === 0 || day === 6;
  };

  const handleCloseRndExpertModal = () => {
    setRenderModalContent("");
    setIsShowBookASession(false);
    showIsSessionBooked(false);
    setIsShowInitialPayment(false);
    setIsRndExpertModal(false);
    setSelectedDay(defaultValue);
  };

  const handleRenewBooking = () => {
    setDateSet(null);
    setIsShowBookASession(false);
  };

  const handleSetPayment = () => {
    setIsShowBookASession(false);
    setDateSet(null);
    showIsSessionBooked(true);
    setIsShowInitialPayment(true);
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (event: any) => {
      handleRndExpert();
    },
  });

  const handleRndExpert = () => {
    handleCloseRndExpertModal();
    showIsSessionBooked(false);
    resetForm();
  };

  const handelSubmitCalendarMeeting = () => {
    dispatch(
      createCalendarMeeting({
        entityId: "63803da8e265bed8370a040f",
        claim: "636c91bb31e44c369843a488",
        title: "Meeting with RND Expert",
        start: "2022-12-05 10:00",
        end: "2022-12-05 10:30",
        description: "Event description",
      })
    );
  };

  //update rnd expert states for store data
  useEffect(() => setRndExpertsData(rndExprtList), [rndExprtList]);
  useEffect(() => setHighlightedDays(rndExpertAvailableDays), [rndExpertAvailableDays]);
  useEffect(() => setslotsList(slots), [slots]);

  return (
    <div className="rnd-expert bg-white border-radius-8 gray-border-1">
      <div className="flex justify-between align-center expert-top-heading">
        <h1 className="fs-24 fw-700 primary-color mb-0">RND Experts</h1>
        <p className="fs-14 fw-600 blue-color lh-20 cursor-pointer" onClick={() => setIsRndExpertModal(true)}>
          View all
        </p>
      </div>

      {rndExpertsData && <RndExpertUser handleOpenRndExpertModal={() => setIsRndExpertModal(true)} rndExpertUsers={rndExpertsData} handleRndExpertCurrentUser={setRndCurrentExpertUserrr} />}

      {/* RND Expert Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isRndExpertModal}
        onClose={handleCloseRndExpertModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isRndExpertModal}>
          {(isShowBookASession || !isShowInitialPayment) && !isSessionBooked ? (
            <Box sx={rndExpertModalStyle}>
              {!!(isShowBookASession && selectedDay) ? (
                <Grid container>
                  <Grid item xs={12} lg={4} p={3} style={{ borderRight: "1px solid #343a403a" }}>
                    <Image src={arrowLeftBlackImg} alt="arrow-left" className="cursor-pointer" onClick={handleRenewBooking} priority />

                    <h1 className="fs-24 fw-600 dark-color">Book a Session</h1>
                    <div className="flex align-center">
                      <Avatar alt={`${bookSingleExpert?.firstName} ${bookSingleExpert?.lastName}`} className="capitalize" src={bookSingleExpert?.img} sx={{ width: 50, height: 50 }}>
                        {`${bookSingleExpert?.firstName.slice(0, 1)} ${bookSingleExpert?.lastName.slice(0, 1)}`}
                      </Avatar>
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "15px" }}>
                        {`${bookSingleExpert?.firstName} ${bookSingleExpert?.lastName} `}
                      </span>
                    </div>

                    <div className="flex align-center half-opacity" style={{ marginTop: "16px" }}>
                      <Image src={clockBlackImg} alt="clock" priority />
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "12px" }}>
                        30 mins (Free)
                      </span>
                    </div>
                    <div className="flex align-center" style={{ marginTop: "16px" }}>
                      <Image src={calendarSmBlackImg} alt="calendar" priority />
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "12px" }}>
                        20 May, 2022
                      </span>
                    </div>
                    <Box className="flex" height={{ xs: "130px", md: "100px", lg: "230px" }} flexDirection="column" justifyContent="flex-end">
                      <p className="fs-14 fw-600 lh-20 dark-color">After 30 mins the session will be charged hourly.</p>
                      <p className="fs-14 fw-600 lh-20 dark-color">Hourly rate £ 60 plus VAT</p>
                    </Box>
                  </Grid>
                  {renderModalContent === "showClaims" ? (
                    <RndExpertClaim handleRndSelectUserClaim={setRndSelectUserClaim} rndExpertSelectedClaim={rndExpertSelectedClaim} handleSetPayment={() => handleSetPayment()} handleCloseRndExpertModal={() => handleCloseRndExpertModal()} />
                  ) : (
                    <Grid item xs={12} lg={8} className="book-session-top-icons">
                      <div className="flex justify-between align-center">
                        <h1 className="fs-24 fw-600 dark-color modal-heading">Select Date & Time</h1>
                        <div style={{ marginRight: "22px" }}>
                          <Image src={crossBlackImg} alt="cross" className="cursor-pointer" onClick={handleCloseRndExpertModal} priority />
                        </div>
                      </div>
                      <Box className="flex" justifyContent={{ xs: "center", lg: "space-between" }} flexWrap="wrap">
                        <div className="m-auto">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                              className="calender"
                              orientation="landscape"
                              openTo="day"
                              value={dateSet}
                              disablePast={true}
                              componentsProps={{
                                actionBar: {
                                  actions: [],
                                },
                              }}
                              displayStaticWrapperAs="desktop"
                              showToolbar={false}
                              onChange={(newValue: any) => handleSlots(dayjs(newValue).format("YYYY-MM-DD"), rndCurrentExpertUser??"")}
                              renderInput={(params: any) => <TextField {...params} />}
                              renderDay={(day, _value, DayComponentProps) => {
                                const isSelected = highlightedDays.some((date: any) => dayjs(day).format("YYYY-MM-DD") === date.date);
                                return (
                                  <span key={day.toString()}>
                                    <PickersDay
                                      {...DayComponentProps}
                                      // selected={isSelected && true}
                                      className={`${isSelected && "bg-green-date white-color"} `}
                                      // style={{
                                      //   backgroundColor: "orange",
                                      // }}
                                    />
                                  </span>
                                );
                              }}
                            />
                          </LocalizationProvider>
                        </div>
                        {/* <Calendar
                          value={selectedDay}
                          onChange={setSelectedDay}
                          calendarClassName="calendar-date-picker calendar initial-selected"
                          calendarTodayClassName="custom-today-day"
                          minimumDate={utils().getToday()}
                          customDaysClassName={[]}
                        /> */}
                        <Box
                          sx={{
                            width: { xs: "100%", lg: "auto" },
                            margin: "1rem",
                          }}
                        >
                          <h1 className="fs-16 fw-700 dark-color lh-24 text-center">Available Slots</h1>
                          {slotsList.slice(0, 3).map((slot: ISlots) => (
                            <Button
                              key={slot.start}
                              type="submit"
                              disableRipple
                              className="fs-16 fw-700 font-source-sans-pro w-100 dark-color add-payment-btn"
                              style={{
                                border: "0.753541px solid #0F5156",
                                borderRadius: "4px",
                              }}
                            >
                              {slot.start}
                            </Button>
                          ))}
                          <Button type="submit" disableRipple className="fs-16 fw-700 font-source-sans-pro w-100 white-color add-payment-btn bg-gradient-green" style={{ marginTop: "1rem" }} onClick={() => setRenderModalContent("showClaims")}>
                            Add
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              ) : (
                !isShowBookASession &&
                !isShowInitialPayment && (
                  <Grid container className="rnd-expert-modal">
                    <Grid item xs={12} lg={6} className="rnd-expert-border-end">
                      <RndExpertModalUser rndCurrentExpertUser={rndCurrentExpertUser} handleRndExpertCurrentUser={setRndCurrentExpertUserrr} rndExpertsData={rndExpertsData} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className="flex justify-between align-center">
                        <h1 className="fs-24 fw-600 dark-color modal-heading">Select Date & Time</h1>
                        <Grid
                          style={{ marginRight: "22px" }}
                          sx={{
                            position: {
                              xs: "absolute",
                              md: "absolute",
                              lg: "relative",
                            },
                            top: { xs: "28px", md: "28px", lg: "0" },
                            right: { xs: "0", md: "0", lg: "0" },
                          }}
                        >
                          <Image src={crossBlackImg} alt="cross" className="cursor-pointer" onClick={handleCloseRndExpertModal} priority />
                        </Grid>
                      </div>
                      {/* <Calendar
                        value={selectedDay}
                        onChange={(newValue: any) => {
                          setSelectedDay(newValue), setIsShowBookASession(true);
                        }}
                        calendarClassName="calendar-date-picker calendar initial-selected"
                        calendarTodayClassName="custom-today-day"
                        minimumDate={utils().getToday()}
                        customDaysClassName={[]}
                      /> */}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                          className="calender"
                          orientation="landscape"
                          openTo="day"
                          value={dateSet}
                          onChange={(newValue: any) => {
                            handleSlots(dayjs(newValue).format("YYYY-MM-DD"), rndCurrentExpertUser ?? "1");
                          }}
                          renderInput={(params: any) => <TextField {...params} />}
                          componentsProps={{
                            actionBar: {
                              actions: [],
                            },
                          }}
                          showToolbar={false}
                          renderDay={(day, _value, DayComponentProps) => {
                            const isSelected = highlightedDays.some((date: any) => dayjs(day).format("YYYY-MM-DD") === date.date);
                            return (
                              <span key={day.toString()}>
                                <PickersDay
                                  {...DayComponentProps}
                                  selected={isSelected && true}
                                  className={`${isSelected && "bg-green-date white-color"}`}
                                  // style={{
                                  //   backgroundColor: "orange",
                                  // }}
                                />
                              </span>
                            );
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                )
              )}
            </Box>
          ) : (
            <Box sx={addPaymentModalStyle}>
              {renderModalContent === "availablePaymentCards" ? (
                <div
                  style={{
                    height: "363px",
                    padding: "0px 20px",
                  }}
                >
                  <h1 className="fs-36 fw-700 lh-32 primary-color">Payment</h1>
                  <p className="fs-14 fw-600 lh-20">Please select payment card:</p>
                  <FormControl className="w-fill-available" sx={{ fontWeight: "700" }}>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={rndExpertPaymentCardValue}
                      onChange={handleRndExpertPaymentCard}
                      sx={{
                        border: "1.5px solid #CCCCCC",
                        borderRadius: "3px",
                        marginBottom: "1rem",
                        padding: "0.3em 22px",
                      }}
                    >
                      <FormControlLabel
                        value="firstCard"
                        control={<BpRadio />}
                        label="****3692"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#343A40",
                            fontFamily: "Source Sans Pro",
                          },
                        }}
                      />
                    </RadioGroup>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={rndExpertPaymentCardValue}
                      onChange={handleRndExpertPaymentCard}
                      sx={{
                        border: "1.5px solid #CCCCCC",
                        borderRadius: "3px",
                        padding: "0.3em 22px",
                      }}
                    >
                      <FormControlLabel
                        value="secondCard"
                        control={<BpRadio />}
                        label="****4832"
                        sx={{
                          ".MuiFormControlLabel-label": {
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#343A40",
                            fontFamily: "Source Sans Pro",
                          },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>

                  <Button
                    type="submit"
                    disableRipple
                    className="fs-16 fw-700 font-source-sans-pro w-100 white-color add-payment-btn bg-gradient-green"
                    style={{
                      marginTop: "20px",
                      textTransform: "capitalize",
                      padding: "0.7em",
                    }}
                    onClick={() => setRenderModalContent("confirmPayment")}
                    // onClick={handelSubmitCalendarMeeting}
                  >
                    Pay Now
                  </Button>
                  <div className="flex align-center cursor-pointer" style={{ marginTop: "20px" }} onClick={() => setRenderModalContent("addNewCard")}>
                    <Image src={addSquareImg} alt="add" priority />{" "}
                    <span className="fs-16 fw-700 lh-24 dark-color" style={{ paddingLeft: "15px" }}>
                      Add New Card
                    </span>
                  </div>
                </div>
              ) : renderModalContent === "addNewCard" ? (
                <Grid container className="rnd-expert-add-card-modal">
                  <Grid item>
                    <h1 className="fs-24 fw-600 dark-color lh-32 font-source-sans-pro">Add Card</h1>
                    <form onSubmit={handleSubmit}>
                      <Grid
                        sx={{
                          py: errors.Name && touched.Name ? " " : 2,
                        }}
                        className=""
                      >
                        <label className="fs-18 fw-700">Name</label>
                        <TextField placeholder="Name on card" onChange={handleChange} value={values.Name} type={"text"} fullWidth name="Name" onBlur={handleBlur} error={!!(errors.Name && touched.Name)} variant="outlined" />
                        {errors.Name && touched.Name && (
                          <div className="flex align-center error-icon">
                            <Image src={errorVector} alt="icon" priority />
                            <Typography className="error-color" variant="body2" sx={{ ml: "10px" }}>
                              {errors.Name}
                            </Typography>
                          </div>
                        )}
                      </Grid>
                      <Grid
                        sx={{
                          py: errors.CardNumber && touched.CardNumber ? 1 : 2,
                        }}
                        className="flex direction-column "
                      >
                        <label className="fs-18 fw-700">Card Number</label>
                        <TextField
                          placeholder="xxxx - xxxx - xxxx -xxxx"
                          onChange={handleChange}
                          value={values.CardNumber}
                          type={"text"}
                          fullWidth
                          name="CardNumber"
                          onBlur={handleBlur}
                          error={!!(errors.CardNumber && touched.CardNumber)}
                          variant="outlined"
                        />
                        {errors.CardNumber && touched.CardNumber && (
                          <div className="flex align-center error-icon ">
                            <Image src={errorVector} alt="icon" priority />
                            <Typography className="error-color" variant="body2" sx={{ ml: "10px" }}>
                              {errors.CardNumber}
                            </Typography>
                          </div>
                        )}
                      </Grid>
                      <Grid container spacing={2} sx={{ py: 2 }}>
                        <Grid item xs={6} sx={{ py: "0px" }} className="flex direction-column ">
                          <label className="fs-18 fw-700">Expiration Date</label>
                          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              mask="____/__/__"
                              value={values.ExpirationDate}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider> */}

                          <TextField
                            placeholder="Enter Date"
                            onChange={handleChange}
                            value={values.ExpirationDate}
                            type="text"
                            fullWidth
                            name="ExpirationDate"
                            onBlur={handleBlur}
                            shouldDisableDate={isWeekend}
                            error={!!(errors.ExpirationDate && touched.ExpirationDate)}
                            variant="outlined"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Image src={CalendarPaymentIcon} alt="icon" />
                                </InputAdornment>
                              ),
                            }}
                          />
                          {errors.ExpirationDate && touched.ExpirationDate && (
                            <div className="flex align-center error-icon ">
                              <Image src={errorVector} alt="icon" priority />
                              <Typography className="error-color" variant="body2" sx={{ ml: "10px" }}>
                                {errors.ExpirationDate}
                              </Typography>
                            </div>
                          )}
                        </Grid>
                        <Grid item xs={6} className="flex direction-column ">
                          <label className="fs-18 fw-700">CCV</label>
                          <TextField placeholder="xxx" onChange={handleChange} value={values.CCV} type={"text"} fullWidth name="CCV" onBlur={handleBlur} error={!!(errors.CCV && touched.CCV)} variant="outlined" />
                          {errors.CCV && touched.CCV && (
                            <div className="flex align-center error-icon">
                              <Image src={errorVector} alt="icon" priority />
                              <Typography className="error-color" variant="body2" sx={{ ml: "10px" }}>
                                {errors.CCV}
                              </Typography>
                            </div>
                          )}
                        </Grid>
                      </Grid>
                      <div>
                        <Button type="submit" disableRipple className="add-payment-btn bg-gradient-green white-color fs-16 fw-700 font-source-sans-pro" style={{ marginBottom: "1rem" }}>
                          Add
                        </Button>
                      </div>
                    </form>
                  </Grid>
                </Grid>
              ) : renderModalContent === "confirmPayment" ? (
                <Box
                  sx={{
                    width: {
                      xl: "714px",
                      lg: "714px",
                      md: "650px",
                      sm: "500px",
                      xs: "300px",
                    },
                    height: {
                      xl: "500px",
                      lg: "500px",
                      md: "450px",
                      sm: "450px",
                      xs: "450px",
                    },
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "end",
                      paddingTop: "22px",
                      paddingRight: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "10px",
                        xs: "10px",
                      },
                    }}
                  >
                    <Image src={crossBlackImg} alt="cross" className="cursor-pointer" onClick={handleCloseRndExpertModal} priority />
                  </Box>
                  <Box
                    sx={{
                      paddingLeft: {
                        xl: "150px",
                        lg: "150px",
                        md: "100px",
                        // sm: "50px",
                      },
                      padding: { sm: "20px", xs: "20px" },
                      width: "max-content",
                    }}
                  >
                    <div className="flex justify-center align-center text-center">
                      <Image src={successTickImg} alt="success" priority />
                      <h1 className="fs-24 fw-700 lh-32 dark-color" style={{ paddingLeft: "21px" }}>
                        Confirmed
                      </h1>
                    </div>
                    <Typography
                      variant="h6"
                      component="h6"
                      className="fs-18 fw-400 lh-24 dark-color font-source-sans-pro"
                      sx={{
                        marginTop: "24px",
                        width: {
                          xl: "none",
                          lg: "none",
                          md: "none",
                          sm: "460px",
                          xs: "280px",
                        },
                      }}
                    >
                      Your appointment has been scheduled with RND expert
                    </Typography>

                    <h1 className="fs-18 fw-700 lh-24 dark-color" style={{ marginTop: "24px" }}>
                      Session detials
                    </h1>
                    <div className="flex align-center" style={{ marginTop: "27px", marginLeft: "20px" }}>
                      <Avatar alt={`${bookSingleExpert?.firstName} ${bookSingleExpert?.lastName}`} className="capitalize" src={bookSingleExpert?.img} sx={{ width: 50, height: 50 }}>
                        {`${bookSingleExpert?.firstName.slice(0, 1)} ${bookSingleExpert?.lastName.slice(0, 1)}`}
                      </Avatar>
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "15px" }}>
                        {`${bookSingleExpert?.firstName} ${bookSingleExpert?.lastName}`}
                      </span>
                    </div>
                    <div className="flex align-start" style={{ marginTop: "13px", marginLeft: "20px" }}>
                      <div style={{ height: "30px", width: "30px" }}>
                        <Image src={clockBlackImg} alt="clock" priority />
                      </div>
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "12px" }}>
                        30 mins (Free)
                      </span>
                    </div>
                    <div className="flex align-start" style={{ marginTop: "13px", marginLeft: "20px" }}>
                      <div style={{ height: "30px", width: "30px" }}>
                        <Image src={calendarSmBlackImg} alt="calendar" priority />
                      </div>
                      <span className="fs-14 fw-600 lh-20 dark-color" style={{ paddingLeft: "12px" }}>
                        20 May, 2022
                      </span>
                    </div>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    className="fs-14 fw-600 dark-color lh-10 cursor-pointer"
                    sx={{
                      position: "absolute",
                      bottom: {
                        xl: "10%",
                        lg: "10%",
                        md: "8%",
                        sm: "5%",
                        xs: "1%",
                      },
                      right: {
                        xl: "3%",
                        lg: "3%",
                        md: "3%",
                        sm: "3%",
                        xs: "3%",
                      },
                    }}
                  >
                    View on calender
                    <span style={{ paddingLeft: "10px" }}>
                      <Image src={rightDoubleArrowImg} alt="arrow" priority />
                    </span>
                  </Typography>
                </Box>
              ) : (
                <div style={{ height: "171px", paddingLeft: "20px" }}>
                  <h1 className="fs-36 fw-700 lh-32 primary-color">Payment</h1>
                  <p className="fs-14 fw-600 lh-20 dark-color">You don’t have any card.</p>
                  <p className="flex align-center cursor-pointer" style={{ width: "fit-content" }} onClick={() => setRenderModalContent("availablePaymentCards")}>
                    <Image src={addSquareImg} alt="add" priority />{" "}
                    <span className="fs-16 fw-700 lh-24 dark-color" style={{ paddingLeft: "15px" }}>
                      Add New Card
                    </span>
                  </p>
                </div>
              )}
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
};

export default RndExpertsMain;
