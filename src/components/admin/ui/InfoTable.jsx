import {
  ClientsCard,
  CompaniesCard,
  PermissionsCard,
  QuotesCard,
  RolesCard,
  TripsCard,
  UsersCard,
  VehiclesCard,
  VehiclesTypeCard
} from '..';

export const InfoTable = ({ module = '', data = {} }) => {
  console.log(data);

  const components = {
    Clients: ClientsCard,
    Companies: CompaniesCard,
    Permissions: PermissionsCard,
    Quotes: QuotesCard,
    Roles: RolesCard,
    Trips: TripsCard,
    Users: UsersCard,
    Vehicles: VehiclesCard,
    VehiclesType: VehiclesTypeCard
  };

  const ComponentToRender = components[module];

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de {module}</span>

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
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="px-6 py-2 text-purplePz">{key}</th>
              ))}

              <th className="px-6 py-2 text-purplePz">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(data => (
                ComponentToRender && <ComponentToRender key={data.id} data={data} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}