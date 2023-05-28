import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from "../../../components/layouts";
import { CompaniesCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const CompaniesHome = () => {
   const { isLoading, data } = useGetApiData('/companies');
   const [companies, setCompanies] = useState([]);

   useEffect(()=> {
      if(!isLoading){
         setCompanies(data.companies);
      }
   }, [isLoading, data]);

   // TODO: make the HTTP request to get all the information

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Compañias</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
                  <Link to="/admin/companies/create">
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Añadir Nuevo
                     </button>
                  </Link>

               <div className="p-6">
                  {companies.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {companies.map((company) => (
                           <CompaniesCard key={company.id} company={company} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay compañias disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}