import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { loading: true, footer: false },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setFooter(state, action) {
      state.footer = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
