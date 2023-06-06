import React from 'react';

import { AdminLayout } from "../../components/layouts";

export const Dashboard = () => {
   const users = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
      { id: 3, name: 'Michael Johnson', email: 'michaeljohnson@example.com' },
      // Agrega más usuarios si es necesario
   ];

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Vehículos</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {users.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {users.map((user) => (
                           <div
                              key={user.id}
                              className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
                           >
                              <div className="flex-1">
                                 <div className="text-white font-bold">ID:</div>
                                 <div className="text-white">{user.id}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Nombre:</div>
                                 <div className="text-white">{user.name}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Email:</div>
                                 <div className="text-white">{user.email}</div>
                              </div>
                              <div>
                                 <Link to={`/admin/user/update/${user.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>
                                 
                                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Ver
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay vehículos disponibles.</p>
                  )}

                  <br />

                  <Link to="/admin/user/create">
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Añadir Nuevo
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
};