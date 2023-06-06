import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

export const TripsCard = ({ trip }) => {
   return (
      <tr className="hover:bg-gray-200">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{trip.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.cantidad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.codigoProudcto}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.destino}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.empaque}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.naturaleza}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.numeroRemesa}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.origen}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.productoTransportar}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.saldoPagar}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.unidadMedida}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.valorPagar}</td>

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
