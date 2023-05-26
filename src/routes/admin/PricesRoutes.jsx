import { Routes, Route } from 'react-router-dom';

import { PricesCreate, PricesHome, PricesInfo, PricesUpdate } from '../../pages/admin'

export const PricesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<PricesHome />}/>
         <Route path="/:id" element={<PricesInfo />} />
         <Route path="/create" element={<PricesCreate />} />
         <Route path="/update/:id" element={<PricesUpdate />} />
         {/* <Route path="/delete/:id" element={<PricesDelete />} /> */}
      </Routes>
   );
}