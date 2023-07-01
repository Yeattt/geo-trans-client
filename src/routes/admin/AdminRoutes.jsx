import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, CompaniesRoutes, PermissionsRoutes, QuotesRoutes, RolesRoutes, TripsRoutes, UsersRoutes, VehiclesRoutes, VehiclesTypeRoutes, CalendarRoutes  } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/calendar/*" element={<CalendarRoutes />} />
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/companies/*" element={<CompaniesRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
         <Route path="/quotes/*" element={<QuotesRoutes />} />
         <Route path="/roles/*" element={<RolesRoutes />} />
         <Route path="/trips/*" element={<TripsRoutes />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/trucks/types/*" element={<VehiclesTypeRoutes />} />
      </Routes>
   );
}