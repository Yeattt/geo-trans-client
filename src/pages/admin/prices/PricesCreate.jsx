import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';
import { PricesCreateForm } from '../../../components';


export const PricesCreate = () => {

   const navigate = useNavigate();

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar Precio</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <PricesCreateForm />

                  <br />

                  <Link to="/admin/prices/create">
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onNavigateBack}
                     >
                        Volver
                     </button>
                  </Link>
               </div>


            </div>
         </div>
      </AdminLayout>
   );
}