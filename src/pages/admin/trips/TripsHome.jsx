import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSubway } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { AdminLayout } from '../../../components/layouts';
import { TripsCard } from '../../../components/admin';
import { useGetApiData } from '../../../hooks';
import { CreateFormModal } from '../../../components';

export const TripsHome = () => {
   const { isLoading, data } = useGetApiData('/trips');
   const [trips, setTrips] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setTrips(data.trips);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <div className="bg-white min-w-full flex items-center justify-between px-6 py-1">
               <div className="flex flex-col justify-between px-6 py-1">
                  <span className="text-2xl text-purplePz font-bold">Trips</span>

                  <span className="text-xs font-bold">{`Admin > Trips`}</span>
               </div>

               <div className="flex items-center justify-center">
                  <span className="font-bold cursor-pointer">Manuela</span>

                  <div className="bg-purplePz w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ml-3">
                     <img
                        className="object-cover w-[95%] h-[95%] rounded-full"
                        src="https://i1.sndcdn.com/artworks-pfkZ3eJZ5aIGjxDP-lvIbog-t500x500.jpg"
                     />
                  </div>

                  <span className="ml-3 text-2xl text-red-600 font-bold cursor-pointer">
                     <MdExitToApp />
                  </span>
               </div>
            </div>

            <br />

            <div className="flex flex-col md:flex-row items-center justify-around">
               <div className="bg-gradient-to-r from-secondary to-secondaryHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <IoSubway className="text-3xl text-secondary" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{trips.length}</span>
                           <span className="text-sm text-white font-bold">Viajes registrados</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-gradient-to-r from-orangePz to-orangePzHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <IoSubway className="text-3xl text-orangePz" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{trips.length}</span>
                           <span className="text-sm text-white font-bold">Viajes registrados</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-gradient-to-r from-purplePz to-purplePzHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <IoSubway className="text-3xl text-purplePz" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{trips.length}</span>
                           <span className="text-sm text-white font-bold">Viajes registrados</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-row items-center justify-between px-2 py-2">
                  <div>
                     
                  </div>

                  <div className="bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition w-72 h-9 flex items-center overflow-hidden">
                     <input
                        className="bg-transparent w-[87%] h-full px-2 pl-2 py-2 pb-3 text-base"
                        type="text"
                        placeholder="Buscar viaje..."
                     />

                     <div className="bg-purplePz w-[13%] h-full border-l flex items-center justify-center cursor-pointer">
                        <BiSearchAlt className="text-xl text-white" />
                     </div>
                  </div>
               </div>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {
               isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Trips" />
            }

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-7 border-b">
                     <span className="text-lg font-bold text-purplePz">Lista de viajes</span>

                     <button
                        className="bg-purplePz w-32 py-2 rounded-md font-bold text-white"
                        onClick={() => handleIsCreateModalActive(true)}
                     >
                        Añadir
                     </button>
                  </div>

                  <table className="text-sm">
                     <thead>
                        <tr>
                           <th className="px-6 py-2 text-purplePz">ID</th>
                           <th className="px-6 py-2 text-purplePz">Cantidad</th>
                           <th className="px-6 py-2 text-purplePz">Codigo producto</th>
                           <th className="px-6 py-2 text-purplePz">Destino</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Empaque</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Naturaleza</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Numero remesa</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Origen</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Producto transportar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Saldo a pagar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Unidad de medida</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Valor a pagar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Tipo Viaje</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Fecha Viaje</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Cliente</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Vehiculo</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Conductor</th>
                           <th className="px-6 py-2 text-purplePz">Acciones</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           trips.map(trip => (
                              <TripsCard key={trip.id} trip={trip} />
                           ))
                        }
                     </tbody>
                  </table>

                  <div className="flex items-center justify-center mt-5">

                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}