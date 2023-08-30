import { useParams } from 'react-router-dom';
import { AdminLayout, AdminNavbar, QuotesUpdate } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { useEffect, useState } from 'react';

export const QuotesUpdatePage = () => {
const params= useParams();
   const { isLoading, data: quote} = useGetApiData(`quotes/${params.id}`);

if (isLoading || quote === undefined) {
    return <AdminLayout>Loading...</AdminLayout>;
 }
  return (
    <AdminLayout>
      <AdminNavbar module="Cotizaciones" />

      <br />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20">
                <QuotesUpdate moduleInfo={quote.quote}/>
        
      </div>
    </AdminLayout>
  )
}