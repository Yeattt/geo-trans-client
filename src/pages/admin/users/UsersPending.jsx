import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaUsersCog } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout, AdminNavbar, PendingCard, SearchModal } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const UsersPending = () => {
   const { isLoading, data } = useGetApiData('/users');
   const [users, setUsers] = useState([]);
   const [query, setQuery] = useState('');
   const [isSearchModalActive, setIsSearchModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
        setUsers(data.users)
      }
   }, [isLoading, data]);

   const handleOnSearchSubmit = (e) => {
      e.preventDefault();

      setIsSearchModalActive(!isSearchModalActive);
   }

   const handleOnSearchInputChange = (e) => {
      setQuery(e.target.value);
   }

   return (
      <AdminLayout>
         <div className="min-w-full bg-gray-200">
            <AdminNavbar module="Usuarios Pendientes" />

            <br />

            <div className="flex flex-col md:flex-row items-center justify-around">
               <div className="bg-gradient-to-r from-secondary to-secondaryHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <FaUsersCog className="text-3xl text-secondary" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{users.length}</span>
                           <span className="text-sm text-white font-bold">Usuarios por confirmar</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-gradient-to-r from-orangePz to-orangePzHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <FaUsersCog className="text-3xl text-orangePz" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{users.length}</span>
                           <span className="text-sm text-white font-bold">Usuarios por confirmar</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-gradient-to-r from-purplePz to-purplePzHover rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4">
                  <div className="flex flex-row justify-center items-center">
                     <div className="text-xl flex items-center justify-center">
                        <span className="border border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                           <FaUsersCog className="text-3xl text-purplePz" />
                        </span>

                        <div className="flex flex-col justify-center">
                           <span className="font-bold text-white">{users.length}</span>
                           <span className="text-sm text-white font-bold">Usuarios por confirmar</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-row items-center justify-between px-2 py-2">
                  <div>
                  </div>

                  <form onSubmit={handleOnSearchSubmit}>
                     <div className="bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition w-72 h-9 flex items-center overflow-hidden">
                        <input
                           className="bg-transparent w-[87%] h-full px-2 pl-2 py-2 pb-3 text-base"
                           type="text"
                           placeholder="Buscar usuario por dni..."
                           value={query}
                           onChange={handleOnSearchInputChange}
                        />

                        <div className="bg-purplePz w-[13%] h-full border-l flex items-center justify-center cursor-pointer">
                           <BiSearchAlt
                              className="text-xl text-white"
                              onClick={handleOnSearchSubmit}
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>

            {/* // * IMPORTANTE: Prueba del modal para crear */}
            {isSearchModalActive && <SearchModal setIsSearchModalActive={setIsSearchModalActive} isSearchModalActive={isSearchModalActive} module="Users" query={query} />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-7 border-b">
                     <span className="text-lg font-bold text-purplePz">Lista de Usuarios por confirmar</span>
                  </div>

                  <table className="text-sm">
                     <thead>
                        <tr>
                           <th className="px-6 py-2 text-purplePz">ID</th>
                           <th className="px-6 py-2 text-purplePz">DNI</th>
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

                  <div className="flex items-center justify-center mt-5">
                  </div>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}