import { Routes, Route } from 'react-router-dom';

import { RoleCreate, RoleHome, RoleInfo, RoleUpdate } from '../../pages/admin/'

export const RoleRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<RoleHome />}/>
         <Route path="/:id" element={<RoleInfo />} />
         <Route path="/create" element={<RoleCreate />} />
         <Route path="/update/:id" element={<RoleUpdate />} />
      </Routes>
   );
}