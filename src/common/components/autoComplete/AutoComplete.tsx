import { Error } from "@mui/icons-material";
import { InputLabel, Autocomplete, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import searchIcon from "../../../assets/images/common/search.png";
import { ICompanyData, IFilterOptions, IHandleBlur, IHandleCompanyData } from "../../interfaces/signUp";

const AutoComplete: FC<{
  error: string | undefined;
  touched: boolean | undefined;
  id: string;
  label: string;
  handleCompanyData: IHandleCompanyData;
  handleBlur: IHandleBlur;
  value: string;
  placeholder: string;
  filterOptions: IFilterOptions;
  options: ICompanyData[];
  searchedComapny: (value: string) => void;
  isLoading:boolean
}> = (props:any) => {
  const { error, touched, id, label, handleCompanyData, handleBlur, value, placeholder, filterOptions, options, searchedComapny,isLoading } = props;
  const [companiesList, setCompaniesList] = useState(options);
  const [searchedValue,setSearchedValue] = useState("")
  useEffect(() => {
    setCompaniesList(options);
  }, [options]);

  return (
    <>
    {/* error-color is removed, because in figma the label is black when there's error or not */}
      <InputLabel className={`${error && touched && "error-color "} fs-18 text-capitalize fw-700 line-height-24 dark-color font-source-sans-pro`} htmlFor={id}>
        {label}
      </InputLabel>
      <Autocomplete
        filterOptions={filterOptions}
        onChange={handleCompanyData}
        value={value}
        defaultValue={null}
        onBlur={handleBlur}
        id={id}
        loading={isLoading||searchedValue.length<3}
        loadingText={!isLoading&&searchedValue.length<3?`Please enter at least 3 characters of ${label}`:"loading..."}
        // noOptionsText={"No data foundeded"}
        autoSelect={true}
        options={companiesList.map((option: ICompanyData) => (id === "companyNumber" ? option.companyNumber:option.companyName))}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: <Image src={searchIcon} alt="search" priority />,
                placeholder: placeholder,
              }}
              sx={{
                "&.MuiFormControl-root":{
                  height:"48px",
                  // width:{lg:"540px"},
                  // marginBottom:"50px",
                },
                "&.MuiInputBase-root, .MuiOutlinedInput-root" :{
                  height:"48px",
                  paddingTop:"0.3em",
                  // paddingBottom:"0px",
                  // margin:"50px 0px"
                }
              }}
              onChange={(v) => {searchedComapny(v.target.value),setSearchedValue(v.target.value)}}
            />
          );
        }}
        sx={{
         "&.MuiAutocomplete-root":{
          height:"48px",
         },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#17884D",
            },
          },
        }}
      />
      {error && touched && (
        <Typography className="fs-18 fw-400 lh-24 error-color flex align-center cursor-pointer position-absolute " variant="body2"
        sx={{marginTop:"6px"}}>
          <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
          {error}
        </Typography>
      )}
    </>
  );
};

export default AutoComplete;
