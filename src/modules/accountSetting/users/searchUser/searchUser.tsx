import { Grid, InputAdornment, TextField } from "@mui/material";
import React, { FC } from "react";

import Image from "next/image";
import searchIcon from "../../../../assets/icons/guideLines/SearchIcon.png";

interface ISearchInvoice {
  setPage: any;
  setSearchCard: any;
  searchCard: any;
}
const SearchUser: FC<ISearchInvoice> = (props) => {
  return (
    <Grid container sx={{ pt: 4, pb: 2 }} className="search-user">
      <Grid item xs={12} sm={6} md={4} xl={4}>
        <TextField
          type="text"
          onChange={(e) => {
            props.setSearchCard(e.target.value.toLowerCase().trim());
            props.setPage(0);
          }}
          sx={{
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#17884D",
              },
            },
            width: { xs: "100%", lg: "400px" },
            height: "54px",
          }}
          size="small"
          placeholder="Search by name"
          value={props.searchCard}
          fullWidth
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
                  src={searchIcon}
                  alt="search"
                  priority
                  width={24}
                  height={24}
                />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchUser;
