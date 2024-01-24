import { Box, CircularProgress, Grid, Modal } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CommonButton from "../buttons/CommonButton";
import { ICommonModal } from "../../interfaces/commonModalInterface";
import React from "react";
import { sameCommonModalSxStyling } from "./commonModalSxStyle";

const CommonModal: React.FC<ICommonModal> = (props: ICommonModal) => {
  const {
    buttonText,
    width,
    isLoading,
    className,
    children,
    title,
    addSubmitHandler,
    resetForm,
    modalSxStyle,

  } = props;
  const handleClose = () => {
    props.setModalOpenHandler(false);
  };

  return (
    <div className="wrapper-global-modal">
      <Modal
        open={props.modalopenHandler}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[sameCommonModalSxStyling, modalSxStyle]}>
          <Box
            className="flex align-center justify-between"
            m="1.25rem 1.25rem 3.125rem 1.25rem"
          >
            <span className="fs-24 fw-600 dark-color lh-32 font-source-sans-pro">
              {title}
            </span>
            <CancelIcon
              onClick={handleClose}
              fontSize="medium"
              style={{ color: "#C2C4C6" }}
              className="cursor-pointer"
            />
          </Box>
          <Box mx={{ xs: "2rem", sm: "3.125rem" }}>
            {children}
            <Box
              className="wrap-global-modal-btn flex align-center justify-end"
              my="1rem"
            >
              {/* <button
                onClick={props.addSubmitHandler}
                className={`white-color main-global-button align-center flex fw-700 fs-16 font-source-sans-pro cursor-pointer ${props.className}`}
                type="submit"
              >
                {isLoading ? <CircularProgress size={20} thickness={4} className="white-color" /> : buttonText}
              </button> */}
              <CommonButton
                handleSubmit={props.addSubmitHandler}
                type="submit"
                value={!isLoading && buttonText}
                width="100%"
                classNames="main-global-button h-48 green-gradient add-card flex justify-center align-center border-radiues-3 common-button-hover white-color fw-700 fs-16 cursor-pointer font-source-sans-pro"
                flexClasses="flex align-center justify-center"
                whenToShow={isLoading}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CommonModal;
