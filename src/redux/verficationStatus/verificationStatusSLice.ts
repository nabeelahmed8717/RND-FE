import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { verfication } from "./verfication-status-api";
import { IVerficationState } from "./verfication-status-type";

const initialState: IVerficationState = {
  verification: {
    id: "",
    code: "",
  },
  status: STATUS.IDLE,
  message: "",
  errors: null,
};

const verificationStatusSlice = createSlice({
  name: "verfication-session",
  initialState,
  reducers: {
    setVerfication: (state, action) => {
      state.verification = action.payload.verification;
      state.message = action.payload.message;
      state.status = STATUS.SUCCEEDED;
    },
  },
  extraReducers(builder) {
    builder.addCase(verfication.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(verfication.fulfilled, (state, action: PayloadAction<IVerficationState>) => {
      state.verification = action.payload.verification;
      state.message = action.payload.message;
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(verfication.rejected, (state, action: PayloadAction<any>) => {
      state.errors = action.payload.errors;
      state.message = action.payload.message;
      state.status = STATUS.FAILED;
    });
  },
});

export default verificationStatusSlice;
