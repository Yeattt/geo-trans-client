import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, RolesCard, CreateFormModal, SearchModal, AdminElementsCard, AdminSearcher } from '../../components';
import { useGetApiData } from '../../hooks';

export const RolesHome = () => {
   const { isLoading, data } = useGetApiData('/roles');
   const [roles, setRoles] = useState([]);

   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setRoles(data.roles);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <AdminNavbar module="Roles" />

         <br />

         <AdminElementsCard module="Roles" data={roles} />

         <br />

         <AdminSearcher module="Roles" />

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Roles" />}

         <br />

         <div className="flex items-center justify-center">
            <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
               <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                  <span className="text-lg font-bold text-purplePz">Lista de Roles</span>

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
                           <th className="px-6 py-2 text-primary">ID</th>
                           <th className="px-6 py-2 text-primary">Nombre</th>
                           <th className="px-6 py-2 text-primary">Estado</th>
                           <th className="px-6 py-2 text-primary">Acciones</th>
                        </tr>
                     </thead>

                     <tbody>
                        {
                           roles.map(role => (
                              <RolesCard key={role.id} role={role} />
                           ))
                        }
                     </tbody>
                  </table>
               </div>

               <div className="flex items-center justify-center mt-5">
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}
