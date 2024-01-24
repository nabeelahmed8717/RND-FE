import { Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { initialValues, validationSchema } from "./validation";

import { AddIcon } from "../../../assets/export";
import CommonModal from "../../../common/components/commonModal/commonModal";
import { ContactList } from "../../../common/mockData/questions/questionSeven";
import { Error } from "@mui/icons-material";
import Image from "next/image";
import { useFormik } from "formik";
import { questionSevenModalSxStyling } from "../../../common/components/commonModal/commonModalSxStyle";

const AddContact: FC<{ handleAddContact: (values: ContactList) => void }> = (
  props
) => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  // formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      props.handleAddContact(values);
      resetForm();
      setOpen(false);
    },
  });

  return (
    <>
      <Stack
        display="inline-flex"
        direction="row"
        spacing={1}
        onClick={handleClickOpen}
        className="cursor-pointer"
      >
        <Image src={AddIcon} alt="AddIcon" priority />
        <p className="fw-700 fs-16 lh-24 primary-color">Add Contact</p>
      </Stack>
      <CommonModal
        title={"Add Contact"}
        resetForm={resetForm}
        buttonText={"Add"}
        className="bg-gradient-green"
        addSubmitHandler={handleSubmit}
        modalopenHandler={open}
        setModalOpenHandler={setOpen}
        modalSxStyle={questionSevenModalSxStyling}
      >
        <Grid className="question-seven" container spacing={4}>
          <Grid item xs={12} className="position-relative mb-15">
            <InputLabel
              className=" fs-18 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro"
              htmlFor={"firstName"}
            >
              First Name
            </InputLabel>
            <TextField
              onChange={handleChange}
              value={values.firstName}
              type={"text"}
              fullWidth
              name={"firstName"}
              placeholder={"Enter first name"}
              onBlur={handleBlur}
              error={!!(errors.firstName && touched.firstName)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CCCCCC",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0f5156",
                  },
                },
              }}
            />
            {errors.firstName && touched.firstName && (
              <Typography
                mt={0.5}
                className="error-color fw-600 lh-24 fs-16 flex align-center font-source-sans-pro position-absolute"
                variant="body2"
              >
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {errors.firstName}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} className="position-relative mb-15">
            <InputLabel
              className="fs-18 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro"
              htmlFor={"lastName"}
            >
              Last Name
            </InputLabel>
            <TextField
              onChange={handleChange}
              value={values.lastName}
              type="text"
              fullWidth
              name={"lastName"}
              placeholder={"Enter last name"}
              onBlur={handleBlur}
              error={!!(errors.lastName && touched.lastName)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CCCCCC",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0f5156",
                  },
                },
              }}
            />
            {errors.lastName && touched.lastName && (
              <Typography
                mt={0.5}
                className="error-color fw-600 lh-24 fs-16 flex align-center cursor-pointer position-absolute"
                variant="body2"
              >
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {errors.lastName}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} className="position-relative mb-15">
            <InputLabel
              className="fs-18 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro"
              htmlFor={"email"}
            >
              Email
            </InputLabel>
            <TextField
              onChange={handleChange}
              value={values.email}
              type="text"
              fullWidth
              name={"email"}
              placeholder={"Enter email"}
              onBlur={handleBlur}
              error={!!(errors.email && touched.email)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CCCCCC",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0f5156",
                  },
                },
              }}
            />
            {errors.email && touched.email && (
              <Typography
                mt={0.5}
                className="error-color fw-600 lh-24 fs-16 flex align-center cursor-pointer position-absolute"
                variant="body2"
              >
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {errors.email}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} className="position-relative mb-15">
            <InputLabel
              className="fs-18 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro"
              htmlFor={"role"}
            >
              Role
            </InputLabel>
            <TextField
              onChange={handleChange}
              value={values.role}
              type="text"
              fullWidth
              name={"role"}
              placeholder={"Enter role"}
              onBlur={handleBlur}
              error={!!(errors.role && touched.role)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CCCCCC",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0f5156",
                  },
                },
              }}
            />
            {errors.role && touched.role && (
              <Typography
                mt={0.5}
                className="error-color fw-600 lh-24 fs-16 flex align-center cursor-pointer position-absolute"
                variant="body2"
              >
                <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
                {errors.role}
              </Typography>
            )}
          </Grid>
        </Grid>
      </CommonModal>
    </>
  );
};
export default AddContact;
