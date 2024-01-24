import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRndExpert } from "../../common/interfaces/RndExpert";
import { RndExpertTableData } from "../../common/mockData/RndExpert/RndExpert";
type initialStateType = {
  users: IRndExpert[];
  
};
const initialState: initialStateType = {
  users: RndExpertTableData,
  
};

export const rndExpertSlice = createSlice({
  name: "rndExpert",
  initialState,
  reducers: {
    
    addRndExpert: (state, action: PayloadAction<any>) => {
  
      state.users = [...state.users, action.payload];
      },
    
      updateRndExpert: (state, action: PayloadAction<any>) => {
        const index = state.users.findIndex((x) => x.id === action.payload.id);
        state.users[index] = action.payload.editedUser;
      },

      deleteRndExpert: (state, action: PayloadAction<any>) => {   
        let { users } = state;
        state.users = users.filter((item) => 
            item.id !==action.payload.id);    
      },
      toggleSwitch: (state, action) => {
        let { users } = state;
        state.users = users.map((item) => {
            if (item.id ===action.payload.id) {
              item.status = !item.status;
            }
            return item;
          });
      },
   
  },
});

export const { addRndExpert,updateRndExpert ,deleteRndExpert,toggleSwitch} = rndExpertSlice.actions;
export default rndExpertSlice.reducer;
