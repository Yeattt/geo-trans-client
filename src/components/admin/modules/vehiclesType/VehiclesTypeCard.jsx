import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { DeleteModal, UpdateModal } from '../../';

export const VehiclesTypeCard = ({ vehicleType }) => {
   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)

   const handleUpdateClick = () =>{
      setisOpenUpdate(!isOpenUpdate)
   }

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);
   };

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{vehicleType.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicleType.nombre}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
         {
            vehicleType.estado
            ?
            <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
            :
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
         }
         {
            isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={vehicleType} value={'trucks/types'} />
         }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span className="text-2xl text-primary hover:text-purplePzHover cursor-pointer mr">
               <FaEdit onClick={handleUpdateClick}/>
               <UpdateModal isOpenUpdate={isOpenUpdate} module="VehiclesType" moduleInfo={vehicleType}  handleUpdateClick={handleUpdateClick}/>
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}