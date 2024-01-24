import * as Yup from 'yup';

import { Box, Button, Dialog, Grid, MenuItem, TextField, TextareaAutosize } from "@mui/material";

import CloseIcon from "../../../assets/images/calendar/close-icon.png";
import ErrorIcon from '@mui/icons-material/Error';
import Image from "next/image";
import { apiPatchRequest } from "../../../helpers/request";
import { categoryOptions } from "../../../common/mockData/calendar"
import dayjs from "dayjs";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import { useAppDispatch } from "../../../hooks/use-store.hooks";
import { useFormik } from "formik";
import { useState } from "react"

interface Props {
    isUpdateModal: boolean;
    setIsUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
    actionType: string;
    handleEventDelete: () => void;
    editModal: any;
    selectEvent: string;
    setEditModal: any;
}

const UpdateModal = (props: Props) => {
    const { isUpdateModal, setIsUpdateModal, actionType, handleEventDelete, editModal, selectEvent, setEditModal } = props;
    const dispatch = useAppDispatch();
    const [dataTimeFormate] = useState({ startDate: dayjs(editModal?.start).format('YYYY-MM-DD'), endDate: dayjs(editModal?.end).format('YYYY-MM-DD'), startTime: dayjs(editModal?.start).format('HH:mm'), endTime: dayjs(editModal?.end).format('HH:mm') })

    const calendarAddModalValidationSchema = Yup.object({
        title: Yup.string().required(''),
        eventType: Yup.string().required(''),
        startDate: Yup.date().required(),
        endDate: Yup.date().min(Yup.ref("startDate"), "Please select valid date range"),
        startTime: Yup.string().required(''),
        endTime: Yup.string().required(''),
        description: Yup.string().required(''),
    });

    const updateHandlerCalendar = async (values: any) => {
        await apiPatchRequest(`/calendar/events/${selectEvent}`, {
            id: selectEvent,
            title: values.title,
            eventType: values.eventType,
            startDate: values.startDate,
            startTime: values.startTime,
            endDate: values.endDate,
            endTime: values.endTime,
            description: values.description
        });
        
        
        setIsUpdateModal(false);
        dispatch(
            displayToastr({
                isDisplay: true,
                message: "Event updated succesfully",
            })
        );

    }

    const eventForm = useFormik({
        initialValues: { title: '', eventType: '', startDate: '', startTime: '', endDate: '', endTime: '', description: '' },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            updateHandlerCalendar(values);
            resetForm();
        },
        validationSchema: calendarAddModalValidationSchema
    });

    return (
        <>
            <Dialog hideBackdrop open={isUpdateModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <Box sx={{ py: 2, px: 3 }} className="calendar-add-modal-wrapper">
                    <Box component='div' sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                        <h2 className="fs-24 fw-600 lh-32 dark-color m-0">Update</h2>
                        <Box onClick={() => setIsUpdateModal(false)}>
                            <Image src={CloseIcon} alt="" className="cursor-pointer" />
                        </Box>
                    </Box>

                    <Box mt="50px" className="add-form-wrapper">
                        <form onSubmit={eventForm.handleSubmit}>
                            <Grid container spacing={2} sx={{ p: 1 }}>
                                <Grid item xs={12} sx={{ mb: 1.2 }}>
                                    <div className="calendar-modal-field-wrap">
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">Event name</label>
                                        <TextField name='title' defaultValue={eventForm.values.title || editModal?.title} placeholder="Enter event name" fullWidth onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} className="calendar-modal-field" />

                                    </div>
                                </Grid>
                                <Grid item xs={12} sx={{ mb: 1.2 }}>
                                    <div className="calendar-modal-field-wrap">
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">Event Type</label>
                                        <TextField size="small" name="eventType" id="eventType" placeholder="Select" select sx={{ textTransform: 'capitalize' }} fullWidth defaultValue={eventForm.values.eventType || editModal?.eventType} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} className="event-type-wrap">
                                            {categoryOptions.map((option: any) => <MenuItem key={option.id} value={option.name} className="event-type-field">{option.name} </MenuItem>)}
                                        </TextField>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                                    <Box className="calendar-modal-field-wrap modal-time-icon">
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">Start Time</label>
                                        <TextField fullWidth id="datetime-local" type="time" name="startTime" defaultValue={eventForm.values.startTime || dataTimeFormate.startTime} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} InputLabelProps={{ shrink: true }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                                    <Box className="calendar-modal-field-wrap">
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">End time</label>
                                        <TextField fullWidth id="datetime-local" type="time" name="endTime" defaultValue={eventForm.values.endTime || dataTimeFormate.endTime} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} InputLabelProps={{ shrink: true }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mb: 1.2 }}>
                                    <div className="calendar-modal-field-wrap modal-date-icon position-relative">
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">Start Date</label>
                                        <TextField fullWidth id="datetime-local" type="date" name="startDate" defaultValue={eventForm.values.startDate || dataTimeFormate.startDate} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} InputLabelProps={{ shrink: true }} />
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
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">End Date</label>
                                        <TextField fullWidth id="datetime-local" type="date" name="endDate" defaultValue={eventForm.values.endDate || dataTimeFormate.endDate} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} InputLabelProps={{ shrink: true }} />
                                        {eventForm.errors.endDate && eventForm.touched.endDate && (
                                            <Box component="div" className="error-color fw-600 fs-16 flex align-center" gap="4px" pt="3px">
                                                <ErrorIcon className="fs-18" style={{paddingTop: "3px"}} />{eventForm.errors.endDate}
                                            </Box>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ mb: 1.2 }}>
                                    <Box>
                                        <label className="fs-18 lh-24 fw-700 dark-color m-0 pb-1">Description</label>
                                        <TextareaAutosize aria-label="minimum height" placeholder="Type here" minRows={4} style={{ width: '97%', borderColor: '#C4C4C4', paddingTop: '15px', fontSize: '16px', paddingLeft: '15px', borderRadius: "4px" }} className='text-area font-source-sans-pro' name='description' defaultValue={eventForm.values.description || editModal?.description} onChange={eventForm.handleChange} onBlur={eventForm.handleBlur} />
                                    </Box>
                                </Grid>
                                {/* <Button type='submit' disableRipple sx={{ marginLeft: 'auto', marginTop: '26px', marginBottom: '26px', textTransform: 'capitalize' }} className="modal-btn bg-gradient-green fs-16 fw-700 lh-24 white-color">{actionType === 'add' ? 'Add' : 'Edit'}</Button> */}
                                <Grid item spacing={2} display="flex" sx={{ alignItems: "end", justifyContent: actionType === 'add' ? 'flex-end' : 'space-between' }} width="100%">
                                    <Button type='button' disableRipple sx={{ marginTop: '26px', marginBottom: '26px', textTransform: 'capitalize' }} className="modal-btn dark-red-color fs-16 fw-700 lh-24 white-color" onClick={handleEventDelete}>Delete</Button>
                                    <Button type='submit' disableRipple sx={{ marginTop: '26px', marginBottom: '26px', textTransform: 'capitalize', }} className="modal-btn bg-gradient-green fs-16 fw-700 lh-24 white-color">{actionType === 'add' ? 'Add' : 'Add'}</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};
export default UpdateModal;
