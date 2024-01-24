import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToaster {
  isDisplay: boolean;
  message: string;
  alertType: "error"|"warning"|"info"|"success"|undefined;
}
const initialState: IToaster = {
  isDisplay: false,
  message: "",
  alertType: undefined,
};
const ToasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    displayToastr: (state, action: PayloadAction<any>) => {
      state.isDisplay = action.payload.isDisplay;
      state.alertType = action.payload.alertType;
      state.message = action.payload.message;
    },
  },
});

export const { displayToastr } = ToasterSlice.actions;
export default ToasterSlice.reducer;
