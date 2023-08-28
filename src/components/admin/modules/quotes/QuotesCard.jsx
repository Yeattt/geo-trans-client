import { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, DeleteModal, UpdateModal } from '../../';
import { useGetApiData, useAuthStore, useAllowedPrivileges } from '../../../../hooks';


export const QuotesCard = ({ quote }) => {
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();

   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)
   const [companiesList, setCompaniesList] = useState([]);
   const { user } = useAuthStore();
   const navigate = useNavigate();


   const handleViewDetails = () => {
      setIsOpen(!isOpen)
   }


   const handleUpdateClick = () => {
      navigate(`/admin/quotes/update/${quote.id}`);
   }

   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);

      // useEffect(() => {
      //    if (!isCompaniesLoading ) {
      //       setCompaniesList(companies.companies);
      //    }
      // }, [isCompaniesLoading]);
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
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={quote} value={'quotes'} />
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
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={quote} />
            }
            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               {
                  userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
                  <FaEdit onClick={handleUpdateClick} />
               }
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Quotes" moduleInfo={quote} handleUpdateClick={handleUpdateClick} />
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}