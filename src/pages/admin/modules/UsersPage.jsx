import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, UsersInfoTable, UsersSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { TbReportAnalytics } from 'react-icons/tb';

export const UsersPage = () => {
   const { isLoading, data: { users } } = useGetApiData('/users');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || users === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <AdminNavbar module="Usuarios" />

         <br />

         <AdminElementsCard module="Users" data={users} />

         <br />

         <div className="flex items-center justify-center">
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
               <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                  <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                     <TbReportAnalytics />
                  </span>

                  <span className="text-white text-[15px] font-semibold">Generar informe</span>
               </div>

               <UsersSearcher handleQueryResults={handleQueryResults} users={users} />
            </div>
         </div>

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Users" />}

         <br />

         <div className="flex items-center justify-center">
            {users && <UsersInfoTable users={queryResults.length > 0 ? queryResults : users} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
}