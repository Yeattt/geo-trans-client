import React, {useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, QuotesSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { QuotesInfoTable } from '../../../components/admin/modules/quotes/QuotesInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';

export const QuotesPage = () => {
   const { isLoading, data: { quotes } } = useGetApiData('/quotes');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || quotes === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Cotizaciones" />

            <br />

            <AdminElementsCard module="Quotes" data={quotes} />

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
                  <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                     <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                        <TbReportAnalytics />
                     </span>

                     <span className="text-white text-[15px] font-semibold">Generar informe</span>
                  </div>

                  <QuotesSearcher handleQueryResults={handleQueryResults} quotes={quotes} />
               </div>
            </div>

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Quotes" />}

            <br />

            <div className="flex items-center justify-center">
               {quotes && <QuotesInfoTable quotes={queryResults.length > 0 ? queryResults : quotes} handleIsCreateModalActive={handleIsCreateModalActive} />}
            </div>
         </div>
      </AdminLayout>
   );
}