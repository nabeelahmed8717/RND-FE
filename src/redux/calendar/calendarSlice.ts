import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoints } from "../../config/endpoints";
import { apiDeleteRequest, apiGetRequest, apiPatchRequest, apiPostRequest } from "../../helpers/request";

interface calendar {
  id: string;
  title: string;
  eventType: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface calendarState {
  calendar: calendar;
  status: "idle" | "pending" | "succeeded" | "failed";
  errors: any;
}

const initialState: calendarState = {
  calendar: {
    id: "",
    title: "",
    eventType: "",
    startTime: "",
    endTime: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  status: "idle",
  errors: null,
};

export const calendarFetch = createAsyncThunk<calendarState, calendar>("calendar/calendarFetch", async (data, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(`/calendar/events`, {
      title: data.title,
      eventType: data.eventType,
      startTime: data.startTime,
      endTime: data.endTime,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description
    });
    console.log('response',response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


const calendar = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalenar(state, action) {
      state.calendar = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(calendarFetch.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = "succeeded";
      state.calendar = action.payload;
    });
    builder.addCase(calendarFetch.rejected, (state, action: PayloadAction<any>) => {
      state.status = "failed";
      state.errors = action.payload;
    });
    builder.addCase(calendarFetch.pending, (state) => {
      state.status = "pending";
    });
  },
});
export const {} = calendar.actions;
export default calendar;
