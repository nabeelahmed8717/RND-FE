import {
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import searchIcon from "../../../assets/icons/guideLines/SearchIcon.png";
import { RndExpertTableData } from "../../../common/mockData/RndExpert/RndExpert";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const RndExpertSearchFilters = (props: any) => {
  // __Prevent claim status array from duplications
  const rndExpertFilteredarray = props.rndExpertArray.filter(
    (
      value: { firstName: string; lastName: string },
      index: any,
      array: { firstName: string; lastName: string }[]
    ) =>
      array.findIndex(
        (item: { firstName: string; lastName: string }) =>
          item.firstName && item.lastName === value.firstName && value.lastName
      ) === index
  );

  return (
    <Grid
      container
      spacing={2}
      className="ClaimsSearchFilters filter-wrap-rnd-expert flex justify-around align-center"
      sx={{marginTop:"6px"}}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className="rnd-expert-filter-input flex align-center"
      >
        <TextField
          type="text"
          className="rnd-expert-input border-radiues-3 fw-600 fs-16 lh-24 font-source-sans-pro rnd-expert-filter-text-input w-100  "
          onChange={(e) => {
            props.setSearchRndExpertName(e.target.value.toLowerCase().trim());
            props.setPage(0);
          }}
          placeholder="Search"
          value={props.searchRndExpertName}
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "400px",
              lg: "400px",
              xl: "400px",
            },
            height: "54px",
            marginLeft: "26px",
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
              }}
              >
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

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className="flex justify-end align-center rnd-expert-filterby-name"
      >
        <FormControl
          className="rnd-expert-filterby-name"
          sx={{
            width: {
              xs: "98%",
              sm: "98%",
              md: "250px",
              lg: "250px",
              xl: "250px",
            },
            marginLeft: { xs: "13px", sm: "13px" },
            marginTop: { xs: "8px", sm: "8px" },
            marginRight: { sm: "0px",md: "24px", xl: "24px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#CCCCCC",
              },
              "&:hover fieldset": {
                borderColor: "#0f5156",
              },
            },
          }}
        >
          <Select
            displayEmpty
            value={props.filterByRndExpertName}
            onChange={(e) => {
              props.setFilterByRndExpertName(
                e.target.value === "RND Expert Name" ? "" : e.target.value
              );
              props.setPage(0);
            }}
            sx={{
              width: {
                xs: "180",
                sm: "98%",
                md: "250px",
                lg: "250px",
                xl: "250px",
              },
              marginLeft: "14px",
            }}
            className="fw-400 fs-16 font-source-sans-pro dark-color rnd-expert-filter"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <span className="fw-400 fs-16 font-source-sans-pro dark-color half-opacity ">
                    RND Expert Name
                  </span>
                );
              }
              return selected;
            }}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="RND Expert Name"
              className="fw-400 fs-16 font-source-sans-pro dark-color "
            >
              RND Expert Name
            </MenuItem>

            {props.rndExpertArray.map((option: any) => (
              <MenuItem
                key={option.id}
                value={option.firstName}
                className="fw-400 fs-16 font-source-sans-pro dark-color"
              >
                {option.firstName} {option.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default RndExpertSearchFilters;
