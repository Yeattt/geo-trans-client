import { QuotesCard } from '..';
import { useAllowedPrivileges } from '../../../../hooks';

export const QuotesInfoTable = ({ quotes, handleIsCreateModalActive }) => {
  const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de cotizaciones</span>

        {
          userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'crear') &&
          <button
            className="bg-primary transition hover:bg-primaryHover w-32 py-2 rounded-md font-bold text-white"
            onClick={() => handleIsCreateModalActive(true)}
          >
            Añadir
          </button>
        }
      </div>

      <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-purplePz">ID</th>
              <th className="px-6 py-2 text-purplePz">Fecha solicitud</th>
              <th className="px-6 py-2 text-purplePz">Hora Cargue</th>
              <th className="px-6 py-2 text-purplePz">Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Direccion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Contacto</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Nom. Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Fecha Servicio</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Nom. Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Tipo Camion</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Peso</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Vlr. Mercancia</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Contenido</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Vlr. Transporte</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Observaciones</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Company Id</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">User Id</th>
              <th className="px-6 py-2 text-purplePz">Estado</th>
              <th className="px-6 py-2 text-purplePz">Acciones</th>
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