import { styled, Dialog, DialogTitle, DialogContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TermsAndCondition from "./footerModals/Terms&Conditions";
import CookiesPolicy from "./footerModals/CookiesPolicy";
import PrivacyPolicy from "./footerModals/PrivacyPolicy";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface modal {
  open: boolean;
  close: () => void;
  modalToOpen: string;
}

const CustomizedDialogs = (props: modal) => {

  return (
    <BootstrapDialog
      className="FooterModal"
      aria-labelledby="customized-dialog-title"
      PaperProps={{
        sx: { borderRadius: "10px", maxHeight: "80vh", maxWidth: "1080px" },
      }}
      open={props.open}
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          m: 0,
          p: "0 24px",
          lineHeight: "15px",
          borderBottom: "1px solid #EEEEEE",
          px: "1px",
          mx: "20px",
        }}
      >
        {props.modalToOpen && (
          <p className="modalTitle dark-gray-color fs-18 fw-400 ">{props.modalToOpen}</p>
        )}
        <IconButton
          aria-label="close"
          disableRipple
          onClick={props.close}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {props.modalToOpen === "Cookies Policy" ? (
          <CookiesPolicy />
        ) : props.modalToOpen === "Privacy Policy" ? (
          <PrivacyPolicy />
        ) : (
          <TermsAndCondition />
        )}
      </DialogContent>
    </BootstrapDialog>
  );
};
export default CustomizedDialogs;
