import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminRoutes } from './';
import { AuthRoutes } from './auth';
import { HomePage } from '../pages/'
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
   const { status, checkAuthToken } = useAuthStore();

   useEffect(() => {
      checkAuthToken();
   }, []);

   if (status === 'checking') {
      return (
         <h3>Loading...</h3>
      )
   }

   return (
      <Routes>
         {
            (status === 'not-authenticated')
               ? (
                  <>
                     <Route path="/auth/*" element={<AuthRoutes />} />
                     <Route path="/*" element={<Navigate to="/auth/signin" />} />
                  </>
               )
               : (
                  <>
                     <Route path="/admin/*" element={<AdminRoutes />} />
                     <Route path="/*" element={<Navigate to="/admin/users" />} />
                  </>
               )
         }

         <Route path="/" element={<HomePage />} />
      </Routes>
   );
}