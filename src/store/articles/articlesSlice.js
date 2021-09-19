import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    documentsAmount: 0,
    results: [],
  },
  reducers: {
    getArticles(state, action) {
      state.documentsAmount = action.payload.documentsAmount;
      state.results = action.payload.results;
    },
  },
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice.reducer;
