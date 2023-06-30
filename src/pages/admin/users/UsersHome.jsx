import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, UsersCard, CreateFormModal, SearchModal, AdminElementsCard, AdminSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const UsersHome = () => {
   const { isLoading, data } = useGetApiData('/users');
   const [users, setUsers] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setUsers(data.users);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Usuarios" />

            <br />

            <AdminElementsCard module="Users" data={users} />

            <br />

            <AdminSearcher module="Users" />

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Users" />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                     <span className="text-lg font-bold text-purplePz">Lista de Usuarios</span>

                     <button
                        className="bg-primary transition hover:bg-primaryHover w-32 py-2 rounded-md font-bold text-white"
                        onClick={() => handleIsCreateModalActive(true)}
                     >
                        Añadir
                     </button>
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
                              <th className="px-6 py-2 text-purplePz">Estado</th>
                              <th className="px-6 py-2 text-purplePz">Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              users.map(user => (
                                 <UsersCard key={user.id} user={user} />
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