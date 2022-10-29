import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  signedIn: false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    onSignedInSuccess: (state, action) => {
      state.signedIn = true;
      state.token = action.payload;
    },
    onSignOutSuccess: (state) => {
      state.signedIn = false;
      state.token = "";
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { onSignedInSuccess, onSignOutSuccess, setToken } =
  sessionSlice.actions;
export default sessionSlice.reducer;
