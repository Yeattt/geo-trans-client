import { configureStore } from '@reduxjs/toolkit';
import { authSlice, sideMenuSlice } from './';

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sideMenu: sideMenuSlice.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
});