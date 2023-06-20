import { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout, TripsCard, CreateFormModal, SearchModal, AdminNavbar, AdminElementsCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const TripsHome = () => {
   const { isLoading, data } = useGetApiData('/trips');
   const [query, setQuery] = useState('');
   const [trips, setTrips] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);
   const [isSearchModalActive, setIsSearchModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setTrips(data.trips);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleOnSearchSubmit = (e) => {
      e.preventDefault();

      setIsSearchModalActive(!isSearchModalActive);
   }

   const handleOnSearchInputChange = (e) => {
      setQuery(e.target.value);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Viajes" />

            <br />

            <AdminElementsCard module="Trips" data={trips} />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-row items-center justify-between px-2 py-2">
                  <div>

                  </div>

                  <form onSubmit={handleOnSearchSubmit}>
                     <div className="bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition w-72 h-9 flex items-center overflow-hidden">
                        <input
                           className="bg-transparent w-[87%] h-full px-2 pl-2 py-2 pb-3 text-base"
                           type="text"
                           placeholder="Buscar viaje por código producto..."
                           value={query}
                           onChange={handleOnSearchInputChange}
                        />

                        <div className="bg-purplePz w-[13%] h-full border-l flex items-center justify-center cursor-pointer">
                           <BiSearchAlt
                              className="text-xl text-white"
                              onClick={handleOnSearchSubmit}
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Trips" />}
            {isSearchModalActive && <SearchModal setIsSearchModalActive={setIsSearchModalActive} isSearchModalActive={isSearchModalActive} module="Trips" query={query} />}

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