import React from 'react';

import { AdminLayout } from "../../components/layouts";

export const Dashboard = () => {
   const users = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com', avatarUrl: 'https://example.com/avatar1.jpg' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', avatarUrl: 'https://example.com/avatar2.jpg' },
      { id: 3, name: 'Michael Johnson', email: 'michaeljohnson@example.com', avatarUrl: 'https://example.com/avatar3.jpg' },
      // Agrega más usuarios si es necesario
   ];

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Usuarios</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {users.length > 0 ? (
                     <div className="grid grid-cols-4 gap-4">
                        {/* Encabezados */}
                        <div className="font-bold text-white">ID</div>
                        <div className="font-bold text-white">Nombre</div>
                        <div className="font-bold text-white">Email</div>
                        <div className="font-bold text-white">Acciones</div>

                        {/* Valores */}
                        {users.map((user) => (
                           <React.Fragment key={user.id}>
                              <div className="text-white">{user.id}</div>
                              <div className="text-white">{user.name}</div>
                              <div className="text-white">{user.email}</div>
                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Editar
                                 </button>
                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>
                                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Ver
                                 </button>
                              </div>
                           </React.Fragment>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay usuarios disponibles.</p>
                  )}
               </div>
            </div>
         </div>

      </AdminLayout>
   );
};