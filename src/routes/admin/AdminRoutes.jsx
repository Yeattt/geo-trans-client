import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, VehiclesRoutes, TripsRoutes, RolesRoutes, PricesRoutes, PermissionsRoutes, UsersRoutes } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
         <Route path="/prices/*" element={<PricesRoutes />} />
         <Route path="/trips/*" element={<TripsRoutes />} />
         <Route path="/roles/*" element={<RolesRoutes />} />
      </Routes>
   );
}