import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { QuotesCard } from '../../../components/admin/quotes/QuotesCard';
import { useGetApiData } from '../../../hooks';

export const QuotesHome = () => {
   const { isLoading, data } = useGetApiData('/quotes');
   const [quotes, setQuotes] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setQuotes(data.quotes);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Cotizaciones</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/quotes/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {quotes.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {quotes.map((quote) => (
                           <QuotesCard key={quote.id} quote={quote} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay cotizaciones disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}