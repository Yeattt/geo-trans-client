import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { FaMoneyCheckAlt, FaTruck, FaTruckLoading, FaUsersCog, FaUserCog } from 'react-icons/fa';
import { BsBuildingFillGear, BsClipboard2CheckFill } from 'react-icons/bs';
import { RiUserStarFill, RiCloseCircleLine } from 'react-icons/ri';
import { MdAdminPanelSettings, MdAssignmentAdd } from 'react-icons/md';
import { IoSubway } from 'react-icons/io5';

export const AdminSideMenu = ({ toggleMenu }) => {
   const isSideMenuOpen = useSelector((state) => state.sideMenu);

   return (
      <div className={`flex w-64 h-screen ${isSideMenuOpen ? 'fixed' : 'hidden lg:block'}`}>
         <div className={`h-full w-full bg-primary`}>
            <div className="flex items-center justify-center h-16">
               <span className="block lg:hidden text-red-600 transition hover:text-red-800 text-2xl mr-2 cursor-pointer">
                  <RiCloseCircleLine onClick={toggleMenu} />
               </span>

               <span className="text-white text-lg font-semibold">Panel Administrativo</span>
            </div>

            <div className="flex items-center justify-center border-b-2 border-white">
               <span className="w-36 h-36 border-4 border-primaryHover rounded-full overflow-hidden bg-white mb-10 cursor-pointer">
                  <Link to="/admin/vehicles" className="w-full h-full flex items-center justify-center">
                     <span className="text-8xl text-primary rounded-full">
                        <MdAdminPanelSettings />
                     </span>
                  </Link>
               </span>
            </div>

            <nav className="mt-8">
               <div className="space-y-1">
                  <Link to="/admin/users">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaUsersCog />
                        </span>

                        <span className="text-[15px]">
                           Usuarios
                        </span>
                     </li>
                  </Link>
                  <Link to="/admin/users/allow">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaUsersCog />
                        </span>

                        <span className="text-[15px]">
                           Usuarios Pendientes
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/clients">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <RiUserStarFill />
                        </span>

                        <span className="text-[15px]">
                           Clientes
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/companies">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <BsBuildingFillGear />
                        </span>

                        <span className="text-[15px]">
                           Compañías
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/permissions">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <BsClipboard2CheckFill />
                        </span>

                        <span className="text-[15px]">
                           Permisos
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/assignpermissions">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <MdAssignmentAdd />
                        </span>

                        Asignar Permisos
                     </li>
                  </Link>

                  <Link to="/admin/quotes">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaMoneyCheckAlt />
                        </span>

                        <span className="text-[15px]">
                           Cotizaciones
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/roles">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaUserCog />
                        </span>

                        <span className="text-[15px]">
                           Roles
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/trips">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <IoSubway />
                        </span>

                        <span className="text-[15px]">
                           Viajes
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/vehicles">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <div className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaTruck />
                        </div>

                        <span className="text-[15px]">
                           Vehículos
                        </span>
                     </li>
                  </Link>

                  <Link to="/admin/trucks/types">
                     <li className="cursor-pointer flex items-center px-4 py-2 font-bold text-white hover:text-white hover:bg-purplePzHover">
                        <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                           <FaTruckLoading />
                        </span>

                        <span className="text-[15px]">
                           Tipos Vehículos
                        </span>
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