import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    apiPostRequest,
} from "../../helpers/request";
import { STATUS } from "../../common/constants/store";
import { endpoints } from "../../config/endpoints";



export interface ICalendarState {
    entityId: string;
    claim: string;
    title: string;
    start: string;
    end: string;
    description: string;
}

interface ICalendar {
    calendarMeeting: ICalendarState[];
    status: STATUS;
    errors: any;
    totalRecords: number;
    message: string;
}
const initialState: ICalendar = {
    calendarMeeting: [],
    totalRecords: 0,
    status: STATUS.IDLE,
    errors: null,
    message: "",
};
export const createCalendarMeeting = createAsyncThunk<
    ICalendarState,
    {
        entityId: string;
        claim: string;
        title: string;
        start: string;
        end: string;
        description: string;
    }
>("clients/createCalendarMeeting", async (data, thunkAPI) => {
    try {
        const response: any = await apiPostRequest(endpoints.calendarMeeting, data);
        console.log("CAL Meeting response", response.data)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const calenderMeetingSlice = createSlice({
    name: "calendarMeeting",
    initialState,
    reducers: {
        setCalenderMeeting(state, action) {
            console.log("payload", action.payload);
            state.calendarMeeting = action.payload;
        },
        addClients(state, action) {
            state.calendarMeeting.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            createCalendarMeeting.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = STATUS.SUCCEEDED;
                state.message = action.payload.message;
            }
        );
        builder.addCase(
            createCalendarMeeting.rejected,
            (state, action: PayloadAction<any>) => {
                state.status = STATUS.FAILED;
                state.errors = action.payload;
                state.message = action.payload.response.data.message;
            }
        );
        builder.addCase(createCalendarMeeting.pending, (state) => {
            state.status = STATUS.PENDING;
        });
    }

});
export const { setCalenderMeeting } = calenderMeetingSlice.actions;
export default calenderMeetingSlice.reducer;
 