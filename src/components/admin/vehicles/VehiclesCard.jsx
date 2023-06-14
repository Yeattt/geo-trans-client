import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';
import { InfoModal, DeleteModal } from '../../modals';

export const VehiclesCard = ({ vehicle }) => {
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
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{vehicle.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.tipoCamion}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.modelo}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.marca}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.placa}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.placaSemirremolque}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.tarjetaPropiedad}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.tecnomecanica}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.soat}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
         <button  onClick={() => handleIsDeleteModalActive(true)}>
         {
            vehicle.estado ? "Activo" : "Inactivo"
         }
         </button>
         {
            isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={vehicle} value={'vehicles'} />
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
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={vehicle}/>
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