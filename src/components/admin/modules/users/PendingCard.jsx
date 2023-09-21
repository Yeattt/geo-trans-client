import { useState } from 'react';


import { PendingModal, UserInfoModal } from '../../';
import { useAllowedPrivileges } from '../../../../hooks';

export const PendingCard = ({ user }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();

   const [isPendingModalActive, setIsPendingModalActive] = useState(false);

   const handleIsPendingModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsPendingModalActive(status);
   };

   return (

      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{user.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.documento}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.edad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.email}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.role.nombre}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.compania.nombreEmpresa}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.vehiculo === null ? 'no hay vehiculo' : user.vehiculo.placa}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               !user.registroPendiente
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsPendingModalActive(true)}>Registrado</button>
                  :
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsPendingModalActive(true)}>Sin Registrar</button>
            }
            {
               isPendingModalActive && <PendingModal handleIsPendingModalActive={handleIsPendingModalActive} module={user} value={'users'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <UserInfoModal user={user} />
         </td>
      </tr >
   );
}