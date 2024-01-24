import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

import { Grid } from "@mui/material";
import Image from "next/image";
import { apiGetRequest } from "../../../helpers/request";
import { endpoints } from "../../../config/endpoints";
import greenInfoIcon from "../../../assets/images/dashboard/reminders/alertIcon.png";
import moment from "moment";
import { remindersData } from "../../../common/mockData/dashboard";
import { useDispatch } from "react-redux";
import yellowCheckedIcon from "../../../assets/images/dashboard/reminders/checked.png";

const Reminders = () => {
  const [annimationCounter, setAnnimationCounter] = useState<number>(0);
  const [annimationCounterNextState, setAnnimationCounterNextState] =
    useState<number>(1);

  const [getRemindersData, setGetRemindersData] = useState<any>([]);

  const dispatch = useDispatch();

  // const lengthCheck = remindersData.length - 1;
  const lengthCheck = getRemindersData.length - 1;
  const moment = require("moment");
  //  let annimationCounterNextState = annimationCounter + 1

  // let i = 1;
  // useEffect(() => {
  // while (i < 5) {
  //   // setAnnimationCounter(i);
  //   // setUpcomingAnnimationCounter(i + 1);
  //   if (i + 1 === 5) {
  //     i = 1;
  //     // setUpcomingAnnimationCounter(1);
  //   }
  //   i++;
  // }
  // }, []);

  // const getRemindersData = useCallback(() => {
  // }, []);
  const apiGetReminders = useCallback(async () => {
    try {
      const remindersResponse = await apiGetRequest("/reminders");
      console.log("remindersResponse", remindersResponse);
      setGetRemindersData(remindersResponse.data.data);
    } catch (error) {
      console.log("reminderss", error);
    }
  }, []);

  useEffect(() => {
    apiGetReminders();
    console.log(getRemindersData);
  }, [apiGetReminders]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (annimationCounter < lengthCheck) {
        setAnnimationCounter((prev) => prev + 1);
        setAnnimationCounterNextState((prev) => prev + 1);
        if (annimationCounterNextState === lengthCheck) {
          setAnnimationCounterNextState(0);
        }
      } else {
        setAnnimationCounter(0);
        setAnnimationCounterNextState((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [
    annimationCounter,
    annimationCounterNextState,
    remindersData,
    lengthCheck,
  ]);

  const reminderDate =
    getRemindersData[annimationCounter]?.endDate.split("T")[0];
  if (reminderDate) {
    var formattedDate = moment(reminderDate).format("MMM d YYYY");
  }

  return (
    <div className="dashboard-reminders-wrapper bg-white-shadow border-radius-8 gray-border-1 bg-white">
      {!!getRemindersData?.[annimationCounter] ? (
        <>
          <div className="flex justify-between align-center reminders-heading mb-0 m-0">
            <p className="fs-24 fw-700 primary-color reminders-tag">
              Reminders
            </p>
            <p className="reminder-amount-show fw-700 fs-16 white-color">
              {getRemindersData.length}
            </p>
          </div>
          <div className="reminder-cardssss">
            <Grid
              container
              className="reminder-cards"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {getRemindersData[annimationCounter]?.entityId && (
                <div className="reminder-single-card reminder-single-card-annimation bg-white border-radius-8 position-absolute">
                  <div className="flex align-center justify-between ">
                    <div className="flex align-center gap-10">
                      <Image
                        src={remindersData[annimationCounter]?.reminderClock}
                        alt="Not Found"
                        priority
                      />
                      <p
                        className="primary-title fw-700 dark-color"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {getRemindersData[annimationCounter]?.name}{" "}
                        {getRemindersData[annimationCounter]?.description}
                      </p>
                    </div>
                    <div className="flex align-center gap-10 reminder-card-status">
                      <Image
                        src={
                          getRemindersData[annimationCounter]?.status === "DONE"
                            ? yellowCheckedIcon
                            : yellowCheckedIcon
                        }
                        alt="yellowCheckedIcon"
                        priority
                      />
                      <p className="yellow-color fw-700 secondary-title">
                        {getRemindersData[annimationCounter]?.status}
                      </p>
                    </div>

                    <div className="position-absolute reminder-card-date">
                      <span className="fw-600 dark-color primary-title">
                        {formattedDate}
                      </span>
                    </div>
                  </div>

                  {getRemindersData[annimationCounter]?.claim && (
                    <div className="wrapper-inner-card-contents flex direction-row gap-10">
                      {/* <div className="flex direction-column gripper-right-inner gap-10">
                    <div className="flex direction-row row-inner-content fs-14 fw-600 gap-10">
                      <Image src={greenInfoIcon} alt="green icon" />
                      <p className="inner-head">
                        {getRemindersData[annimationCounter]?.claim?.id}
                      </p>
                    </div>
                    <div className="flex align-items gap-10">
                      <p className="inner-head">
                        {getRemindersData[annimationCounter]?.claim?.client}
                      </p>
                    </div>
                    <div className="flex align-center gap-10">
                      <p className="inner-head">
                        {getRemindersData[annimationCounter]?.claim?.user}
                      </p>
                    </div>
                  </div> */}
                      <div className="flex align-center ">
                        <div className="fs-14 fw-600">
                          <p className="flex align-center gap-10 dark-color reminder-inner-card">
                            <Image src={greenInfoIcon} alt="green icon" />
                            Claim Number:{" "}
                          </p>
                          <p className="inner-head reminder-inner-card">
                            Name:{" "}
                          </p>
                          <p className="inner-head reminder-inner-card">
                            User:{" "}
                          </p>
                        </div>
                        <div className="fs-14 fw-600 p-0">
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.id ||
                              getRemindersData[annimationCounter]?.claim?.id}
                          </p>
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.user ||
                              getRemindersData[annimationCounter]?.claim?.user}
                          </p>
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.client ||
                              getRemindersData[annimationCounter]?.claim
                                ?.client}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* {remindersData[annimationCounterNextState]?.id && ( */}
              <div className="bg-white border-radius-8 position-absolute upcoming-card">
                <div className="flex align-center justify-between">
                  <div className="flex align-center gap-10">
                    <Image
                      src={remindersData[annimationCounter]?.reminderClock}
                      alt="Not Found"
                      priority
                    />
                    <p
                      className="primary-title fw-700 dark-color"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {getRemindersData[annimationCounterNextState]?.name ||
                        getRemindersData[annimationCounter]?.name}{" "}
                      <span className="opacity-4">
                        {getRemindersData[annimationCounterNextState]
                          ?.description ||
                          getRemindersData[annimationCounter]?.description}
                      </span>
                    </p>
                  </div>
                  <div className="flex align-center gap-10 reminder-card-status">
                    <Image src={yellowCheckedIcon} alt="urgent" priority />
                    <p className="yellow-color fw-700 secondary-title">
                      {getRemindersData[annimationCounterNextState]?.status ||
                        getRemindersData[annimationCounter]?.status}
                    </p>
                  </div>

                  <div className="position-absolute reminder-card-date">
                    <span className="fw-600 dark-color primary-title">
                      {/* {getRemindersData[annimationCounterNextState]?.endDate.split(
                    "T"
                  )[0] ||
                    getRemindersData[annimationCounter]?.endDate.split("T")[0]} */}
                      {formattedDate}
                    </span>
                  </div>
                </div>

                {/* {remindersData[annimationCounterNextState]?.innerCardData && ( */}
                <div className="wrapper-inner-card-contents flex direction-row">
                  {getRemindersData[annimationCounterNextState]?.claim ||
                    (getRemindersData[annimationCounter]?.claim && (
                      // <div className="">
                      <div className="flex align-center ">
                        <div className="fs-14 fw-600">
                          <p className="flex align-center gap-10 reminder-inner-card">
                            <Image src={greenInfoIcon} alt="green icon" />
                            Claim Number:{" "}
                          </p>
                          <p className="inner-head reminder-inner-card">
                            Name:{" "}
                          </p>
                          <p className="inner-head reminder-inner-card">
                            User:{" "}
                          </p>
                        </div>
                        <div className="fs-14 fw-600 p-0">
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.id ||
                              getRemindersData[annimationCounter]?.claim?.id}
                          </p>
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.user ||
                              getRemindersData[annimationCounter]?.claim?.user}
                          </p>
                          <p className="color-dull reminder-inner-card">
                            {getRemindersData[annimationCounterNextState]?.claim
                              ?.client ||
                              getRemindersData[annimationCounter]?.claim
                                ?.client}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                {/* )} */}
              </div>
              {/* )} */}
            </Grid>
          </div>
        </>
      ) : (
        <div className="reminders-heading mb-0 m-0">
          <p className="fs-24 fw-700 primary-color reminders-tag">Reminders</p>
          <p className="fs-14 fw-600 dark-color half-opacity">
            There are no reminders to show. {getRemindersData.lenght}
          </p>
        </div>
      )}
    </div>
  );
};
export default Reminders;

{
  /* <div className="flex align-center fs-14 fw-600 p-0">
                      <p className="inner-head">User: </p>
                      <p className="color-dull">
                        {getRemindersData[annimationCounterNextState]?.claim
                          ?.user ||
                          getRemindersData[annimationCounter]?.claim?.user}
                      </p>
                    </div> */
}
{
  /* ))} */
}
{
  /* </div> */
}
