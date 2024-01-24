import React from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material';
import Image from "next/image";
import searchIcon from "../../../assets/icons/guideLines/SearchIcon.png";

const NewsletterSearchFilter = (props:any) => {

  return (
    <Grid >
      <TextField
        type="text"
        onChange={props.setSearchNewsLetter}
        placeholder="Search"
        //   value={props.searchClient}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              border: "1px solid #0F5156",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src={searchIcon} alt="search" priority />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  )
}

export default NewsletterSearchFilter