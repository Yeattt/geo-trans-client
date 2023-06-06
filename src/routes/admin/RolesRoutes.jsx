import { Routes, Route } from 'react-router-dom';

import { RolesHome, RolesInfo, RolesUpdate } from '../../pages/admin/'

export const RolesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<RolesHome />}/>
         <Route path="/:id" element={<RolesInfo />} />
         <Route path="/update/:id" element={<RolesUpdate />} />
      </Routes>
   );
}