import { Routes, Route } from 'react-router-dom';

import { RolesHome, RolesUpdate } from '../../pages/admin/'

export const RolesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<RolesHome />}/>
         <Route path="/update/:id" element={<RolesUpdate />} />
      </Routes>
   );
}