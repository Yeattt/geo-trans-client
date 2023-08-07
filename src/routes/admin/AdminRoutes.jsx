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
import { useAuthStore } from '../../hooks';

export const AdminRoutes = () => {
   const { user } = useAuthStore();
   const [userPermissions, setUserPermissions] = useState([]);

   useEffect(() => {
      const roleId = user.roleId;

      fetch(`/api/roles/${roleId}/permissions`)
         .then((response) => response.json())
         .then((data) => {
            setUserPermissions(data);
         })
         .catch((error) => {
            console.error('Error fetching permissions:', error);
         });
   }, []);

   const hasPermission = (permissionName) => {
      return userPermissions.some((permission) => permission.nombre === permissionName);
   };

   if (loading) {
      // Puedes mostrar una pantalla de carga mientras se cargan los permisos
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
         {hasPermission ('privileges') && <Route path="/privileges" element={<PrivilegesPage />} />}
      </Routes>
   );
};