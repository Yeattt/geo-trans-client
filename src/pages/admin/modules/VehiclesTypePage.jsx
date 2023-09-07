import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, VehiclesTypeSearcher, VehiclesTypeInfoTable, CreateFormModal, AdminElementsCard } from '../../../components';
import { useGetApiData, useVehiclesTypesStore } from '../../../hooks'; import { TbReportAnalytics } from 'react-icons/tb';
;

export const VehiclesTypePage = () => {
   const { getVehiclesTypes, vehiclesTypes: vehiclesType, isLoading } = useVehiclesTypesStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      getVehiclesTypes();
   }, []);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   const handleRefreshData = () => {
      refreshData();
   }

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
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
               <VehiclesTypeSearcher handleQueryResults={handleQueryResults} vehiclesType={vehiclesType} />
            </div>
         </div>

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="VehiclesType" handleRefreshData={handleRefreshData} />}

         <br />

         <div className="flex items-center justify-center">
            {vehiclesType && <VehiclesTypeInfoTable vehiclesType={queryResults.length > 0 ? queryResults : vehiclesType} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
}