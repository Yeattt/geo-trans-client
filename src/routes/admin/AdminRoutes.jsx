import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, PermissionsRoutes, UsersRoutes, VehiclesRoutes, TripsRoutes, RolesRoutes } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
         <Route path="/trips/*" element={<TripsRoutes />} />
         <Route path="/roles/*" element={<RolesRoutes />} />
      </Routes>
   );
}