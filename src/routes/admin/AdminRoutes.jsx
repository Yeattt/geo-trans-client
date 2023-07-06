import { Routes, Route } from 'react-router-dom';

import { UsersRoutes } from './UsersRoutes';
import { CalendarPage, ClientsHome, CompaniesHome, PermissionsHome, QuotesHome, RolesHome, TripsHome, VehiclesHome, VehiclesTypeHome } from '../../pages/admin';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/calendar" element={<CalendarPage />} />
         <Route path="/clients" element={<ClientsHome />} />
         <Route path="/companies" element={<CompaniesHome />} />
         <Route path="/permissions" element={<PermissionsHome />} />
         <Route path="/quotes" element={<QuotesHome />} />
         <Route path="/roles" element={<RolesHome />} />
         <Route path="/trips" element={<TripsHome />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/vehicles" element={<VehiclesHome />} />
         <Route path="/trucks/types" element={<VehiclesTypeHome />} />
      </Routes>
   );
}