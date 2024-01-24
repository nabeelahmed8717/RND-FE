import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";
import {
  MenuProps,
  UserControlItem,
  UserPurchaseItem,
} from "../../../../common/mockData/accountSettings/users/users";
import React, { FC } from "react";

import CommonModal from "../../../../common/components/commonModal/commonModal";
import ErrorIcon from "@mui/icons-material/Error";
import { IUpsertUser } from "../../../../common/interfaces/accountSettingsInterface";
import { addUserCommonModalSxStyling } from "../../../../common/components/commonModal/commonModalSxStyle";

const UpsertUser: FC<IUpsertUser> = (props) => {
  const { formik, editMode } = props;
  const resetttform = () => {
    formik.resetForm()
  };
  return (
    <div>
      <CommonModal
        title={editMode ? "Edit User" : "Add User"}
        resetForm={resetttform}
        buttonText={editMode ? "Update" : "Add"}
        className="bg-gradient-green"
        addSubmitHandler={formik.handleSubmit}
        isLoading={props.islodingValue}
        modalopenHandler={props.IsModalOpen}
        setModalOpenHandler={props.setIsModalOpen}
        modalSxStyle={addUserCommonModalSxStyling}
      >
        <Grid container className="add-user" sx={{ width: { xl: "540px" } }}>
          <Grid
            mb={0}
            item
            xs={12}
            className="fw-600 fs-16 dark-color position-relative"
          >
            Once the user account has been created, we will automatically send
            an invitation email to the user.
          </Grid>

          <Grid item xs={12} mt="1.875rem">
            <label className="dark-color lh-32 fs-18 fw-700">First Name</label>
            <TextField
              name="firstName"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter first name"
              error={!!(formik.errors.firstName && formik.touched.firstName)}
              className={
                formik.errors.firstName && formik.touched.firstName
                  ? "input-error"
                  : ""
              }
              sx={{
                width: {
                  xs: "100%",
                  lg: "540px",
                },
                height: "48px",
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: "1px solid #198754",
                  },
                },
              }}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <>
                <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545"  ,marginRight: "5px",marginTop:"6px" }} />
                  <span>{formik.errors.firstName}</span>
                </div>
              </>
            )}
          </Grid>
          <Grid item xs={12} mt="1.875rem">
            <label className="dark-color lh-32 fs-18 fw-700">Last Name</label>
            <TextField
              id="lastName"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter last name"
              error={!!(formik.errors.lastName && formik.touched.lastName)}
              className={
                formik.errors.lastName && formik.touched.lastName
                  ? "input-error"
                  : ""
              }
              sx={{
                width: {
                  xs: "100%",
                  lg: "540px",
                },
                height: "48px",
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: "1px solid #198754",
                  },
                },
              }}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <>
                <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545",marginRight: "5px",marginTop:"6px" }} />{" "}
                  <span>{formik.errors.lastName}</span>
                </div>
              </>
            )}
          </Grid>

          <Grid item xs={12} mt="1.875rem">
            <label className="dark-color lh-32 fs-18 fw-700">Email</label>
            <TextField
              id="email"
              type="email"
              fullWidth
              variant="outlined"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email"
              error={!!(formik.errors.email && formik.touched.email)}
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
              // editMode 
              // InputProps={{
              //   readOnly: true,
              // }}
             
              sx={{
                width: {
                  xs: "100%",
                  lg: "540px",
                },
                height: "48px",
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: "1px solid #198754",
                  },
                },
              }}
            />
            {formik.errors.email && formik.touched.email && (
              <>
                <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545" ,marginRight: "5px",marginTop:"6px"}} />{" "}
                  <span>{formik.errors.email}</span>
                </div>
              </>
            )}
          </Grid>
          <Grid item xs={12} mt="1.875rem">
            <label className="dark-color lh-32 fs-18 fw-700">
              Phone Number
            </label>
            <TextField
              id="phoneNumber"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter phone number"
              error={!!(formik.errors.phoneNumber && formik.touched.phoneNumber)}
              className={
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "input-error"
                  : ""
              }
              sx={{
                width: {
                  xs: "100%",
                  lg: "540px",
                },
                height: "48px",
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: "1px solid #198754",
                  },
                },
              }}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <>
                <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545" ,marginRight: "5px",marginTop:"6px"}} />
                  {formik.errors.phoneNumber}
                </div>
              </>
            )}
          </Grid>
          <Grid item xs={12} mt="1.875rem">
            <label className="dark-color lh-32 fs-18 fw-700">
              User Can View
            </label>
            <FormControl sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  border: "1px solid #198754",
                },
              },
            }}>
              <Select
                id="userView"
                displayEmpty
                fullWidth
                size="small"
                name="userView"
                value={formik.values.userView}
                error={
                  !!(formik.errors.userView && formik.touched.userView)
                }
                sx={{
                  width: {
                    xs: "100%",
                    lg: "540px",
                  },
                  height: "48px",
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      border: "1px solid #198754",
                    },
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="fw-400 fs-16 font-source-sans-pro"
                renderValue={(selected) => {
                  if (selected?.length === 0) {
                    return <span>Select</span>;
                  }
                  return selected;
                }}
                placeholder="All users"
                MenuProps={MenuProps}
              >
                {UserControlItem.map((option: any) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    className="fw-400 fs-16 font-source-sans-pro "
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.errors.userView && formik.touched.userView && (
              <>
                <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                  <ErrorIcon fontSize="medium" style={{ color: "#DC3545" ,marginRight: "5px",marginTop:"6px"}} />
                  {formik.errors.userView}
                </div>
              </>
            )}
          </Grid>
          <Grid item xs={12} mt="1.875rem" mb="1rem">
            <label className="dark-color lh-32 fs-18 fw-700">
              User Can Purchase
            </label>
            <FormControl sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  border: "1px solid #198754",
                },
              },
            }}>
              <Select
                id="userPurchase"
                displayEmpty
                fullWidth
                size="small"
                name="userPurchase"
                value={formik.values.userPurchase}
                error={
                  !!(
                    formik.errors.userPurchase &&
                    formik.touched.userPurchase
                  )
                }
                sx={{
                  width: {
                    xs: "100%",
                    lg: "540px",
                  },
                  height: "48px",

                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="fw-400 fs-16 font-source-sans-pro "
                renderValue={(selected) => {
                  if (selected?.length === 0) {
                    return <span>Select</span>;
                  }
                  return selected;
                }}
                placeholder="All Users"
                MenuProps={MenuProps}
              >
                {UserPurchaseItem.map((option: any) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    className="fw-400 fs-16 font-source-sans-pro "
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.errors.userPurchase &&
              formik.touched.userPurchase && (
                <>
                  <div className="flex formik.errors-labels fw-600 align-start error-color lh-35 position-absolute">
                    <ErrorIcon fontSize="medium" style={{ color: "#DC3545" ,marginRight: "5px",marginTop:"6px"}} />
                    {formik.errors.userPurchase}
                  </div>
                </>
              )}
          </Grid>

          {/* {props.message.length > 0 && (
            <Grid
              xs={12}
              className="flex errors-labels fw-600 align-center error-color"
            >
              <ErrorIcon
                sx={{ marginRight: "5px", marginTop: "5px" }}
                fontSize="medium"
                style={{ color: "#DC3545" }}
              />
              <span>{props.message}</span>
            </Grid>
          )} */}
        </Grid>
      </CommonModal>
    </div>
  );
};

export default UpsertUser;
