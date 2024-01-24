import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiPostRequest } from "../../helpers/request";
import { IVeriffSession,IVeriffSessionState } from "./verfication-session-types";

export const createVeriffSession = createAsyncThunk<IVeriffSessionState,IVeriffSession>(
    "identity-verfication/createVerficationSession",
    async (data, thunkAPI) => {
        try {
            const response = await apiPostRequest(`${endpoints.veriffSession}/${data.id}`,{
                firstName:data.firstName,
                lastName:data.lastName,
                documentType:data.documentType,
                country:"EE",
                timestamp:new Date(),
                vendorData:"54d4a65664"
            });
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)