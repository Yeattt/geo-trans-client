import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout, AdminNavbar, QuotesCard, CreateFormModal, AdminElementsCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const QuotesHome = () => {
   const { isLoading, data } = useGetApiData('/quotes');
   const [query, setQuery] = useState('');
   const [quotes, setQuotes] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);
   const [isSearchModalActive, setIsSearchModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setQuotes(data.quotes);
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
            <AdminNavbar module="Cotizaciones" />

            <br />

            <AdminElementsCard module="Quotes" data={quotes} />

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
                           placeholder="Buscar citas..."
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

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Quotes" />}
            {isSearchModalActive && <SearchModal setIsSearchModalActive={setIsSearchModalActive} isSearchModalActive={isSearchModalActive} module="Quotes" query={query} />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-7 border-b">
                     <span className="text-lg font-bold text-purplePz">Lista de Cotizaciones</span>

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
                           <th className="px-6 py-2 text-purplePz">Cod. Cotizacion</th>
                           <th className="px-6 py-2 text-purplePz">Cantidad</th>
                           <th className="px-6 py-2 text-purplePz">Cod. Producto</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Destino</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Empaque</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Naturaleza</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Nro. Remesa</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Origen</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Pdto. Transportar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Sdo. Pagar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Und. Medida</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Vlr. Pagar</th>
                           <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">User Id</th>
                           <th className="px-6 py-2 text-purplePz">Estado</th>
                           <th className="px-6 py-2 text-purplePz">Acciones</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           quotes.map(quote => (
                              <QuotesCard key={quote.id} quote={quote} />
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