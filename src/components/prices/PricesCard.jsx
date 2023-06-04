import { Link } from 'react-router-dom';

export const PricesCard = ({ price }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
      >
         <div className="flex-1">
            <div className="text-white font-bold">ID:</div>
            <div className="text-white">{price.id}</div>
         </div>
         {/* <div className="flex-1">
            <div className="text-white font-bold">Codigo Cotizacion:</div>
            <div className="text-white">{price.codigoCotizacion}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Cantidad:</div>
            <div className="text-white">{price.cantidad}</div>
         </div> */}
         <div className="flex-1">
            <div className="text-white font-bold">Codigo Producto:</div>
            <div className="text-white">{price.codigoProducto}</div>
         </div>
         {/* <div className="flex-1">
            <div className="text-white font-bold">Destino:</div>
            <div className="text-white">{price.destino}</div>
         </div> */}
         <div className="flex-1">
            <div className="text-white font-bold">Empaque:</div>
            <div className="text-white">{price.empaque}</div>
         </div>
         {/* <div className="flex-1">
            <div className="text-white font-bold">Naturaleza:</div>
            <div className="text-white">{price.naturaleza}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Nro.Remesa:</div>
            <div className="text-white">{price.numeroRemesa}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Origen:</div>
            <div className="text-white">{price.origen}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Pdto. Transportar:</div>
            <div className="text-white">{price.productoTransportar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">sldo. Pagar:</div>
            <div className="text-white">{price.saldoPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Und. Medida:</div>
            <div className="text-white">{price.unidadMedida}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">vlr. Pagar:</div>
            <div className="text-white">{price.valorPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Id. Usuario:</div>
            <div className="text-white">{price.userId}</div>
         </div> */}
         <div>
            <Link to={`/admin/prices/update/${price.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/prices/${price.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}