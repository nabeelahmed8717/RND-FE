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
import { displayToastr } from "../toaster/toasterSlice";

interface ISubscribedUserData {
  name: string;
  email: string;
}
interface ISubscribedUser {
  subscribedUserData: ISubscribedUserData[];
  status: STATUS;
  message: string;
  errors: any;
}

const initialStateSlice: ISubscribedUser = {
  subscribedUserData: [],
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

export const createSubscribedUser = createAsyncThunk(
  "newslettersUsers/createSubscribedUser",
  async (data, thunkAPI) => {
    try {
      const response: any = await apiPostRequest(`${endpoints.createSubscribedUser}`, data);
      console.log('response', response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const subscribedUserSlice = createSlice({
  name: "subscribedUser",
  initialState: initialStateSlice,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(
      createSubscribedUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.SUCCEEDED;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      createSubscribedUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.errors = action.payload;
        state.message = action.payload.response.data.message;
      }
    );
    builder.addCase(createSubscribedUser.pending, (state) => {
      state.status = STATUS.PENDING;
    });


  },
});
export const setSubscribedUser = subscribedUserSlice.actions;
export default subscribedUserSlice.reducer;
