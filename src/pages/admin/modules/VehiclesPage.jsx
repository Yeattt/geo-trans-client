import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, VehiclesInfoTable, VehiclesSearcher } from '../../../components';
import { useVehiclesStore } from '../../../hooks';
import { TbReportAnalytics } from 'react-icons/tb';

export const VehiclesPage = () => {
   const { vehicles, isLoading, getVehicles } = useVehiclesStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   useEffect(() => {
      getVehicles();
   }, []);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   };

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   if (isLoading || vehicles === undefined) {
      return <AdminLayout>Loading...</AdminLayout>;
   }

   return (
      <AdminLayout>
         <AdminNavbar module="Vehículos" />

         <br />

         {vehicles && <AdminElementsCard module="Vehicles" data={vehicles} />}

         <br />

         <div className="flex items-center justify-center">
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-end px-3 py-2">
               <VehiclesSearcher handleQueryResults={handleQueryResults} vehicles={vehicles} />
            </div>
         </div>

         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Vehicles" />}

         <br />

         <div className="flex items-center justify-center">
            {vehicles && <VehiclesInfoTable vehicles={queryResults.length > 0 ? queryResults : vehicles} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
};