import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiGetRequest } from "../../helpers/request";
import { IRndExpertState } from "./rndExpertList-type";

export const getRndExpertList = createAsyncThunk<IRndExpertState>("rndExpertSlice/getRndExpertList", async (_, thunkAPI) => {
  try {
    const response = await apiGetRequest(endpoints.rndExpertList);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
