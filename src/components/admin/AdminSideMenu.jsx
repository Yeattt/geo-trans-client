import { Link } from 'react-router-dom';

import { FaMoneyCheckAlt, FaTruckMoving, FaUsersCog, FaUserCog  } from 'react-icons/fa';
import { BsBuildingFillGear, BsClipboard2CheckFill } from 'react-icons/bs';
import { RiUserStarFill } from 'react-icons/ri';
import { IoSubway } from 'react-icons/io5';

export const AdminSideMenu = () => {
   return (
      <div className="flex h-screen">
         <div className="hidden lg:block lg:w-64 bg-purplePz">
            <div className="flex items-center justify-center h-16">
               <span className="text-white text-lg font-semibold">Admin</span>
            </div>

            <nav className="mt-8">
               <div className="space-y-1">
                  <Link to="/admin/users">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaUsersCog />
                        </span>
                        Usuarios
                     </li>
                  </Link>
                  <Link to="/admin/users/allow">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaUsersCog />
                        </span>
                        Usuarios Pendientes
                     </li>
                  </Link>

                  <Link to="/admin/clients">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <RiUserStarFill />
                        </span>
                        Clientes
                     </li>
                  </Link>

                  <Link to="/admin/companies">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <BsBuildingFillGear />
                        </span>
                        Compañías
                     </li>
                  </Link>

                  <Link to="/admin/permissions">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <BsClipboard2CheckFill />
                        </span>
                        Permisos
                     </li>
                  </Link>

                  <Link to="/admin/quotes">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaMoneyCheckAlt />
                        </span>
                        Cotizaciones
                     </li>
                  </Link>

                  <Link to="/admin/roles">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaUserCog />
                        </span>
                        Roles
                     </li>
                  </Link>

                  <Link to="/admin/trips">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <IoSubway />
                        </span>
                        Viajes
                     </li>
                  </Link>

                  <Link to="/admin/vehicles">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaTruckMoving />
                        </span>
                        Vehículos
                     </li>
                  </Link>

                  <Link to="/admin/trucks/types">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-5 h-5 mr-2 text-white text-xl">
                           <FaTruckMoving />
                        </span>
                        Tipo Vehículos
                     </li>
                  </Link>
               </div>
            </nav>
         </div>
         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Contenido principal */}
         </div>
      </div>
   );
}