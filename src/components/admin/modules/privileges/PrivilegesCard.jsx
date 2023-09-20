import { useState } from 'react';

import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { DeleteModal, UpdateModal } from '../..';
import { useAllowedPrivileges } from '../../../../hooks';

export const PrivilegesCard = ({ privilege }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpenUpdate, setisOpenUpdate] = useState(false);

   const handleUpdateClick = () => {
      setisOpenUpdate(!isOpenUpdate)
   }

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsDeleteModalActive(status);
   }

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{privilege.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{privilege.nombre}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               privilege.estado
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={privilege} value={'privileges'} />}
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray--500">

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               {
                  userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
                  <Button onClick={handleUpdateClick} variant="outlined" endIcon={<EditNoteIcon />}>Editar</Button>
               }
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Privileges" moduleInfo={privilege} handleUpdateClick={handleUpdateClick} />
            </span>
         </td>
      </tr>
   );
}