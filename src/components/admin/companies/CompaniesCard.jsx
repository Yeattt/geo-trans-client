import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, DeleteModal, UpdateModal } from '../../modals';

export const CompaniesCard = ({ company }) => {
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
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{company.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.nit}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.razonSocial}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.nombreEmpresa}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.telefono}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.duenoPoliza}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
         {
            company.estado
            ?
            <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
            :
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
         }
         {
            isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={company} value={'companies'} />
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
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={company} />
            }

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               <FaEdit onClick={handleUpdateClick}/>
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Companies" moduleInfo={company}  handleUpdateClick={handleUpdateClick} />
            </span>

            {/* <span
               className="text-2xl text-red-600 hover:text-red-700 cursor-pointer"
               onClick={() => handleIsDeleteModalActive(true)}
            >
               <MdDeleteForever />
            </span> */}
            {/* // * IMPORTANTE: Prueba del modal para cambio de estado */}
            
         </td>
      </tr>
   );
}