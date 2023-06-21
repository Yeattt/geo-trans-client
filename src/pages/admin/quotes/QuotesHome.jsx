import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout, AdminNavbar, QuotesCard, CreateFormModal, AdminElementsCard, AdminSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const QuotesHome = () => {
   const { isLoading, data } = useGetApiData('/quotes');
   const [quotes, setQuotes] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setQuotes(data.quotes);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Cotizaciones" />

            <br />

            <AdminElementsCard module="Quotes" data={quotes} />

            <br />

            <AdminSearcher module="Quotes" />

            {/* // * IMPORTANTE: Prueba del modal para crear */}

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Quotes" />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                     <span className="text-lg font-bold text-purplePz">Lista de Cotizaciones</span>

                     <button
                        className="bg-primary transition hover:bg-primaryHover w-32 py-2 rounded-md font-bold text-white"
                        onClick={() => handleIsCreateModalActive(true)}
                     >
                        Añadir
                     </button>
                  </div>

                  <div className="max-h-[500px] overflow-y-scroll">
                     <table className="w-full text-sm">
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
                  </div>

                  <div className="flex items-center justify-center mt-5">

                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}