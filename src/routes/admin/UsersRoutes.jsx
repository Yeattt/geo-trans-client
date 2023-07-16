import { Routes, Route } from 'react-router-dom';

import { UsersPage, UsersPendingPage } from '../../pages';

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/allow" element={<UsersPendingPage />} />
            {/* <Route path="/update/:id" element={<UsersUpdate />} /> */}
        </Routes>
    )
}