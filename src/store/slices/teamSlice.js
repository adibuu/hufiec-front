import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    name: "",
    description: "",
    contact: {
      phone: "",
      email: "",
      facebookURL: "/",
      instagramURL: "/",
    },
    photoURL: null,
  },
  reducers: {
    setTeam(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.contact.phone = action.payload.contact.phone;
      state.contact.email = action.payload.contact.email;
      state.contact.facebookURL = action.payload.contact.facebookURL;
      state.contact.instagramURL = action.payload.contact.instagramURL;
      state.photoURL = action.payload.photoURL;
    },
  },
});

export const teamActions = teamSlice.actions;

export default teamSlice.reducer;
