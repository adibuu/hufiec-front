import { createSlice } from "@reduxjs/toolkit";

const documentsSlice = createSlice({
  name: "documents",
  initialState: {
    documentsURL: "/",
  },
  reducers: {
    setDocuments(state, action) {
      state.documentsURL = action.payload.documentsURL;
    },
  },
});

export const documentsActions = documentsSlice.actions;

export default documentsSlice.reducer;
