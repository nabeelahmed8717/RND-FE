import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICollaborator, ICollaboratorState, IInitialValues } from "./collaborator-type";
import { endpoints } from "../../config/endpoints";
import { apiDeleteRequest, apiGetRequest, apiPostRequest } from "../../helpers/request";
import { useDispatch } from "react-redux";
import { displayToastr } from "../toaster/toasterSlice";
import { setMessage } from "./collaboratorSlice";

//get collaborators
export const getCollaborators = createAsyncThunk<ICollaborator[]>("collaborator/getCollaborator", async (_, thunkAPI) => {
  try {
    const response = await apiGetRequest(endpoints.collaborator);
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(displayToastr({ message: "error occured",alertType:'error' }));
    return thunkAPI.rejectWithValue(error);
  }
});

export const changeCostStatus = createAsyncThunk<ICollaboratorState, ICollaborator>("collaborator/changeCostStatus", async (data, thunkAPI) => {
  try {
    const response = await apiPostRequest(endpoints.collaboratorChangeCostStatus, data);
    response.data.collaboratorId=data.collaboratorId
    thunkAPI.dispatch(displayToastr({ message: "Status updated successfully"}));
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(displayToastr({ message: "error occured",alertType:'error' }));
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteCollaborator = createAsyncThunk<ICollaboratorState, ICollaborator>("collaborator/deleteCollaborator", async (id, thunkAPI) => {
  try {
    const response = await apiDeleteRequest(`${endpoints.deleteCollaborator}/${id}`);
    response.data.id=id
    thunkAPI.dispatch(displayToastr({ message: "Collaborator deleted successfully" }));
    return response.data;
  } catch (error) {
    
    thunkAPI.dispatch(displayToastr({ message: "error occured",alertType:'error' }));
    return thunkAPI.rejectWithValue(error);
  }
});

// to create collaborator
export const createCollaborator = createAsyncThunk<ICollaboratorState, IInitialValues>("collaborator/createCollaborator", async (data, thunkAPI) => {
  try {
    const response = await apiPostRequest(endpoints.createCollaborator, data);
    thunkAPI.dispatch(displayToastr({ message: "Collaborator added successfully"}));
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(displayToastr({ message: "error occured",alertType:'error' }));
    return thunkAPI.rejectWithValue(error);
  }
});