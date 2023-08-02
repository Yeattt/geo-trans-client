import { AdminLayout, AdminNavbar, TripsCreateForm } from '../../../components';

export const TripsCreatePage = () => {
  return (
    <AdminLayout>
      <AdminNavbar module="Viajes" />

      <br />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20">
        <TripsCreateForm />
      </div>
    </AdminLayout>
  )
}