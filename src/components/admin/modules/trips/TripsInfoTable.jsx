import { useNavigate } from 'react-router-dom';
import { TripsCard } from '../';
import { useAllowedPrivileges } from '../../../../hooks';

export const TripsInfoTable = ({ trips, handleIsCreateModalActive }) => {
  const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/admin/trips/create');
  };

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de viajes</span>

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
              <th className="px-6 py-2 text-primary">Cod. Produc.</th>
              <th className="px-6 py-2 text-primary">Destino</th>
              <th className="px-6 py-2 text-primary">Fecha V.</th>
              <th className="px-6 py-2 text-primary">Hora V.</th>
              <th className="px-6 py-2 text-primary">Estado V.</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Cantidad</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Empaque</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Naturaleza</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Numero remesa</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Producto transportar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Saldo a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Unidad de medida</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Valor a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Tipo Viaje</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Cliente</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Vehiculo</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-primary">Conductor</th>
              <th className="px-6 py-2 text-primary">Estado</th>
              <th className="px-6 py-2 text-primary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              trips.map(trip => (
                <TripsCard key={trip.id} trip={trip} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}