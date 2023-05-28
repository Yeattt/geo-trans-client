import { Link } from 'react-router-dom';

export const RolesCard = ({ role }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md w-auto"
      >
         <div className="flex-1">
            <div className="text-white font-bold text-center">ID:</div>
            <div className="text-white text-center">{role.id}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Nombre:</div>
            <div className="text-white text-center">{role.nombre}</div>
         </div>
         <div>
            <Link to={`/admin/roles/update/${role.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/roles/${role.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}