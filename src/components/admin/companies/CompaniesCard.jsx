import { Link } from 'react-router-dom';

export const CompaniesCard = ({ company }) => {
   return (
        <div
        className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
    >
        <div className="flex-1">
        <div className="text-white font-bold">ID:</div>
        <div className="text-white">{company.id}</div>
        </div>
        <div className="flex-1">
        <div className="text-white font-bold">Nit:</div>
        <div className="text-white">{company.nit}</div>
        </div>
        <div className="flex-1">
        <div className="text-white font-bold">Razon social:</div>
        <div className="text-white">{company.businessname}</div>
        </div>
        <div className="flex-1">
        <div className="text-white font-bold">Nombre empresa:</div>
        <div className="text-white">{company.companyname}</div>
        </div>
        <div className="flex-1">
        <div className="text-white font-bold">Telefono:</div>
        <div className="text-white">{company.phone}</div>
        </div>
        <div className="flex-1">
        <div className="text-white font-bold">Dueño poliza:</div>
        <div className="text-white">{company.ownerpolicy}</div>
        </div>
        <div>
        {/* Agrega aquí los botones de editar, eliminar y ver */}
        <Link to={`/admin/companies/update/${company.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Editar
            </button>
        </Link>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Eliminar
        </button>

        <Link to={`/admin/companies/${company.id}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Ver
            </button>
        </Link>
        </div>
    </div>
   );
}