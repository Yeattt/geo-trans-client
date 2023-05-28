import { Routes, Route } from 'react-router-dom';

import { RolesCreate, RolesHome, RolesInfo, RolesUpdate } from '../../pages/admin/'

export const RolesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<RolesHome />}/>
         <Route path="/:id" element={<RolesInfo />} />
         <Route path="/create" element={<RolesCreate />} />
         <Route path="/update/:id" element={<RolesUpdate />} />
      </Routes>
   );
}