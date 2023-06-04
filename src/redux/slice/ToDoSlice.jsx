import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDoList",
  initialState: [],
  reducers: {
    loadList: (state, action) => {
      return [...action.payload];
    },
    add: (state, action) => {
      return [...state, action.payload];
    },
    emptyList: () => {
      return [];
    },
  },
});

export const { loadList, add, emptyList } = toDoSlice.actions;

export default toDoSlice.reducer;
