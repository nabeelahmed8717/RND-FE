import React, { FC } from "react";
import { Grid, TextField, Stack, FormControl } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CommonModal from "../../../common/components/commonModal/commonModal";
import { IAddUpdateRndUser } from "../../../common/interfaces/RndExpert";
import { RndExpertCommonModalSxStyling } from "../../../common/components/commonModal/commonModalSxStyle";


const RndModal: FC<IAddUpdateRndUser> = (props) => {
  const { formik, editRndUser } = props;
  const resetttform = () => {
    formik.resetForm()
  };

  return (
    <div className="w-100">
      <CommonModal
        title={editRndUser ? "Update RND Expert" : "Add RND Expert"}
        resetForm={resetttform}
        buttonText={editRndUser ? "Update" : "Add"}
        className="bg-secondary"
        addSubmitHandler={formik.handleSubmit}
        modalopenHandler={props.IsModalOpen}
        setModalOpenHandler={props.setIsModalOpen}
        modalSxStyle={RndExpertCommonModalSxStyling}
      >
        <div className="add-collaborator-form-wrapper">
          <FormControl
            sx={{ minWidth: { xs: "200px", sm: "350px", lg: "540px" } }}
          >
            <form className="form-input flex">
              <Grid container>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing="1.25rem"
                    sx={{
                      marginBottom: {
                        xl: "50px",
                        lg: "50px",
                        md: "40px",
                        sm: "40px",
                        xs: "40px",
                      },
                    }}
                  >
                    <Grid item xs={12} lg={6} className="position-relative"
                      sx={{
                        marginBottom: {
                          xl: "0px",
                          lg: "0px",
                          md: "25px",
                          sm: "25px",
                          xs: "25px",
                        },
                      }}
                      >
                      <label className="dark-color lh-32 fs-18 fw-700">
                        First Name
                      </label>
                      <TextField
                        sx={{
                          "&.MuiFormControl-root": {
                            height: "48px",
                          },

                          "&.MuiInputBase-root,   .MuiOutlinedInput-root": {
                            height: "48px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                          },
                        }}
                        id="firstName"
                        type="text"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter first name"
                        error={
                          !!(
                            formik.errors.firstName && formik.touched.firstName
                          )
                        }
                        className={
                          formik.errors.firstName && formik.touched.firstName
                            ? "input-error"
                            : ""
                        }
                      />
                      {formik.errors.firstName && formik.touched.firstName && (
                        <>
                          <div
                            className="flex errors-labels fw-600 align-center error-color position-absolute"
                            style={{ bottom: "-24px",marginBottom:"-5px" }}
                          >
                            <ErrorIcon
                              sx={{ marginRight: "5px", marginTop: "5px" }}
                              fontSize="medium"
                              style={{ color: "#DC3545" }}
                            />
                            <span>{formik.errors.firstName}</span>
                          </div>
                        </>
                      )}
                    </Grid>

                    <Grid item xs={12} lg={6} className="position-relative">
                      <label className="dark-color lh-32 fs-18 fw-700">
                        Last Name
                      </label>
                      <TextField
                        sx={{
                          "&.MuiFormControl-root": {
                            height: "48px",
                          },

                          "&.MuiInputBase-root,   .MuiOutlinedInput-root": {
                            height: "48px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                          },
                        }}
                        id="lastName"
                        type="text"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter last name"
                        error={
                          !!(formik.errors.lastName && formik.touched.lastName)
                        }
                        className={
                          formik.errors.lastName && formik.touched.lastName
                            ? "input-error"
                            : ""
                        }
                      />
                      {formik.errors.lastName && formik.touched.lastName && (
                        <>
                          <div
                            className="flex errors-labels fw-600 align-center error-color position-absolute"
                            style={{ bottom: "-24px",marginBottom:"-5px" }}
                          >
                            <ErrorIcon
                              sx={{ marginRight: "5px", marginTop: "5px" }}
                              fontSize="medium"
                              style={{ color: "#DC3545" }}
                            />
                            <span>{formik.errors.lastName}</span>
                          </div>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                {/* </Stack> */}
                <Grid
                  xs={12}
                  className=" position-relative"
                  sx={{
                    marginBottom: {
                      xl: "50px",
                      lg: "50px",
                      md: "40px",
                      sm: "40px",
                      xs: "40px",
                    },
                  }}
                >
                  <label className="dark-color lh-32 fs-18 fw-700">Email</label>
                  <TextField
                    sx={{
                      "&.MuiFormControl-root": {
                        height: "48px",
                      },

                      "&.MuiInputBase-root,   .MuiOutlinedInput-root": {
                        height: "48px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                      },
                    }}
                    id="email"
                    type="text"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter email"
                    error={!!(formik.errors.email && formik.touched.email)}
                    className={
                      formik.errors.email && formik.touched.email
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.errors.email && formik.touched.email && (
                    <>
                      <div
                        className="flex errors-labels fw-600 align-center error-color position-absolute"
                        style={{ bottom: "-24px",marginBottom:"-5px" }}
                      >
                        <ErrorIcon
                          sx={{ marginRight: "5px" }}
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{formik.errors.email}</span>
                      </div>
                    </>
                  )}
                </Grid>

                <Grid
                  xs={12}
                  className="position-relative mb-40"
                  sx={{
                    marginBottom: {
                      xl: "40px",
                      lg: "40px",
                      md: "30px",
                      sm: "30px",
                      xs: "30px",
                    },
                  }}
                >
                  <label className="dark-color lh-32 fs-18 fw-700">Phone Number</label>
                  <TextField
                    sx={{
                      "&.MuiFormControl-root": {
                        height: "48px",
                      },

                      "&.MuiInputBase-root, .MuiOutlinedInput-root": {
                        height: "48px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                      },
                    }}
                    id="phone"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter phone"
                    error={!!(formik.errors.phone && formik.touched.phone)}
                    className={
                      formik.errors.phone && formik.touched.phone
                        ? "input-error"
                        : ""
                    }
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <>
                      <div
                        className="flex errors-labels fw-600 align-center error-color position-absolute"
                        style={{ bottom: "-24px",marginBottom:"-5px" }}
                      >
                        <ErrorIcon
                          sx={{ marginRight: "5px" }}
                          fontSize="medium"
                          style={{ color: "#DC3545" }}
                        />
                        <span>{formik.errors.phone}</span>
                      </div>
                    </>
                  )}
                </Grid>
              </Grid>
            </form>
          </FormControl>
        </div>
      </CommonModal>
    </div>
  );
};

export default RndModal;
