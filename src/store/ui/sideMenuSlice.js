import { createSlice } from '@reduxjs/toolkit';

export const sideMenuSlice = createSlice({
   name: 'sideMenu',
   initialState: false,
   reducers: {
      toggleMenu: (state) => !state,
   },
});

export const { toggleMenu } = sideMenuSlice.actions;