import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { ClientsCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const ClientsHome = () => {

   const { isLoading, data } = useGetApiData('/clients');
   const [clients, setVehicles] = useState([]);


   useEffect(() => {
      if (!isLoading) {
         setVehicles(data.clients);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Clientes</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/clients/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {clients.length > 0 ? (
                     <div className="grid grid-cols-1 gap-5">
                        {clients.map((client) => (
                           <ClientsCard key={client.id} client={client} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay clientes disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}