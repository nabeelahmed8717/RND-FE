import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { archivedClaim, duplicateClaim, fetchClaims, restoreClaim } from "./claimApi";

interface IClaimData {
  client: string;
  user: {
    firstName: string;
    lastName: string;
    id: string;
  };
  parentUser: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: string;
  isArchived: boolean;
  id: string;
}

interface IClaims {
  claimsData: IClaimData[];
  status: STATUS;
  message: string;
  totalRecords: number;
  errors: any;
}
const claimsInitialSlice: IClaims = {
  claimsData: [],
  status: STATUS.IDLE,
  errors: "",
  message: "",
  totalRecords: 0,
};



const claimsSlice = createSlice({
  name: "claims",
  initialState: claimsInitialSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClaims.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchClaims.fulfilled, (state, action) => {
      state.status = STATUS.SUCCEEDED;
      state.claimsData = action.payload.data;
      state.totalRecords = action.payload.total;
    });
    builder.addCase(fetchClaims.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
    //duplicateClaims
    builder.addCase(duplicateClaim.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(duplicateClaim.fulfilled, (state, action) => {
      state.status = STATUS.SUCCEEDED;
      state.totalRecords = state.totalRecords + 1;
      // state.claimsData = action.payload.data;
    });
    builder.addCase(duplicateClaim.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });

    //archiveClaim
    builder.addCase(archivedClaim.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(archivedClaim.fulfilled, (state, action) => {
      state.status = STATUS.SUCCEEDED;
      console.log(status);

      state.totalRecords = action.payload.total;
      // state.claimsData = action.payload.data;
    });
    builder.addCase(archivedClaim.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
    //restoreClaim
    builder.addCase(restoreClaim.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(restoreClaim.fulfilled, (state, action) => {
      state.status = STATUS.SUCCEEDED;
      state.totalRecords = action.payload.total;
    });
    builder.addCase(restoreClaim.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});

export const claimActionSlice = claimsSlice.actions;
export default claimsSlice.reducer;
