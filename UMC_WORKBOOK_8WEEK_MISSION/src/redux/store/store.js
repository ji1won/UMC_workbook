// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import login from "../reducers/authSlice";

export default configureStore({
  reducer: {
    auth: login,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
