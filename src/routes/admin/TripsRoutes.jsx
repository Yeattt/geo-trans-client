import { Routes, Route } from 'react-router-dom';

import { TripsCreate, TripsHome, TripsInfo, TripsUpdate } from '../../pages/admin'

export const TripsRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TripsHome />}/>
         <Route path="/:id" element={<TripsInfo />} />
         <Route path="/create" element={<TripsCreate />} />
         <Route path="/update/:id" element={<TripsUpdate />} />
      </Routes>
   );
}