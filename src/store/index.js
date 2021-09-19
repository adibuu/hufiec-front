import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./articles/articlesSlice";
import articleReducer from "./article/articleSlice";
import uiReducer from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    article: articleReducer,
    ui: uiReducer,
  },
});

export default store;
