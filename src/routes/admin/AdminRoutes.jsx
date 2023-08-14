import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { UsersRoutes } from './UsersRoutes';
import {
   CalendarPage,
   ClientsPage,
   CompaniesPage,
   PermissionsPage,
   QuotesPage,
   QuotesCreatePage,
   RolesPage,
   TripsCreatePage,
   TripsPage,
   VehiclesPage,
   VehiclesTypePage,
   PrivilegesPage,
   NotFound
} from '../../pages';
import { useAllowedPrivileges, useAuthStore, useGetApiData } from '../../hooks';
import { geoTransApi } from '../../api';

export const AdminRoutes = () => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
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
   }, [user]);

   const hasPermission = (permissionName) => {
      return userPermissions.some((permission) => permission.nombre.toLowerCase().trim() === permissionName.toLowerCase().trim());
   };

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <Routes>
         {hasPermission('agenda') && <Route path="/calendar" element={<CalendarPage />} />}
         {hasPermission('clientes') && <Route path="/clients" element={<ClientsPage />} />}
         {hasPermission('compañias') && <Route path="/companies" element={<CompaniesPage />} />}
         {hasPermission('permisos') && <Route path="/permissions" element={<PermissionsPage />} />}
         {hasPermission('cotizaciones') && <Route path="/quotes" element={<QuotesPage />} />}
         {
            userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'crear') &&
            hasPermission('cotizaciones') &&
            <Route path="/quotes/create" element={<QuotesCreatePage />} />
         }

         {hasPermission('roles') && <Route path="/roles" element={<RolesPage />} />}
         {hasPermission('viajes') && <Route path="/trips" element={<TripsPage />} />}

         {
            userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'crear') &&
            hasPermission('viajes') &&
            <Route path="/trips/create" element={<TripsCreatePage />} />
         }

         {hasPermission('tipos') && <Route path="/trucks/types" element={<VehiclesTypePage />} />}
         {hasPermission('usuarios') && <Route path="/users/*" element={<UsersRoutes />} />}
         {hasPermission('vehiculos') && <Route path="/vehicles" element={<VehiclesPage />} />}
         {hasPermission('privilegios') && <Route path="/privileges" element={<PrivilegesPage />} />}

         <Route path="/*" element={<NotFound />} />
      </Routes>
   );
};