import { Box, Modal, Grid } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 4,
};

const DeleteModal = (props: any) => {
  const handleDeleteModalClose = () => props.setModalopenHandler(false);

  return (
    <Modal
      open={props.modalopenHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal-wrapper"
    >
      <Box sx={style}>
        <h2 className=" fs-18 fw-600">{props.modalText}</h2>
        <Grid
          className="flex justify-end primary-color mt-50"
          sx={{ gap: "20px" }}
        >
          <button
            className="button-cancel fs-14 fw-700 primary-color cursor-pointer border-radiues-3 gray-border-1"
            type="button"
            onClick={handleDeleteModalClose}
          >
            Cancel
          </button>
          <button
            className="button-delete fs-14 fw-700 primary-color cursor-pointer border-radiues-3 border-0 white-color"
            type="button"
            onClick={props.actionSubmitHandler}
          >
            Delete
          </button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
