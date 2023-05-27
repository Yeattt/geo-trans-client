import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { VehiclesCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const VehiclesHome = () => {
   const { isLoading, data } = useGetApiData('/vehicles');
   const [vehicles, setVehicles] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setVehicles(data.vehicles);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Vehículos</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/vehicles/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {vehicles.length > 0 ? (
                     <div className="grid grid-cols-1 gap-5">
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