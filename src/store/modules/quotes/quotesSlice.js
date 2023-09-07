import { createSlice } from '@reduxjs/toolkit';

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    quotes: [],
    isLoading: false
  },
  reducers: {
    getQuotesRequest: (state) => {
      state.quotes = [];
      state.isLoading = true;
    },
    getQuotesFailure: (state) => {
      state.quotes = [];
      state.isLoading = false;
    },
    getQuotesSuccess: (state, { payload }) => {
      state.quotes = payload;
      state.isLoading = false;
    }
  }
});

export const { getQuotesRequest, getQuotesFailure, getQuotesSuccess } = quotesSlice.actions;