import React, { useState, useEffect } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, RolesSearcher } from '../../../components';
import { useGetApiData, useRolesStore } from '../../../hooks';
import { RolesInfoTable } from '../../../components/admin/modules/roles/RolesInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const RolesPage = () => {
   const { getRoles, roles, isLoading } = useRolesStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   useEffect(() => {
      getRoles();
   }, []);

   if (isLoading || roles === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <AdminNavbar module="Roles" />

         <br />

         <AdminElementsCard module="Roles" data={roles} />

         <br />

         <div className="flex items-center justify-center">
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
               <RolesSearcher handleQueryResults={handleQueryResults} roles={roles} />
            </div>
         </div>

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Roles" />}

         <br />

         <div className="flex items-center justify-center">
            {roles && <RolesInfoTable roles={queryResults.length > 0 ? queryResults : roles} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
}
