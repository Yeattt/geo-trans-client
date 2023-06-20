import { Routes, Route } from 'react-router-dom';

import { AssignPermissionsHome, AssignPermissionsUpdate } from '../../pages/admin'

export const AssignPermissionsRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<AssignPermissionsHome />}/>
         <Route path="/update/:id" element={<AssignPermissionsUpdate />} />
         {/* <Route path="/delete/:id" element={<VehiclesDelete />} /> */}
      </Routes>
   );
}