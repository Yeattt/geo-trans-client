import { PendingCard } from '../';
import { useAllowedPrivileges } from '../../../../hooks';

export const UsersPendingInfoTable = ({ users }) => {
  const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de usuarios pendientes</span>

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
              <th className="px-6 py-2 text-purplePz">Documento</th>
              <th className="px-6 py-2 text-purplePz">Edad</th>
              <th className="px-6 py-2 text-purplePz">Email</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Rol</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Compañía</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-purplePz">Vehículo</th>
              <th className="px-6 py-2 text-purplePz">Registro</th>
              <th className="px-6 py-2 text-purplePz">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <PendingCard key={user.id} user={user} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}