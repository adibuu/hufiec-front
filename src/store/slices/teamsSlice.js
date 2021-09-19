import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    results: [],
  },
  reducers: {
    setTeams(state, action) {
      state.results = action.payload.results;
    },
  },
});

export const teamsActions = teamsSlice.actions;

export default teamsSlice.reducer;
