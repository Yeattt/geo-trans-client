import { createSlice } from '@reduxjs/toolkit';

export const vehiclesTypesSlice = createSlice({
  name: 'vehiclesTypes',
  initialState: {
    vehiclesTypes: [],
    isLoading: false
  },
  reducers: {
    getVehiclesTypesRequest: (state) => {
      state.vehiclesTypes = [];
      state.isLoading = true;
    },
    getVehiclesTypesFailure: (state) => {
      state.vehiclesTypes = [];
      state.isLoading = false;
    },
    getVehiclesTypesSuccess: (state, { payload }) => {
      state.vehiclesTypes = payload;
      state.isLoading = false;
    }
  }
});

export const { getVehiclesTypesRequest, getVehiclesTypesFailure, getVehiclesTypesSuccess } = vehiclesTypesSlice.actions;