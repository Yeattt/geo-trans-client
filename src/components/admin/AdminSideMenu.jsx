export const AdminSideMenu = () => {
   return (
      <div className="flex h-screen bg-gray-800">
         <div className="w-64 bg-gray-900">
            {/* Logo */}
            <div className="flex items-center justify-center h-16">
               <span className="text-white text-lg font-semibold">Admin</span>
            </div>

            {/* Opciones del menú */}
            <nav className="mt-8">
               <div className="space-y-1">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M2 6h16a1 1 0 010 2H2a1 1 0 010-2zm0 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 5h16a1 1 0 010 2H2a1 1 0 010-2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Dashboard
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Usuarios
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Clientes
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Compañías
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Permisos
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Precios
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Roles
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Viajes
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M4 6h12V4H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm0 4h12v-2H4v2zm-2-2H2v2h16v-2H2zm0-4h16v-2H2v2zm0-4h16V6H2v2z"
                           clipRule="evenodd"
                        />
                     </svg>
                     Vehículos
                  </a>
               </div>
            </nav>
         </div>
         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Contenido principal */}
         </div>
      </div>
   );
}