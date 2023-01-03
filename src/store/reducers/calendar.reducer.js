import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  calendar: {},
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalendar: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const { setCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;
