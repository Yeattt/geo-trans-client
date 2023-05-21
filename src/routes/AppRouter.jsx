import { Route, Routes } from 'react-router-dom';

import { AdminRoutes } from './';
import { HomePage } from '../pages/'

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/" element={<HomePage />} />
         </Routes> 
      </>
   );
}