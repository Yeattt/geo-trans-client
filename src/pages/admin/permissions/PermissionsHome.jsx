import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { AdminLayout } from '../../../components/layouts';
import { PermissionsCard } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const PermissionsHome = () => {
   const { isLoading, data } = useGetApiData('/permissions');
   const [permissions, setPermissions] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setPermissions(data.permissions);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Permisos</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <Link to="/admin/permissions/create">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                     Añadir Nuevo
                  </button>
               </Link>

               <div className="p-6">
                  {permissions.length > 0 ? (
                     <div className="grid grid-cols-1 gap-5">
                        {permissions.map((permission) => (
                           <PermissionsCard key={permission.id} permission={permission} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay permisos disponibles.</p>
                  )}
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}