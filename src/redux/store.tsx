import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import accountSlice from "./accountSettings/accountSettingsSlice";
import changeEmailSLice from "./changeEmail/changeEmailSlice";
import claimsSlice from "./claims/claimsSlice";
import clientsSlice from "./clients/clientsSlice";
import collaboratorSlice from "./collaborator/collaboratorSlice";
import companiesHouseSlice from "./companiesHouse/companiesHouseSlice";
import forgotPasswordSlice from "./forgotPassword/forgotPasswordSlice";
import identityVerficationSlice from "./verficationSession/verficationSessionSlice";
import questionSlice from "./questions/question";
import rndExpertSlice from "./rndExpert/rndExpertSlice";
import signinSlice from "./signin/signinSlice";
import signupEmailVeriffSlice from "./signupEmailVeriff/signupEmailVeriffSlice";
import signupSlice from "./signup/signupSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import toasterSlice from "./toaster/toasterSlice";
import calenderAvailabilitySlice from "./calendarAvailability/calendarAvailabilitySlice";
import collectionsSlice from "./collections/collectionSlice";
import dashboardCountSlice from "./dashboardCount/dashboardCountSlice";
import calendarSlice from "./calendar/calendarSlice"
import subIndividualUserSlice from "./subIndividualUser/subIndividualUserSlice";
import myProfileSlice from "./accountSettings/myProfile/myProfileSlice";
import rndExpertListSlice from "./rndExpertList/rndExpertListSlice";
import availableDaysSlice from "./availableDays/availableDaysSlice";
import availableSlotsSlice from "./availableSlots/availableSlotsSlice";
import auditLogs from "./auditLogs/auditLogsSlice";
import auditLogsSlice from "./auditLogs/auditLogsSlice";
import newsLetterSlice from "./newsLetter/newsLetterSlice";
import recentActivitiesSlice from "./recentActivites/recentActivitesSlice";
import subscribedUserSlice from "./newsLetter/subscribedUserSlice";
// const persistConfig = {
//   key: "role",
//   storage,
// };

// const reducers = combineReducers({
//   authPersist: signinSlice,
// });

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    signin: signinSlice,
    signup: signupSlice.reducer,
    signupEmailVeriff: signupEmailVeriffSlice.reducer,
    identityVeriff: identityVerficationSlice.reducer,
    companiesList: companiesHouseSlice.reducer,
    forgotPassword: forgotPasswordSlice,
    clients: clientsSlice,
    claims: claimsSlice,
    question: questionSlice.reducer,
    collaborator: collaboratorSlice.reducer,
    collections: collectionsSlice,
    accountSettings: accountSlice,
    rndExpert: rndExpertSlice,
    toaster: toasterSlice,
    changeEmail: changeEmailSLice.reducer,
    calendarAvailiability:calenderAvailabilitySlice.reducer,
    dashboardCount: dashboardCountSlice,
    calendar: calendarSlice.reducer,
    subIndividualUser: subIndividualUserSlice.reducer,
    myProfile: myProfileSlice,
    rndExpertList:rndExpertListSlice.reducer,
    rndExpertAvailableDays:availableDaysSlice.reducer,
    availableSlots:availableSlotsSlice.reducer,
    auditLogs: auditLogsSlice,
    newsletter: newsLetterSlice,
    recentActivities:recentActivitiesSlice.reducer,
    subscribedUser: subscribedUserSlice,
    
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
