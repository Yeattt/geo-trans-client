import { useState } from 'react';

import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { CompanyInfoModal, DeleteModal, UpdateModal } from '../../';
import { useAllowedPrivileges } from '../../../../hooks';

export const CompaniesCard = ({ company }) => {
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

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{company.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.nit}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.razonSocial}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.nombreEmpresa}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.telefono}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{company.duenoPoliza}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               company.estado
                  ?
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={company} value={'companies'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <CompanyInfoModal company={company} />

            {
               userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
               <Button onClick={handleUpdateClick} variant="outlined" endIcon={<EditNoteIcon />}>Editar</Button>
            }
            <UpdateModal isOpenUpdate={isOpenUpdate} module="Companies" moduleInfo={company} handleUpdateClick={handleUpdateClick} />

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