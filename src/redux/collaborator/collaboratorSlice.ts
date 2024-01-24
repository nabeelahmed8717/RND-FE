import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { ICollaboratorState } from "./collaborator-type";
import { changeCostStatus, createCollaborator, deleteCollaborator, getCollaborators } from "./collaborators-api";

const initialState: ICollaboratorState = {
  collaborators:[],
  collaboratorData: {
    cognitoId:"",
    id:"",
    isDeleted:false,
    collaborator:{
      claims: [],
      costQuestions:false,
      invited:false,
      joined:false,
      role:"",
      submitted:false,
      userId:"",
      _id:"",
    },
    newsletterStatus:false,
    roleInfo:"",
    firstName: "",
    lastName: "",
  },
  status: STATUS.IDLE,
  errors: null,
  message: "",
};
const collaboratorSlice = createSlice({
  name: "collaborator",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createCollaborator.pending, (state) => {
      state.status = STATUS.PENDING;
      state.message ='';
    });
    builder.addCase(createCollaborator.fulfilled, (state, action: PayloadAction<ICollaboratorState>) => {
      console.log(action.payload)
      state.status = STATUS.SUCCEEDED;
      state.collaborators.push(action.payload.data)
      state.message = action.payload.message;
    });
    builder.addCase(createCollaborator.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response?.data?.message;
    });

     //
     //
     // 
    builder.addCase(getCollaborators.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getCollaborators.fulfilled, (state, action: PayloadAction<ICollaboratorState>) => {
      state.status = STATUS.SUCCEEDED;
      state.collaborators = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getCollaborators.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response?.data?.message;
    });


    builder.addCase(changeCostStatus.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(changeCostStatus.fulfilled, (state, action: PayloadAction<ICollaboratorState>) => {
      console.log('action',action)
      state.status = STATUS.SUCCEEDED;
      state.collaborators =state.collaborators.map((ele)=>{
        if(ele.id===action.payload.collaboratorId){
          ele.collaborator.costQuestions=!ele.collaborator.costQuestions
        }
        return ele
      });
      state.message = action.payload.message;
    });
    builder.addCase(changeCostStatus.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response?.data?.message;
    });


    builder.addCase(deleteCollaborator.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(deleteCollaborator.fulfilled, (state, action: PayloadAction<ICollaboratorState>) => {
      console.log('action',action)
      state.status = STATUS.SUCCEEDED;
      state.collaborators =state.collaborators.filter((ele)=>ele.id!==action.payload.id);
      state.message = action.payload.message;
    });
    builder.addCase(deleteCollaborator.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
      state.message = action.payload.response?.data?.message;
    });



  },
});
export const { setMessage } = collaboratorSlice.actions;

export default collaboratorSlice;
