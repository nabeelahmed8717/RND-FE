// import "./addeditnewsletter.scss";
import { Avatar, Box, Button, Divider, Grid, Radio } from "@mui/material";
import { FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import Breadcrumb from "../../../UI/breadcrumb/breadcrumb";
import MuiCheckbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

import Image from "next/image";
import Autocomplete from '@mui/material/Autocomplete';

import Modal from '@mui/material/Modal';
import { newsLetterEditUserCommonModalSxStyling } from "../../../common/components/commonModal/commonModalSxStyle";
import { displayToastr } from '../../../redux/toaster/toasterSlice';
import { useAppDispatch } from '../../../hooks/use-store.hooks';

function Checkbox({ label, icon, checkedIcon }: any) {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox defaultChecked disabled icon={icon} checkedIcon={checkedIcon} />
      }
    />
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"70%", sm:"auto"},
  bgcolor: 'background.paper',
  border: '0px',
  borderRadius: '10px',
  boxShadow: 0,
  p: 4,
};
const imgDisplay = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '0px',
  borderRadius: '15px',
  boxShadow: 0,
  p: 2,
};
const EditNewsletter = (props: any) => {
  const { setScreenToShow, editNewsletter, subscribedUserMainData, selectedAddNewsLetter, selectedNewsLetterArray, setEditNewsletter, selectedUserArray, setSelectedUserArray, addNewsLetter, handleAddNewsLetter, handleUpdateNewsLetter } = props;

  const [editNewsLetterdetail, seteditNewsLetterdetail] = useState({
    to:
      editNewsletter?.selectedUserArray?.map((user: any) => user.name) ||
      addNewsLetter?.selectedUserArray?.map((user: any) => user.name),
    from: "" || editNewsletter?.from,
    subject: "" || editNewsletter?.subject,
    image: addNewsLetter?.image || editNewsletter?.image,
    title: editNewsletter?.title || addNewsLetter?.title,
    newsLetterName: addNewsLetter?.newsLetterName || editNewsletter?.newsLetterName,
    description: addNewsLetter?.description || editNewsletter?.description
  });

  const dispatch = useAppDispatch();

  const [openSendToEditModal, setOpenSendToEditModal] = useState(false);
  const sendToUsersModalHandler = (state: boolean) => {
    setOpenSendToEditModal(state)
  }

  const [NewsLetterCardContentsArray, setNewsLetterCardContentsArray] = useState<any>([])

  const [openShowNewsLetterCardContents, setOpenShowNewsLetterCardContents] = useState(false);
  const showNewsLetterCardContentsHandler = (state: boolean) => {
    setOpenShowNewsLetterCardContents(state)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    seteditNewsLetterdetail({ ...editNewsLetterdetail, [name]: value });
  };

  const sendNewsLetterHandler = (e: any) => {
    e.preventDefault();
    const { from, subject, image } = editNewsLetterdetail;
    const updatedData = { ...addNewsLetter, from, subject, image, usersList: editNewsletter.usersList, no: editNewsletter.no }
    setScreenToShow("newsletterTable");
    if (editNewsletter.title) {
      handleUpdateNewsLetter(updatedData)
    } else {
      handleAddNewsLetter(from, subject, image);
    }
  };

  const handleEdit = () => {
    setScreenToShow('addNewsletter')
  }

  const selectUserHandelChange = (value: any) => {
    setSelectedUserArray(value)
  }

  const itemShowImageHandler = (item: any) => {
    setNewsLetterCardContentsArray(item)

  }

  const handelSendHandler = () => {
    {
      setScreenToShow('subscribedUser')
      
        dispatch(
            displayToastr({ isDisplay: true, alertType: "success", message: "Newsletter sent successfully" })
        );
    }
} 
  useEffect(() => {
  }, [ setSelectedUserArray, selectedUserArray, selectedAddNewsLetter])
  
  console.log("selectedAddNewsLetter",selectedAddNewsLetter)

  return (
    <>
      <Box className="Editnewslettert-system-admin">
        <Box className="main">
          <h3 className="fw-700 fs-36 primary-color font-source-sans-pro lh-32">
            Newsletter
          </h3>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <form onSubmit={sendNewsLetterHandler}>

                <Box className="to-user-flex flex align-center justify-between"
                >
                  <div className="to-user-one-inset-left flex align-center flex-wrap" style={{paddingTop:"8px",paddingBottom:"8px"}}>
                    <Checkbox
                      label="To"
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon sx={{ color: "#7FB341" }} />}
                    />

                    {selectedUserArray.length > 0 && selectedUserArray.map((userName: any, index: number) => (
                      <div
                        className="flex align-center fw-400"
                        key={userName.name + index}
                      >
                        {userName.name} {index !== selectedUserArray.length - 1 && ", \xa0" }
                      </div>
                    ))}

                  </div>
                  <EditIcon sx={{ cursor: "pointer", color: "#000" }} onClick={() => sendToUsersModalHandler(true)}/>
                </Box>
                <TextField
                  name="from"
                  onChange={handleChange}
                  value={editNewsLetterdetail.from}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "#CACACA",
                      },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#CACACA",
                      },
                    },
                  }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Checkbox
                          label="From"
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon sx={{ color: "#7FB341" }} />}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon sx={{ cursor: "pointer", color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange={handleChange}
                  name="subject"
                  value={editNewsLetterdetail.subject}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "#CACACA",
                      },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#CACACA",
                      },
                    },
                  }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Checkbox
                          label="Subject"
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon sx={{ color: "#7FB341" }} />}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon sx={{ cursor: "pointer", color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                />


                <Grid className='gripper-news-cards' >
                  {selectedNewsLetterArray.length > 0 && selectedNewsLetterArray.map((item: any) =>
                    <div className="wrap-cards" key={item.id}>
                      <div className="card-news-letter">
                        <div className="card-thumbnail" onClick={() => {showNewsLetterCardContentsHandler(true); itemShowImageHandler(item)}}><Image src={item.image ? item.image : URL.createObjectURL(item.image)} width={244} height={163} alt="newsLetter Thumbnail" priority /></div>
                        <div className="card-text fs-14 fw-600 text-center">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.head }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedAddNewsLetter.length > 0 && selectedAddNewsLetter.map((item: any) =>
                    <div className="wrap-cards" key={item.id}>
                      <div className="card-news-letter">
                        <div className="card-thumbnail" ><Image src={item.image ? item.image : URL.createObjectURL(item.image)} width={244} height={163} alt="newsLetter Thumbnail" priority /></div>
                        <div className="card-text fs-14 fw-600 text-center">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.head }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Grid>


                <Box
                  mt={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{ color: "#434242" }}
                    className="btn-back-add-newsletter fs-16 fw-700 lh-20 font-source-sans-pro"
                    // onClick={() => {setScreenToShow("newsletterTable"); setEditNewsletter({})}}
                    onClick={() => setScreenToShow('subscribedUser')}
                  >
                    Back
                  </Button>
                  <button
                    // onClick={handleContinue}
                    className="btn-submit-add-newsLetter bg-gradient-green fs-16 fw-700 cursor-pointer font-source-sans-pro"
                    type="submit"
                    onClick={handelSendHandler}
                  >
                    Send
                  </button>
                </Box>
              </form>
            </Grid>
          </Grid>



        </Box>
      </Box>


      <Modal
        open={openSendToEditModal}
        onClose={() => sendToUsersModalHandler(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label className="dark-color lh-32 fs-18 fw-700">Edit Users</label>
          <Autocomplete
            multiple
            id="size-small-standard-multi"
            sx={{ maxWidth: {md:"500px"} }}
            options={subscribedUserMainData}
            getOptionLabel={(option) => option.name}
            value={selectedUserArray ? selectedUserArray : ""}
            onChange={(event, value: any) => selectUserHandelChange(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Subscribed Users"
              />

            )}
          />
        </Box>
      </Modal>

      <Modal
        open={openShowNewsLetterCardContents}
        onClose={() => showNewsLetterCardContentsHandler(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={imgDisplay}>
        <Box sx={{display:'flex', flexDirection:'column',alignItems:'flex-end',gap:'15px'}}>
        <CancelIcon
              onClick={() => showNewsLetterCardContentsHandler(false)}
              fontSize="medium"
              style={{ color: "#C2C4C6" }}
              className="cursor-pointer"
            />
            
        {/* <Image src={NewsLetterCardContentsArray?.image} width={778} height={578} alt="newsLetter Thumbnail" priority />  */}
        <Box sx={{padding:'0px 16px', paddingBottom:'15px'}}>
        <Image 
        src={NewsLetterCardContentsArray?.image} 
        width={778} height={578} 
        alt="newsLetter Thumbnail" priority />
        </Box>
        </Box>
        </Box>
      </Modal>

      {/* setSelectedUserArray(value) */}
    </>
  );
};
export default EditNewsletter;
