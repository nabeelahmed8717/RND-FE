import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import {
  apiGetRequest,
  apiPatchRequest,
  apiPostRequest,
} from "../../helpers/request";
import { displayToastr } from "../toaster/toasterSlice";

export const fetchClaims = createAsyncThunk<
  any,
  {
    claimStatus?: string;
    page?: number;
    isArchived?: boolean;
    searchClaim?: string;
  }
>("claims/fetchClaims", async (data, thunkAPI) => {
  try {
    const paramsObj: any = {};
    paramsObj["isArchived"] = data.isArchived;
    if (data.claimStatus) paramsObj["status"] = data.claimStatus;
    if (data.searchClaim) paramsObj["q"] = data.searchClaim;
    const response = await apiGetRequest(
      `https://gateway-dev.rndtaxclaims.uk/claims?page=${data.page}&limit=8&`,
      null,
      paramsObj
    );
    return response?.data?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const duplicateClaim = createAsyncThunk<any, any>(
  "claims/duplicate",
  async ({ SelectedClaim, dispatch }: any, thunkAPI) => {
    try {
      const response = await apiPostRequest(
        `${endpoints.duplicateClaim}/${SelectedClaim.id}`,
        SelectedClaim
      );
      dispatch(displayToastr({ message: "Claims Duplicated Successfully" }));
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const archivedClaim = createAsyncThunk<any, any>(
  "/claims/claimArchived",
  async (SelectedClaim, thunkAPI) => {
    try {
      const response = await apiPatchRequest(
        `${endpoints.claims}/${SelectedClaim}`,
        {
          isArchived: true,
        }
      );
      return response.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const restoreClaim = createAsyncThunk<any, any>(
  "/claims/restoreClaim",
  async (SelectedClaim, thunkAPI) => {
    try {
      const response = await apiPatchRequest(
        `${endpoints.claims}/${SelectedClaim.id}`,
        {
          isArchived: false,
        }
      );
      console.log(response.data.data, "restore");
      return response.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
