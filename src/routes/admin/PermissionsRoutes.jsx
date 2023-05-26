import { Routes, Route } from 'react-router-dom';

import { PermissionsHome, PermissionsCreate} from '../../pages/admin/';

export const PermissionsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PermissionsHome />} />
            <Route path="/create" element={<PermissionsCreate />} />
            {/* <Route path="/update/:id" element={<UsersUpdate />} />
            <Route path="/:id" element={<UsersInfo />} /> */}
        </Routes>
    )
}