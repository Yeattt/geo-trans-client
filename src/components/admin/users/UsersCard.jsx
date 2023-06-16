import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, DeleteModal } from '../../modals';

export const UsersCard = ({ user }) => {
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);

   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);
   };

   return (
      <tr className="hover:bg-gray-200">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{user.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.dni}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.edad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.email}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.contrasena}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.roleId}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.companyId}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.vehicleId}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
         <button  onClick={() => handleIsDeleteModalActive(true)}>
         {
            user.estado ? "Activo" : "Inactivo"
         }
         </button>
         {
            isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={user} value={'users'} />
         }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span
               className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5"
               onClick={() => handleIsInfoModalActive(true)}
            >
               <TbInfoHexagon />
            </span>

            {/* // * IMPORTANTE: Prueba del modal para ver información */}
            {
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={user} />
            }

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5">
               <FaEdit />
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}