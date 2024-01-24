import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  setDummyRoles,
  setRolesInfo,
  setUserInfo,
  setToken,
  setRefreshToken,
} from "../../helpers/Tokens";
import { STATUS } from "../../common/constants/store";
import { ILoginState } from "./signin-type";
import { getSignedIn, logoutApiCall } from "./signin.api";

const initialState: ILoginState = {
  session: "",
  tokens: {
    accessToken: "",
    refreshToken: "",
  },
  verifInfo: {
    sessionId: "",
    sessionUrl: "",
    verificationStatus: "",
  },
  user: {
    cognitoId: "",
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    individual: {
      address: "",
      buildingNo: "",
      city: "",
      postCode: "",
    },
    profileImage: "",
    newsletterStatus: Boolean,
  },
  roleInfo: {
    id: "",
    name: "",
    permissions: [],
    roles: [],
    roleType: "",
  },
  status: STATUS.IDLE,
  errors: null,
  message: "",
};

const signinSlice = createSlice({
  name: "loginin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // sign in
    builder.addCase(getSignedIn.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(
      getSignedIn.fulfilled,
      (state, action: PayloadAction<any>) => {
        //collaborator first time login to set password
        state.session = action.payload?.data?.session ?? "";
        // tokens
        state.tokens = {
          accessToken: action?.payload?.data?.accessToken ?? "",
          refreshToken: action?.payload?.data?.refreshToken ?? "",
        };
        // verif info
        state.verifInfo = {
          sessionId: action.payload?.data?.veriff?.userId,
          sessionUrl: action?.payload?.data?.veriff?.sessionUrl,
          verificationStatus: action?.payload?.data?.verificationStatus,
        };
        // user info
        state.user = {
          cognitoId: action?.payload?.data?.user?.cognitoId ?? "",
          id: action?.payload?.data?.user?.id ?? "",
          firstName:
            action?.payload?.data?.veriff?.firstName ??
            action?.payload?.data?.user?.firstName,
          lastName:
            action?.payload?.data?.veriff?.lastName ??
            action?.payload?.data?.user?.lastName,
          email: action?.payload?.data?.email ?? "",
          newsletterStatus: action?.payload?.data?.user?.newsletterStatus,
          individual: action?.payload?.data?.user?.individual,
          profileImage: action?.payload?.data?.user?.profileImage,
        };
        //roles info
        state.roleInfo = {
          id: action?.payload?.data?.user?.roleInfo?.id,
          name: action?.payload?.data?.user?.roleInfo?.name,
          permissions: action?.payload?.data?.user?.roleInfo?.permissions,
          roles: action?.payload?.data?.roles,
          roleType: action?.payload?.data?.user?.roleInfo?.roleType,
        };
        state.status = STATUS.SUCCEEDED;
        state.message = action.payload.message;

        // set data in local storage
        state.tokens.accessToken && setToken(state.tokens.accessToken);
        state.tokens.refreshToken && setRefreshToken(state.tokens.refreshToken);
        state.roleInfo.name && setDummyRoles(state.roleInfo.name);
        state.user && setUserInfo(state.user);
        state.roleInfo && setRolesInfo(state.roleInfo);
      }
    );
    builder.addCase(
      getSignedIn.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = STATUS.FAILED;
        state.message = action?.payload?.response?.data?.message;
        state.errors = action.payload;
      }
    );
    // logout
    builder.addCase(
      logoutApiCall.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.message = action.payload.message;
        state = initialState;
      }
    );
    builder.addCase(logoutApiCall.rejected, (state) => {
      // state = initialState;
    });
  },
});

export default signinSlice.reducer;
