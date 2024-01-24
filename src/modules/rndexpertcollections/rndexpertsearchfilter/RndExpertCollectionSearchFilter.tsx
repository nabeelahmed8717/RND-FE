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
const CollectionsSearchFilters = (props: any) => {
  // __Prevent claim status array from duplications
  const rndExpertCollectionsFilteredArray =
    props.rndExperCollectionsArray.filter(
      (value: { user: string }, index: any, array: { user: string }[]) =>
        array.findIndex(
          (item: { user: string }) => item.user === value.user
        ) === index
    );

  return (
    <Grid
      container
      mt={2}
      spacing={2}
      className="ClaimsSearchFilters filter-wrap-rnd-expert-collections flex justify-between align-center"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className="rnd-expert-collections-filter-input flex align-center"
      >
        <TextField
          type="text"
          className=" border-radiues-3 fw-600 fs-16 lh-24 font-source-sans-pro rnd-expert-collection-search-input-filter w-100  "
          onChange={(e) => {
            props.setSearchRndExpertCollectionsName(
              e.target.value.toLowerCase().trim()
            );
            props.setPage(0);
          }}
          placeholder="Search"
          value={props.searchRndExpertCollectionsName}
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
            height: "54px",
            borderRadius: "3px",
            marginLeft: { xs: "13px", sm: "13px" },
            marginTop: { xs: "8px", sm: "8px" },
            marginRight: { md: "41px", lg: "41px", xl: "41px" },
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
            value={props.filterByRndExpertCollectionName}
            onChange={(e) => {
              props.setFilterByRndExpertCollectionName(
                e.target.value === "All Users" ? "" : e.target.value
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
            className="fw-400 fs-16 lh-24 font-source-sans-pro dark-color rnd-expert-filter"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <span className="fw-400 fs-16 lh-24 font-source-sans-pro dark-color">
                    All Users
                  </span>
                );
              }
              return selected;
            }}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="All Users"
              className="fw-400 fs-16 font-source-sans-pro dark-color "
            >
              All Users
            </MenuItem>

            {props.rndExperCollectionsArray.map((option: any) => (
              <MenuItem
                key={option.id}
                value={option.user}
                className="fw-400 fs-16 font-source-sans-pro dark-color"
              >
                {option.user}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CollectionsSearchFilters;
