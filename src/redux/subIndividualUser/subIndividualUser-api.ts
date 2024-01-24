import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/endpoints";
import { apiDeleteRequest, apiGetRequest, apiPatchRequest, apiPostRequest } from "../../helpers/request";
import { useDispatch } from "react-redux";
import { displayToastr } from "../toaster/toasterSlice";
import { setSubIndividualUser } from "./subIndividualUserSlice";



export const createSubIndividual = createAsyncThunk<
{
email: string;
firstName: string;
lastName:string;
phoneNumber: string;
userView: string;
userPurchase:string;}
>("users/create-subindividual", async (data, thunkAPI) => {
    try {
      const response = await apiPostRequest(endpoints.createSubIndividual, data);
      thunkAPI.dispatch(displayToastr({ message: "User added successfully"}));
      console.log("R=>Response",response)
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(displayToastr({ message: "error occured",alertType:'error' }));
      return thunkAPI.rejectWithValue(error);
    }
  });


  export const fetchSubindividual = createAsyncThunk<any, number>(
    "users/list-subindividual",
    async (page, thunkAPI) => {
      try {
        const response = await apiGetRequest(
          `${endpoints.getSubindivisual}`
        );
        console.log('getSubindivisual',response)
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateSubIndividual  = createAsyncThunk<
  any,
  {
    id: any;
    email: string;
    firstName: string;
    lastName:string;
    phoneNumber: string;
    userView: string;
    userPurchase:string;
  }
>("users/update-subindivisual", async (data, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(
      `${endpoints.updateSubindivisual}/${data.id}`,
      data
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
