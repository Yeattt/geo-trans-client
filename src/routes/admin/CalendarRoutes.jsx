import { Route, Routes } from 'react-router-dom';

import { CalendarPage } from '../../pages/admin';

export const CalendarRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<CalendarPage />} />
      </Routes>
   )
}