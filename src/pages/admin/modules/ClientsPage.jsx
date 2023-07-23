import { useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, ClientsSearcher, CreateFormModal } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { ClientsInfoTable } from '../../../components/admin/modules/clients/ClientsInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const ClientsPage = () => {
   const { isLoading, data: { clients } } = useGetApiData('/clients');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || clients === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Clientes" />

            <br />

            {isLoading ? (
               <>Loading...</>
            ) : (
               <>
                  <AdminElementsCard module="Clients" data={clients} />

                  <br />

                  <div className="flex items-center justify-center">
                     <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
                        <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                           <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                              <TbReportAnalytics />
                           </span>

                           <span className="text-white text-[15px] font-semibold">Generar informe</span>
                        </div>

                        <ClientsSearcher handleQueryResults={handleQueryResults} clients={clients} />
                     </div>
                  </div>

                  {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Clients" />}

                  <br />

                  <div className="flex items-center justify-center">
                     {clients && <ClientsInfoTable clients={queryResults.length > 0 ? queryResults : clients} handleIsCreateModalActive={handleIsCreateModalActive} />}
                  </div>
               </>
            )}
         </div>
      </AdminLayout>
   );
}