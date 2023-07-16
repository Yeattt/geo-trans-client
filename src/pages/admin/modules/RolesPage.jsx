import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, RolesCard, CreateFormModal, SearchModal, AdminElementsCard, AdminSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { RolesInfoTable } from '../../../components/admin/modules/roles/RolesInfoTable';

export const RolesPage = () => {
   const { isLoading, data: { roles } } = useGetApiData('/roles');

   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <AdminNavbar module="Roles" />

         <br />

         <AdminElementsCard module="Roles" data={roles} />

         <br />

         <AdminSearcher module="Roles" />

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Roles" />}

         <br />

         <div className="flex items-center justify-center">
            <RolesInfoTable roles={roles} handleIsCreateModalActive={handleIsCreateModalActive} />
         </div>
      </AdminLayout>
   );
}
