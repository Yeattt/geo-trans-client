import { AdminLayout, AdminNavbar, QuotesCreateForm } from '../../../components';

export const QuotesCreatePage = () => {
  return (
    <AdminLayout>
      <AdminNavbar module="Cotizaciones" />

      <br />

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20">
        <QuotesCreateForm />
      </div>
    </AdminLayout>
  )
}