import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";
import { ISignupEmailVeriff } from "./signupEmailVeriff-types";

export const getSignupEmailVeriff = createAsyncThunk<ISignupEmailVeriff, {email:string}>(
  "signup/createRegisteredUser", 
  async (data, thunkAPI) => {
  try {
    const response = await apiPostRequest(endpoints.resendCode, data);    
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
