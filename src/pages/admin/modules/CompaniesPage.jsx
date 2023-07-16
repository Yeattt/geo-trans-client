import { useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, AdminSearcher, CompaniesCard, CreateFormModal, InfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { CompaniesInfoTable } from '../../../components/admin/modules/companies/CompaniesInfoTable';

export const CompaniesPage = () => {
   const { isLoading, data: { companies } } = useGetApiData('/companies');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Compañías" />

            <br />

            <AdminElementsCard module="Companies" data={companies} />

            <br />

            <AdminSearcher module="Companies" />

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Companies" />}

            <br />

            <div className="flex items-center justify-center">
               <CompaniesInfoTable companies={companies} handleIsCreateModalActive={handleIsCreateModalActive} />
            </div>
         </div>
      </AdminLayout>
   );
}