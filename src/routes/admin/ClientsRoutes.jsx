import { Routes, Route } from 'react-router-dom';

import { ClientsHome, ClientsUpdate } from '../../pages/admin/';

export const ClientsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ClientsHome />} />
            <Route path="/update/:id" element={<ClientsUpdate />} />
        </Routes>
    )
}