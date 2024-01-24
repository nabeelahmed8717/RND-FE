import { Alert, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
// import NotifiedStateForm from "./NotifiedStateForm";
// import OtherFundingForm from "./OtherFundingForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Image from "next/image";
import SuccessIcon from "../../../assets/images/questionLayout/SuccessIcon.png";
import errorIcon from "../../../assets/images/questionLayout/errorIcon.png";
import infoIcon from "../../../assets/images/questionLayout/infoicon.svg";

function QuestionFourty({ setQuestionState, questionState, questionSchema,setButtonText, buttonText,setNextQuestionNumber}: any) {
  const [IsOtherFunding, setIsOtherFunding] = useState(false);
  const [IsNotifiedAid, setIsNotifiedAid] = useState(false);
  const [IsAllForm, setIsAllForm] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [otherFundingTotal, setOtherFundingTotal] = useState(0);
  const [notifiedStateAidTotal, setNotifiedStateAidTotal] = useState(0);

  const formikNotified = useFormik({
    initialValues: {
      NotifiedStateSmes: "",
      NotifiedStateLcs: "",
      NotifiedStateInHouseRd: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const notifiedState=formikNotified.values.NotifiedStateSmes && formikNotified.values.NotifiedStateLcs && formikNotified.values.NotifiedStateInHouseRd

  const formikFunding = useFormik({
    initialValues: {
      OtherFundingSmes: "",
      OtherFundingLcs: "",
      OtherFundingInHouseRd: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const otherFunding=formikFunding.values.OtherFundingSmes && formikFunding.values.OtherFundingLcs && formikFunding.values.OtherFundingInHouseRd
 

  useEffect(() => {

    if(!!(otherFunding)){
      setIsOtherFunding(true)
      setIsNotifiedAid(false)
      setIsAllForm(false)
    }
    
    else if(!!(notifiedState))
    {
      setIsNotifiedAid(true)
      setIsOtherFunding(false)
      setIsAllForm(false)
    }
    else if (!!(otherFunding && notifiedState))
    {
      setIsAllForm(true)
      setIsNotifiedAid(false)
      setIsOtherFunding(false)
    }

  },[notifiedState, otherFunding]);

  function handleChange(e: any,index:number) {
    console.log('name',e.target.name)
    console.log('value',...e.target.value)
   

    const list: any = [...questionState];
    list[index] =  {...list[index], [e.target.name]: parseInt(e.target.value) } 
    setQuestionState(list)
    setOtherFundingTotal(list[1].sme+list[1].lc+list[1].inHouse);
    setNotifiedStateAidTotal(list[0].sme+list[0].lc+list[0].inHouse);
   // console.log('secondTotal',list[1]?.sme+list[1]?.lc+list[1]?.inHouse);
  // console.log('FirstTotal',list[0]?.sme+list[0]?.lc+list[0]?.inHouse);

    if(otherFundingTotal>=1 && notifiedStateAidTotal<=1){
        setButtonText('info');
        setShowMessage(`Please allocate the £ ${otherFundingTotal} of Other Funding across the three categories of activity`);
    }else if(notifiedStateAidTotal>=1 && otherFundingTotal<=1){
      setButtonText('proceed');
      setShowMessage(`Please allocate the £ ${notifiedStateAidTotal} of State Aid across the three categories of activity`);
    }else{
      setButtonText('proceed');
      setShowMessage(`Thank you for successfully allocating £ ${notifiedStateAidTotal} of State Aid and £ ${otherFundingTotal} of Other Funding across the three categories of activity.`);
    }
    setNextQuestionNumber(41)
  }

  return (
    <div className="wrap-question-14">
      {questionSchema.type === "calculator" &&
    <>
        <h6 className="font-source-sans-pro fw-600 fs-16 lh-24 ark-color m-0 opacity-8">
           {questionSchema.mainQuestion}
          </h6>
         <p className="font-source-sans-pro fw-400 fs-16 lh-24 opacity-8">
           {questionSchema.subQuestion}
        </p>
        {
          questionSchema.questionListContent.map((list:any)=>{
            return(
             <div>
                      <h4
                        className="font-source-sans-pro fw-600 fs-16 lh-24 dark-color opacity-8"
                        key={list.id}
                      >
                        {list.questionListHeading}
                      </h4>
                      <p className="font-source-sans-pro fw-400 fs-16 lh-24 dark-color opacity-8">
                        {list.questionList}
                      </p>
                    </div>
            )
          })
        }
           <h6 className="font-source-sans-pro fw-600 fs-16 lh-24 dark-color opacity-8">
          {questionSchema.subQuestionName}
          </h6>
 
   
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h6 className="font-source-sans-pro fw-600 fs-16 lh-24 dark-color opacity-8">
            {questionSchema.calculatorQuestion}
          </h6>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box
            className="bg-white-shadow bg-white"
            sx={{
              border: "1px solid #DADEE8",
              padding: "20px",
              // width: "364px",
              minHeight: "369px",
              margin: "0 auto",
              borderRadius:"8px",
            }}
            width={{ xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "364px" }}
          >
            <h4 className="font-source-sans-pro fw-600 fs-24 lh-32 primary-color text-center">
             {questionSchema.NotifiedStateAidHeading}
            </h4>
            <p className="font-source-sans-pro fw-400 fs-16 lh-24 dark-color text-center">
            {questionSchema.NotifiedStateAidPara}
            </p>
            {/* form start here */}
            {/* <NotifiedStateForm /> */}
            <form onSubmit={formikNotified.handleSubmit}>
           
              { Object.keys(questionState[0]).map((inputs:any)=>{
                return(
                  <Box
                  className="flex direction-column"
                  sx={{ paddingBottom: "10px" }}
                >
                  <label
                    htmlFor="NotifiedStateSmes"
                    className="font-source-sans-pro fw-700 fs-16 lh-24 dark-color"
                  >
                  {inputs}
                  </label>
                  <input
                    id="NotifiedStateSmes"
                    name={inputs}
                    type="number"
                    minLength={0}
                    onChange={(e) => handleChange(e, 0)}
                    onBlur={formikNotified.handleBlur}
                    value={questionState[0][inputs]}
                    placeholder="0.00"
                    className="question-14-input-fields gray-border-1 border-radiues-3"
                  />
                  {formikNotified.touched.NotifiedStateSmes &&
                  formikNotified.errors.NotifiedStateSmes ? (
                    <div>{formikNotified.errors.NotifiedStateSmes}</div>
                  ) : null}
                   
                </Box>
                )
              })
               }
                <p className="font-source-sans-pro fw-600 fs-16 dark-color opacity-8">Total:    £ {notifiedStateAidTotal}</p>
            
            </form>
            {/* form end here */}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box
            className="bg-white-shadow bg-white"
            sx={{
              border: "1px solid #DADEE8",
              padding: "20px",
              // width: "364px",
              minHeight: "369px",
              margin: "0 auto",
              borderRadius:"8px",
            }}
            width={{ xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "364px" }}
          >
            <h4 className="font-source-sans-pro fw-600 fs-24 lh-32 primary-color text-center">
            {questionSchema.OtherFundingHeading}
            </h4>
            <p className="font-source-sans-pro fw-400 fs-16 lh-24 dark-color text-center">
            {questionSchema.OtherFundingPara}
            </p>

            {/* form start here */}
            {/* <OtherFundingForm /> */}
            <form onSubmit={formikFunding.handleSubmit}>
            {Object.keys(questionState[1]).map((inputs:any)=>{
                return(
                  <Box
                  className="flex direction-column"
                  sx={{ paddingBottom: "10px" }}
                >
                  <label
                    htmlFor="NotifiedStateSmes"
                    className="font-source-sans-pro fw-700 fs-16 lh-24 dark-color"
                  >
                  {inputs}
                  </label>
                  <input
                    id="NotifiedStateSmes"
                    name={inputs}
                    type="number"
                    minLength={0}
                    onChange={(e) => handleChange(e, 1)}
                    onBlur={formikNotified.handleBlur}
                    value={questionState[1][inputs]}
                    placeholder="0.00"
                    className="question-14-input-fields gray-border-1 border-radiues-3"
                  />
                  {formikNotified.touched.NotifiedStateSmes &&
                  formikNotified.errors.NotifiedStateSmes ? (
                    <div>{formikNotified.errors.NotifiedStateSmes}</div>
                  ) : null}
                </Box>
                )
              })

              }
               <p className="font-source-sans-pro fw-600 fs-16 dark-color opacity-8">Total:    £ {otherFundingTotal} </p>
            </form>
            {/* form end here */}
          </Box>
        </Grid>           
      </Grid>
      {showMessage !=="" &&(
           <div className={(buttonText == null || buttonText === "Disable") ? '' : "show-messages border-radius-8 fit-content flex align-center"} style={{ background: buttonText === "End" ? 'rgba(220, 53, 69, 0.1)' : buttonText === "proceed" ? 'rgba(25, 135, 84, 0.1)' : buttonText === "info" ? 'rgba(13, 202, 240, 0.1)' : '' }}>
                        {buttonText === "End" ? <Image src={errorIcon} alt='errorIcon' width={22} height={22} /> : buttonText === "proceed" ? <Image src={SuccessIcon} alt='SuccessIcon' width={22} height={22} /> : buttonText === "info" ? <Image src={infoIcon} alt='infoicon' width={22} height={22} /> : ''}
                        <p className="font-source-sans-pro dark-color m-0 fw-400 fs-16">{showMessage}</p>
                      </div>
        )}
         </>
        }
      
    </div>
  );
}

export default QuestionFourty;