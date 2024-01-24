import { Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import addIcon from "../../../assets/icons/common/add-square.svg";
import removeIcon from "../../../assets/icons/common/minus-square.svg";
import DeleteModal from "../../../common/components/deleteModal/DeleteModal";
import ErrorIcon from "@mui/icons-material/Error";

const DynamicTimeSlot = (props: any) => {
  const { formik, timeSlot, setTimeSlot,index } = props;
  const [isDeleteModalopen, setIsDeleteModalopen] = React.useState(false);
  const handleDeleteModalOpen = (index: any) => {
    setIsDeleteModalopen(true);
  };
  const [selectedIndex, setselectedIndex] = useState(0);

  const handleInputChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: any
  ) => {
    const { name, value } = event.target;
    const list: any = [...timeSlot];
    list[index][name] = value;

  };

  const handleRemoveClick = () => {
    let list2 = [...timeSlot];
    console.log(list2);

    list2.splice(selectedIndex, 1);
    if (index || index === 0) {
      setTimeSlot(index,list2)
    } else {
      setTimeSlot(list2)
    }
    setIsDeleteModalopen(false);
  };

  const handleAddClick = () => {
console.log(index);

    if (index || index === 0) {
      setTimeSlot(index,[...timeSlot, { from: "", to: "" }])
    } else {
      setTimeSlot([...timeSlot, { from: "", to: "" }])
    }
    ;
  };
  const openDeleteModal = (index: number) => {
    console.log(index);
    setselectedIndex(index);
    handleDeleteModalOpen(true);
  };
  function showSlot(index: any): string {
    switch (index) {
      case 0:
        return "Slot One";
      case 1:
        return "Slot  Two";
      case 2:
        return "Slot Three";
      case 3:
        return "Slot Four";
      case 4:
        return "Slot Five";
      case 5:
        return "Slot Six";
      case 6:
        return "Slot Seven";
      case 7:
        return "Slot Eight";
      case 8:
        return "Slot Nine";
      default:
        return "";
    }
  }

  return (
    <div className="consultation">
      {timeSlot?.map((time: any, listIndex: any) => {
        return (
          <Grid item container xl={(index || index === 0)?11:8} xs={12} key={listIndex} spacing={"16px"} >
            <Grid item lg={4} xs={12} >
              <label className="fw-700 fs-16 lh-24">Start Time</label>
              <TextField
                type="time"
                name="from"
                value={time.from}
                placeholder="Select time"
                defaultValue="Select time"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleInputChangeValue(event, listIndex);
                  formik.handleChange(event);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={formik.touched.from && !!formik.errors.from}
                sx={{
                  width: { xs: "100%", xl: "304px" },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },

                }}
              />
              {formik.errors.from && formik.touched.from && (
                <Grid
                  className="flex errors-labels fw-600 align-center error-color"
                >
                  <ErrorIcon
                    sx={{ marginRight: "5px" }}
                    fontSize="medium"
                    style={{ color: "#DC3545" }}
                  />
                  <span>{formik.errors.from}</span>
                </Grid>
              )}
            </Grid>
            <Grid item  lg={8} xs={12}  className="">
             
              <Box ml={11} className="position-relative">
              <label className="fw-700 fs-16 lh-24">End Time</label>
              <TextField
               fullWidth
                type="time"
                name="to"
                defaultValue="Select time"
                value={time.to}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleInputChangeValue(event, listIndex);
                  formik.handleChange(event);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={formik.touched.to && !!formik.errors.to}
                sx={{
                  width: { xs: "100%", xl: "304px",lg:"304px" },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#17884D",
                    },
                  },
                }}
              />
              {timeSlot.length > 1 && (
              <Box 
               
                className="position-absolute flex justify-end align-end fw-700 fs-16"
                sx={{top:'34.5px',right:'-22px'}}
              >
                {showSlot(listIndex)}
              </Box>
            )}
              {formik.errors.to && formik.touched.to && (
                <Grid
                  className="flex errors-labels fw-600 align-center error-color"
                >
                  <ErrorIcon
                    sx={{ marginRight: "5px" }}
                    fontSize="medium"
                    style={{ color: "#DC3545" }}
                  />
                  <span>{formik.errors.to}</span>
                </Grid>
              )}
               </Box>
            </Grid>
           
            <Grid
              item
              lg={8}
              className='btn-box flex align-center'
              sx={{
                gap: "15px",
                // pt: 2,
                pb:2
              }}
            >
              {timeSlot.length !== 1 && (
                <Image
                  onClick={() => openDeleteModal(listIndex)}
                  src={removeIcon}
                  className="cursor-pointer"
                  alt="remove"
                  width='24px'
                  height='24px'
                  priority
                />
              )}

              {timeSlot.length - 1 === listIndex && (
                <Box className="flex justify-center cursor-pointer" onClick={handleAddClick}>
                  <Image  src={addIcon} alt="add" width='24px'
                    height='24px'
                    priority />
                  <Box
                    className="fw-700 fs-16 primary-color flex justify-center "
                    sx={{ pt: 0.2, pl: 1.7 }}
                  >
                    Add Multiple Slots
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        );
      })}

      <DeleteModal
        modalText={"Are you sure you want to delete this Project?"}
        modalopenHandler={isDeleteModalopen}
        setModalopenHandler={setIsDeleteModalopen}
        actionSubmitHandler={() => handleRemoveClick()}
      />
    </div>
  );
};

export default DynamicTimeSlot;
