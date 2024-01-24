import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiDeleteRequest,
  apiGetRequest,
  apiPatchRequest,
  apiPostRequest,
} from "../../helpers/request";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import axios from "axios";
import { endpoints } from "../../config/endpoints";


let token: string | null = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("accessToken");
}

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

interface ICollectionsData {
  claimPeriod: string;
  client: string;
  duration: string;
  event: string;
  fee: string
  id: string;
  parentUser: string;
  sessionDate: string;
  sessionTime: string;
  status: string;
  user: string;
}
interface ICollections {
    collectionsData: ICollectionsData[];
    status: STATUS;
    message: string;
    totalRecords: number;
    errors: any;
  }

const initialStateSlice: ICollections = {
    collectionsData: [],
    totalRecords: 0,
    status: STATUS.IDLE,
    errors: null,
    message: "",
  };
  

export const fetchCollections = createAsyncThunk<any>(
  "collections/fetchCollections",
  async (page, thunkAPI) => {
    try {
      const response: any = await apiGetRequest(
        `${endpoints.collections}?page=${page}&limit=8`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState:initialStateSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state: any) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchCollections.fulfilled, (state: any, action: any) => {
      state.collectionsData = action.payload;
      state.totalRecords = action.payload.total;
      state.status = STATUS.SUCCEEDED;
      // state.message = action.payload.message;
    });
    builder.addCase(fetchCollections.rejected, (state: any, action: any) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});
export const setCollections = collectionsSlice.actions;
export default collectionsSlice.reducer;
