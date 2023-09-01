import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, PermissionsSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { PermissionsInfoTable } from '../../../components/admin/modules/permissions/PermissionsInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const PermissionsPage = () => {
   const { isLoading, data: { permissions } } = useGetApiData('/permissions');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || permissions === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Permisos" />

            <br />

            <AdminElementsCard module="Permissions" data={permissions} />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
                  <PermissionsSearcher handleQueryResults={handleQueryResults} permissions={permissions} />
               </div>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Permissions" />}

            <br />

            <div className="flex items-center justify-center">
               {permissions && <PermissionsInfoTable permissions={queryResults.length > 0 ? queryResults : permissions} handleIsCreateModalActive={handleIsCreateModalActive} />}
            </div>
         </div>
      </AdminLayout>
   );
}