import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetRequest } from "../../helpers/request";
import { endpoints } from "../../config/endpoints";
import { STATUS } from "../../common/constants/store";

export interface IDashboardCountState {
  dashboardCount: any;
  clientCount: any;
  claimCount: any;
  collaboratorCount: any;
}

export interface IDashboardCount {
  dashboardCount: IDashboardCountState[];
  status: STATUS;
  errors: any;
  message: string;
}

const initialState: IDashboardCount = {
  dashboardCount: [],
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

export const fetchDashboardCount = createAsyncThunk<any>(
  "dashboard/generic/count",
  async (_, thunkAPI) => {
    try {
      const response = await apiGetRequest(endpoints.dashboardCount);
      console.log('response-Counts', response)
      return response.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dashboardCountSlice = createSlice({
  name: "dashboardCount",
  initialState,
  reducers: {
    setDashbaordCount(state, action) {
      console.log('payload', action.payload)
      state.dashboardCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardCount.pending, (state: any) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchDashboardCount.fulfilled, (state: any, action: any) => {
      state.dashboardCount = action.payload;
      state.status = STATUS.SUCCEEDED;
      console.log("action.payload", action.payload)
    });
    builder.addCase(fetchDashboardCount.rejected, (state: any, action: any) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});

export const { setDashbaordCount } = dashboardCountSlice.actions;
export default dashboardCountSlice.reducer;
