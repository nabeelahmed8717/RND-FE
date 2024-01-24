import React, { useState } from "react";
import { Dialog, IconButton, Typography, DialogContent, DialogContentText, DialogTitle,Box, Stack } from "@mui/material";
import Image from "next/image";
import { closeCircleIcon } from "../../../../assets/export";
import { stepsData } from "../../../../common/constants/identityVerfication";

const IdenityInfoDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleClickOpen} className="fw-700 fs-18 secondary-color text-decoration-none cursor-pointer text-center">
        Why I need to verfiy myself?
      </span>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "700px",
              borderRadius: "24px",
            },
          },
        }}
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Stack
          sx={{
            borderRadius: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: "16px", sm: "30px", lg: "40px", xl: "50px" },
            py: { xs: "16px", sm: "24px", lg: "20px", xl: "40px" },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <Image src={closeCircleIcon} alt="closeCircleIcon" />
          </IconButton>
          <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "0", gap: { xs: 0, sm: 3 }, mt: { xs: 2 } }}>
            <DialogTitle id="responsive-dialog-title" className="fw-700 fs-24 primary-color lh-32 text-center">
              Why I need to verfiy myself?
            </DialogTitle>
            <DialogContentText className="text-center">
              Identity verification ensures that there is a real person behind a process and proves that the one is who he or she claims to be, preventing both a person from carrying out a process on our behalf without authorization, and creating
              false identities or commit fraud.
            </DialogContentText>
            <DialogTitle id="responsive-dialog-title" className="fw-700 fs-24 primary-color lh-32 text-center">
              How it works
            </DialogTitle>
            <Stack direction="row" justifyContent="center" sx={{ flexWrap: { xs: "wrap", sm: "nowrap" }, gap: 4 }}>
              {stepsData.map((step, index) => (
                <Box minWidth={"150px"} key={index} m={0} sx={{ gap: { xs: 0 }, ml: 1 }} flex={1}>
                  <Stack sx={{ width: "100%", height: "93px", mb: 1 }} justifyContent="center">
                    <Image src={step.img} alt="" />
                  </Stack>
                  <Typography mb={1} className="fs-16 lh-20 text-center">
                    {step.title}
                  </Typography>
                  <Typography className="fs-12 fw-600 lh-20 text-center label-color">{step.text}</Typography>
                </Box>
              ))}
            </Stack>
          </DialogContent>
        </Stack>
      </Dialog>
    </>
  );
};
export default IdenityInfoDialog;
