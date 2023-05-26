import { Routes, Route } from 'react-router-dom';

import { ClientsRoutes, VehiclesRoutes, PricesRoutes } from './';

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/clients/*" element={<ClientsRoutes />} />
         <Route path="/vehicles/*" element={<VehiclesRoutes />} />
         <Route path="/prices/*" element={<PricesRoutes />} />
      </Routes>
   );
}