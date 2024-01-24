import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IInitialState } from "./calendar-availability-type";
import { createAvailability } from "./calendarAvailability.api";

const initialState: IInitialState = {
  status: STATUS.IDLE,
  message: "",
  error: null,
  data: {
    id: "",
    name: "",
    amount: Number(),
    duration: Number(),
    availability: "",
    rules: [],
  },
};
const calenderAvailabilitySlice: Slice<IInitialState, {}, "calender-availability"> = createSlice({
  name: "calender-availability",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createAvailability.pending, (state:IInitialState) => {
        state.status = STATUS.PENDING;
    });
    builder.addCase(createAvailability.fulfilled, (state:IInitialState, action:PayloadAction<IInitialState>) => {
        state.message = action.payload.message;
        state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(createAvailability.rejected, (state:IInitialState, action:PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.message = action.payload.response.data.message;
    });
  },
});

export default calenderAvailabilitySlice;