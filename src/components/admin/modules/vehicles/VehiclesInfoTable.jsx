import { useSelector } from 'react-redux';
import { VehiclesCard } from '../';

export const VehiclesInfoTable = ({ vehicles, handleIsCreateModalActive }) => {
  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de vehículos</span>

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
              <th className="px-6 py-2 text-purplePz">Tipo Camion</th>
              <th className="px-6 py-2 text-purplePz">Modelo</th>
              <th className="px-6 py-2 text-purplePz">Marca</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Placa</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">P. Semirremolque</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">T. Propiedad</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Tecnomecanica</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Soat</th>
              <th className="px-6 py-2 text-purplePz">Estado</th>
              <th className="px-6 py-2 text-purplePz">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles.map(vehicle => (
                <VehiclesCard key={vehicle.id} vehicle={vehicle} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}