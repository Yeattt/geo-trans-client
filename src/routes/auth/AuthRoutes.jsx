import { Routes, Route } from 'react-router-dom';

import { SignInPage, SignUpPage } from '../../pages';

export const AuthRoutes = () => {
   return (
      <Routes>
         <Route path="/signin" element={<SignInPage />} />
         {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
   );
}