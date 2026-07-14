import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user slice/userSlice.js"

export default configureStore({
  reducer: {
    userSlice: userReducer,
  },
});
