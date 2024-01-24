import { Alert, Box, Button, Slide, SlideProps, Snackbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC, useState } from "react";
import { WarningAmberOutlined, Clear } from "@mui/icons-material";
import Link from "next/link";

type TransitionProps = Omit<SlideProps, "direction">;
function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

const ActionToaster: FC<{ message: string; action: () => void, isDisplay:boolean,handleClose:(value: boolean) => void }> = (props) => {
  const { message, action, isDisplay:open=true, handleClose:hideToast } = props;
  // const [isDisplay, setIsDisplay] = useState(open);
  const handleClose = () => {
    hideToast(false)
    // setIsDisplay(false);
  };

  return (
    <Snackbar 
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
     sx={{ 
      position:{xs:"relative",md:"absolute"},
      top:"0 !important",
      boxSizing:"border-box",
      width: {xs:"100%",md:"90%"},
       m:0, display: "flex", alignItems: "center", flexDirection:"row"}} open={open} TransitionComponent={TransitionRight}>
      <Alert
        iconMapping={{
          warning: (
            <Stack alignItems="center" sx={{flexDirection:"row"}} gap={1.5}>
              <Box sx={{ width: "7px", minWidth: "7px", height: "49px", borderRadius: "6px", background: "#FFC107" }} />
              <WarningAmberOutlined width={"20px"} height={"20px"} sx={{ color: "#FFC107" }} fontSize="inherit" />
              <Typography fontSize={16} lineHeight={"24px"}>
                {message}
              </Typography>
            </Stack>
          ),
        }}
        action={
          <Stack height="100%" alignItems="center" direction="row" p={0}>
              <Button onClick={action} color="inherit" size="small">
                Go to Verification
              </Button>
            <Button sx={{minWidth:20}} onClick={handleClose} color="inherit" size="small">
              <Clear />
            </Button>
          </Stack>
        }
        severity={"warning"}
        sx={{ display:"flex", textAlign: "center", margin: "auto", width: "100%",flexDirection: {xs:"column",sm:"row"} }}
      />
    </Snackbar>
  );
};

export default ActionToaster;
