import { createSlice } from '@reduxjs/toolkit';

export const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
    isLoading: false
  },
  reducers: {
    getRolesRequest: (state) => {
      state.roles = [];
      state.isLoading = true;
    },
    getRolesFailure: (state) => {
      state.roles = [];
      state.isLoading = false;
    },
    getRolesSuccess: (state, { payload }) => {
      state.roles = payload;
      state.isLoading = false;
    }
  }
});

export const { getRolesRequest, getRolesFailure, getRolesSuccess } = rolesSlice.actions;