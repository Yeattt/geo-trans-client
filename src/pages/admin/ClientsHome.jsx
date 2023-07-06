import { useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, ClientsCard, CreateFormModal, InfoTable } from '../../components';
import { useGetApiData } from '../../hooks';

export const ClientsHome = () => {
   const { isLoading, data: { clients } } = useGetApiData('/clients');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }   

   if (isLoading) return <h3>Loading</h3>

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Clientes" />

            <br />

            <>
               <AdminElementsCard module="Clients" data={clients} />

               <br />

               <AdminSearcher module="Clients" />

               {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Clients" />}

               <br />

               <div className="flex items-center justify-center">
                  <InfoTable module="Clients" data={clients} />
               </div>
            </>
         </div>
      </AdminLayout>
   );
}