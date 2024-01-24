import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";
import { IRigesterdUser, IRigesterdUsersState } from "./signup-types";

export const createRegisteredUser = createAsyncThunk<IRigesterdUsersState, IRigesterdUser>("signup/createRegisteredUser", async (data, thunkAPI) => {
  try {
    const response = await apiPostRequest(endpoints.user, data);    
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
