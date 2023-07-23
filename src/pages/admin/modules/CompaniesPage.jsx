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
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
                  <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                     <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                        <TbReportAnalytics />
                     </span>

                     <span className="text-white text-[15px] font-semibold">Generar informe</span>
                  </div>

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