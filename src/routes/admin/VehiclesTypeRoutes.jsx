import { Routes, Route } from 'react-router-dom';

import { VehiclesTypeHome } from '../../pages/admin/'

export const VehiclesTypeRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<VehiclesTypeHome />} />
      </Routes>
   );
}