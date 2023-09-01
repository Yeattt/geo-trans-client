import { useState } from 'react';

import { AdminElementsCard, AdminLayout, AdminNavbar, CompaniesSearcher, CreateFormModal } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { CompaniesInfoTable } from '../../../components/admin/modules/companies/CompaniesInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const CompaniesPage = () => {
   const { isLoading, data: { companies } } = useGetApiData('/companies');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || companies === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Compañías" />

            <br />

            <AdminElementsCard module="Companies" data={companies} />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
                  <CompaniesSearcher handleQueryResults={handleQueryResults} companies={companies} />
               </div>
            </div>

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Companies" />}

            <br />

            <div className="flex items-center justify-center">
               {companies && <CompaniesInfoTable companies={queryResults.length > 0 ? queryResults : companies} handleIsCreateModalActive={handleIsCreateModalActive} />}
            </div>
         </div>
      </AdminLayout>
   );
}