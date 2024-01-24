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

interface IAuditLogsData {
    event: string;
    userName: string;
    userRole:string;
    image: string;
    activityMessage: string;
    entity: string;
    id: string;
    userStatus: string;
    timeStamp: string;
}
interface IAuditLogs {
    auditLogsData: IAuditLogsData[];
    status: STATUS;
    message: string;
    totalRecords: number;
    errors: any;
  }

const initialStateSlice: IAuditLogs = {
    auditLogsData: [],
    totalRecords: 0,
    status: STATUS.IDLE,
    errors: null,
    message: "",
  };
  

export const fetchAuditLogs = createAsyncThunk<any>(
  "dashboard/fetchAuditLogs",
  async (page, thunkAPI) => {
    try {
      const response: any = await apiGetRequest(
        `${endpoints.getAuditLogs}?page=${page}&limit=8`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const auditLogsSlice = createSlice({
  name: "auditLogs",
  initialState:initialStateSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuditLogs.pending, (state: any) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchAuditLogs.fulfilled, (state: any, action: any) => {
      state.auditLogsData = action.payload;
      state.totalRecords = action.payload.total;
      console.log("action.payload.total", action.payload.total)
      state.status = STATUS.SUCCEEDED;
      // state.message = action.payload.message;
    });
    builder.addCase(fetchAuditLogs.rejected, (state: any, action: any) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});
export const setAuditLogs = auditLogsSlice.actions;
export default auditLogsSlice.reducer;