import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, CreateFormModal, AdminElementsCard, AdminSearcher, VehiclesInfoTable } from '../../../components';
import { useVehiclesStore } from '../../../hooks';

export const VehiclesPage = () => {
   const { getVehicles, vehicles, isLoading } = useVehiclesStore();
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   };

   useEffect(() => {
      getVehicles();
   }, []);
      
   if (isLoading) return <AdminLayout>Loading...</AdminLayout>
   
   return (
      <AdminLayout>
         <AdminNavbar module="Vehículos" />

         <br />

         {vehicles && <AdminElementsCard module="Vehicles" data={vehicles} />}

         <br />

         <AdminSearcher module="Vehicles" />
         
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Vehicles" />}

         <br />

         <div className="flex items-center justify-center">
            {vehicles && <VehiclesInfoTable vehicles={vehicles} handleIsCreateModalActive={handleIsCreateModalActive} />}
         </div>
      </AdminLayout>
   );
};
