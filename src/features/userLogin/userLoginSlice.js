import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  fname: "",
  lname: "",
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
        id: actions.payload.id,
        fname: actions.payload.fname,
        lname: actions.payload.lname,
        username: actions.payload.username,
        password: actions.payload.password,
        profilePic: actions.payload.profilePic,
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
