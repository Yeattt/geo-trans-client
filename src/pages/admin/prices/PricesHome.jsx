import React from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { PricesCard } from '../../../components/prices/PricesCard';

export const PricesHome = () => {
   const prices = [
      { id: 1, codigoProducto: 'John Do', empaque: 'johndoe@example.com' },
      { id: 2, codigoProducto: 'Jane Smith', empaque: 'janesmith@example.com' },
      { id: 3, codigoProducto: 'Michael Johnson', empaque: 'michaeljohnson@example.com' },
   ];

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Precios</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/prices/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {prices.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {prices.map((price) => (
                           <PricesCard key={price.id} price={price} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay precios disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}