import React from "react";
import NextIcon from "../../../assets/icons/common/NextIcon";
import PreviousIcon from "../../../assets/icons/common/PreviousIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  TablePaginationActionsProps,
  TableProps,
} from "../../interfaces/commonTableInterface";
import { TableSkeleton } from "../tableSkeleton/TableSkeleton";

const CommonTableTwo = (props: TableProps) => {
  const { cols, data, isPagination, recordsPerPage, heightOfTable,page,setPage,status } = props;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
  ) => {
    setPage(newPage);
  };
  const currentPage =page

  return (
    <>
      <TableContainer
        sx={{
          maxHeight: heightOfTable,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Table
          sx={{ minWidth: 650 }}
          className="common-table-header"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className="common-table">
              {cols.map((headerItem: any, index: any) => (
                <TableCell
                  key={index}
                  className="primary-color fw-700 font-source-sans-pro "
                  sx={{ borderBottom: "1px solid #0F5156" }}
                >
                  {headerItem.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

            {status==='PENDING'? <TableSkeleton/>:data?.length>0?
             <TableBody>
          {  data
              .slice(
                currentPage * recordsPerPage,
                currentPage * recordsPerPage + recordsPerPage
              )
              .map((item: any, index: any) => (
                <TableRow
                  className="table table-hover "
                  key={index}
                  style={{
                    background: index % 2 == 0 ? "#E7F7F0" : "#FFFFFF",
                    border: "#FFFFFF",
                  }}
                >
                  {cols.map((col: any, key: any) => (
                    <TableCell
                      key={key}
                      sx={{ border: 0 }}
                      className="table-cell fw-600 fs-16 font-source-sans-pro"
                    >
                      {col.render(item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            
          </TableBody>:<h1>No record found</h1>
          }
        </Table>
      </TableContainer>
      {(isPagination && data?.length>0) && 
    (
        <TablePaginationActions
          count={data.length}
          page={currentPage}
          rowsPerPage={8}
          onPageChange={handleChangePage}
        />
      )}
    </>
  );
};

export default CommonTableTwo;

export function TablePaginationActions(props: TablePaginationActionsProps) {
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
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          border: "1px #DADEE8 solid",
          display: "flex",
          alignItems: "center",
          padding: "10px 30px 10px 30px",
          background: "white",
          borderRadius: "3px",
        }}
      >
        <button
          onClick={handleBackButtonClick}
          disabled={page === 0}
          style={{
            border: "none",
            background: page === 0 ? "#EAEAEA" : "none",
            borderRadius: "4px",
          }}
        >
          <PreviousIcon />
        </button>

        {pages.map((ele, index) => {
          return (
            <button
              key={index}
              onClick={(e) => handleCurrentPageButtonClick(e, index)}
              style={{
                background: index === page ? "#0F5156" : "none",
                color: index === page ? "white" : "black",
                border: "none",
                marginLeft: "10px",
                borderRadius: "4px",
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          style={{
            border: "none",
            background:
              page >= Math.ceil(count / rowsPerPage) - 1 ? "#EAEAEA" : "none",
            marginLeft: "10px",
            borderRadius: "4px",
          }}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
}