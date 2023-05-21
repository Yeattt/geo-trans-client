import { Routes, Route } from 'react-router-dom';

import { VehiclesCreate, VehiclesHome, VehiclesInfo, VehiclesUpdate } from '../../pages/admin'

export const VehiclesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<VehiclesHome />}/>
         <Route path="/:id" element={<VehiclesInfo />} />
         <Route path="/create" element={<VehiclesCreate />} />
         <Route path="/update/:id" element={<VehiclesUpdate />} />
         {/* <Route path="/delete/:id" element={<VehiclesDelete />} /> */}
      </Routes>
   );
}