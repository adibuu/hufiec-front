import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import articlesReducer from "./slices/articlesSlice";
import articleReducer from "./slices/articleSlice";
import teamsReducer from "./slices/teamsSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    articles: articlesReducer,
    article: articleReducer,
    teams: teamsReducer,
  },
});

export default store;
