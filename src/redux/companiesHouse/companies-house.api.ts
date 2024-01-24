import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiGetRequest } from "../../helpers/request";
import { ICompaniesDataState } from "./companies-types";

export const getCompaniesData = createAsyncThunk<ICompaniesDataState, string>("companies/getCompaniesData", async (data, thunkAPI) => {
  try {
    const response:any = await apiGetRequest(`${endpoints.company}/${data}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
