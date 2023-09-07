import { createSlice } from '@reduxjs/toolkit';

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    clients: [],
    isLoading: false
  },
  reducers: {
    getClientsRequest: (state) => {
      state.clients = [];
      state.isLoading = true;
    },
    getClientsFailure: (state) => {
      state.clients = [];
      state.isLoading = false;
    },
    getClientsSuccess: (state, { payload }) => {
      state.clients = payload;
      state.isLoading = false;
    }
  }
});

export const { getClientsRequest, getClientsFailure, getClientsSuccess } = clientsSlice.actions;