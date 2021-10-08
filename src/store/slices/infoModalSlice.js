import { createSlice } from "@reduxjs/toolkit";

const infoModalSlice = createSlice({
  name: "infoModal",
  initialState: {
    show: false,
    content: "",
  },
  reducers: {
    setInfoModal(state, action) {
      state.show = action.payload.show;
      state.content = action.payload.content;
    },
  },
});

export const infoModalActions = infoModalSlice.actions;

export default infoModalSlice.reducer;
