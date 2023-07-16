import { createSlice } from '@reduxjs/toolkit';

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    isLoading: false
  },
  reducers: {
    getVehiclesRequest: (state) => {
      state.vehicles = [];
      state.isLoading = true;
    },
    getVehiclesFailure: (state) => {
      state.vehicles = [];
      state.isLoading = false;
    },
    getVehiclesSuccess: (state, { payload }) => {
      state.vehicles = payload;
      state.isLoading = false;
    }
  }
});

export const { getVehiclesRequest, getVehiclesFailure, getVehiclesSuccess } = vehiclesSlice.actions;