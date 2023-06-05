import { Link } from 'react-router-dom';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

export const ClientsCard = ({ client }) => {
   return (
      <tr className="hover:bg-gray-200">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">#{client.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{client.documento}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{client.nombre}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{client.razonSocial}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{client.telefono}</td>

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