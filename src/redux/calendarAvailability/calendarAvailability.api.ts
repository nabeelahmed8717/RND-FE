import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { endpoints } from "../../config/endpoints"
import { apiPostRequest } from "../../helpers/request"
import { IInitialState } from "./calendar-availability-type"

export const createAvailability = createAsyncThunk<IInitialState, any>(
    "calender-availability/slice",
    async (data,thunkAPi) => {
        try {
            const response = await apiPostRequest(endpoints.calendarAvailability,data)
            return response.data
        } catch (error) {
            return thunkAPi.rejectWithValue(error)
        }
    }
)