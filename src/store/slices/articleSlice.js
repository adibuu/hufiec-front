import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    title: "",
    content: "",
    imageURL: null,
    filesURL: [],
    date: "",
    readingTime: 0,
  },
  reducers: {
    setArticle(state, action) {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.imageURL = action.payload.imageURL;
      state.filesURL = action.payload.filesURL;
      state.date = action.payload.date;
      state.readingTime = action.payload.readingTime;
    },
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice.reducer;
