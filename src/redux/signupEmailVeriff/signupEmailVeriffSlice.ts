import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { ISignupEmailVeriff} from './signupEmailVeriff-types';
import { getSignupEmailVeriff } from "./signupEmailVeriff-api";

const initialState: ISignupEmailVeriff = {
  status: STATUS.IDLE,
  errors: null,
  message:"",
};

const signupEmailVeriffSlice = createSlice({
  name: "signup-email-veriff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //verifyEmailStatus
    builder.addCase(getSignupEmailVeriff.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getSignupEmailVeriff.fulfilled, (state, action: PayloadAction<ISignupEmailVeriff>) => {
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message
    });
    builder.addCase(getSignupEmailVeriff.rejected, (state, action:PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response.data.message
    });
  },
});

export default signupEmailVeriffSlice;
