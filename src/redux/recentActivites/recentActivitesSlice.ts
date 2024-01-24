import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IRecentActivitiesState} from './recentActivites-types';
import { getRecentActivities } from "./recentActivites-api";

const initialState: IRecentActivitiesState = {
  todayData:[],
  yesterdayData:[],
  status: STATUS.IDLE,
  errors: null,
  message:"",
};

const recentActivitiesSlice = createSlice({
  name: "recent-activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentActivities.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getRecentActivities.fulfilled, (state, action: PayloadAction<IRecentActivitiesState>) => {
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message
      state.todayData = action.payload?.data?.today
      state.yesterdayData = action.payload?.data?.yesterday
    });
    builder.addCase(getRecentActivities.rejected, (state, action:PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload?.response?.data?.message
    });
  },
});

export default recentActivitiesSlice;
