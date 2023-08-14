import { QuotesCard } from '..';
import { useAllowedPrivileges } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';


export const QuotesInfoTable = ({ quotes, handleIsCreateModalActive }) => {
  const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/admin/quotes/create');
  };

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de cotizaciones</span>

        {
          userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'crear') &&
          <button
            className="bg-primary transition hover:bg-primaryHover w-32 py-2 rounded-md font-bold text-white"
            onClick={handleButtonClick}
          >
            Añadir
          </button>
        }
      </div>

      <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-primary">ID</th>
              <th className="px-6 py-2 text-primary">Fecha solicitud</th>
              <th className="px-6 py-2 text-primary">Hora Cargue</th>
              <th className="px-6 py-2 text-primary">Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Direccion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Contacto</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Nom. Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Fecha Servicio</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Nom. Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Tipo Camion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Peso</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vlr. Mercancia</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Contenido</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vlr. Transporte</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Observaciones</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Company Id</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">User Id</th>
              <th className="px-6 py-2 text-primary">Estado</th>
              <th className="px-6 py-2 text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              quotes.map(quote => (
                <QuotesCard key={quote.id} quote={quote} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}