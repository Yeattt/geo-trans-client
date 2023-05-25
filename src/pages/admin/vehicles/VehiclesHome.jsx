import React from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { VehiclesCard } from '../../../components';

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
               <Link to="/admin/vehicles/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {vehicles.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {vehicles.map((vehicle) => (
                           <VehiclesCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay vehículos disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}