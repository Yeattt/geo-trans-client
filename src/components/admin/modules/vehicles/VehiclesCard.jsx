import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { BsFile, BsFileEarmarkArrowDown } from 'react-icons/bs';
import { TbInfoHexagon } from 'react-icons/tb';
import { InfoModal, DeleteModal, UpdateModal } from '../../';
import { useAllowedPrivileges } from '../../../../hooks';
import { geoTransApi } from '../../../../api';

export const VehiclesCard = ({ vehicle }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);

   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)

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

   const handleIsDeleteModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsDeleteModalActive(status);
   };

   const handleDownloadFile = (filename = '') => {
      geoTransApi.get(`/files/download/${filename}`, {
         responseType: 'blob',
      })
         .then(res => {
            const fileUrl = window.URL.createObjectURL(new Blob([res.data]));

            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
         })
         .catch(error => {
            console.log('Error al descargar el archivo', error);
         })
   }

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{vehicle.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.tipoCamion}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.modelo}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.marca}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.placa}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{vehicle.placaSemirremolque}</td>

         <td
            className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500"
            onClick={() => handleDownloadFile(vehicle.tarjetaPropiedad)}
         >
            <div className="text-xl text-center w-full h-full flex items-center justify-center">
               <BsFileEarmarkArrowDown alt={vehicle.tarjetaPropiedad} />
            </div>
         </td>

         <td
            className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500"
            onClick={() => handleDownloadFile(vehicle.tecnomecanica)}
         >
            <div className="text-xl text-center w-full h-full flex items-center justify-center">
               <BsFileEarmarkArrowDown alt={vehicle.tecnomecanica} />
            </div>
         </td>

         <td
            className="hidden 2xl:table-cell px-0 py-0 text-center cursor-pointer font-bold text-gray-500"
            onClick={() => handleDownloadFile(vehicle.soat)}
         >
            <div className="text-xl text-center w-full h-full flex items-center justify-center">
               <BsFileEarmarkArrowDown alt={vehicle.soat} />
            </div>
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               vehicle.estado
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
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
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={vehicle} />
            }

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               {
                  userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
                  <FaEdit onClick={handleUpdateClick} />
               }
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Vehicles" moduleInfo={vehicle} handleUpdateClick={handleUpdateClick} />
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}