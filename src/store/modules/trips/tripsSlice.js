import { createSlice } from '@reduxjs/toolkit';

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    isLoading: false
  },
  reducers: {
    getTripsRequest: (state) => {
      state.trips = [];
      state.isLoading = true;
    },
    getTripsFailure: (state) => {
      state.trips = [];
      state.isLoading = false;
    },
    getTripsSuccess: (state, { payload }) => {
      state.trips = payload;
      state.isLoading = false;
    }
  }
});

export const { getTripsRequest, getTripsFailure, getTripsSuccess } = tripsSlice.actions;