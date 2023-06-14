import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, DeleteModal } from '../../modals';

export const QuotesCard = ({ quote }) => {
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
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{quote.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.codigoCotizacion}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.cantidad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.codigoProducto}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.destino}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.empaque}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.naturaleza}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.numeroRemesa}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.origen}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.productoTransportar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.saldoPagar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.unidadMedida}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.valorPagar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.userId}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
         <button  onClick={() => handleIsDeleteModalActive(true)}>
         {
            quote.estado ? "Activo" : "Inactivo"
         }
         </button>
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