import { useEffect, useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, ClientsSearcher, CreateFormModal } from '../../../components';
import { useClientsStore, useGetApiData } from '../../../hooks';
import { ClientsInfoTable } from '../../../components/admin/modules/clients/ClientsInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const ClientsPage = () => {
   const { getClients, clients, isLoading } = useClientsStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      getClients();
   }, []);

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
                     <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
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