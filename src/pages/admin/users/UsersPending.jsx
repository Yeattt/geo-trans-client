import React, { useEffect, useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, PendingCard, SearchModal } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const UsersPending = () => {
   const { isLoading, data } = useGetApiData('/users');
   const [users, setUsers] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setUsers(data.users)
      }
   }, [isLoading, data]);


   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Usuarios Pendientes" />

            <br />

            <AdminElementsCard module="Users" data={users} />

            <br />

            <AdminSearcher module="UsersPending" />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                     <span className="text-lg font-bold text-purplePz">Lista de Usuarios por confirmar</span>
                  </div>

                  <div className="max-h-[500px] overflow-y-scroll">
                     <table className="w-full text-sm">
                        <thead>
                           <tr>
                              <th className="px-6 py-2 text-purplePz">ID</th>
                              <th className="px-6 py-2 text-purplePz">Documento</th>
                              <th className="px-6 py-2 text-purplePz">Edad</th>
                              <th className="px-6 py-2 text-purplePz">Email</th>
                              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Rol</th>
                              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Compañía</th>
                              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Vehículo</th>
                              <th className="px-6 py-2 text-purplePz">Registro</th>
                              <th className="px-6 py-2 text-purplePz">Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              users.map(user => (
                                 <PendingCard key={user.id} user={user} />
                              ))
                           }
                        </tbody>
                     </table>
                  </div>

                  <div className="flex items-center justify-center mt-5">
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}