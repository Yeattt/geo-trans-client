import { Link } from 'react-router-dom';

export const UsersCard = ({ user }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md w-auto"
      >
         <div className="flex-1">
            <div className="text-white font-bold text-center">ID:</div>
            <div className="text-white text-center">{user.id}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">DNI:</div>
            <div className="text-white text-center">{user.dni}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Edad:</div>
            <div className="text-white text-center">{user.edad}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Email:</div>
            <div className="text-white text-center">{user.email}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Contrasena:</div>
            <div className="text-white text-center">{user.contrasena}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Rol:</div>
            <div className="text-white text-center">{user.roleId}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Compañia:</div>
            <div className="text-white text-center">{user.companyId}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Vehículo:</div>
            <div className="text-white text-center">{user.vehicleId}</div>
         </div>
         <div>
            <Link to={`/admin/users/update/${user.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/users/${user.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}