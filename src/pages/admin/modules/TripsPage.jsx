import { useEffect, useState } from 'react';

import { AdminLayout, TripsCard, CreateFormModal, SearchModal, AdminNavbar, AdminElementsCard, AdminSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { TripsInfoTable } from '../../../components/admin/modules/trips/TripsInfoTable';

export const TripsPage = () => {
  const { isLoading, data: { trips } } = useGetApiData('/trips');
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

  if (isLoading) return <AdminLayout>Loading...</AdminLayout>

  const handleIsCreateModalActive = (status) => {
    setIsCreateModalActive(status);
  }

  return (
    <AdminLayout>
      <AdminNavbar module="Viajes" />

      <br />

      <AdminElementsCard module="Trips" data={trips} />

      <br />

      <AdminSearcher module="Trips" />

      {/* // * IMPORTANTE: Prueba del modal para crear */}
      {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Trips" />}

      <br />

      <div className="flex items-center justify-center">
        <TripsInfoTable trips={trips} handleIsCreateModalActive={handleIsCreateModalActive} />
      </div>
    </AdminLayout>
  );
}