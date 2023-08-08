import { Routes, Route } from 'react-router-dom';

import { SignInPage, SignUpPage, SendEmailPage, ForgotPasswordPage } from '../../pages';

export const AuthRoutes = () => {
   return (
      <Routes>
         <Route path="/signin" element={<SignInPage />} />
         <Route path="/sendEmail" element={<SendEmailPage />} />
         <Route path="/recovery/:id/:token" element={<ForgotPasswordPage />} />
         {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
   );
}