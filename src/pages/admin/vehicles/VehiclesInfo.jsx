import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const VehiclesInfo = () => {
   const vehicles = [
      { id: 1, make: 'Lamborghini', model: 'Aventador', year: 2020, color: 'Greem' },
      { id: 2, make: 'Ferrari', model: 'F8', year: 2019, color: 'Red' },
      { id: 3, make: 'Bugatti', model: 'Chiron', year: 2022, color: 'Black' },
   ];
   const [currentVehicle, setCurrentVehicle] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const vehicle = vehicles.find((vehicle) => vehicle.id === parseInt(id));

      if (!vehicle) {
         <Navigate to="/admin/vehicles" />
      }

      setCurrentVehicle(vehicle);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles del Vehículo</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentVehicle.id}</div>

                     <div className="font-bold text-white">Marca:</div>
                     <div className="text-white">{currentVehicle.make}</div>

                     <div className="font-bold text-white">Modelo:</div>
                     <div className="text-white">{currentVehicle.model}</div>

                     <div className="font-bold text-white">Año:</div>
                     <div className="text-white">{currentVehicle.year}</div>

                     <div className="font-bold text-white">Color:</div>
                     <div className="text-white">{currentVehicle.color}</div>
                  </div>

                  <br />

                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                     onClick={onNavigateBack}
                  >
                     Volver
                  </button>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}