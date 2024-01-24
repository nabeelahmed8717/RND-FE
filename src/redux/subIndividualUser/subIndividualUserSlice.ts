import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
// import { changeCostStatus, createCollaborator, deleteCollaborator, getCollaborators } from "./collaborators-api";
import { createSubIndividual, fetchSubindividual, updateSubIndividual } from "./subIndividualUser-api"


interface ISubIndividualData {
  email: string,
  firstName: any,
  lastName: string,
  phoneNumber: string,
  userView: string,
  userPurchase: string
}
interface ISubIndividual {
  subindividualData: ISubIndividualData[];
  status: STATUS;
  message: string;
  totalRecords: number;
  errors: any;
}

const initialStateSlice: ISubIndividual = {
  subindividualData: [],
  totalRecords: 0,
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

const subIndividualUserSlice = createSlice({
  name: "subIndividualUser",
  initialState: initialStateSlice,
  reducers: {
    setSubIndividualUser(state, action) {
      state.message = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createSubIndividual.pending, (state) => {
      state.status = STATUS.PENDING;
      state.message = '';
    });
    builder.addCase(createSubIndividual.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.status = STATUS.SUCCEEDED;
      state.subindividualData.push(action.payload.data)
      console.log("action.payload.data", action.payload.data)
      state.message = action.payload.message;
    });
    builder.addCase(createSubIndividual.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response?.data?.message;
    });



    

    builder.addCase(updateSubIndividual.pending, (state) => {
      state.status = STATUS.PENDING;
    });

    builder.addCase(updateSubIndividual.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.status = STATUS.SUCCEEDED;
      console.log(state, "action");
      state.subindividualData = state.subindividualData.map((ele:any) => {
        if (ele.id === action.payload.data.id) {
          ele = action.payload.data
        }
        return ele
      })
      console.log("action.payload.data", action.payload.data)
      state.message = action.payload.message;
    });

    builder.addCase(
      updateSubIndividual.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.errors = action.payload;
        state.message = action.payload.response.data.message;
      }
    );






    builder.addCase(fetchSubindividual.pending, (state: any) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchSubindividual.fulfilled, (state: any, action: any) => {
      state.subindividualData = action.payload;
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchSubindividual.rejected, (state: any, action: any) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });


  },
});
export const { setSubIndividualUser } = subIndividualUserSlice.actions;

export default subIndividualUserSlice;