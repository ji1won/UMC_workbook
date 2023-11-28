import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload;
      state.error = null;
      state.loading = false;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.error = null;
      state.loading = false;
    },

  },
});

export const { loginUser, loginFailure, setLoading, clearUser } = login.actions;
export default login.reducer;
