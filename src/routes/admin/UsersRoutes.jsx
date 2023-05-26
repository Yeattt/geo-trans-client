import { Routes, Route } from 'react-router-dom';

import { UsersHome, UsersCreate, UsersInfo, UsersUpdate} from '../../pages/admin/';

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome />} />
            <Route path="/create" element={<UsersCreate />} />
            <Route path="/update/:id" element={<UsersUpdate />} />
            <Route path="/:id" element={<UsersInfo />} />
        </Routes>
    )
}