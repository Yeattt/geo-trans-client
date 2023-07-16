import React, { useEffect, useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, PendingCard, SearchModal, UsersPendingInfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const UsersPendingPage = () => {
   const { isLoading, data: { users } } = useGetApiData('/users');

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <AdminNavbar module="Usuarios Pendientes" />

         <br />

         <AdminElementsCard module="Users" data={users} />

         <br />

         <AdminSearcher module="UsersPending" />

         <br />

         <div className="flex items-center justify-center">
            <UsersPendingInfoTable users={users} />
         </div>
      </AdminLayout>
   );
}