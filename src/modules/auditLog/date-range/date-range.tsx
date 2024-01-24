import { Calendar } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";

const DateRange = ({ cancelButton, applyButton}: any) => {
  const [calendarStartDate, setCalendarStartDate] = useState<Date>(new Date());
  const [calendarEndDate, setCalendarEndDate] = useState<Date>(new Date());
  const [calendarDatesSelected, setCalendarDatesSelected] = useState(false);
  const formattedStartDate = moment(calendarStartDate).format("DD/MM/YY");
  const formattedEndDate = moment(calendarEndDate).format("DD/MM/YY");



  const handleStartDate = (date: Date) => {
    setCalendarStartDate(date);
  };

  const handleEndDate = (date: Date) => {
    setCalendarEndDate(date);
    if (date) {
      setCalendarDatesSelected(true);
    }

  };


  return (
    <div className="date-range-booking">
      <div className="calender-position">
        <div className="calender-styling flex">
          <div>
            <p className="secondary-title grey-color start-end-date-margin">
              <b>
                Starts From
                <span>
                  <input
                    className="selected-date"
                    value={moment(calendarStartDate).format("ddd,DD MMM YYYY")}
                    readOnly
                  />
                </span>
              </b>
            </p>
            <Calendar
              showMonthArrow={false}
              color="#0f5156"
              date={calendarStartDate}
              onChange={handleStartDate}
            />
          </div>
          <div>
            <p className="secondary-title grey-color start-end-date-margin">
              <b>
                Ends To
                <span>
                  <input
                    className="selected-date"
                    value={moment(calendarEndDate).format("ddd,DD MMM YYYY")}
                    readOnly
                  />
                </span>
              </b>
            </p>
            <Calendar
              showMonthArrow={false}
              color="#0f5156"
              date={calendarEndDate}
              onChange={handleEndDate}
            />
          </div>
        </div>
          <>
            <hr color="#f5f8fe" />
            <div className="apply-date" >
              <span className="btn-orange" onClick={() => applyButton(formattedStartDate, formattedEndDate)} >Apply</span>
              <span className="btn-orange-outline"  onClick={cancelButton} >Cancel</span>
            </div>
          </>
      </div>
    </div>
  );
};

export default DateRange;