import { Link } from 'react-router-dom';

export const VehiclesCard = ({ vehicle }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md w-auto"
      >
         <div className="flex-1">
            <div className="text-white font-bold text-center">ID:</div>
            <div className="text-white text-center">{vehicle.id}</div>
         </div>
         <div className="flex-1 p-4">
            <div className="text-white font-bold text-center p">Tipo Camion:</div>
            <div className="text-white text-center">{vehicle.tipoCamion}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Modelo:</div>
            <div className="text-white text-center">{vehicle.modelo}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Marca:</div>
            <div className="text-white text-center">{vehicle.marca}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Placa:</div>
            <div className="text-white text-center">{vehicle.placa}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Placa Semirremolque:</div>
            <div className="text-white text-center">{vehicle.placaSemirremolque}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Tarjeta Propiedad:</div>
            <div className="text-white text-center">{vehicle.tarjetaPropiedad}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Tecnomecanica:</div>
            <div className="text-white text-center">{vehicle.tecnomecanica}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold text-center">Soat:</div>
            <div className="text-white text-center">{vehicle.placaSemirremolque}</div>
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