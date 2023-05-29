import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, CompaniesRoutes, PermissionsRoutes, QuotesRoutes, RolesRoutes, TripsRoutes, UsersRoutes, VehiclesRoutes  } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
         <Route path="/quotes/*" element={<QuotesRoutes />} />
         <Route path="/trips/*" element={<TripsRoutes />} />
         <Route path="/roles/*" element={<RolesRoutes />} />
         <Route path="/companies/*" element={<CompaniesRoutes />} />
      </Routes>
   );
}