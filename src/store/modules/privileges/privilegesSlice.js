import { createSlice } from '@reduxjs/toolkit';

export const privilegesSlice = createSlice({
  name: 'privileges',
  initialState: {
    privileges: [],
    isLoading: false
  },
  reducers: {
    getPrivilegesRequest: (state) => {
      state.privileges = [];
      state.isLoading = true;
    },
    getPrivilegesFailure: (state) => {
      state.privileges = [];
      state.isLoading = false;
    },
    getPrivilegesSuccess: (state, { payload }) => {
      state.privileges = payload;
      state.isLoading = false;
    }
  }
});

export const { getPrivilegesRequest, getPrivilegesFailure, getPrivilegesSuccess } = privilegesSlice.actions;