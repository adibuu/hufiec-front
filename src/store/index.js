import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import articlesReducer from "./slices/articlesSlice";
import articleReducer from "./slices/articleSlice";
import teamsReducer from "./slices/teamsSlice";
import teamReducer from "./slices/teamSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    articles: articlesReducer,
    article: articleReducer,
    teams: teamsReducer,
    team: teamReducer,
  },
});

export default store;
