import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { AdminLayout } from "../../../components/layouts";
import { UsersCard } from '../../../components/admin';
import { useGetApiData } from '../../../hooks';

export const UsersHome = () => {
   const { isLoading, data } = useGetApiData('/users');
   const [users, setUsers] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setUsers(data.users);
      }
   }, [isLoading, data]);

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Usuarios</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  {users.length > 0 ? (
                     <div className="grid grid-cols-1 gap-4">
                        {users.map((user) => (
                           <UsersCard key={user.id} user={user} />
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500">No hay usuarios disponibles.</p>
                  )}

                  <br />

                  <Link to="/admin/users/create">
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Añadir Nuevo
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}