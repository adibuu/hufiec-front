import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import articlesReducer from "./slices/articlesSlice";
import articleReducer from "./slices/articleSlice";
import teamsReducer from "./slices/teamsSlice";
import teamReducer from "./slices/teamSlice";
import documentsReducer from "./slices/documentsSlice";
import galleryReducer from "./slices/gallerySlice";
import contactReducer from "./slices/contactSlice";
import infoModalReducer from "./slices/infoModalSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    articles: articlesReducer,
    article: articleReducer,
    teams: teamsReducer,
    team: teamReducer,
    documents: documentsReducer,
    gallery: galleryReducer,
    contact: contactReducer,
    infoModal: infoModalReducer,
  },
});

export default store;
