import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const TripsInfo = () => {
   const trips = [
    {id: 1, cantidad:'', codigoProducto:'',destino:'',empaque: '',naturaleza:'',
    numeroRemesa:'',origen:'',productoTransportar:'',saldoPagar:'',unidadMedida:'',valorPagar: '',},
   ];
   const [currentTrips, setCurrentTrips] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const trips = trips.find((trips) => trips.id === parseInt(id));

      if (!trips) {
         <Navigate to="/admin/trips" />
      }

      setCurrentTrips(trips);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles del viaje</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentTrips.id}</div>

                     <div className="font-bold text-white">Cantidad:</div>
                     <div className="text-white">{currentTrips.cantidad}</div>

                     <div className="font-bold text-white">codigoProducto:</div>
                     <div className="text-white">{currentTrips.codigoProducto}</div>

                     <div className="font-bold text-white">Destino:</div>
                     <div className="text-white">{currentTrips.destino}</div>

                     <div className="font-bold text-white">Empaque:</div>
                     <div className="text-white">{currentTrips.empaque}</div>

                     <div className="font-bold text-white">Naturaleza:</div>
                     <div className="text-white">{currentTrips.naturaleza}</div>

                     <div className="font-bold text-white">numeroRemesa:</div>
                     <div className="text-white">{currentTrips.numeroRemesa}</div>

                     <div className="font-bold text-white">Origen:</div>
                     <div className="text-white">{currentTrips.origen}</div>

                     <div className="font-bold text-white">productoTransportar:</div>
                     <div className="text-white">{currentTrips.productoTransportar}</div>

                     <div className="font-bold text-white">saldoPagar:</div>
                     <div className="text-white">{currentTrips.saldoPagar}</div>

                     <div className="font-bold text-white">unidadMedida:</div>
                     <div className="text-white">{currentTrips.unidadMedida}</div>

                     <div className="font-bold text-white">valorPagar:</div>
                     <div className="text-white">{currentTrips.valorPagar}</div>
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