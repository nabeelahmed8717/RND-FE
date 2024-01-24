import { Grid, InputAdornment, TextField } from "@mui/material";

import { FC } from "react";
import { ISearchCardList } from "../../../../common/interfaces/accountSettingsInterface";
import Image from "next/image";
import React from "react";
import searchIcon from "../../../../assets/icons/guideLines/SearchIcon.png";

const SearchCardList: FC<ISearchCardList> = (props) => {
  return (
    <Grid container sx={{ pt: 4, pb: 2 }} className="search-card">
      <Grid item xs={12} sm={6} md={4} xl={4}>
        <TextField
          type="text"
          onChange={(e) => {
            props.setSearchCard(e.target.value.toLowerCase().trim());
            props.setPage(0);
          }}
          size="small"
          placeholder="Search by card holder"
          value={props.searchCard}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ width: "40px" }}>
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
          sx={{
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#17884D",
              },
            },
            width: { xs: "100%", lg: "400px" },
            height: "54px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchCardList;
