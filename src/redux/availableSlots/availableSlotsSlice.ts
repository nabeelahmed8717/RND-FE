import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IInitialState, ISlots } from "./availableSlots-type";
import { getSlots } from "./availAbleSlots.api";

const initialState: IInitialState = {
  slots: [],
  message: "",
  statusCode: "",
  status: STATUS.IDLE,
  error: null,
};
const availableSlotsSlice: Slice<IInitialState, {}, "available-slots-slice"> = createSlice({
  name: "available-slots-slice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSlots.pending, (state: IInitialState) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getSlots.fulfilled, (state, action: PayloadAction<any>) => {
      state.message = action.payload?.message;
      (state.statusCode = action.payload?.statusCode), (state.status = STATUS.SUCCEEDED);
      state.slots = action.payload?.data;
      state.slots = action.payload.data.map((slot: ISlots) => {
        const [startDate, start] = slot.start.split(" ");
        const [endDate, end] = slot.end.split(" ");
        return { start, end, status: slot.status };
      });
    });
    builder.addCase(getSlots.rejected, (state: IInitialState, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.message = action.payload?.error?.response?.data.message;
    });
  },
});

export default availableSlotsSlice;
