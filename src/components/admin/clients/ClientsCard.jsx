import { Link } from 'react-router-dom';

export const ClientsCard = ({ client }) => {
   return (
    <div                              
    className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
 >
    <div className="flex-1">
       <div className="text-white font-bold">ID:</div>
       <div className="text-white">{client.id}</div>
    </div>
    <div className="flex-1">
       <div className="text-white font-bold">Documento:</div>
       <div className="text-white">{client.documento}</div>
    </div>
    <div className="flex-1">
       <div className="text-white font-bold">Nombre:</div>
       <div className="text-white">{client.nombre}</div>
    </div>
    <div className="flex-1">
       <div className="text-white font-bold">Razon social:</div>
       <div className="text-white">{client.razonSocial}</div>
    </div>
    <div className="flex-1">
       <div className="text-white font-bold">phone:</div>
       <div className="text-white">{client.telefono}</div>
    </div>

    <div>
       {/* Agrega aquí los botones de editar, eliminar y ver */}
       <Link to={`/admin/clients/update/${client.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
             Editar
          </button>
       </Link>

       <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
          Eliminar
       </button>

       <Link to={`/admin/clients/${client.id}`}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
             Ver
          </button>
       </Link>
    </div>
 </div>
   );
}