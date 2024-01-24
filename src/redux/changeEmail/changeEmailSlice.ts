import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IInitialState } from "./changeEmail-type";
import { changeMailConfirm, getVerficationCode } from "./changeEmail.api";

const initialState:IInitialState = {
    message:"",
    error:null,
    codeStatus:STATUS.IDLE,
    emailStatus:STATUS.IDLE,
}
const changeEmailSLice = createSlice({
    name:"change-email",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getVerficationCode.pending, (state) => {
            state.codeStatus = STATUS.PENDING
        });
        builder.addCase(getVerficationCode.fulfilled, (state,action) => {
            state.codeStatus = STATUS.SUCCEEDED
            state.message = action.payload.message;
        });
        builder.addCase(getVerficationCode.rejected, (state,action:PayloadAction<any>) => {
            state.codeStatus = STATUS.FAILED
            state.message = action.payload.response.data.message;
            state.error = action.payload
        });

        builder.addCase(changeMailConfirm.pending, (state) => {
            state.emailStatus = STATUS.PENDING
        });
        builder.addCase(changeMailConfirm.fulfilled, (state,action) => {
            state.emailStatus = STATUS.SUCCEEDED
            state.message = action.payload.message;
        });
        builder.addCase(changeMailConfirm.rejected, (state,action:PayloadAction<any>) => {
            console.log(action.payload,"adhl");
            
            state.emailStatus = STATUS.FAILED
            state.message = action.payload.response.data.message;
            state.error = action.payload
        });
    },
})

export default changeEmailSLice;