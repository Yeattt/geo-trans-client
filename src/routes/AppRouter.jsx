import { Route, Routes } from 'react-router-dom';

import { AdminRoutes } from './';
import { HomePage } from '../pages/'
import { AuthRoutes } from './auth';

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/" element={<HomePage />} />
         </Routes> 
      </>
   );
}