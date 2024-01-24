import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IRndExpertState } from "./rndExpertList-type";
import { getRndExpertList } from "./rndExpertList.api";

const initialState: IRndExpertState = {
  data: [],
  message: "",
  error: null,
  status: STATUS.IDLE,
};
const rndExpertListSlice = createSlice({
  name: "rnd-expert-list",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRndExpertList.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getRndExpertList.fulfilled, (state, action: PayloadAction<IRndExpertState>) => {
      console.log(action.payload);

      state.message = action.payload.message;
      state.status = STATUS.SUCCEEDED;
      state.data = action.payload?.data;
    });
    builder.addCase(getRndExpertList.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.message = action.payload?.response?.data?.message;
      state.error = action.payload;
    });
  },
});

export default rndExpertListSlice;
