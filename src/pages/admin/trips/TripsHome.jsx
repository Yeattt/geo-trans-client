import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';
import { TripsCard } from '../../../components/admin';
import { useGetApiData } from '../../../hooks';

export const TripsHome = () => {
   const { isLoading, data } = useGetApiData('/trips');
   const [trips, setTrips] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setTrips(data.trips);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Viajes</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/trips/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {trips.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {trips.map((trip) => (
                           <TripsCard key={trip.id} trip={trip} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay viajes disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}