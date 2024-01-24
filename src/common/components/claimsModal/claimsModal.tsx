import React, { FC } from "react";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

interface IClaimModal {
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  SubmitHandler: () => void;
  SubmitClass: string;
  CancelClass: string;
  submitButtonText: string;
  cancelButtonText: string;
  open: boolean;
}
const ClaimsModal: FC<IClaimModal> = (props) => {
  const handleClose = () => {
    props.setModalType("");
  };
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <Grid
        sx={{
          width: { xs: 240, sm: 400, md: 500, lg: 500 },
          // pl: 4,
          // pt: 5,
          // pb: 1,
          padding:"3.125rem 1.875rem 1.25rem 1.875rem"
        }}
      >
        <span className="fs-18 font-source-sans-pro fw-600 lh-24 primary-color">
          {props.title}
        </span>

        <Grid sx={{ pt: "3.125rem", }}>
          <DialogActions className="flex align-center justify-end">
            <button
              onClick={handleClose}
              className={`primary-color  cursor-pointer cancelClaimButton fw-700 fs-16 font-source-sans-pro ${props.CancelClass}`}
              type="submit"
            >
              {props.cancelButtonText}
            </button>
            <button
              onClick={props.SubmitHandler}
              className={`white-color cursor-pointer submitButton fw-700 fs-16 font-source-sans-pro ${props.SubmitClass}`}
              type="submit"
            >
              {props.submitButtonText}
            </button>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ClaimsModal;
