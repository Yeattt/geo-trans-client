import { Routes, Route } from 'react-router-dom';

import { UsersHome, UsersPending} from '../../pages/admin/';

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome />} />
            <Route path="/allow" element={<UsersPending />} />
            {/* <Route path="/update/:id" element={<UsersUpdate />} /> */}
        </Routes>
    )
}