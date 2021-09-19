import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleryURL: "/",
  },
  reducers: {
    setGallery(state, action) {
      state.galleryURL = action.payload.galleryURL;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice.reducer;
