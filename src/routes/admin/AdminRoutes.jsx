import { useEffect } from 'react';
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
   VehiclesTypePage,
   PrivilegesPage
} from '../../pages';
import { useAuthStore, useGetApiData } from '../../hooks';
import { geoTransApi } from '../../api';

export const AdminRoutes = () => {
   const { user } = useAuthStore();
   const [userPermissions, setUserPermissions] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const roleId = user.roleId;

      const getApiData = async () => {
         try {
            const { data } = await geoTransApi.get(`/roles/${roleId}`);
            setUserPermissions(data.role.permisos);
            setIsLoading(false);
         } catch (error) {
            throw new Error(error);
         }
      }

      getApiData();
   }, []);

   const hasPermission = (permissionName) => {
      return userPermissions.some((permission) => permission.nombre.toLowerCase().trim() === permissionName.toLowerCase().trim());
   };

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <Routes>
         <Route path="/calendar" element={<CalendarPage />} />
         {hasPermission('clients') && <Route path="/clients" element={<ClientsPage />} />}
         {hasPermission('companies') && <Route path="/companies" element={<CompaniesPage />} />}
         {hasPermission('permissions') && <Route path="/permissions" element={<PermissionsPage />} />}
         {hasPermission('quotes') && <Route path="/quotes" element={<QuotesPage />} />}
         {hasPermission('roles') && <Route path="/roles" element={<RolesPage />} />}
         {hasPermission('trips') && <Route path="/trips" element={<TripsPage />} />}
         {hasPermission('trips/create') && <Route path="/trips/create" element={<TripsCreatePage />} />}
         {hasPermission('trucks/types') && <Route path="/trucks/types" element={<VehiclesTypePage />} />}
         {hasPermission('users') && <Route path="/users/*" element={<UsersRoutes />} />}
         {hasPermission('vehicles') && <Route path="/vehicles" element={<VehiclesPage />} />}
         {hasPermission('privileges') && <Route path="/privileges" element={<PrivilegesPage />} />}
      </Routes>
   );
};