import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserList, UsersData } from "../../common/mockData/accountSettings/users/users";



interface ICardList{
  id:string,
  type:string,
  brand:string,
  country:string,
  expiryMonth:string,
  expiryYear:string,
  lastDigit:string,
  customerId:string
}


type initialStateType = {
  users: IUserList[];
  cardsList:ICardList[]
};

const initialState: initialStateType = {
  users: UsersData,
  cardsList:[]
};


// const getCardList

const accountSettingsSlice = createSlice({
  name: "accountSetting",
  initialState,
  reducers: {
    editUserItem: (state, action: PayloadAction<any>) => {
      const index = state.users.findIndex((x) => x.id === action.payload.id);
      state.users[index] = action.payload.editedUser;
    },

    setNewUserItem: (state, action: PayloadAction<any>) => {
      state.users = [...state.users, action.payload];
    },
  },
  extraReducers:{

  }
});

export const { setNewUserItem, editUserItem } = accountSettingsSlice.actions;
export default accountSettingsSlice.reducer;
