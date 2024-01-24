export interface ITableProps  {
    isSearchText?: Boolean;
    cols: any;
    data: any[];
    isPagination: Boolean;
    recordsPerPage: number;
    totalRecords?:number;
    heightOfTable: number;
    page:number;
    setPage:React.Dispatch<React.SetStateAction<number>>
  };
  export interface ITablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
      event: React.MouseEvent<HTMLButtonElement>,
      newPage: number
    ) => void;
  }