import { Routes, Route } from 'react-router-dom';

import { UsersRoutes } from './UsersRoutes';
import {
   CalendarPage,
   ClientsPage,
   CompaniesPage,
   PermissionsPage,
   QuotesPage,
   RolesPage,
   TripsCreatePage,
   TripsPage,
   VehiclesPage,
   VehiclesTypePage
} from '../../pages';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/calendar" element={<CalendarPage />} />
         <Route path="/clients" element={<ClientsPage />} />
         <Route path="/companies" element={<CompaniesPage />} />
         <Route path="/permissions" element={<PermissionsPage />} />
         <Route path="/quotes" element={<QuotesPage />} />
         <Route path="/roles" element={<RolesPage />} />
         <Route path="/trips" element={<TripsPage />} />
         <Route path="/trips/create" element={<TripsCreatePage />} />
         <Route path="/trucks/types" element={<VehiclesTypePage />} />
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
   );
}