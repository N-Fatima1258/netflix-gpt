import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
const appStore = configureStore({
  // this reducer will have different reducers from different slices
  reducer: {
    user: userSlice,
  },
});

export default appStore;

