import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isAuthenticated: false,
    user: null,
    loginError: "",
    signupError: "",
    authError: "",
    loading: false,
  },

  reducers: {
    loginStart: (state, action) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loginError = "";
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    loginFailure: (state, action) => {
      state.loginError = action.payload;
    },

    signupFailure: (state, action) => {
      state.signupError = action.payload;
    },

    authFailure: (state, action) => {
      state.authError = action.payload;
    },

    logoutSuccess: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loginError = "";
      state.loading = false;
    },

    logoutFailure: (state, action) => {
      state.error = action.payload;
    },

    setUserData: (state, action) => {
      const userData = action.payload;
      state.user = userData;
      state.isAuthenticated = true;
    },

    clearLoginError: (state, action) => {
      state.loginError = "";
    },

    clearSignupError: (state, action) => {
      state.signupError = "";
    }
  },
});

export default userSlice.reducer;
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupFailure,
  authFailure,
  logoutSuccess,
  logoutFailure,
  setUserData,
  clearLoginError,
  clearSignupError,
} = userSlice.actions;
