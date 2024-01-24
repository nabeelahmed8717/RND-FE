import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import iconCurrency from "../../../assets/icons/common/PlaceholderCurrency.svg";
import SuccessIcon from "../../../assets/images/questionLayout/SuccessIcon.png";
import errorIcon from "../../../assets/images/questionLayout/errorIcon.png";
import infoIcon from "../../../assets/images/questionLayout/infoicon.svg";

function QuestionSixtyTwo({ setQuestionState, questionState, questionSchema ,questionSchemaTwo,setNextQuestionNumber,setButtonText, buttonText,comapnyName}: any) {
  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState("");
  const [sumOfValues, setSumOfValues] = useState("");
  
  // function sum_reducer(accumulator:any, currentValue:any) {
  //   return accumulator + currentValue;
  // }

  function handleChange(e: any, type = "string",fieldName:string="") {
    console.log('value', e.target.value)
    if(type==='boolean'){
      let value=e.target.value
      if(value==='false'){
        value=false
      }else if(value==='true'){
        value=true
      }

      setQuestionState({ ...questionState, [e.target.name]: value })
      setButtonText('proceed');
      setShowMessage(`${comapnyName} didn't use any subcontractors on its R&D activities.`);
    }else{
      // let sum = questionState.reduce(sum_reducer);
      setSumOfValues(e.target.value);
      setQuestionState({ ...questionState,[e.target.name]: {...questionState[e.target.name],[fieldName]:  parseInt(e.target.value) }})
      setButtonText('proceed');
      setShowMessage(`${comapnyName} spent a total of £ ${sumOfValues} on subcontractors.`);
    }
    setNextQuestionNumber(64)
  }
console.log('questionState++++++++++', questionState);

  return (
    <div className="wrap-question-sixty-two">

      {questionSchema.type === "MultipleInputs" &&
      <Box>
             <div>
              <h6 className="dark-color fs-16 fw-600 lh-24 font-source-sans-pro m-0">{questionSchema.mainQuestion}</h6>
              <h6 className="dark-color fs-16 fw-600 lh-24 font-source-sans-pro">
                {questionSchema.subQuestion}
              </h6>
              <h6 className="dark-color fs-16 fw-600 lh-24 font-source-sans-pro">
                {questionSchema.subQuestion1}
              </h6>
              <p className="dark-color fs-16 fw-400 lh-24 mt-25 mb-40 font-source-sans-pro">
            {questionSchema.subQuestionName}
              </p>
            </div>
        <Grid container spacing={2}>
          
            <>
          <Grid item xs={12}>
            <Box paddingBottom="25px">
              <FormControlLabel
                control={
                  <Checkbox
                    id="clientChecked"
                    value={(questionState['didNotUseSubcontractors']===false || questionState['didNotUseSubcontractors']==='false') ?true:false}
                    checked={questionState['didNotUseSubcontractors']}

                    name='didNotUseSubcontractors'
                    onChange={(e) => handleChange(e, "boolean")}
                  
                    sx={{
                      color: "#0F5156",
                      "& .MuiSvgIcon-root": {
                        borderRadius: "6px",
                      },
                      "&.Mui-checked": {
                        color: "#0F5156",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    className="remember-me-content font-source-sans-pro" component="div" fontSize="16px" fontWeight={600} color="#343A40">
                    {questionSchema.lable}
                  </Typography>
                }
              />
            </Box>
          </Grid>
         
           
            {
              questionSchema.options.map((option:any)=>{
                return(
                  <>
                   <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
                <Typography className="dark-color fs-16 fw-400 lh-24 font-source-sans-pro" margin={{sm:"0px",xs:"0px"}}>{option.inputText}</Typography>
              </Grid>
              {
                option.row.map((innerfield:any,ind:number)=>{
                return(
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={ind}>
                  <Box>
                    <label className="dark-color fs-16 fw-700 lh-24 m-0 font-source-sans-pro ">
                    {innerfield.label}
                    </label>
                    <TextField
                      fullWidth
                      name={option.title}
                      variant="outlined"
                      type="number"
                      placeholder="0.00"
                      autoFocus
                      value={questionState[option.title][ind===0?'connected':'unconnected']}
                      size="medium"
                      disabled={isChecked}
                      onChange={(e) => handleChange(e, "number",ind===0?'connected':'unconnected')}
                      sx={{
                        borderRadius: "3px",
                        fontSize: "18px",
                        color: "#343A40",
                        marginBottom: "20px",
                        "& .MuiInputBase-input.Mui-disabled": {
                          WebkitTextFillColor: "#343A40",
                          background: "#F1F1F1",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Image src={iconCurrency} />
                            </InputAdornment>
                        ),
                    }}
                    />
                  </Box>
                </Grid>
                )})
              }
                  </>
                )})
            }
             
            </>
        </Grid>
      </Box>
}
            {showMessage !=="" &&(
           <div className={(buttonText == null || buttonText === "Disable") ? '' : "show-messages border-radius-8 fit-content flex align-center"} style={{ background: buttonText === "End" ? 'rgba(220, 53, 69, 0.1)' : buttonText === "proceed" ? 'rgba(25, 135, 84, 0.1)' : buttonText === "info" ? 'rgba(13, 202, 240, 0.1)' : '' }}>
                        {buttonText === "End" ? <Image src={errorIcon} alt='errorIcon' width={22} height={22} /> : buttonText === "proceed" ? <Image src={SuccessIcon} alt='SuccessIcon' width={22} height={22} /> : buttonText === "info" ? <Image src={infoIcon} alt='infoicon' width={22} height={22} /> : ''}
                        <p className="font-source-sans-pro dark-color m-0 fw-400 fs-16">{showMessage}</p>
                      </div>
           )}
    </div>
  );
}

export default QuestionSixtyTwo;
