import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { VehiclesCreateForm } from '../../../components';

export const VehiclesCreate = () => {
   const navigate = useNavigate();

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar Vehículo</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <VehiclesCreateForm />

                  <br />

                  <Link to="/admin/vehicles/create">
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