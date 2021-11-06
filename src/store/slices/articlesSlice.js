import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    results: [],
    nextPage: false,
    previousPage: false,
    lastPageNumber: 0,
  },
  reducers: {
    setArticles(state, action) {
      state.results = action.payload.results;
      state.nextPage = action.payload.nextPage;
      state.previousPage = action.payload.previousPage;
      state.lastPageNumber = action.payload.lastPageNumber;
    },
  },
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice.reducer;
