import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiGetRequest } from "../../helpers/request";
import { IInitialState } from "./availableSlots-type";

export const getSlots = createAsyncThunk<IInitialState, {id:string,date:string}>(
    "available-slots/getSlots",
    async (data, thunkAPI) => {
        try {
            const response = await apiGetRequest(`${endpoints.calendar}/${data.id}/timeslots?date=${data.date}`);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
