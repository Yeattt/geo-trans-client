import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, AdminSearcher, UsersInfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const UsersPage = () => {
   const { isLoading, data: { users } } = useGetApiData('/users');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <AdminNavbar module="Usuarios" />

         <br />

         <AdminElementsCard module="Users" data={users} />

         <br />

         <AdminSearcher module="Users" />

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Users" />}

         <br />

         <div className="flex items-center justify-center">
            <UsersInfoTable users={users} handleIsCreateModalActive={handleIsCreateModalActive} />
         </div>
      </AdminLayout>
   );
}