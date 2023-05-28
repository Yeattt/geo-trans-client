import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';
import { RolesCard } from '../../../components/admin';
import { useGetApiData } from '../../../hooks';

export const rolesHome = () => {
   const { isLoading, data } = useGetApiData('/roles');
   const [roles, setRoles] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setRoles(data.roles);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Roles</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/trips/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {roles.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {roles.map((role) => (
                           <RolesCard key={role.id} role={role} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay roles disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}