import { configureStore } from "@reduxjs/toolkit";
import billsReducer from "./reducers/bills.reducer";
import calendarReducer from "./reducers/calendar.reducer";
import notesReducer from "./reducers/notes.reducer";
import tasksReducer from "./reducers/tasks.reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    bills: billsReducer,
    calendar: calendarReducer,
    notes: notesReducer,
  },
});
