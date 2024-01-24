import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBox = (props: any) => {
  const { name, value, handleChange, label, error, touched, checked } = props;
  return (
    <FormControlLabel
      className={`${error && touched && "error-color"
        } fs-16 lh-24 dark-color fw-600`}
      name={name}
      value={value}
      onChange={handleChange}
      sx={{ mb: { xs: 2, sm: 0 } }}
      control={
        <Checkbox
          checked={checked}
          name={name}
          sx={{
            width: 40,
            height: 30,
            borderRadius:"50%",
            color: error && touched ? "#DC3545" : "#0F5156",
            "& .MuiSvgIcon-root": {
              borderRadius: "6px",
              width: "22px",
              height: "22px",
            },
            "&.Mui-checked": {
              color: "#0F5156",
              borderRadius: "6px",
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
