import { configureStore } from '@reduxjs/toolkit';
import { authSlice, sideMenuSlice, vehiclesSlice } from './';

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sideMenu: sideMenuSlice.reducer,
      vehicles: vehiclesSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
});