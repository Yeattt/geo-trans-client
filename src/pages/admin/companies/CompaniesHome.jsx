import React, { useEffect, useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, CompaniesCard, CreateFormModal } from "../../../components";
import { useGetApiData } from '../../../hooks';

export const CompaniesHome = () => {
   const { isLoading, data } = useGetApiData('/companies');
   const [companies, setCompanies] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setCompanies(data.companies);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Compañías" />

            <br />

            <AdminElementsCard module="Companies" data={companies} />

            <br />

            <AdminSearcher module="Quotes" />

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Companies" />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
                     <span className="text-lg font-bold text-purplePz">Lista de Compañias</span>

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
                              <th className="px-6 py-2 text-purplePz">Nit</th>
                              <th className="px-6 py-2 text-purplePz">Razon Social</th>
                              <th className="px-6 py-2 text-purplePz">Nombre Empresa</th>
                              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Telefono</th>
                              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Dueño Poliza</th>
                              <th className="px-6 py-2 text-purplePz">Estado</th>
                              <th className="px-6 py-2 text-purplePz">Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              companies.map(company => (
                                 <CompaniesCard key={company.id} company={company} />
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