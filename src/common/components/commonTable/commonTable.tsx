import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ITablePaginationActionsProps,
  ITableProps,
} from "../../interfaces/commonTableInterface";

import NextIcon from "../../../assets/icons/common/NextIcon";
import PreviousIcon from "../../../assets/icons/common/PreviousIcon";
import React from "react";

const CommonTable = (props: ITableProps) => {
  const {
    cols,
    data,
    isPagination,
    recordsPerPage,
    heightOfTable,
    totalRecords,
    page,
    setPage,
  } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,

    newPage: number
  ) => {
    setPage(newPage);
  };

  const currentPage = page;

  return (
    <>
      <TableContainer
        className="table-main"
        sx={{
          maxHeight: heightOfTable,

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Table className="common-table-header" aria-label="simple table">
          <TableHead>
            {!!cols.length && (
              <TableRow>
                {cols?.map((headerItem: any, index: any) => (
                  <TableCell
                    key={index}
                    // sx={{ maxWidth: 20 }}

                    className="primary-color fw-700 font-source-sans-pro fs-16 lh-24 text-no-wrap"

                    // sx={{

                    //   borderBottom: "1px solid #0F5156",

                    //   borderTop: "1px solid #0F5156",

                    // }}
                  >
                    {headerItem.title}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableHead>

          {data && data.length > 0 ? (
            <TableBody>
              {data.map((item: any, index: any) => (
                <TableRow
                  className="table table-hover "
                  key={index}
                  style={{
                    background: index % 2 == 0 ? "#E7F7F0" : "#FFFFFF",

                    border: "#FFFFFF",
                  }}
                  sx={{ wordBreak: "break-all" }}
                >
                  {cols &&
                    cols.length > 0 &&
                    cols?.map((col: any, key: any) => (
                      <TableCell
                        key={key}
                        sx={{ border: 0 }}
                        className="table-cell fw-600 lh-24 fs-16 font-source-sans-pro text-no-wrap"
                      >
                        {col.render(item, index)}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <p>No Data Found</p>
          )}
        </Table>
      </TableContainer>

      {isPagination && (
        <TablePaginationActions
          count={totalRecords ?? 0}
          page={currentPage}
          rowsPerPage={8}
          onPageChange={handleChangePage}
        />
      )}
    </>
  );
};

export default CommonTable;

export function TablePaginationActions(props: ITablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const pages = new Array(Math.ceil(count / rowsPerPage)).fill("");

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleCurrentPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,

    index: number
  ) => {
    onPageChange(event, index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xl: "flex-end",
          lg: "flex-end",
          md: "flex-end",
          sm: "center",
          xs: "center",
        },
      }}
    >
      <div
        className="bg-white-shadow justify-center"
        style={{
          border: "1px #DADEE8 solid ",
          display: "flex",
          alignItems: "center",
          background: "white",
          borderRadius: "3px",
          minHeight: "43px",
          minWidth: "190px",
          flexWrap: "wrap",
          paddingLeft: "1em",
          paddingRight: "1em",
          marginTop: "10px",
        }}
      >
        <button
          onClick={handleBackButtonClick}
          disabled={page === 1}
          className="cursor-pointer"
          style={{
            border: "none",

            background: page === 1 ? "#EAEAEA" : "none",

            borderRadius: "4px",
          }}
        >
          <PreviousIcon />
        </button>

        {pages.map((ele, index) => {
          return (
            <button
              key={index}
              className="cursor-pointer"
              onClick={(e) => handleCurrentPageButtonClick(e, index + 1)}
              style={{
                background: index + 1 === page ? "#0F5156" : "none",

                color: index + 1 === page ? "white" : "black",

                border: "none",

                marginLeft: "10px",

                borderRadius: "4px",

                padding: "4.5px 9px",
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          onClick={handleNextButtonClick}
          className="cursor-pointer"
          disabled={page >= Math.ceil(count / rowsPerPage)}
          style={{
            border: "none",

            background:
              page >= Math.ceil(count / rowsPerPage) ? "#EAEAEA" : "none",

            marginLeft: "10px",

            borderRadius: "4px",
          }}
        >
          <NextIcon />
        </button>
      </div>
    </Box>
  );
}
