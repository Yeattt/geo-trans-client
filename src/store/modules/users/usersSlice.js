import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false
  },
  reducers: {
    getUsersRequest: (state) => {
      state.users = [];
      state.isLoading = true;
    },
    getUsersFailure: (state) => {
      state.users = [];
      state.isLoading = false;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    }
  }
});

export const { getUsersRequest, getUsersFailure, getUsersSuccess } = usersSlice.actions;