import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { IInitialState } from "./availableDays-type";
import { getdays } from "./availableDays.api";

const initialState:IInitialState = {
    days:[],
    message:"",
    statusCode:"",
    status : STATUS.IDLE,
    error:null,
}
const availableDaysSlice:Slice<IInitialState, {}, "available-days-slice"> = createSlice({
    name:"available-days-slice",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getdays.pending, (state:IInitialState) =>{
            state.status = STATUS.PENDING;
        });
        builder.addCase(getdays.fulfilled, (state, action:PayloadAction<any>) => {
            state.message = action.payload?.message;
             state.statusCode =  action.payload?.statusCode,
            state.status =STATUS.SUCCEEDED;
            state.days = action.payload?.data;
        });
        builder.addCase(getdays.rejected, (state:IInitialState, action:PayloadAction<any>) =>{
            state.error =action.payload;
            state.message = action.payload?.response?.data?.message;
        });
    },
})

export default availableDaysSlice;