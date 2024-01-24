import { IHandleBlur, IHandleChange } from "../../interfaces/signUp";
import Image, { StaticImageData } from "next/image";
import { InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React, { FC } from "react";

import { Error } from "@mui/icons-material";

const TextInput: FC<{
  error: string | undefined;
  touched: boolean | undefined;
  name: string;
  label: string;
  handleChange: IHandleChange;
  handleBlur: IHandleBlur;
  value: string | number;
  placeholder: string;
  adornmentIcon: StaticImageData;
  type?: string;
  xlWidth?: string;
  xlHeight?: string;
}> = (props) => {
  const { error, touched, name, label, handleChange, handleBlur, value, placeholder, adornmentIcon, type, xlWidth, xlHeight } = props;
  return (
    <>
      <InputLabel className={`${error && touched && "error-color"} fs-18 text-capitalize fw-700 line-height-24 dark-color`} htmlFor={name}>
        {label}
      </InputLabel>
      <TextField
        onChange={(event)=>handleChange(name)(event.target.value.trim())}
        value={value}
        type={type ? type : "text"}
        fullWidth
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        error={!!(error && touched)}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                width: "40px",
                marginRight: { sm: "1rem" },
              }}
            >
              <Image src={adornmentIcon} alt="Adornment Icon" className="user-icon" priority width={24} height={24} objectFit="fill" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#17884D",
            },
          },
        }}
      />
      {error && touched && (
        <Typography className="fs-18 fw-400 error-color flex align-center position-absolute" variant="body2">
          <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
          {error}
        </Typography>
      )}
    </>
  );
};

export default TextInput;
