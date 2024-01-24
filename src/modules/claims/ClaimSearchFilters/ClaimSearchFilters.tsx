import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";

import Image from "next/image";
import React from "react";
import { claimsTabledata } from "../../../common/mockData/claims";
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


const claimsStatusArray = [
  {
    id: 1,
    value: 'In Progress'
  },
  {
    id: 2,
    value: 'In Review'
  },
  {
    id: 3,
    value: 'Ready to Download'
  },
  {
    id: 4,
    value: 'Purchased'
  },
]






const ClaimSearchFilters = (props: any) => {
  // __Prevent claim status array from duplications

  return (
    <Grid
      container
      sx={{ py: 3 }}
      rowSpacing={3}
      columnSpacing={5}
      className="ClaimsSearchFilters justify-between"
    >
      <Grid item md={5} lg={5} xl={3} sm={12} xs={12}>
        <TextField
          type="text"
          onChange={(e) => {
            props.setSearchClient(e.target.value.toLowerCase().trim());
            props.setPage(1);
          }}
          placeholder="Search by client"
          value={props.searchClient}
          fullWidth
          sx={{
            width: { xs: "100%", xl: "400px" },
            height: "54px",
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                border: "1px solid #198754",
              },
            },
          }}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <Image src={searchIcon} alt="search" priority />
          //     </InputAdornment>
          //   ),
          // }}
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
        md={5}
        lg={5}
        sm={12}
        xl={9}
        xs={12}
        className="flex justify-end"
      >
        <FormControl
          sx={{
            width: { xs: "100%", sm: "100%", md: "250px" },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                border: "1px solid #198754",
              },
            },
          }}
        >
          <Select
            displayEmpty
            value={props.claimStatus}
            onChange={(e) => {
              props.setClaimStatus(
                e.target.value === "All Claims" ? "" : e.target.value
              );
              props.setPage(1);
            }}
            sx={{
              width: { lg: "250px" },
              height: "54px",
            }}
            className="fw-400 fs-16 font-source-sans-pro label-color  "
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span>All Claims</span>;
              }
              return selected;
            }}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="All Claims"
              className="fw-400 fs-16 font-source-sans-pro label-color "
            >
              All Claims
            </MenuItem>
            {claimsStatusArray.length > 0 &&
              claimsStatusArray.map((option: any) => (
                <MenuItem
                  key={option.id}
                  value={option.value}
                  className="fw-400 fs-16 font-source-sans-pro label-color"
                >
                  {option.value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ClaimSearchFilters;
