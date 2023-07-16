import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, PermissionsCard, CreateFormModal, AdminElementsCard, AdminSearcher, InfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { PermissionsInfoTable } from '../../../components/admin/modules/permissions/PermissionsInfoTable';

export const PermissionsPage = () => {
   const { isLoading, data: { permissions } } = useGetApiData('/permissions');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Permisos" />

            <br />

            <AdminElementsCard module="Permissions" data={permissions} />

            <br />

            <AdminSearcher module="Permissions" />

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Permissions" />}

            <br />

            <div className="flex items-center justify-center">
               <PermissionsInfoTable permissions={permissions} handleIsCreateModalActive={handleIsCreateModalActive} />
            </div>
         </div>
      </AdminLayout>
   );
}