import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../config/endpoints";
import {
  apiGetRequest,
  apiPostRequest,
  apiPutRequest,
} from "../../../helpers/request";
import { displayToastr } from "../../toaster/toasterSlice";

export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    try {
      const response = await apiGetRequest(endpoints.userProfile);
      console.log(response.data, "(response profile)");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const profileUpdate = createAsyncThunk<any, any>(
  "accountSetting/profile",
  async (data:any, thunkAPI) => {
    try {
      console.log(data, "invidiual data");
      const response = await apiPostRequest(
        endpoints.profileUpdate,
        data.invidiual
      );
      console.log(response.data, "RESPOMSE UHGRWUI");
      data.dispatch(displayToastr({ message: "Profile has been Updated" }));
      data.dispatch(getUserProfile());

      return response.data;
    } catch (error) {
      data.dispatch(
        displayToastr({
          message: "Number format is incorrect ",
          alertType: "error",
        })
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateProfileImage = createAsyncThunk(
  "profile/imageUpdate",
  async ({ formData, dispatch }: any, thunkAPI) => {
    try {
      const response = await apiPutRequest(
        endpoints.profileImageUpdate,
        formData
      );
      dispatch(displayToastr({ message: "Image Updated Successfully" }));
      dispatch(getUserProfile());

      return response.data;
    } catch (error) {
      displayToastr({
        message: "Upload failed",
        alertType: "error",
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
