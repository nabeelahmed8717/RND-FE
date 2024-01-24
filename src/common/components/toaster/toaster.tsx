import { Snackbar, Alert, Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { RootState } from "../../../redux/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store.hooks";
import { displayToastr } from "../../../redux/toaster/toasterSlice";
import Slide, { SlideProps } from "@mui/material/Slide";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { Stack } from "@mui/system";

type TransitionProps = Omit<SlideProps, "direction">;
function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

export const Toaster: FC = (): JSX.Element => {
  const { isDisplay, message, alertType } = useAppSelector((state: RootState) => state.toaster);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(displayToastr({ isDisplay: false }));
  };

  return (
    <>
      {message && (
        <div className="wrapper-common-alert">
          <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} sx={{ m: { xs: "56px 0 0 0" } }} open={true} autoHideDuration={3000} onClose={handleClose} TransitionComponent={TransitionRight}>
            <Alert
              iconMapping={{
                success: (
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box sx={{ width: "7px", minWidth: "7px", height: "49px", borderRadius: "6px", background: "#198754" }} />
                    <CheckCircleIcon width={"20px"} height={"20px"} sx={{ color: "#198754" }} fontSize="inherit" />
                    <Typography fontSize={16} lineHeight={"24px"}>
                      {message}
                    </Typography>
                  </Stack>
                ),
                error: (
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box sx={{ width: "7px", minWidth: "7px", height: "49px", borderRadius: "6px", background: "#DC3545" }} />
                    <CancelIcon width={"20px"} height={"20px"} sx={{ color: "#DC3545" }} fontSize="inherit" />
                    <Typography fontSize={16} lineHeight={"24px"}>
                      {message}
                    </Typography>
                  </Stack>
                ),
                info: (
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box sx={{ width: "7px", minWidth: "7px", height: "49px", borderRadius: "6px", background: "#0DCAF0" }} />
                    <InfoOutlinedIcon width={"20px"} height={"20px"} sx={{ color: "#0DCAF0" }} fontSize="inherit" />
                    <Typography fontSize={16} lineHeight={"24px"}>
                      {message}
                    </Typography>
                  </Stack>
                ),
                warning: (
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box sx={{ width: "7px", minWidth: "7px", height: "49px", borderRadius: "6px", background: "#FFC107" }} />
                    <WarningAmberOutlinedIcon width={"20px"} height={"20px"} sx={{ color: "#FFC107" }} fontSize="inherit" />
                    <Typography fontSize={16} lineHeight={"24px"}>
                      {message}
                    </Typography>
                  </Stack>
                ),
              }}
              color={alertType}
              severity={alertType}
              sx={{ textAlign: "center", margin: "auto" }}
            />
          </Snackbar>
        </div>
      )}
    </>
  );
};
