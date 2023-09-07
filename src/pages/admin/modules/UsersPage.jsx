import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, UsersInfoTable, UsersSearcher } from '../../../components';
import { useGetApiData, useUsersStore } from '../../../hooks';
import { TbReportAnalytics } from 'react-icons/tb';

export const UsersPage = () => {
   const { getUsers, users, isLoading } = useUsersStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      getUsers();
   }, []);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   const handleRefreshData = () => {
      refreshData();
   }

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
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
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