import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiDeleteRequest, apiGetRequest, apiPatchRequest, apiPostRequest } from "../../helpers/request";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import axios from "axios";
import { endpoints } from "../../config/endpoints";

interface INewsletterData {
  title: string;
  name: string;
  image: any;
  description: string;
}
interface INewsletter {
  newsletterData: INewsletterData[];
  status: STATUS;
  message: string;
  errors: any;
}

const initialStateSlice: INewsletter = {
  newsletterData: [],
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

export const fetchNewsLetter = createAsyncThunk<any, any>("newsletter/fetchNewsLetter", async (data, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(`/newsletters`, data);
    console.log('response', response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const getNewsletter = createAsyncThunk<any, any>("newsletter/getNewsletter", async (_, thunkAPI) => {
//   try {
//     const response: any = await apiGetRequest(`/newsletters`);
//     console.log(response.data.data, 'responseaa');
//     return response.data.data;
    
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });


const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: initialStateSlice,
  reducers: {
    newsletter(state, action){
      state = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsLetter.pending, (state: any) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchNewsLetter.fulfilled, (state: any, action: PayloadAction<any>) => {
      state.newsletterData = action.payload;
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchNewsLetter.rejected, (state: any, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });
  },
});
export const setNewsletter = newsletterSlice.actions;
export default newsletterSlice.reducer;
