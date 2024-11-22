// We will put all the movies data inside the movies slice

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  // initially kept this as empty and then i will add nowPlaying movies inside it
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    // inside this reducer function , I will update the store
    addNowPlayingMovies: (state, action) => {
      //action.payload: When an action is dispatched in Redux, it often contains a payload, which is the data associated with that action. In this case, action.payload would contain the list of now playing movies fetched from an API (such as TMDb), or any other relevant data that the action is passing to the reducer.
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
