import { useState } from 'react';

import { TbReportAnalytics } from 'react-icons/tb';
import { MdContentPasteSearch } from 'react-icons/md';

import { SearchModal } from '../modals';

const moduleRefactorized = {
   AssignPermissions: 'permiso',
   Clients: 'cliente',
   Companies: 'compañía',
   Permissions: 'permiso',
   Quotes: 'cotización',
   Roles: 'rol',
   Trips: 'viaje',
   Users: 'usuario',
   UsersPending: 'usuario pendiente',
   Vehicles: 'vehículo',
   VehiclesType: 'tipo vehículo'
}

export const AdminSearcher = ({ module = '' }) => {
   const [query, setQuery] = useState('');
   const [isSearchModalActive, setIsSearchModalActive] = useState(false);

   const handleOnSearchSubmit = (e) => {
      e.preventDefault();

      setIsSearchModalActive(!isSearchModalActive);
   }

   const handleOnSearchInputChange = (e) => {
      setQuery(e.target.value);
   }

   const placeholderToShow = moduleRefactorized[module];

   return (
      <div className="flex items-center justify-center">
         <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
            <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
               <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                  <TbReportAnalytics />
               </span>

               <span className="text-white text-[15px] font-semibold">Generar informe</span>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para busquedas */}
            {isSearchModalActive && <SearchModal setIsSearchModalActive={setIsSearchModalActive} isSearchModalActive={isSearchModalActive} module={module} query={query} />}

            <form onSubmit={handleOnSearchSubmit}>
               <div className="bg-white rounded-full text-black border-2 border-gray-300 focus-within:border-secondaryHover transition w-72 h-10 flex items-center">
                  <input
                     className="bg-transparent rounded-full w-[87%] h-full px-4 pl-5 py-3 pb-3 text-[15px]"
                     type="text"
                     placeholder={`Buscar ${placeholderToShow}...`}
                     value={query}
                     onChange={handleOnSearchInputChange}
                  />

                  <div className="bg-secondary transition rounded-full hover:bg-secondaryHover w-[14%] mr-[-1px] h-[104%] border-l flex items-center justify-center cursor-pointer">
                     <MdContentPasteSearch
                        className="text-xl text-white"
                        onClick={handleOnSearchSubmit}
                     />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}