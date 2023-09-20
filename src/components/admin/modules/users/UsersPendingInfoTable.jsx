import { PendingCard } from '../';
import { useAllowedPrivileges } from '../../../../hooks';

export const UsersPendingInfoTable = ({ users }) => {
  const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();

  return (
    <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
      <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-5">
        <span className="text-lg font-bold text-primary">Lista de usuarios pendientes</span>

       
      </div>

      <div className="max-h-[500px] overflow-y-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-2 text-primary">ID</th>
              <th className="px-6 py-2 text-primary">Documento</th>
              <th className="px-6 py-2 text-primary">Edad</th>
              <th className="px-6 py-2 text-primary">Email</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-primary">Rol</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-primary">Compañía</th>
              <th className="hidden 2xl:table-cell px-6 py-2 text-primary">Vehículo</th>
              <th className="px-6 py-2 text-primary">Registro</th>
              <th className="px-6 py-2 text-primary">Acciones</th>
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