import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, ClientsCard, CreateFormModal } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const ClientsHome = () => {
   const { isLoading, data } = useGetApiData('/clients');
   const [clients, setClients] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setClients(data.clients);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Clientes" />

            <br />

            <AdminElementsCard module="Clients" data={clients} />

            <br />

            <AdminSearcher module="Clients" />

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Clients" />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                     <span className="text-lg font-bold text-purplePz">Lista de clientes</span>

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
                              <th className="px-6 py-2 text-purplePz">Nombre</th>
                              <th className="px-6 py-2 text-purplePz">Razon Social</th>
                              <th className="px-6 py-2 text-purplePz">Telefono</th>
                              <th className="px-6 py-2 text-purplePz">Estado</th>
                              <th className="px-6 py-2 text-purplePz">Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              clients.map(client => (
                                 <ClientsCard key={client.id} client={client} />
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