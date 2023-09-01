import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, PrivilegesSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { PrivilegesInfoTable } from '../../../components/admin/modules/privileges/PrivilegesInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const PrivilegesPage = () => {
   const { isLoading, data: { privileges } } = useGetApiData('/privileges');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || privileges === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Privileges" />

            <br />

            <AdminElementsCard module="Privileges" data={privileges} />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
                  <PrivilegesSearcher handleQueryResults={handleQueryResults} privileges={privileges} />
               </div>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Privileges" />}

            <br />

            <div className="flex items-center justify-center">
               {privileges && <PrivilegesInfoTable privileges={queryResults.length > 0 ? queryResults : privileges} handleIsCreateModalActive={handleIsCreateModalActive} />}
            </div>
         </div>
      </AdminLayout>
   );
}