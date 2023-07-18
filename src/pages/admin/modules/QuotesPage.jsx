import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout, AdminNavbar, QuotesCard, CreateFormModal, AdminElementsCard, AdminSearcher, InfoTable } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { QuotesInfoTable } from '../../../components/admin/modules/quotes/QuotesInfoTable';

export const QuotesPage = () => {
   const { isLoading, data: { quotes } } = useGetApiData('/quotes');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Cotizaciones" />

            <br />

            <AdminElementsCard module="Quotes" data={quotes} />

            <br />

            <AdminSearcher module="Quotes" />

            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Quotes" />}

            <br />

            <div className="flex items-center justify-center">
               {quotes && <QuotesInfoTable quotes={quotes} handleIsCreateModalActive={handleIsCreateModalActive} />}
            </div>
         </div>
      </AdminLayout>
   );
}