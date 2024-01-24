import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { STATUS } from "../../common/constants/store";
import { userConfirmByMail } from "./user-confirm-api";
import { IUserConfirmState } from "./user-confirm-type";

const initialState = {
    userConfirmData:{
        email:"",
        code:""
    },
    errors:null,
    status:STATUS.IDLE,
    message:""
}

const userConfirmSlice = createSlice({
    name:"user-confirm",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(userConfirmByMail.pending, (state) => {
            state.status = STATUS.PENDING
        });
        builder.addCase(userConfirmByMail.fulfilled, (state, action:PayloadAction<IUserConfirmState>) => {
            state.userConfirmData = action.payload.userConfirmData;
            state.status = STATUS.SUCCEEDED;
            state.message = action.payload.message
        });
        builder.addCase(userConfirmByMail.rejected, (state,action:any) => {
            state.errors = action.payload
            state.status = STATUS.FAILED
        })
    },
})

export default userConfirmSlice;