import { Link } from 'react-router-dom';

export const VehiclesCard = ({ vehicle }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
      >
         <div className="flex-1">
            <div className="text-white font-bold">ID:</div>
            <div className="text-white">{vehicle.id}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Marca:</div>
            <div className="text-white">{vehicle.make}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Modelo:</div>
            <div className="text-white">{vehicle.model}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Año:</div>
            <div className="text-white">{vehicle.year}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Color:</div>
            <div className="text-white">{vehicle.color}</div>
         </div>
         <div>
            <Link to={`/admin/vehicles/update/${vehicle.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/vehicles/${vehicle.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}