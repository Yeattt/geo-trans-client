import React from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";

export const PermissionsHome = () => {
   const permissions = [
      { id: 1, name:'Registrar'},
      { id: 2, name:'Registrar'},
     
   ];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Permisos</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {permissions.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {permissions.map((permission) => (
                           <div
                              key={permission.id}
                              className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
                           >
                              <div className="flex-1">
                                 <div className="text-white font-bold">Id:</div>
                                 <div className="text-white">{permission.id}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Nombre:</div>
                                 <div className="text-white">{permission.make}</div>
                              </div>                              
                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <Link to={`/admin/permissions/update/${permission.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>

                                 <Link to={`/admin/permissions/${permission.id}`}>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                       Ver
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No existen permisos disponibles.</p>
                  )}

                  <br />

                  <Link to="/admin/permissions/create">
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