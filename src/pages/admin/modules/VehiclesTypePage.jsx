import React, { useState } from 'react';

import { AdminLayout, AdminNavbar, VehiclesTypeSearcher, VehiclesTypeInfoTable, CreateFormModal, AdminElementsCard } from '../../../components';
import { useGetApiData } from '../../../hooks'; import { TbReportAnalytics } from 'react-icons/tb';
;

export const VehiclesTypePage = () => {
   const { isLoading, data: { vehiclesType } } = useGetApiData('/trucks/types');
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || vehiclesType === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <AdminNavbar module="Tipo Vehículos" />

         <br />

         <AdminElementsCard module="VehiclesType" data={vehiclesType} />

         <br />

         <div className="flex items-center justify-center">
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
               <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                  <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                     <TbReportAnalytics />
                  </span>

                  <span className="text-white text-[15px] font-semibold">Generar informe</span>
               </div>

               <VehiclesTypeSearcher handleQueryResults={handleQueryResults} vehiclesType={vehiclesType} />
            </div>
         </div>

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="VehiclesType" />}

         <br />

         <div className="flex items-center justify-center">
            {vehiclesType && <VehiclesTypeInfoTable vehiclesType={queryResults.length > 0 ? queryResults : vehiclesType} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
}