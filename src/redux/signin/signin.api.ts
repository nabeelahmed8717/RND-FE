import { apiGetRequest, apiPostRequest } from "../../helpers/request";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";

export const getSignedIn = createAsyncThunk<
  any,
  { email: string; password: string }
>("login/loginFetch", async (data, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(endpoints.signin, data);
    console.log(response, "signiN response");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const RememberMeApiCall = createAsyncThunk<any, { username: string; refreshToken: string }>("login/remember-me", async (data, thunkAPI) => {
//   try {
//     const response: any = await apiPostRequest(endpoints.rememberMe, data);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const logoutApiCall = createAsyncThunk<any>(
  "login/remember-me",
  async (_, thunkAPI) => {
    try {
      const response: any = await apiGetRequest(endpoints.logout);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const RememberMeApiCall = async (data: {
  username: string;
  refreshToken: string;
}) => {
  try {
    await apiPostRequest(endpoints.rememberMe, data);
  } catch (error) {
    return error;
  }
};
