import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, DeleteModal, UpdateModal } from '../../';

export const PermissionsCard = ({ permission }) => {
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)

   const handleViewDetails = () => {
      setIsOpen(!isOpen)
   }
   const handleUpdateClick = () =>{
      setisOpenUpdate(!isOpenUpdate)
   }

   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);
   };
   
   

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{permission.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-semibold text-gray-500">{permission.nombre}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-semibold text-gray-500">
         {
            permission.estado
            ?
            <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
            :
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
         }
         {
            isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={permission} value={'permissions'} />
         }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span
               className="text-2xl text-secondary hover:text-secondaryHover cursor-pointer mr-5"
               onClick={() => handleIsInfoModalActive(true)}
            >
               <TbInfoHexagon />
            </span>

            {/* // * IMPORTANTE: Prueba del modal para ver información */}
            {
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={permission}  />
            }

            <span className="text-2xl text-secondary hover:text-secondaryHover cursor-pointer">
               <FaEdit onClick={handleUpdateClick}/>
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Permissions" moduleInfo={permission}  handleUpdateClick={handleUpdateClick}/>
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}