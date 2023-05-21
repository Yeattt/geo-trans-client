import React from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";

export const VehiclesHome = () => {
   const vehicles = [
      { id: 1, make: 'Lamborghini', model: 'Aventador', year: 2020, color: 'Greem' },
      { id: 2, make: 'Ferrari', model: 'F8', year: 2019, color: 'Red' },
      { id: 3, make: 'Bugatti', model: 'Chiron', year: 2022, color: 'Black' },
   ];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Vehículos</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {vehicles.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {vehicles.map((vehicle) => (
                           <div
                              key={vehicle.id}
                              className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
                           >
                              <div className="flex-1">
                                 <div className="text-white font-bold">ID:</div>
                                 <div className="text-white">{vehicle.id}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Marca:</div>
                                 <div className="text-white">{vehicle.make}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Modelo:</div>
                                 <div className="text-white">{vehicle.model}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Año:</div>
                                 <div className="text-white">{vehicle.year}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Color:</div>
                                 <div className="text-white">{vehicle.color}</div>
                              </div>
                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <Link to={`/admin/vehicles/update/${vehicle.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>

                                 <Link to={`/admin/vehicles/${vehicle.id}`}>
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

                  <Link to="/admin/vehicles/create">
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