import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiGetRequest, apiPostRequest } from "../../helpers/request";
import { IRecentActivitiesState } from "./recentActivites-types";

export const getRecentActivities = createAsyncThunk<IRecentActivitiesState>(
  "recent-activities/getRecentActivities",
  async (_, thunkAPI) => {
  try {
    const response = await apiGetRequest(endpoints.recentActivities);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
