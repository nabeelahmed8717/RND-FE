import { Error } from "@mui/icons-material";
import { CircularProgress, Grid, TextField, Typography } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import { STATUS, UnAuthorized } from "../../../../common/constants/store";
import { IChangeEmail } from "../../../../common/interfaces/accountSettingsInterface";
import { changeEmailData } from "../../../../common/mockData/accountSettings/myProfile/myProfile";
import { ValidateEmail } from "../../../../common/utils/utils";
import { useAppDispatch, useAppSelector } from "../../../../hooks/use-store.hooks";
import { changeMailConfirm, getVerficationCode } from "../../../../redux/changeEmail/changeEmail.api";
import { displayToastr } from "../../../../redux/toaster/toasterSlice";

const ChangeEmail: FC<IChangeEmail> = (props) => {
  const dispatch = useAppDispatch();

  // geting data from changeEmailSlice
  const { message, emailStatus, codeStatus } = useAppSelector((state) => state.changeEmail);
  const [toastsStatus, setToastStatus] = useState({ codeToastStatus: codeStatus, EmailToastStatus: emailStatus })
  //error message handle state
  const [errorMessage, setErrorMessage] = useState(message);
  // managing state of inputs
  const [userData, setUserData] = useState({ email: props.userEmail ?? "", newEmail: "", VerificationCode: "" });
  //change send code api method
  const handleVerficationCode = () => {
    ValidateEmail(userData.newEmail) && dispatch(getVerficationCode({ email: userData.newEmail }));
    setErrorMessage(message);
  };
  //change email api method
  const handleChangeMail = () => {
    userData.VerificationCode && dispatch(changeMailConfirm({ code: userData.VerificationCode }));
    setErrorMessage(message);
  };
  //display code toast
  const CodeToast = useCallback(() => {
    if (toastsStatus.codeToastStatus === STATUS.SUCCEEDED) {
      dispatch(displayToastr({ message: "Verfication code sent to registered email" }))
      setToastStatus({ ...toastsStatus, codeToastStatus: STATUS.IDLE })
    }
    // toastsStatus.codeToastStatus === STATUS.SUCCEEDED && dispatch(displayToastr({ message: "Verfication code sent to registered email" }));
  }, [dispatch, toastsStatus]);
  //display email toast
  const EmailToast = useCallback(() => {
    if (toastsStatus.EmailToastStatus === STATUS.SUCCEEDED) {
      dispatch(displayToastr({
        isDisplay: true,
        message: "Verfication code sent to registered email",
        alertType: "success"
      }))
      setToastStatus({ ...toastsStatus, EmailToastStatus: STATUS.IDLE })
    }
    // toastsStatus.EmailToastStatus === STATUS.SUCCEEDED && dispatch(displayToastr({ message: "Registered email updated successfully" }));
  }, [dispatch, toastsStatus]);

  useEffect(() => {
    CodeToast();
    EmailToast();
    setErrorMessage(message);
  }, [message, codeStatus, emailStatus, dispatch, CodeToast, EmailToast]);

  return (
    <div className="change-email">
      <p className="fw-700 fs-24 dark-color">Change Email</p>
      <Grid container sx={{ width: { xl: "540px" } }}>
        {changeEmailData.map((emailValues: any) => (
          <Grid item key={emailValues.id} xs={12} mt={"2.5rem"}>
            <div className="flex justify-between">
              <label className="fw-700 fs-16 lh-24">{emailValues.label}</label>
              <span onClick={handleVerficationCode} className={`fw-700 fs-18  ${codeStatus === STATUS.PENDING ? "label-color" : "secondary-color"}  cursor-pointer`}>
                {emailValues.name === "VerificationCode" && (codeStatus === STATUS.PENDING ? "Please wait..." : "Send Code")}
              </span>
            </div>

            <TextField
              type={emailValues.name === "email" ? "email" : "text"}
              name={emailValues.name}
              disabled={emailValues.IsDisable}
              fullWidth
              className={emailValues.name === "email" ? "bg-disable" : ""}
              placeholder={emailValues.placeholder}
              value={userData[emailValues.name as keyof typeof userData]}
              onChange={(event) => {
                setUserData({ ...userData, [event.target.name]: event.target.value });
                setErrorMessage("");
              }}
              sx={{
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#17884D",
                  },
                },
                width: {
                  xs: "100%",
                  xl: "540px",
                },
                height: "48px",
              }}
            />
          </Grid>
        ))}

        {errorMessage && (emailStatus === STATUS.FAILED || codeStatus === STATUS.FAILED) && (userData.VerificationCode.length > 0 || userData.newEmail.length > 0) && (
          <Grid item xs={12}>
            <Typography mt={0.5} className="fs-18 fw-400 error-color flex align-center cursor-pointer position-absolute" variant="body2">
              <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
              {errorMessage === UnAuthorized.error ? UnAuthorized.text : errorMessage}
            </Typography>
          </Grid>
        )}
        <Grid item sx={{ pt: 6 }} xs={12} className="flex justify-between">
          <button
            className="primary-color  cursor-pointer flex justify-center align-center border-radiues-3 bg-white gray-border-1 
            cancel-Profile-Button fw-700 fs-16 font-source-sans-pro"
            onClick={() => props.setIsProfileInfo(!props.IsProfileInfo)}
          >
            Cancel
          </button>
          <button
            onClick={handleChangeMail}
            className="save-button green-gradient flex justify-center align-center border-radiues-3 common-button-hover white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
          >
            {emailStatus === STATUS.PENDING ? <CircularProgress size={20} thickness={4} className="white-color" /> : "Save"}
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangeEmail;
