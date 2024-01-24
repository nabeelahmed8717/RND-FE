import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "../../common/constants/store";
import { Role } from "../../common/constants/store";
import { IRigesterdUser, IRigesterdUsersState } from "./signup-types";
import { createRegisteredUser } from "./signup-api";

const initialState: IRigesterdUsersState = {
  rigesterdUser: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    roleType: Role.INDIVIDUAL,
    companyNumber: "",
    companyName: "",
    address: "",
    postCode: "",
    city: "",
    country: "",
    TermsConditions: false,
    newsletterStatus: false,
  },
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createRegisteredUser.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(
      createRegisteredUser.fulfilled,
      (state, action: PayloadAction<IRigesterdUsersState>) => {
        state.rigesterdUser = action.payload.rigesterdUser;
        state.status = STATUS.SUCCEEDED;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      createRegisteredUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.errors = action.payload;
        state.message = action?.payload?.response?.data?.message;
      }
    );
  },
});

export const signupAction = signupSlice.actions;
export default signupSlice;
