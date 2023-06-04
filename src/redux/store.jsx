import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./slice/ToDoSlice";

const store = configureStore({
  reducer: {
    list: toDoReducer
  },
});

export default store;
