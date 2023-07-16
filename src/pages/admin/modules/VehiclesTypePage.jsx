import React, { useEffect, useState } from 'react';

import { AdminLayout, AdminNavbar, VehiclesTypeCard, CreateFormModal, SearchModal, AdminElementsCard, AdminSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { VehiclesTypeInfoTable } from '../../../components/admin/modules/vehiclesType/VehiclesTypeInfoTable';

export const VehiclesTypePage = () => {
   const { isLoading, data: { vehiclesType } } = useGetApiData('/trucks/types');
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

   if (isLoading) return <AdminLayout>Loading...</AdminLayout>

   return (
      <AdminLayout>
         <AdminNavbar module="Tipo Vehículos" />

         <br />

         <AdminElementsCard module="VehiclesType" data={vehiclesType} />

         <br />

         <AdminSearcher module="VehiclesType" />

         {/* // * IMPORTANTE: Prueba del modal para crear */}
         {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="VehiclesType" />}

         <br />

         <div className="flex items-center justify-center">
            <VehiclesTypeInfoTable vehiclesType={vehiclesType} handleIsCreateModalActive={handleIsCreateModalActive} />
         </div>
      </AdminLayout>
   );
}