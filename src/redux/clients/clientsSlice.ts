import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiDeleteRequest,
  apiGetRequest,
  apiPatchRequest,
  apiPostRequest,
} from "../../helpers/request";

import { STATUS } from "../../common/constants/store";
import axios from "axios";
import { endpoints } from "../../config/endpoints";
import { number } from "yup";
import { displayToastr } from "../toaster/toasterSlice";

const API_URL = "https://gateway-dev.rndtaxclaims.uk/clients?page=1&limit=8";
const SEARCH_URL =
  "https://gateway-dev.rndtaxclaims.uk/clients/search?q=gd&userId=9";

export interface IUser {
  fullName: string;
}

export interface IClientState {
  id: string;
  companyName: string;
  companyNumber: string;
  user: IUser;
  claimsInProgress: number;
  claimsInReview: number;
  claimsReadyToDownload: number;
  purchasedClaims: number;
  ineligibleClaims: number;
  totalClaims: number;
}

interface ICLIENT {
  clients: IClientState[];
  status: STATUS;
  errors: any;
  totalRecords: number;
  message: string;
  totalRecords: number;
}

const initialState: ICLIENT = {
  clients: [],
  totalRecords: 0,
  status: STATUS.IDLE,
  errors: null,
  message: "",
  totalRecords: 0,
};

let token: string | null = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("accessToken");
}

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const createClients = createAsyncThunk(
  "clients/createClients",
  async ({ companyName, companyNumber, dispatch }: any, thunkAPI) => {
    try {
      const response: any = await apiPostRequest(endpoints.clients, {
        companyName,
        companyNumber,
      });
      dispatch(displayToastr({ message: "Client Added Successfully" }));
      // thunkAPI.dispatch(fetchClients());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateClients = createAsyncThunk(
  "clients/updateClients",
  async (
    { companyName, companyNumber, clientID, page, dispatch }: any,
    thunkAPI
  ) => {
    try {
      const response: any = await apiPatchRequest(
        `${endpoints.clients}/${clientID}`,
        { companyName, companyNumber }
      );
      dispatch(displayToastr({ message: "Client Updated Successfully" }));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchClients = createAsyncThunk<any, number>(
  "clients/fetchClients",
  async (page, thunkAPI) => {
    try {
      const response = await apiGetRequest(
        `${endpoints.clients}?page=${page}&limit=8`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DeleteClients = createAsyncThunk<any, string>(
  "clients/DeleteClients",
  async ({ clientId, dispatch }: any, thunkAPI) => {
    try {
      const response = await apiDeleteRequest(
        `${endpoints.clients}/${clientId}`
      );
      dispatch(displayToastr({ message: "Client Deleted Successfully" }));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchClientTyping = createAsyncThunk<
  IClientState,
  {
    searchClient: string;
    page: number;
  }
>("clients/searchClients", async (data, thunkAPI) => {
  try {
    const response = await apiGetRequest(
      `${endpoints.clientSearch}/search?page=${data.page}&limit=8&q=${data.searchClient}`
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients(state, action) {
      console.log("payload", action.payload);
      state.clients = action.payload;
    },
    addClients(state, action) {
      state.clients.unshift(action.payload);
    },
  },

  // extraReducers(builder) {
  //   // builder.addCase(
  //   //   createClients.fulfilled,
  //   //   (state, action: PayloadAction<any>) => {
  //   //     state.status = "succeeded";
  //   //     state.clients = action.payload;
  //   //   }
  //   // );
  //   // builder.addCase(
  //   //   createClients.rejected,
  //   //   (state, action: PayloadAction<any>) => {
  //   //     state.status = "failed";
  //   //     state.errors = action.payload;
  //   //   }
  //   // );
  //   // builder.addCase(createClients.pending, (state) => {
  //   //   state.status = "pending";
  //   // });

  //   // builder.addCase(fetchClients.fulfilled, (state, action) => {
  //   //   console.log("getdataaaa", action.payload);
  //   //   state.clients = action.payload.data;
  //   // });
  //   // builder.addCase(searchClients.fulfilled, (state, action) => {
  //   //   console.log("getdata", action.payload);
  //   //   state.clients = action.payload.data;
  //   // });
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.clients = action.payload.data;
      state.totalRecords = action.payload.total;
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message;
      state.totalRecords = action.payload.total;
    });
    builder.addCase(fetchClients.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });

    builder.addCase(updateClients.pending, (state) => {
      state.status = STATUS.PENDING;
    });

    builder.addCase(
      updateClients.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.SUCCEEDED;
        console.log(state, "action");
        state.totalRecords = action.payload.total;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      updateClients.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.errors = action.payload;
        state.message = action.payload.response.data.message;
      }
    );

    builder.addCase(
      createClients.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.SUCCEEDED;
        state.totalRecords = state.totalRecords + 1;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      createClients.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.errors = action.payload;
        state.message = action.payload.response.data.message;
      }
    );
    builder.addCase(createClients.pending, (state) => {
      state.status = STATUS.PENDING;
    });

    builder.addCase(DeleteClients.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(DeleteClients.fulfilled, (state, action) => {
      state.clients = action.payload.data;
      state.totalRecords = action.payload.total;
      state.status = STATUS.SUCCEEDED;
      state.message = action.payload.message;
    });
    builder.addCase(DeleteClients.rejected, (state, action) => {
      state.status = STATUS.FAILED;
      state.errors = action.payload;
    });

    // builder.addCase(searchClients.fulfilled, (state, action) => {
    //   console.log("getdata", action.payload);
    //   state.clients = action.payload.data;
    // });
  },
});
export const { setClients } = clientsSlice.actions;
export default clientsSlice.reducer;
