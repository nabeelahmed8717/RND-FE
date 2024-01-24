import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiGetRequest } from "../../helpers/request";
import { IInitialState } from "./availableDays-type";

export const getdays = createAsyncThunk<IInitialState, {id:string,startDate:string, endDate:string}>(
    "available-days/getdays",
    async (data, thunkAPI) => {
        console.log(data);

        try {
            const response = await apiGetRequest(`${endpoints.calendar}/${data.id}/available-days?startDate=${data.startDate}&endDate=${data.endDate}`);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
