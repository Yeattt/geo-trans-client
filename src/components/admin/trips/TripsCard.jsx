import { Link } from 'react-router-dom';

export const TripsCard = ({ vehicle }) => {
   return (
      <div
         key={vehicle.id}
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
      >
         <div className="flex-1">
            <div className="text-white font-bold">ID:</div>
            <div className="text-white">{trips.id}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Cantidad:</div>
            <div className="text-white">{trips.cantidad}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">codigoProducto:</div>
            <div className="text-white">{trips.codigoProducto}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Destino:</div>
            <div className="text-white">{trips.destino}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Empaque:</div>
            <div className="text-white">{trips.empaque}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Naturaleza:</div>
            <div className="text-white">{trips.naturaleza}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">numeroRemesa:</div>
            <div className="text-white">{trips.numeroRemesa}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">origen:</div>
            <div className="text-white">{trips.origen}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">productoTransportar:</div>
            <div className="text-white">{trips.productoTransportar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">saldoPagar:</div>
            <div className="text-white">{trips.saldoPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">unidadMedida:</div>
            <div className="text-white">{trips.unidadMedida}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">valorPagar:</div>
            <div className="text-white">{trips.valorPagar}</div>
         </div>
         <div>
            {/* Agrega aquí los botones de editar, eliminar y ver */}
            <Link to={`/admin/trips/update/${trips.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/trips/${vehicle.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}
