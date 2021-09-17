import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./articlesSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    ui: uiReducer,
  },
});

export default store;
