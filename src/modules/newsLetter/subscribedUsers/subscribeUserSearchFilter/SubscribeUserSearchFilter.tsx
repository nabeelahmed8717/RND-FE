import { Grid, InputAdornment, TextField } from "@mui/material";

import Image from "next/image";
import React from "react";
import searchIcon from "../../../../assets/icons/guideLines/SearchIcon.png";

const SubscribeUserSearchFilter = (props: any) => {
  return (
    <Grid className="font-source-sans-pro">
      <TextField
        type="text"
        onChange={(e) => {
          props?.setSearchSubscribedUser(e.target.value.toLowerCase().trim());
          props?.setPage(0);
        }}
        placeholder="Search by Name"
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
            <InputAdornment position="start"
              sx={{
                width: "40px",
                marginRight: { sm: "1rem" },
              }}>
              <Image
                src={searchIcon}
                alt="search"
                priority
                width={24}
                height={24}
                objectFit="fill"
              />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SubscribeUserSearchFilter;
