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
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
                  <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                     <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                        <TbReportAnalytics />
                     </span>

                     <span className="text-white text-[15px] font-semibold">Generar informe</span>
                  </div>

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