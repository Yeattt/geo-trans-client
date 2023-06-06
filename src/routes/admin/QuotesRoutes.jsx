import { Routes, Route } from 'react-router-dom';

import { QuotesHome, QuotesInfo} from '../../pages/admin'

export const QuotesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<QuotesHome />}/>
         <Route path="/:id" element={<QuotesInfo />} />
         {/* <Route path="/update/:id" element={<QuotesUpdate />} /> */}
      </Routes>
   );
}