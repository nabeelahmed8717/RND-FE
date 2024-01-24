import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { apiDeleteRequest, apiGetRequest } from "../../helpers/request";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store.hooks";

import AddModal from "./addModal/addModal";
import FullCalendar from "@fullcalendar/react";
import Image from "next/image";
import UpdateModal from "./updateModal/updateModal";
import WeekCalendarIcon from "../../assets/images/calendar/week-calendar-icon.png";
import dayGridPlugin from "@fullcalendar/daygrid";
import dayjs from "dayjs";
import { displayToastr } from "../../redux/toaster/toasterSlice";
import { endpoints } from "../../config/endpoints";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const CalendarMain = () => {
  const dispatch = useAppDispatch();
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [isUpdateModal, setIsUpdateModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<any>({});
  const [selectEvent, setSelectEvent] = useState<string>("");
  const [actionType, setActionType] = useState<string>("");
  const [calendarData, setCalendarData] = useState<any>([]);

  const handleEventClick = (e: any) => {
    const eventClickFindValue = calendarData.find(
      (obj: any) => obj.id === e.event._def.publicId
    );
    setEditModal(eventClickFindValue);
    setActionType("edit");
    setSelectEvent(eventClickFindValue?.id);
    setIsUpdateModal(true);
  };

  const handleEventDelete = async () => {
    await apiDeleteRequest(`${endpoints.calendar}/${selectEvent}`);
    // dispatch(deleteData(selectEvent));
    setIsUpdateModal(false);
    dispatch(
      displayToastr({
        isDisplay: true,
        message: "Event Deleted succesfully",
      })
    );
  };
  // useEffect(() => {
  //   dispatch(getCalendar());
  // }, [addModal, updateModal]);

  const eventContentHandler = (eventInfo: any) => {
    const event = eventInfo.event._def.extendedProps;
    const rangeDiff = dayjs(eventInfo.event._instance.range.end).diff(
      dayjs(eventInfo.event._instance.range.start),
      "hour",
      true
    );
    eventInfo.backgroundColor = "transparent";
    const background =
      event.eventType === "Meeting"
        ? "#e33635"
        : event.eventType === "Important"
        ? "#ef8842"
        : event.eventType === "Personal"
        ? "#4285F4"
        : event.eventType === "Work"
        ? "#33B679"
        : event.eventType === "Travel"
        ? "#5F5F5F"
        : "";
    const WeekbackgroundColor =
      event.eventType === "Meeting"
        ? "#e3363580"
        : event.eventType === "Important"
        ? "#ef884280"
        : event.eventType === "Personal"
        ? "#4285f480"
        : event.eventType === "Work"
        ? "#33b67980"
        : event.eventType === "Travel"
        ? "#5f5f5f80"
        : "";
    return (
      <>
        {eventInfo.view.type === "dayGridMonth" && (
          <Box
            className="main_text_wraper"
            sx={{
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              background: background,
            }}
          >
            <p className="monthTitle m-0 fs-16 fw-500 lh-24">
              {eventInfo.event._def.title}{" "}
              <span>{eventInfo.event._def.start}</span>
            </p>
          </Box>
        )}

        {eventInfo.view.type === "timeGridWeek" && (
          <Box
            className={`cursor-pointer ${
              rangeDiff <= 1.5 ? "week-event-small" : ""
            }`}
            sx={{ height: "100%", position: "relative" }}
          >
            <Box
              className="redBorder"
              sx={{
                position: "absolute",
                top: "0px",
                p: 0.5,
                background: background,
                borderRadius: "14px",
                zIndex: 1,
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                height: "100%",
                backgroundColor: WeekbackgroundColor,
                width: "100%",
                paddingX: "13px",
                paddingY: rangeDiff <= 1.5 ? "10px" : "25px",
                wordWrap: "wrap",
                wordBreak: "break-word",
                borderRadius: "14px",
              }}
            >
              <Box display="flex" gap="10px" alignItems="center">
                {rangeDiff <= 0.8 ? (
                  ""
                ) : (
                  <Box
                    sx={{
                      backgroundColor: background,
                      width: rangeDiff <= 1.5 ? "55px" : "75px",
                      height: rangeDiff <= 1.5 ? "30px" : "45px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: rangeDiff <= 1.5 ? "8px" : "14px",
                    }}
                  >
                    <Image src={WeekCalendarIcon} alt="" />
                  </Box>
                )}

                <Typography
                  className="weekTitle font-source-sans-pro"
                  sx={{
                    color: "#0F5156",
                    fontWeight: 700,
                    fontSize: rangeDiff <= 1 ? "14px" : "16px",
                    lineHeight: "18px",
                  }}
                >
                  {eventInfo.event._def.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        {eventInfo.view.type === "timeGridDay" && (
          <Box
            sx={{ height: "100%", wordWrap: "wrap", wordBreak: "break-word" }}
            className="cursor-pointer"
          >
            <Box
              sx={{
                border: `6px solid ${background}`,
                position: "absolute",
                left: "0",
                borderRadius: "14px",
                width: "9px",
                height: "99.5%",
                zIndex: 1,
              }}
            ></Box>
            <Box
              sx={{
                maxWidth: "293px",
                position: "relative",
                bottom: "5px",
                height: "100%",
                p: "10px 5px 5px 10px",
                zIndex: -1,
                borderRadius: "14px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
                background: "#fff",
                paddingX: "25px",
              }}
            >
              <Typography
                className="font-source-sans-pro m-0"
                sx={{
                  color: "#0F5156",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textAlign: { md: "left", xs: "center" },
                  fontSize: { md: "18px", xs: "12px" },
                }}
              >
                {eventInfo.event._def.title}
              </Typography>
            </Box>
          </Box>
        )}
      </>
    );
  };

  return (
    <>
      <Box className="calendar-wrapper">
        <Box sx={{ height: "auto" }}>
          <Box
            className="calenderpadding"
            sx={{
              p: "20px 40px 35px 40px",
              boxShadow:
                "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #CCCCCC",
            }}
          >
            <Box overflow="auto">
              <FullCalendar
                height="150vh"
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "title prev next",
                  center: "timeGridDay timeGridWeek dayGridMonth",
                  right: "myCustomButton",
                }}
                customButtons={{
                  myCustomButton: {
                    text: "New Schedule",
                    click: function () {
                      setEditModal("");
                      setIsAddModal(true);
                      setActionType("add");
                    },
                  },
                }}
                views={{
                  week: {
                    titleFormat: {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    },
                    dayHeaderContent: (args) => {
                      return (
                        <div>
                          <p className="m-0">{dayjs(args.date).format("D")}</p>
                          <p className="m-0">
                            {" "}
                            {dayjs(args.date).format("ddd")}
                          </p>
                        </div>
                      );
                    },
                  },
                }}
                dayMaxEventRows={2}
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                events={async (
                  info: any,
                  successCallback: any,
                  failureCallback: any
                ): Promise<any> => {
                  try {
                    const response: any = await apiGetRequest(
                      `/calendar/events?startDate=${dayjs(info.startStr).format(
                        "YYYY-MM-DD"
                      )}&endDate=${dayjs(info.endStr).format("YYYY-MM-DD")}`
                    );
                    successCallback(response.data.data);
                    if (calendarData.length === 0) {
                      setCalendarData(response.data.data);
                    }
                  } catch (err) {
                    failureCallback(err);
                  }
                }}
                droppable={true}
                eventContent={eventContentHandler}
                dateClick={(e) => {
                  setIsAddModal(true);
                }}
                eventClick={(e) => handleEventClick(e)}
              />
            </Box>
          </Box>
        </Box>
        <AddModal
          isAddModal={isAddModal}
          setIsAddModal={setIsAddModal}
          actionType={actionType}
        />

        <UpdateModal
          isUpdateModal={isUpdateModal}
          setIsUpdateModal={setIsUpdateModal}
          actionType={actionType}
          handleEventDelete={handleEventDelete}
          editModal={editModal}
          selectEvent={selectEvent}
          setEditModal={setEditModal}
        />
      </Box>
    </>
  );
};

export default CalendarMain;
