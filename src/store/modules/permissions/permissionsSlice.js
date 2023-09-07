import { createSlice } from '@reduxjs/toolkit';

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: {
    permissions: [],
    isLoading: false
  },
  reducers: {
    getPermissionsRequest: (state) => {
      state.permissions = [];
      state.isLoading = true;
    },
    getPermissionsFailure: (state) => {
      state.permissions = [];
      state.isLoading = false;
    },
    getPermissionsSuccess: (state, { payload }) => {
      state.permissions = payload;
      state.isLoading = false;
    }
  }
});

export const { getPermissionsRequest, getPermissionsFailure, getPermissionsSuccess } = permissionsSlice.actions;