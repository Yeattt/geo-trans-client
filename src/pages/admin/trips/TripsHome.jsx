import React from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";

export const TripsHome = () => {
const vehicles = [
    {id: 1, cantidad:'', codigoProducto:'',destino:'',empaque: '',naturaleza:'',
    numeroRemesa:'',origen:'',productoTransportar:'',saldoPagar:'',unidadMedida:'',valorPagar: '',},
];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Trips</h2>
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
                                 <div className="text-white">{trips.id}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Cantidad:</div>
                                 <div className="text-white">{trips.cantidad}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">codigoProducto:</div>
                                 <div className="text-white">{trips.codigoProducto}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Destino:</div>
                                 <div className="text-white">{trips.destino}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Empaque:</div>
                                 <div className="text-white">{trips.empaque}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">Naturaleza:</div>
                                 <div className="text-white">{trips.naturaleza}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">numeroRemesa:</div>
                                 <div className="text-white">{trips.numeroRemesa}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">origen:</div>
                                 <div className="text-white">{trips.origen}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">productoTransportar:</div>
                                 <div className="text-white">{trips.productoTransportar}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">saldoPagar:</div>
                                 <div className="text-white">{trips.saldoPagar}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">unidadMedida:</div>
                                 <div className="text-white">{trips.unidadMedida}</div>
                              </div>
                              <div className="flex-1">
                                 <div className="text-white font-bold">valorPagar:</div>
                                 <div className="text-white">{trips.valorPagar}</div>
                              </div>
                              <div>
                                 {/* Agrega aquí los botones de editar, eliminar y ver */}
                                 <Link to={`/admin/trips/update/${trips.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                       Editar
                                    </button>
                                 </Link>

                                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Eliminar
                                 </button>

                                 <Link to={`/admin/trips/${vehicle.id}`}>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                       Ver
                                    </button>
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay viajes disponibles.</p>
                  )}

                  <br />

                  <Link to="/admin/trips/create">
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