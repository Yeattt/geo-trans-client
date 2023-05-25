import React from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";

export const ClientsHome = () => {
   const clients = [
      { id: 1, document: 103, name: 'Camilo Mejia', Business_name: 'CamiloMejiaexamplecom', phone: 301587 },
      { id: 2, document: 105, name: 'Carlos Cadavid', Business_name: 'Calichepmexamplecom', phone: 301587 },
      { id: 3, document: 104, name: 'Falio', Business_name: 'michaeljohnsonexamplecom', phone: 301587 },
      // Agrega más usuarios si  necesario
   ];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Clientes</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {clients.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {clients.map((client) => (
                           <div
                              key={client.id}
                              className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
                           >
                              <div className="flex-1">
                                 <div className="text-white font-bold">ID:</div>
                                 <div className="text-white">{client.id}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Documento:</div>
                                 <div className="text-white">{client.document}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Nombre:</div>
                                 <div className="text-white">{client.name}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Razon social:</div>
                                 <div className="text-white">{client.Business_name}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">phone:</div>
                                 <div className="text-white">{client.phone}</div>
                              </div>

                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <Link to={`/admin/clients/update/${client.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>

                                 <Link to={`/admin/clients/${client.id}`}>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                       Ver
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay vehículos disponibles.</p>
                  )}

                  <br />

                  <Link to="/admin/clients/create">
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Añadir Nuevo
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}