import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    address: {
      city: "",
      street: "",
      postCode: "",
    },
    email: "",
    phone: "",
    facebookURL: "/",
    instagramURL: "/",
  },
  reducers: {
    setContact(state, action) {
      state.address.city = action.payload.address.city;
      state.address.street = action.payload.address.street;
      state.address.postCode = action.payload.address.postCode;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.facebookURL = action.payload.facebookURL;
      state.instagramURL = action.payload.instagramURL;
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;
