import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
    isLoading: false
  },
  reducers: {
    getCompaniesRequest: (state) => {
      state.companies = [];
      state.isLoading = true;
    },
    getCompaniesFailure: (state) => {
      state.companies = [];
      state.isLoading = false;
    },
    getCompaniesSuccess: (state, { payload }) => {
      state.companies = payload;
      state.isLoading = false;
    }
  }
});

export const { getCompaniesRequest, getCompaniesFailure, getCompaniesSuccess } = companiesSlice.actions;