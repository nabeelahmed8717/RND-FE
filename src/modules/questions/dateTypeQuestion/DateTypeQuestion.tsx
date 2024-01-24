import React, { useState } from "react";
import { Grid, TextField, SvgIcon } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


interface IData {
  startDate: Date;
  endDate: Date;
}


const DateTypeQuestion = ({ setQuestionState, questionState, questionSchema, setShowMessage, setButtonText,setNextQuestionNumber}: any) => {
  const [endDate, setendDate] = useState("");
  const [monthDiff, setMonthDiff] = useState(0);

  const handleMonthDiff = (startDate: any, endDate: any) => {
    return setMonthDiff(moment(endDate).diff(moment(startDate), "months"));
  };

  function handleChange(date: any, name: any) {
    setQuestionState({ ...questionState, [name]: moment(date).format("L") })
  }


  const monthsDifference = moment(questionState['endDate']).diff(moment(questionState['startDate']), "months")
  const dateDifference = moment(questionState['endDate']).diff(moment(questionState['startDate']), "day");
  
  if (monthsDifference < 0 || dateDifference < 0) {
    setShowMessage("Ending date is less than stating date");
    setButtonText('End');
  } else if (monthsDifference < 18 && questionSchema.questionTitle === 4) {
     setShowMessage("Thanks for defining the claim period. These dates will be used in capturing information from the client.");
    setButtonText('proceed');
  } else if(monthsDifference > 18 && questionSchema.questionTitle === 4) {
    setShowMessage("This accounting period is more than 18 months.");
    setButtonText('info');
  }else if(questionSchema.questionTitle === 32 && dateDifference > 0){
    setShowMessage(" Thanks! You have indicated that the technical problem solving took place from Start Month to End Month. Please be aware that only costs incurred during this selected period are eligible.");
    setButtonText('proceed');
  }else{
    setButtonText('End');
    setShowMessage("select claim period");
  }

  if(questionSchema.questionTitle === 4){
    setNextQuestionNumber(5)
  }else{
    setNextQuestionNumber(33)
  }

  function DateIcon(props: any) {
    return <SvgIcon className="svgIcon" {...props} />;
  }

  return (
    <div className="question-four-wrapper">

      <div className="question-card-wrap bg-white w-100 border-radius-8 ">
        <div className="questions-four-content flex direction-column">
          <div>
            <Grid
              container
              spacing={2}
              paddingTop="25px"
              className="date-picker"
            >
              <Grid item xl={4} md={6} sm={6}>
                <label className="fw-700 fs-16 lh-24 dark-color" style={{marginBottom:"10px"}}>
                  {questionSchema.options[0].question}
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    className="datepicker"

                    value={questionState['startDate']}
                    components={{
                      OpenPickerIcon: DateIcon,
                    }}
                    onChange={(startDate) => {
                      handleChange(startDate, 'startDate')
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} name="startDate" sx={{
                        width: "100%", maxWidth: '304px',marginTop:"4px",
                        "& .MuiInputBase-root": {
                          height: "48px",
                          borderRadius:"4px",
                        }
                      }} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xl={4} md={6} sm={6}>
                <label className="fw-700 fs-16 lh-24 dark-color">
                  {questionSchema.options[1].question}
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    className="datepicker"
                    value={questionState['endDate']}
                    components={{
                      OpenPickerIcon: DateIcon,
                    }}
                    onChange={(endDate) => {
                      handleChange(endDate, 'endDate')
                      handleMonthDiff(
                        endDate,
                        moment(endDate).format("L")
                      );
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} name="endDate" sx={{
                        width: "100%", maxWidth: '304px',marginTop:"4px",
                        "& .MuiInputBase-root": {
                          height: "48px",
                          borderRadius:"4px",
                        }
                      }} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </div>

        </div>
      </div>

    </div>
  );
};
export default DateTypeQuestion;
