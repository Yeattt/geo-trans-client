import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

export const QuotesCard = ({ quote }) => {
   return (
      <tr className="hover:bg-gray-200">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{quote.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.codigoCotizacion}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.cantidad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.codigoProducto}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.destino}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.empaque}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.naturaleza}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.numeroRemesa}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.origen}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.productoTransportar}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.saldoPagar}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.unidadMedida}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.valorPagar}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{quote.userId}</td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5">
               <TbInfoHexagon />
            </span>

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5">
               <FaEdit />
            </span>

            <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span>
         </td>
      </tr>
   );
}