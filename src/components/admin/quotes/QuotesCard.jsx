import { Link } from 'react-router-dom';

export const QuotesCard = ({ quote }) => {
   return (
      <div
         className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
      >
         <div className="flex-1">
            <div className="text-white font-bold">ID:</div>
            <div className="text-white">{quote.id}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Codigo Cotizacion:</div>
            <div className="text-white">{quote.codigoCotizacion}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Cantidad:</div>
            <div className="text-white">{quote.cantidad}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Codigo Producto:</div>
            <div className="text-white">{quote.codigoProducto}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Codigo Producto:</div>
            <div className="text-white">{quote.destino}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Empaque:</div>
            <div className="text-white">{quote.empaque}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Naturaleza:</div>
            <div className="text-white">{quote.naturaleza}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Nro.Remesa:</div>
            <div className="text-white">{quote.numeroRemesa}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Origen:</div>
            <div className="text-white">{quote.origen}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Pdto. Transportar:</div>
            <div className="text-white">{quote.productoTransportar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">sldo. Pagar:</div>
            <div className="text-white">{quote.saldoPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Und. Medida:</div>
            <div className="text-white">{quote.unidadMedida}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">vlr. Pagar:</div>
            <div className="text-white">{quote.valorPagar}</div>
         </div>
         <div className="flex-1">
            <div className="text-white font-bold">Id. Usuario:</div>
            <div className="text-white">{quote.userId}</div>
         </div>
         <div>
            <Link to={`/admin/quotes/update/${quote.id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
               </button>
            </Link>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
               Eliminar
            </button>

            <Link to={`/admin/quotes/${quote.id}`}>
               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver
               </button>
            </Link>
         </div>
      </div>
   );
}