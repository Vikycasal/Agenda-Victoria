import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  notes: {},
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { setNotes } = notesSlice.actions;

export default notesSlice.reducer;
