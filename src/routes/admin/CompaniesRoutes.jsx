import { Routes, Route } from 'react-router-dom';

import { CompaniesHome, CompaniesInfo, CompaniesUpdate } from '../../pages/admin'

export const CompaniesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<CompaniesHome />}/>
         <Route path="/:id" element={<CompaniesInfo />} />
         <Route path="/update/:id" element={<CompaniesUpdate />} />
         {/* <Route path="/delete/:id" element={<VehiclesDelete />} /> */}
      </Routes>
   );
}