import { Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
import { ClientsRoutes, PermissionsRoutes, UsersRoutes, VehiclesRoutes } from './';
=======
import { ClientsRoutes, VehiclesRoutes, TripsRoutes } from './';
>>>>>>> 48b152934c55d941b0c7c2cce553f324258a227d

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
<<<<<<< HEAD
         <Route path="/users/*" element={<UsersRoutes />} />
         <Route path="/permissions/*" element={<PermissionsRoutes />} />
=======
         <Route path="/trips/*" element={<TripsRoutes />} />
>>>>>>> 48b152934c55d941b0c7c2cce553f324258a227d
      </Routes>
   );
}