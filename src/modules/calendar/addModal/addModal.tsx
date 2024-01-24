import * as Yup from "yup";

import {
  Box,
  Button,
  Dialog,
  Grid,
  MenuItem,
  TextField,
  TextareaAutosize,
} from "@mui/material";

import CloseIcon from "../../../assets/images/calendar/close-icon.png";
import ErrorIcon from "@mui/icons-material/Error";
import Image from "next/image";
import { calendarFetch } from "../../../redux/calendar/calendarSlice";
import { categoryOptions } from "../../../common/mockData/calendar";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { useAppDispatch } from "../../../hooks/use-store.hooks";
import { useFormik } from "formik";

interface Props {
  isAddModal: boolean;
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: string;
}

const AddModal = (props: Props) => {
  const { setIsAddModal, isAddModal, actionType } = props;
  const dispatch = useAppDispatch();

  const calendarAddModalValidationSchema = Yup.object({
    title: Yup.string().required(""),
    eventType: Yup.string().required(""),
    startDate: Yup.date().required(),
    endDate: Yup.date().min(
      Yup.ref("startDate"),
      "Please select valid date range"
    ),
    startTime: Yup.string().required(""),
    endTime: Yup.string().required(""),
    description: Yup.string().required(""),
  });

  const handlerCalendar = (values: any) => {
    dispatch(calendarFetch(values));
    setIsAddModal(false);
    dispatch(
      displayToastr({
        isDisplay: true,
        message: "Event added succesfully",
      })
    );
  };

  const eventForm = useFormik({
    initialValues: {
      title: "",
      eventType: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      description: "",
    },
    onSubmit: (values, { resetForm }) => {
      handlerCalendar(values);
      console.log(values);
      resetForm();
    },
    validationSchema: calendarAddModalValidationSchema,
  });

  return (
    <>
      <Dialog
        hideBackdrop
        open={isAddModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ py: 2, px: 3 }} className="calendar-add-modal-wrapper">
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <h2 className="fs-24 fw-600 lh-32 dark-color m-0">Add</h2>
            <Image
              src={CloseIcon}
              alt=""
              className="cursor-pointer"
              onClick={() => setIsAddModal(false)}
            />
          </Box>
          <Box mt="50px" className="add-form-wrapper">
            <form onSubmit={eventForm.handleSubmit}>
              <Grid container spacing={2} sx={{ p: 1 }}>
                <Grid item xs={12} sx={{ mb: 1.2 }}>
                  <div className="calendar-modal-field-wrap">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      Event name
                    </label>
                    <TextField
                      name="title"
                      value={eventForm.values.title}
                      placeholder="Enter event name"
                      fullWidth
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      className="calendar-modal-field"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sx={{ mb: 1.2 }}>
                  <div className="calendar-modal-field-wrap">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      Event Type
                    </label>
                    <TextField
                      size="small"
                      name="eventType"
                      id="eventType"
                      placeholder="Select"
                      select
                      sx={{ textTransform: "capitalize" }}
                      fullWidth
                      value={eventForm.values.eventType}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      className="event-type-wrap"
                    >
                      {categoryOptions.map((option: any) => (
                        <MenuItem
                          key={option.id}
                          value={option.name}
                          className="event-type-field"
                        >
                          {option.name}{" "}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                  <Box className="calendar-modal-field-wrap modal-time-icon">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      Start Time
                    </label>
                    <TextField
                      fullWidth
                      id="datetime-local"
                      type="time"
                      name="startTime"
                      value={eventForm.values.startTime}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                  <Box className="calendar-modal-field-wrap">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      End time
                    </label>
                    <TextField
                      fullWidth
                      id="datetime-local"
                      type="time"
                      name="endTime"
                      value={eventForm.values.endTime}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                  <div className="calendar-modal-field-wrap modal-date-icon position-relative">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      Start Date
                    </label>
                    <TextField
                      fullWidth
                      id="datetime-local"
                      type="date"
                      name="startDate"
                      value={eventForm.values.startDate}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      InputLabelProps={{ shrink: true }}
                    />
                    {/* <Box className="cursor-pointer" border="1.5px solid #CCCCCC" borderRadius="3px" padding="12px 8px">
                                            <Box className="m-0" onClick={() => setIsCalendarValue(!isCalendarValue)}>Select</Box>
                                        </Box>
                                        {isCalendarValue &&
                                            <>
                                                <Calendar
                                                    value={selectedDay}
                                                    onChange={setSelectedDay}
                                                    shouldHighlightWeekends
                                                />
                                            </>
                                        } */}
                  </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                  <Box className="calendar-modal-field-wrap modal-date-icon">
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      End Date
                    </label>
                    <TextField
                      fullWidth
                      id="datetime-local"
                      type="date"
                      name="endDate"
                      value={eventForm.values.endDate}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                      InputLabelProps={{ shrink: true }}
                    />
                    {eventForm.errors.endDate && eventForm.touched.endDate && (
                      <Box
                        component="div"
                        className="error-color fw-600 fs-16 flex align-center"
                        gap="4px"
                        pt="3px"
                      >
                        <ErrorIcon
                          className="fs-18"
                          style={{ paddingTop: "3px" }}
                        />
                        {eventForm.errors.endDate}
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ mb: 1.2 }}>
                  <Box>
                    <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">
                      Description
                    </label>
                    <TextareaAutosize
                      aria-label="minimum height"
                      placeholder="Type here"
                      minRows={4}
                      style={{
                        width: "97%",
                        borderColor: "#C4C4C4",
                        paddingTop: "15px",
                        fontSize: "16px",
                        paddingLeft: "15px",
                        borderRadius: "4px",
                      }}
                      className="text-area font-source-sans-pro"
                      name="description"
                      value={eventForm.values.description}
                      onChange={eventForm.handleChange}
                      onBlur={eventForm.handleBlur}
                    />
                  </Box>
                </Grid>
                {/* <Button type='submit' disableRipple sx={{ marginLeft: 'auto', marginTop: '26px', marginBottom: '26px', textTransform: 'capitalize' }} className="modal-btn bg-gradient-green fs-16 fw-700 lh-24 white-color">{actionType === 'add' ? 'Add' : 'Edit'}</Button> */}
                <Grid
                  item
                  spacing={2}
                  display="flex"
                  sx={{
                    alignItems: "end",
                    justifyContent: "flex-end",
                  }}
                  width="100%"
                >
                  <Button
                    type="submit"
                    disableRipple
                    sx={{
                      marginTop: "26px",
                      marginBottom: "26px",
                      textTransform: "capitalize",
                    }}
                    className="modal-btn bg-gradient-green fs-16 fw-700 lh-24 white-color"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
export default AddModal;
