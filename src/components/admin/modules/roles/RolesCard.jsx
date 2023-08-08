import { useState } from 'react';

import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';
import { MdAssignmentAdd } from 'react-icons/md';

import { AssignModal, InfoModal, DeleteModal, UpdateModal } from '../../';

export const RolesCard = ({ role }) => {
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpenUpdate, setisOpenUpdate] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   const handleViewDetails = () => {
      setIsOpen(!isOpen)
   }
   const handleUpdateClick = () => {
      setisOpenUpdate(!isOpenUpdate)
   }

   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
   const [isAssignModalActive, setisAssignModalActive] = useState(false);
   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);
   };

   const handleIsAssignModalActive = (status) => {
      setisAssignModalActive(status);
   }

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{role.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{role.nombre}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               role.estado
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={role} value={'roles'} />}
            {/* {isAssignModalActive && <AssignModal handleIsAssignModalActive={handleIsAssignModalActive} id={role.id} />} */}
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span
               className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5"
               onClick={() => handleIsInfoModalActive(true)}
            >
               <TbInfoHexagon />
            </span>
            <span
               className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5"
               onClick={() => handleIsAssignModalActive(true)}
            >
               <TbInfoHexagon />
            </span>

            {/* // * IMPORTANTE: Prueba del modal para ver información */}
            {
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={role} />
            }
            {isAssignModalActive && <AssignModal handleIsAssignModalActive={handleIsAssignModalActive} id={role.id} />}

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               <FaEdit onClick={handleUpdateClick} />
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Roles" moduleInfo={role} handleUpdateClick={handleUpdateClick} />
            </span>

            {/* <p onClick={setisAssignModalActive(true)}>Asignar</p> */}

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}