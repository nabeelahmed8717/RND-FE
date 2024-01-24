import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";
import { IUserConfirmState } from "./user-confirm-type";

export const userConfirmByMail = createAsyncThunk<IUserConfirmState,IUserConfirmState>(
    "user-confirm/",
    async (data,thunkAPI) => {
        try {
            const response = await apiPostRequest(endpoints.userConfirm,data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)