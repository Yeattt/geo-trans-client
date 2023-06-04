import { Routes, Route } from 'react-router-dom';

import { PermissionsHome } from '../../pages/admin/';

export const PermissionsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PermissionsHome />} />
            {/* <Route path="/update/:id" element={<UsersUpdate />} />
            <Route path="/:id" element={<UsersInfo />} /> */}
        </Routes>
    )
}