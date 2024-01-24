import { Box, Grid, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { MenuProps } from "../../../common/mockData/accountSettings/users/users";
import DynamicTimeSlot from "./DynamicTimeSlot";
import { consultationInitialValues, ConsultationValidationSchema } from "../../../common/mockData/accountSettings/consultation/consultation";
import ErrorIcon from "@mui/icons-material/Error";
import { createAvailability } from "../../../redux/calendarAvailability/calendarAvailability.api";
import { useAppDispatch } from "../../../hooks/use-store.hooks";

const Consultation = () => {
  const dispatch = useAppDispatch();
  const [timeSlot, setTimeSlot] = useState([{ from: "", to: "" }]);

  const formik = useFormik({
    initialValues: consultationInitialValues,
    validationSchema: ConsultationValidationSchema,
    onSubmit: () => {
      const rules = weekDaysList.map((day) => ({ wday: day.wday, intervals: day.intervals[0].from && day.intervals[0].to ? day.intervals : [] }));
      console.log(rules);
      const getFormValues = {
        amount: +formik.values.price,
        duration: +formik.values.duration,
        availability: formik.values.availability,
        rules,
      };
      dispatch(createAvailability(getFormValues));
    },
  });

  const durationList = [15, 30, 45, 60];
  const availabilityList = ["Daily", "Monday to Friday", "Custom"];
  const [selectedDays, setSelectedDays] = useState<{ wday: string; isSelected: boolean; intervals: { from: string; to: string }[] }>({
    wday: "",
    isSelected: false,
    intervals: [
      {
        from: "",
        to: "",
      },
    ],
  });

  interface weekDay {
    wday: string;
    isSelected: boolean;
    intervals: { from: string; to: string }[];
  }

  const weekList = [
    {
      wday: "monday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "tuesday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "wednesday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "thursday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "friday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "saturday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
    {
      wday: "sunday",
      isSelected: false,
      intervals: [
        {
          from: "",
          to: "",
        },
      ],
    },
  ];

  const [weekDaysList, setWeekDaysList] = useState<weekDay[]>(weekList);
  let updatedWeekDays = weekDaysList;

  const handleSlots = (index: number, value: any) => {
    updatedWeekDays[index] = { wday: weekDaysList[index].wday, isSelected: weekDaysList[index].isSelected, intervals: value };
    setSelectedDays(updatedWeekDays[index]);
    setWeekDaysList(updatedWeekDays);
  };

  const handleAvailability = (index: number, e: any) => {
    updatedWeekDays[index] = { wday: weekDaysList[index].wday, isSelected: e.target.checked, intervals: updatedWeekDays[index].intervals };
    setSelectedDays(updatedWeekDays[index]);
    setWeekDaysList(updatedWeekDays);
  };
  // TO UPDATE TIME SLOT
  useEffect(() => {
    if (formik.values.availability === "Daily") {
      let updatedWeekDays = weekDaysList;
      updatedWeekDays = updatedWeekDays.map((weekDay) => ({ ...weekDay, intervals: timeSlot }));
      setWeekDaysList(updatedWeekDays);
    }
    if (formik.values.availability === "Monday to Friday") {
      let updatedWeekDays = weekDaysList;
      updatedWeekDays = updatedWeekDays.map((weekDay) => ({ ...weekDay, intervals: weekDay.wday !== "saturday" && weekDay.wday !== "sunday" ? timeSlot : weekDay.intervals }));
      setWeekDaysList(updatedWeekDays);
    }
  }, [formik.values.availability, timeSlot, weekDaysList]);

  return (
    <div className="consultation">
      <Grid className=" flex direction-column " sx={{ pt: 1 }}>
        <span className="fw-700 fs-24 lh-24">Consultation Fee </span>
        <p className="fw-600 fs-16 lh-24 label-color">Define your consultation fee for every session that will be charged to users.</p>
      </Grid>
      <Grid container sx={{ pt: 2 }}>
        <Grid item lg={12}>
          <form onSubmit={formik.handleSubmit}>
            <Grid item lg={12} className=" flex direction-column ">
              <label className="fw-700 fs-16 lh-24">Amount</label>
              <TextField
                fullWidth
                id="price"
                name="price"
               
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                placeholder="00.00"
                sx={{
                  width: { xs: "100%", lg: "304px" },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                    "& placeholder":{
                      fontWeight:"400px",
                      fontSize:'16px',
                    }
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className="fw-700 fs-18">£</span>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.price && formik.touched.price && (
                <Grid className="flex errors-labels fw-600 align-center error-color">
                  <ErrorIcon sx={{ marginRight: "5px" }} fontSize="medium" style={{ color: "#DC3545" }} />
                  <span>{formik.errors.price}</span>
                </Grid>
              )}
            </Grid>

            <Grid item lg={12} sx={{ pt: 2 }} className=" flex direction-column ">
              <label className="fw-700 fs-16 lh-24">Duration</label>
              <Select
                displayEmpty
                value={formik.values.duration}
                onChange={formik.handleChange}
                error={formik.touched.duration && Boolean(formik.errors.duration)}
                name="duration"
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span className="fw-400 fs-16">Select Duration</span>;
                  }

                  return selected;
                }}
                sx={{
                  width: { xs: "100%", lg: "304px" },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                  "&:hover": {
                    "&& fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
                className="fw-400 fs-16 font-source-sans-pro label-color  "
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {durationList.map((duration) => (
                  <MenuItem key={duration} value={duration} className="fw-400 fs-16 font-source-sans-pro">
                    {duration} minuts
                  </MenuItem>
                ))}
              </Select>
              {formik.errors.duration && formik.touched.duration && (
                <Grid className="flex errors-labels fw-600 align-center error-color">
                  <ErrorIcon sx={{ marginRight: "5px" }} fontSize="medium" style={{ color: "#DC3545" }} />
                  <span>{formik.errors.duration}</span>
                </Grid>
              )}
            </Grid>

            <Grid item lg={12} sx={{ pt: 4.5 }}>
              <span className="fw-700 fs-24 lh-24">Consultation Hours </span>
              <p className="fw-600 fs-16 lh-24 label-color">Pick your availability hours for consultation so that users can book a session with you.</p>
            </Grid>
            <Grid item lg={12} sx={{ pt: 2, pb: 4.5 }} className=" flex direction-column ">
              <label className="fw-700 fs-16 lh-24">Availability</label>
              <Select
                displayEmpty
                value={formik.values.availability}
                onChange={(e) => {
                  formik.setValues({ ...formik.values, [e.target.name]: e.target.value });
                  setWeekDaysList(weekList);
                  setTimeSlot([{ from: "", to: "" }]);
                  console.log(formik.values);
                }}
                error={formik.touched.availability && Boolean(formik.errors.availability)}
                name="availability"
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span className="fw-400 fs-16">Select Avalibility</span>;
                  }

                  return selected;
                }}
                sx={{
                  width: { xs: "100%", lg: "304px" },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                  "&:hover": {
                    "&& fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
                className="fw-400 fs-16 font-source-sans-pro label-color  "
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {availabilityList.map((availability) => (
                  <MenuItem key={availability} value={availability} className="fw-400 fs-16 font-source-sans-pro">
                    {availability}
                  </MenuItem>
                ))}
              </Select>
              {formik.errors.availability && formik.touched.availability && (
                <Grid className="flex errors-labels fw-600 align-center error-color">
                  <ErrorIcon sx={{ marginRight: "5px" }} fontSize="medium" style={{ color: "#DC3545" }} />
                  <span>{formik.errors.availability}</span>
                </Grid>
              )}
            </Grid>
            {formik.values.availability !== "Custom" && <DynamicTimeSlot timeSlot={timeSlot} setTimeSlot={setTimeSlot} formik={formik} />}

            {formik.values.availability === "Custom" &&
              weekDaysList.map(({ wday, isSelected, intervals }, index) => (
                <>
                  {isSelected ? (
                    <>
                      <Box key={wday} my={1} textTransform="capitalize" alignItems="baseline" display="flex">
                        <Box key={wday} my={1} textTransform="capitalize" className="custom-Checkbox-wrapper" display="flex" alignItems="center" gap="8px">
                          <input type="checkbox" name={wday} checked={isSelected} onChange={(e) => handleAvailability(index, e)} id={wday} className="remember-checkbox" />
                          <label htmlFor={wday} className="fs-16 fw-600 font-source-sans-pro cursor-pointer">
                            {wday}
                          </label>
                        </Box>
                        <DynamicTimeSlot timeSlot={intervals} index={index} setTimeSlot={handleSlots} formik={formik} />
                      </Box>
                    </>
                  ) : (
                    <Box key={wday + index} my={1} textTransform="capitalize" className="custom-Checkbox-wrapper" display="flex" alignItems="center" gap="8px">
                      <input type="checkbox" name={wday} checked={isSelected} onChange={(e) => handleAvailability(index, e)} id={wday} className="remember-checkbox" />
                      <label htmlFor={wday} className="fs-16 fw-600 font-source-sans-pro cursor-pointer">
                        {wday}
                      </label>
                    </Box>
                  )}
                </>
              ))}

            <Grid item xs={6.65} md={12} xl={7.4} className="flex justify-end" sx={{ pt: 3 }}>
              <button type="submit" className="save-button bg-gradient-green white-color fw-700 fs-16 cursor-pointer">
                Save
              </button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Consultation;
