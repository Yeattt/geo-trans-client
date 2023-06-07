import { Routes, Route } from 'react-router-dom';

import { VehiclesHome, VehiclesUpdate } from '../../pages/admin'

export const VehiclesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<VehiclesHome />}/>
         <Route path="/update/:id" element={<VehiclesUpdate />} />
         {/* <Route path="/delete/:id" element={<VehiclesDelete />} /> */}
      </Routes>
   );
}