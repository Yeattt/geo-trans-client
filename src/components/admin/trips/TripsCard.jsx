import { Link } from 'react-router-dom';

export const TripsCard = ({ trip }) => {
   return (
      <div
         key={trip.id}
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
      >
         <div className="flex-1">
            <div className="text-white font-bold">ID:</div>
            <div className="text-white">{trip.id}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Cantidad:</div>
            <div className="text-white">{trip.cantidad}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">codigoProducto:</div>
            <div className="text-white">{trip.codigoProducto}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Destino:</div>
            <div className="text-white">{trip.destino}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Empaque:</div>
            <div className="text-white">{trip.empaque}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Naturaleza:</div>
            <div className="text-white">{trip.naturaleza}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">numeroRemesa:</div>
            <div className="text-white">{trip.numeroRemesa}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">origen:</div>
            <div className="text-white">{trip.origen}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">productoTransportar:</div>
            <div className="text-white">{trip.productoTransportar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">saldoPagar:</div>
            <div className="text-white">{trip.saldoPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">unidadMedida:</div>
            <div className="text-white">{trip.unidadMedida}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">valorPagar:</div>
            <div className="text-white">{trip.valorPagar}</div>
         </div>
         <div>
            {/* Agrega aquí los botones de editar, eliminar y ver */}
            <Link to={`/admin/trip/update/${trip.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/trip/${trip.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}
