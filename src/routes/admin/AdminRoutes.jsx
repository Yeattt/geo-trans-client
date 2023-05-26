import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, PermissionsRoutes, UsersRoutes, VehiclesRoutes } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
      </Routes>
   );
}