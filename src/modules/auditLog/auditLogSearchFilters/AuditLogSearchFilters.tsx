import { Grid, MenuItem, Select, TextField, SvgIcon, Box } from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "@mui/material/Button";
import CalendarIcon1 from "../../../assets/icons/auditLog/Calendar.svg";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Popover from "@mui/material/Popover";
import React from "react";
import moment from "moment";
import searchIcon from "../../../assets/icons/guideLines/SearchIcon.png";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export interface IauditLogsSearchFilters {
  setSearchAuditUser: any;
  setPage: any;
  searchAuditUser: any;
  startDate: any;
  setstartDate: any;
  endDate: any;
  setendDate: any;
  setAuditEventName: any;
  auditEventName: any;
  auditLogsArray: any;
  clearFilterHandler: any;
}

const AuditLogSearchFilters = ({
  setSearchAuditUser,
  setPage,
  searchAuditUser,
  startDate,
  setstartDate,
  endDate,
  setendDate,
  setAuditEventName,
  auditEventName,
  auditLogsArray,
  clearFilterHandler,
}: IauditLogsSearchFilters) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function DateIcon(props: any) {
    return <SvgIcon className="svgIcon" {...props} />;
  }

  const openDatePopover = Boolean(anchorEl);
  const id = openDatePopover ? "simple-popover" : undefined;

  return (
    <Grid
      className="flex justify-between"
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        gap: { xs: "20px", sm: "20px", md: "20px", lg: "0px" },
        marginTop: "20px",
      }}
    >
      <Grid
        sx={{ width: { xs: "100%", sm: "100%", md: "250px", lg: "400px" } }}
      >
        <TextField
          type="text"
          onChange={(e) => {
            setSearchAuditUser(e.target.value.toLowerCase().trim());
            setPage(0);
          }}
          placeholder="Search"
          value={searchAuditUser}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                border: "1.5px solid #0F5156",
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

      <Grid
        className="flex gap-20"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <Grid position="relative">
          {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            O
          </Button> */}


          <TextField
            readonly
            InputLabelProps={{
              style: { color: 'red' }
            }}
            className="cursor-pointer label-color fs-16 fw-400 show-date-audit-logs"
            type="text"
            onClick={handleClick}
            value={
              startDate === null && endDate === null
                ? "Date Range"
                : startDate + " - " + endDate
            }
            fullWidth
            sx={{
              height: "54px",
              "& .MuiOutlinedInput-root,MuiOutlinedInput-input,MuiInputBase-root,MuiInputBase-FormControl": {
                fontWeight: 400,
                fontSize: "40px",
                "& > fieldset": {
                  border: "1.5px solid #0F5156",
                },
              },
              width: { xs: "100%", sm: "100%", md: "250px", lg: "250px" },

              // paddingRight:'30px'
            }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="start"
          //       sx={{
          //         width: "30px",
          //         marginLeft: { md:"",sm: "1rem" },
          //         // marginLeft: "15px",
          //       }}>
          //       <Image
          //         src={CalendarIcon1}
          //         alt="search"
          //         priority
          //         width={24}
          //         height={24}
          //         objectFit="fill"
          //       />
          //     </InputAdornment>
          //   ),
          //   readOnly: true,
          // }}
          />


          <Box  position="absolute" top="16px" right="14px">
            <Image src={CalendarIcon1} alt="" />
          </Box>

          <Popover
            id={id}
            open={openDatePopover}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Grid
              className="flex direction-column flex-end"
              sx={{ padding: "20px", gap: "10px" }}
            >
              {/* <span>Clear Filters</span> */}
              <Grid className="flex" sx={{ gap: "10px" }}>
                <Grid
                  className="flex direction-column primary-color fw-600"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "235px", lg: "235px" },
                    gap: "10px",
                  }}
                >
                  <span>Start Date</span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      className="datepicker-auditLog"
                      value={startDate}
                      components={{
                        OpenPickerIcon: DateIcon,
                      }}
                      onChange={(startDate) => {
                        setstartDate(
                          moment(startDate, "MM/DD/YYYY").format("MM/DD/YYYY")
                          // startDate
                        );
                      }}
                      renderInput={(params) => (
                        <TextField fullWidth {...params} name="startDate" sx={{
                          width: "100%", maxWidth: '304px', marginTop: "4px",
                          "& .MuiInputBase-root": {
                            height: "48px",
                            borderRadius: "4px",
                          }
                        }} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid
                  className="flex direction-column primary-color fw-600"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "235px", lg: "235px" },
                    gap: "10px",
                  }}
                >
                  <span>End Date</span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      className="datepicker-auditLog"
                      value={endDate}
                      components={{
                        OpenPickerIcon: DateIcon,
                      }}
                      onChange={(endDate) => {
                        setendDate(
                          moment(endDate, "MM/DD/YYYY").format("MM/DD/YYYY")
                          // endDate
                        );
                      }}
                      renderInput={(params) => (
                        <TextField fullWidth {...params} name="endDate" sx={{
                          width: "100%", maxWidth: '304px', marginTop: "4px",
                          "& .MuiInputBase-root": {
                            height: "48px",
                            borderRadius: "4px",
                          }
                        }} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Button
                className="primary-color"
                variant="text"
                onClick={clearFilterHandler}
                sx={{ textTransform: "none" }}
              >
                Clear Filter
              </Button>
            </Grid>
          </Popover>
        </Grid>

        <Grid>
          <Select
            displayEmpty
            value={auditEventName}
            onChange={(e) => {
              setAuditEventName(
                e.target.value === "All Records" ? "" : e.target.value
              );
              setPage(0);
            }}
            sx={{
              width: { xs: "100%", sm: "100%", md: "250px", lg: "250px" },
              height: "54px",
              "&:hover": {
                "&& fieldset": {
                  border: "2px solid #17884D"
                }
              },
            }}
            className="fw-400 fs-16 font-source-sans-pro label-color"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span>All Records</span>;
              }
              return selected;
            }}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="All Records"
              className="fw-400 fs-16 font-source-sans-pro label-color "
            >
              All Records
            </MenuItem>

            {auditLogsArray.map((option: any) => (
              <MenuItem
                key={option.id}
                value={option.eventName}
                className="fw-400 fs-16 font-source-sans-pro label-color"
              >
                {option.eventName}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuditLogSearchFilters;
