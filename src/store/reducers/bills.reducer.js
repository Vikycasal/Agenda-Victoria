import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  bills: {},
};

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    setBills: (state, action) => {
      state.bills = action.payload;
    },
  },
});

export const { setBills } = billsSlice.actions;

export default billsSlice.reducer;
