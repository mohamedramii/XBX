// redux/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userDetails: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.userDetails = action.payload.userDetails;
    },
    clearUser: (state) => {
      state.token = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
