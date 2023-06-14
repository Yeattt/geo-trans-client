import { Routes, Route } from 'react-router-dom';

import { TripsHome, TripsUpdate } from '../../pages/admin/'

export const TripsRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TripsHome />}/>
         <Route path="/update/:id" element={<TripsUpdate />} />
      </Routes>
   );
}