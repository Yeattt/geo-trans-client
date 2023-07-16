import { useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, ClientsCard, CreateFormModal, InfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { ClientsInfoTable } from '../../../components/admin/modules/clients/ClientsInfoTable';

export const ClientsPage = () => {
   const { isLoading, data: { clients } } = useGetApiData('/clients');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
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

                  <AdminSearcher module="Clients" />

                  {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Clients" />}

                  <br />

                  <div className="flex items-center justify-center">
                     <ClientsInfoTable clients={clients} handleIsCreateModalActive={handleIsCreateModalActive} />
                  </div>
               </>
            )}
         </div>
      </AdminLayout>
   );
}