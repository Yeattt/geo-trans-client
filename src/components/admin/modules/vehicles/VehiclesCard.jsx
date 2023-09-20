import { useState } from 'react';

import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { DeleteModal, UpdateModal, VehicleInfoModal } from '../../';
import { useAllowedPrivileges } from '../../../../hooks';
import { geoTransApi } from '../../../../api';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';

export const VehiclesCard = ({ vehicle }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isOpenUpdate, setisOpenUpdate] = useState(false)

   const handleUpdateClick = () => {
      setisOpenUpdate(!isOpenUpdate)
   }

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
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={vehicle} value={'vehicles'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <VehicleInfoModal vehicle={vehicle} />

            {
               userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
               <Button onClick={handleUpdateClick} variant="outlined" endIcon={<EditNoteIcon />}>Editar</Button>
            }
            <UpdateModal isOpenUpdate={isOpenUpdate} module="Vehicles" moduleInfo={vehicle} handleUpdateClick={handleUpdateClick} />

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}