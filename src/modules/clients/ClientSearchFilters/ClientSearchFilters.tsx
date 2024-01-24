import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  IClient,
  ISearchClient,
} from "../../../common/interfaces/clientInterface";

import { FC } from "react";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import searchIcon from "../../../assets/icons/guideLines/SearchIcon.png";
import { useRouter } from "next/router";

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

const ClientSearchFilter: FC<ISearchClient> = (props) => {
  const { role } = props;
  const [changedUserName, setChangedUserName] = React.useState(
    props.catchedName
  );

  const router = useRouter();
  const clientHandleChange = (event: SelectChangeEvent) => {
    setChangedUserName(event.target.value as string);
    // router.push({
    //   pathname: "/clients",
    //   query: { name: event.target.value as string },
    // });
  };

  // __Prevent clients array from duplications
  // const clientsFilteredarray = props.clientArrays.filter(
  //   (value: { name: string }, index: any, array: { name: string }[]) =>
  //     array.findIndex((item: { name: string }) => item.name === value.name) ===
  //     index
  // );

  return (
    <Grid
      container
      sx={{ py: 2 }}
      rowSpacing={3}
      columnSpacing={5}
      className="search-filters "
      justifyContent={{ md: "space-between" }}
    >
      <Grid item xs={12} sm={6} md={4} xl={3.44}>
        <TextField
          type="text"
          onChange={(e) => {
            props.setSearchClient(e.target.value.toLowerCase().trim());
            // props.setPage(0);
          }}
          placeholder="Search by name"
          value={props.searchClient}
          fullWidth
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
          sx={{
            width: { lg: "400px" },
            height: "54px",
          }}
        />
      </Grid>

      {role !== "SYS_ADMIN" && (
        <Grid item xs={12} sm={6} md={4} xl={3} className="flex ">
          <FormControl sx={{ width: "100%" }} className="flex align-end ">
            {
              <Select
                displayEmpty
                value={props.userName}
                onChange={(e) => {
                  props.setUserName(
                    e.target.value === "All Users" ? "" : e.target.value
                  );
                  // props.setPage(0);
                }}
                sx={{
                  width: { xs: "100%", lg: "250px" },
                  height: "54px",
                }}
                className="fw-400 fs-16 font-source-sans-pro label-color  "
                // renderValue={(selected) => {
                //   if (selected.length === 0) {
                //     return <span>All Users</span>;
                //   }
                // }}
                placeholder="All Users"
                MenuProps={MenuProps}
              >
                <MenuItem
                  value="1"
                  className="fw-400 fs-16 font-source-sans-pro label-color "
                >
                  All Users
                </MenuItem>

                {/* {props.clientArrays.map((option: IClient) => (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    className="fw-400 fs-16 font-source-sans-pro label-color"
                  >
                    {option.userName}
                  </MenuItem>
                ))} */}
              </Select>
              // : (
              // <Select
              //   value={changedUserName}
              //   onChange={clientHandleChange}
              //   className="fw-400 fs-16 font-source-sans-pro label-color  "
              //   placeholder="All Clients"
              //   MenuProps={MenuProps}
              // >
              //   {clientsFilteredarray.map((option: IClient) => (
              //     <MenuItem
              //       key={option.id}
              //       value={option.name}
              //       className="fw-400 fs-16 font-source-sans-pro label-color"
              //     >
              //       {option.name}
              //     </MenuItem>
              //   ))}
              // </Select>
              // )
            }
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
};

export default ClientSearchFilter;
