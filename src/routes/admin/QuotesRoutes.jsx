import { Routes, Route } from 'react-router-dom';

import { QuotesCreate, QuotesHome, QuotesInfo, QuotesUpdate } from '../../pages/admin'

export const QuotesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<QuotesHome />}/>
         <Route path="/:id" element={<QuotesInfo />} />
         <Route path="/create" element={<QuotesCreate />} />
         <Route path="/update/:id" element={<QuotesUpdate />} />
      </Routes>
   );
}