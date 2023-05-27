import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, VehiclesRoutes, TripsRoutes, RolesRoutes } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/trips/*" element={<TripsRoutes />} />
         <Route path="/roles/*" element={<RolesRoutes />} />
      </Routes>
   );
}