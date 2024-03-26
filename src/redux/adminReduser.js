import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isAdmin: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState: INITIAL_STATE,
  reducers: {
    handlIsAdmin(state, action) {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export const { handlIsAdmin } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
