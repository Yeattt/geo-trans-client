import { Routes, Route } from 'react-router-dom';

import { UsersHome, UsersUpdate} from '../../pages/admin/';

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome />} />
            <Route path="/update/:id" element={<UsersUpdate />} />
        </Routes>
    )
}