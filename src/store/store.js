import { configureStore } from '@reduxjs/toolkit';
import { authSlice, sideMenuSlice, vehiclesSlice, rolesSlice, clientsSlice, companiesSlice, permissionsSlice, quotesSlice, usersSlice, privilegesSlice, tripsSlice, vehiclesTypesSlice } from './';

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      sideMenu: sideMenuSlice.reducer,
      clients: clientsSlice.reducer,
      companies: companiesSlice.reducer,
      permissions: permissionsSlice.reducer,
      privileges: privilegesSlice.reducer,
      quotes: quotesSlice.reducer,
      roles: rolesSlice.reducer,
      trips: tripsSlice.reducer,
      users: usersSlice.reducer,
      vehicles: vehiclesSlice.reducer,
      vehiclesTypes: vehiclesTypesSlice.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
});