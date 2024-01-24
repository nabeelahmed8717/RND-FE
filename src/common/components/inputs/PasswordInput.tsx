import { Error, Visibility, VisibilityOff } from "@mui/icons-material";
import { IHandleBlur, IHandleChange } from "../../interfaces/signUp";
import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";

import Image from "next/image";
import hidePasswordIcon from "../../../assets/images/common/hide-password.png";
import { passwordIcon } from "../../../assets/export";
import showPasswordIcon from "../../../assets/images/common/show-password.png";

const PasswordInput: FC<{
  error: string | undefined;
  touched: boolean | undefined;
  name: string;
  label: string;
  handleChange: IHandleChange;
  handleBlur: IHandleBlur;
  value: string | number;
  placeholder: string;
}> = (props: any) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    error,
    touched,
    name,
    label,
    handleChange,
    handleBlur,
    value,
    placeholder,
  } = props;
  return (
    <>
      <InputLabel
        className={`${
          error && touched && "error-color"
        } fs-18 text-capitalize fw-700 line-height-24 dark-color`}
        htmlFor="password"
      >
        {label}
      </InputLabel>
      <TextField
        fullWidth
        name={name}
        placeholder={placeholder}
        type={isShowPassword ? "text" : "password"}
        variant="outlined"
        value={value}
        onChange={(e) => handleChange(name)(e.target.value.trim())}
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
              <Image
                src={passwordIcon}
                alt="Lock icon"
                className="lock-icon"
                priority
                width={24}
                height={24}
                objectFit="fill"
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                width: "40px",
                // marginRight: { sm: "0.5rem" },
              }}
            >
              {isShowPassword ? (
                <Image
                  src={showPasswordIcon}
                  alt="Password show"
                  objectFit="fill"
                  width={24}
                  height={24}
                  priority
                  className="eye-password-icon cursor-pointer icon-color"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              ) : (
                <Image
                  src={hidePasswordIcon}
                  alt="Password hide"
                  objectFit="fill"
                  width={24}
                  height={24}
                  priority
                  className="eye-password-icon cursor-pointer icon-color"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#17884D",
            },
          },
        }}
      />
      {error && touched && (
        <Typography
          className="fs-18 fw-400 error-color flex align-center cursor-pointer position-absolute"
          variant="body2"
        >
          <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
          {error}
        </Typography>
      )}
    </>
  );
};

export default PasswordInput;
