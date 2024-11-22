import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
const appStore = configureStore({
  // this reducer will have different reducers from different slices
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
