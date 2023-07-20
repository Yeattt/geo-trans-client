import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, VehiclesInfoTable, VehiclesSearcher } from '../../../components';
import { useVehiclesStore } from '../../../hooks';
import { TbReportAnalytics } from 'react-icons/tb';

export const VehiclesPage = () => {
   const { getVehicles, vehicles, isLoading } = useVehiclesStore();
   const [queryResults, setQueryResults] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   };

   const handleQueryResults = (results = []) => {
      setQueryResults(results);
   };

   useEffect(() => {
      getVehicles();
   }, []);

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
            <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
               <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
                  <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
                     <TbReportAnalytics />
                  </span>

                  <span className="text-white text-[15px] font-semibold">Generar informe</span>
               </div>

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