import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";

export const getVerficationCode = createAsyncThunk<any,{email:string}>(
    "change-email/getVerficationCode",
    async (data, thunkAPI) => {
        try {
            const response = await apiPostRequest(endpoints.changeEmail,data);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const changeMailConfirm = createAsyncThunk<any,{code:string}>(
    "change-email/changeMailConfirm",
    async (data, thunkAPI) => {
        try {
            const response = await apiPostRequest(endpoints.changeEmailConfirm,data);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)