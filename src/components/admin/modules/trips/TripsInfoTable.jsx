import { TripsCard } from '../';

export const TripsInfoTable = ({ trips, handleIsCreateModalActive }) => {
  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de viajes</span>

        <button
          className="bg-primary transition hover:bg-primaryHover w-32 py-2 rounded-md font-bold text-white"
          onClick={() => handleIsCreateModalActive(true)}
        >
          Añadir
        </button>
      </div>

      <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-purplePz">ID</th>
              <th className="px-6 py-2 text-purplePz">Cantidad</th>
              <th className="px-6 py-2 text-purplePz">Codigo producto</th>
              <th className="px-6 py-2 text-purplePz">Destino</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Empaque</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Naturaleza</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Numero remesa</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Origen</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Producto transportar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Saldo a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Unidad de medida</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Valor a pagar</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Tipo Viaje</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Fecha Viaje</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Cliente</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Vehiculo</th>
              <th className="hidden 3xl:table-cell px-6 py-2 text-purplePz">Conductor</th>
              <th className="px-6 py-2 text-purplePz">Acciones</th>
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