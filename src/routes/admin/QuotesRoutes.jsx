import { Routes, Route } from 'react-router-dom';

import { QuotesHome, QuotesUpdate } from '../../pages/admin'

export const QuotesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<QuotesHome />}/>
         <Route path="/update/:id" element={<QuotesUpdate />} />
      </Routes>
   );
}