import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // as soon as we login, this reducer action (addUser) will be dispatched and we will add the user to the redux store

    addUser: (state, action) => {
      // initial state is null, if i return action.payload from here, the (state) will become action.payload
      return action.payload;
    },
    // sign out => the user is removed
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
