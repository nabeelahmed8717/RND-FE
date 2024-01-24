import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL = "https://gateway-dev.rndtaxclaims.uk/users/forgot-password";
// const API_RESEND_URL = "https://gateway-dev.rndtaxclaims.uk/users/resend-code";

export interface IForgotPasswordSlice {
  email: string;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: any;
}

export const initialState: IForgotPasswordSlice = {
  email: "",
  status: "idle",
  errors: null,
};

export const forgotPasswordFetch = createAsyncThunk<
  IForgotPasswordSlice,
  IForgotPasswordSlice
>("forgotPassword/forgotPasswordFetch", async (data, thunkAPI) => {
  try {
    const response: any = await axios.post(API_URL, { email: data.email });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setForgotPassword(state, action) {
      state = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      forgotPasswordFetch.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.email = action.payload;
      }
    );
    builder.addCase(
      forgotPasswordFetch.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.errors = action.payload;
      }
    );
    builder.addCase(forgotPasswordFetch.pending, (state) => {
      state.status = "pending";
    });
  },
});

export const { setForgotPassword } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
