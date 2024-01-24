import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../common/constants/store";

import {
  getUserProfile,
  profileUpdate,
  updateProfileImage,
} from "./myProfileApi";

const individual = {
  address: "",
  buildingNo: "",
  city: "",
  postCode: "",
};
const profileState = {
  message: "",
  status: STATUS.IDLE,
  profileValue: {} as any,
  error: null,
  imageProfile: "",
  individual,
};

const myProfileSlice = createSlice({
  name: "myProfile",
  initialState: profileState,
  reducers: {
    getprofileImage: (state, action) => {
      state.imageProfile = action.payload;
    },
    // getProfileData:(state,action)=>{

    // }
  },
  extraReducers(builder) {
    builder.addCase(profileUpdate.pending, (state, action) => {
      state.status = STATUS.PENDING;
    }),
      builder.addCase(profileUpdate.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.profileValue = action.payload.data;
        state.message = action.payload.message;
      }),
      builder.addCase(profileUpdate.rejected, (state, action) => {
        state.status = STATUS.FAILED;
      });
    builder.addCase(updateProfileImage.pending, (state, action) => {
      state.status = STATUS.PENDING;
    }),
      builder.addCase(updateProfileImage.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
      }),
      builder.addCase(updateProfileImage.rejected, (state, action) => {
        state.status = STATUS.FAILED;
      });

    builder.addCase(getUserProfile.pending, (state, action) => {
      state.status = STATUS.PENDING;
    }),
      builder.addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.profileValue = action.payload?.data;
      }),
      builder.addCase(getUserProfile.rejected, (state, action) => {
        state.status = STATUS.FAILED;
      });
  },
});
export const { getprofileImage } = myProfileSlice.actions;
export default myProfileSlice.reducer;
