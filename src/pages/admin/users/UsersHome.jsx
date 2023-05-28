import React from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";

export const UsersHome = () => {
   const users = [
      { id: 1, dni: 103, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:2 },
      { id: 2, dni: 104, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:2 },
      { id: 3, dni: 105, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:2 },
      
      // Agrega más usuarios si  necesario
   ];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Usuarios</h2>
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
                                 <div className="text-white font-bold">Dni:</div>
                                 <div className="text-white">{user.dni}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">edad:</div>
                                 <div className="text-white">{user.edad}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Email:</div>
                                 <div className="text-white">{user.email}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">RolId:</div>
                                 <div className="text-white">{user.rolId}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">CompanyId:</div>
                                 <div className="text-white">{user.companyId}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">vehicleId:</div>
                                 <div className="text-white">{user.vehicleId}</div>
                              </div>

                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <Link to={`/admin/users/update/${user.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>

                                 <Link to={`/admin/users/${user.id}`}>
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