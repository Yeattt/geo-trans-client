import { Routes, Route } from 'react-router-dom';

import { UsersHome, UsersInfo, UsersUpdate} from '../../pages/admin/';

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome />} />
            <Route path="/update/:id" element={<UsersUpdate />} />
            <Route path="/:id" element={<UsersInfo />} />
        </Routes>
    )
}