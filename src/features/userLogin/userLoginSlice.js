import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("userLogged")) || {};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    login: (state, actions) => {
      return (state = actions.payload);
    },
    logout: (state) => {
      return (state = {});
    },
  },
});

export const { login, logout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
