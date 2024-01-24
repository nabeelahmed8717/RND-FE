import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { createVeriffSession } from "./verfication-session-api";
import { IVeriffSessionState } from "./verfication-session-types";

const initialState = {
  data: {
    host: "",
    id: "",
    sessionToken: "",
    status: "",
    url: "",
  },
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

const identityVerficationSlice = createSlice({
  name: "identity-verfication",
  initialState,
  reducers: {
    addVeriffSession: (state, action) => {
      state.data = action.payload.data;
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message;
    },
  },
  extraReducers(builder) {
    builder.addCase(createVeriffSession.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(createVeriffSession.fulfilled, (state, action: PayloadAction<IVeriffSessionState>) => {
      action.payload.data && (state.data = action.payload.data);
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message;
    });
    builder.addCase(createVeriffSession.rejected, (state, action: any) => {
      state.errors = action.payload;
      state.status = STATUS.FAILED;
    });
  },
});
export const { addVeriffSession } = identityVerficationSlice.actions;
export default identityVerficationSlice;
