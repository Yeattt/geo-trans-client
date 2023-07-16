import { PermissionsCard } from '../';

export const PermissionsInfoTable = ({ permissions, handleIsCreateModalActive }) => {
  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de permisos</span>

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
              <th className="px-6 py-2 text-secondary">ID</th>
              <th className="px-6 py-2 text-secondary">Nombre</th>
              <th className="px-6 py-2 text-secondary">Estado</th>
              <th className="px-6 py-2 text-secondary">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              permissions.map(permission => (
                <PermissionsCard key={permission.id} permission={permission} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}