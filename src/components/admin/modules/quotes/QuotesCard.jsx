import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { DeleteModal, QuoteInfoModal, UpdateModal } from '../../';
import { useGetApiData, useAuthStore, useAllowedPrivileges } from '../../../../hooks';


export const QuotesCard = ({ quote }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)
   const { user } = useAuthStore();
   const navigate = useNavigate();

   const handleUpdateClick = () => {
      navigate(`/admin/quotes/update/${quote.id}`);
   }

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsDeleteModalActive(status);
   };
   return (

      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{quote.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.fechaSolicitud}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.horaCargue}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.ciudadDestino}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.ciudadOrigen}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.direccion}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.contacto}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.nombreOrigen}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.fechaServicio}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.nombreDestino}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.tipoCamion}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.pesoAproximado}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.valorMercancia}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.contenido}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.valorTransporte}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.observaciones}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.companyId}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.name}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               quote.estado
                  ?
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={quote} value={'quotes'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <QuoteInfoModal quote={quote} />

            {
               userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
               <Button onClick={handleUpdateClick} variant="outlined" endIcon={<EditNoteIcon />}>Editar</Button>
            }
            <UpdateModal isOpenUpdate={isOpenUpdate} module="Quotes" moduleInfo={quote} handleUpdateClick={handleUpdateClick} />

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}