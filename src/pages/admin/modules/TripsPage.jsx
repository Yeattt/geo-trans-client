import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'; 
import { AdminLayout, CreateFormModal, AdminNavbar, AdminElementsCard, TripsSearcher } from '../../../components';
import { useGetApiData } from '../../../hooks';
import { TripsInfoTable } from '../../../components/admin/modules/trips/TripsInfoTable';
import { TbReportAnalytics } from 'react-icons/tb';
import ReporteViajes from '../../../components/admin/modules/trips/ReporteViajes';

export const TripsPage = () => {
  const tablePdf = useRef()

  const generatePdf = useReactToPrint({
    content: ()=> tablePdf.current,
    documentTitle: 'Informes de viajes'
  })
  const { isLoading, data: { trips } } = useGetApiData('/trips');
  const [queryResults, setQueryResults] = useState([]);
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

  const handleIsCreateModalActive = (status) => {
    setIsCreateModalActive(status);
  }

  const handleQueryResults = (results = []) => {
    setQueryResults(results);
  };

  if (isLoading || trips === undefined) {
    return <AdminLayout>Loading...</AdminLayout>;
  }

  return (
    <AdminLayout>
      <AdminNavbar module="Viajes" />

      <br />

      <AdminElementsCard module="Trips" data={trips} />

      <br />

      <div className="flex items-center justify-center">
        <div className="bg-white rounded-sm w-[94%] flex flex-row items-center justify-between px-3 py-2">
          <div className="w-auto min-h-10 rounded-md bg-primary transition hover:bg-primaryHover flex justify-center items-center px-4 py-2 cursor-pointer">
            <span className="w-8 h-8 text-secondary text-2xl rounded-full bg-white flex items-center justify-center mr-2">
              <TbReportAnalytics />
            </span>

            <div className='hidden'>
                        <div ref={tablePdf}>
                           <ReporteViajes trips={trips} />
                        </div>
                     </div>

            <buttom onClick={generatePdf} className="text-white text-[15px] font-semibold" type="button">Generar informe</buttom>
          </div>

          <TripsSearcher handleQueryResults={handleQueryResults} trips={trips} />
        </div>
      </div>

      {/* // * IMPORTANTE: Prueba del modal para crear */}
      {/* {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="Trips" />} */}

      <br />

      <div className="flex items-center justify-center">
        {trips && <TripsInfoTable trips={queryResults.length > 0 ? queryResults : trips} handleIsCreateModalActive={handleIsCreateModalActive} />}
      </div>
    </AdminLayout>
  );
}