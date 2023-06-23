import React, { useEffect, useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { AdminLayout } from "../../../components/layouts";
import { AdminElementsCard, AdminNavbar, AssignPermissionsCard, CreateFormModal } from '../../../components';
import { useGetApiData } from '../../../hooks';

export const AssignPermissionsHome = () => {
   const { isLoading, data } = useGetApiData('/assignpermissions');
   const [query, setQuery] = useState('');
   const [assignpermissions, setAssignPermissions] = useState([]);
   const [isCreateModalActive, setIsCreateModalActive] = useState(false);
   const [isSearchModalActive, setIsSearchModalActive] = useState(false);

   useEffect(() => {
      if (!isLoading) {
         setAssignPermissions(data.assignpermissions);
      }
   }, [isLoading, data]);

   const handleIsCreateModalActive = (status) => {
      setIsCreateModalActive(status);
   }

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
            <AdminNavbar module="Clientes" />

            <br />

            <AdminElementsCard module="AssignPermissions" data={assignpermissions} />

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
                           placeholder="Buscar Roles y Permisos..."
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
            {isCreateModalActive && <CreateFormModal handleIsCreateModalActive={handleIsCreateModalActive} module="AssignPermissions" />}
            {isSearchModalActive && <SearchModal setIsSearchModalActive={setIsSearchModalActive} isSearchModalActive={isSearchModalActive} module="AssignPermissions" query={query} />}

            <br />

            <div className="flex items-center justify-center">
               <div className="bg-white rounded-sm w-[96.5%] flex flex-col justify-between px-2 py-2">
                  <div className="h-14 w-full flex items-center justify-between px-3 py-10 mb-7 border-b">
                     <span className="text-lg font-bold text-purplePz">Lista de Roles y Permisos</span>

                     <button
                        className="bg-purplePz w-32 py-2 rounded-md font-bold text-white"
                        onClick={() => handleIsCreateModalActive(true)}
                     >
                        Añadir
                     </button>
                  </div>

                  <table className="text-sm">
                     <thead>
                        <tr>
                           <th className="px-6 py-2 text-purplePz">ID</th>
                           <th className="px-6 py-2 text-purplePz">Rol</th>
                           <th className="px-6 py-2 text-purplePz">Permisos</th>
                           <th className="px-6 py-2 text-purplePz">Estado</th>
                           <th className="px-6 py-2 text-purplePz">Acciones</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           assignpermissions.map(assignpermissions => (
                              <AssignPermissionsCard key={assignpermissions.id} assignpermissions={assignpermissions} />
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