import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: "",
  password: "",
  profilePic: "",
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    login: (state, actions) => {
      return (state = {
        id: actions.payload,
        username: actions.payload,
        password: actions.payload,
        profilePic: actions.payload,
      });
    },
    logout: (state) => {
      return (state = {
        id: null,
        username: null,
        password: null,
        profilePic: null,
      });
    },
  },
});

export const { login, logout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
