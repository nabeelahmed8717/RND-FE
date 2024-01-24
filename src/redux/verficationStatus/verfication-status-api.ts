import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";
import { IVerficationState, IVerfication } from "./verfication-status-type";

export const verfication = createAsyncThunk<IVerficationState, IVerfication>(
    "verfication-status/verfication",
    async (data, thunkAPI) => {
        try {
            const response = await apiPostRequest(endpoints.verificationStatus,data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
