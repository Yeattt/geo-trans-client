import { Link } from 'react-router-dom';

export const AdimnNavbar = () => {
   return (
      <nav className="bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex-shrink-0">
                  <a href="#" className="text-white text-lg font-semibold">Geotransporte</a>
               </div>
               <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     <ul>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Usuarios</a>

                        <Link to="/admin/clients/">
                           <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                              Clientes
                           </li>
                        </Link>

                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Compañías</a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Permisos</a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Precios</a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Roles</a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Viajes</a>

                        <Link to="/admin/vehicles">
                           <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                              Vehículos
                           </li>
                        </Link>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}