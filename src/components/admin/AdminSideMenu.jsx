import { useSelector } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';

import { FaMoneyCheckAlt, FaTruck, FaTruckLoading, FaUsersCog, FaUserCog } from 'react-icons/fa';
import { BsBuildingFillGear, BsClipboard2CheckFill } from 'react-icons/bs';
import { RiUserStarFill, RiCloseCircleLine } from 'react-icons/ri';
import { MdAdminPanelSettings, MdAssignmentAdd } from 'react-icons/md';
import { IoSubway } from 'react-icons/io5';
import { TbCalendarStats } from 'react-icons/tb';

export const AdminSideMenu = ({ toggleMenu }) => {
   const isSideMenuOpen = useSelector((state) => state.sideMenu);

   return (
      <div className={`flex w-64 h-screen z-10 ${isSideMenuOpen ? 'fixed' : 'hidden lg:block'}`}>
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

            <nav className="mt-8 flex justify-end">
               <div className="space-y-1 w-[95%]">
                  <NavLink to="/admin/users" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaUsersCog />
                     </span>

                     <span className="text-[15px]">
                        Usuarios
                     </span>
                  </NavLink>

                  <NavLink to="/admin/users/allow" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaUsersCog />
                     </span>

                     <span className="text-[15px]">
                        Usuarios Pendientes
                     </span>
                  </NavLink>

                  <NavLink to="/admin/clients" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200': 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <RiUserStarFill />
                     </span>

                     <span className="text-[15px]">
                        Clientes
                     </span>
                  </NavLink>

                  <NavLink to="/admin/companies" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <BsBuildingFillGear />
                     </span>

                     <span className="text-[15px]">
                        Compañías
                     </span>
                  </NavLink>

                  <NavLink to="/admin/permissions" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <BsClipboard2CheckFill />
                     </span>

                     <span className="text-[15px]">
                        Permisos
                     </span>
                  </NavLink>

                  <NavLink to="/admin/assignpermissions" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <MdAssignmentAdd />
                     </span>

                     <span className="text-[15px]">
                        Asignar Permisos
                     </span>
                  </NavLink>

                  <NavLink to="/admin/quotes" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaMoneyCheckAlt />
                     </span>

                     <span className="text-[15px]">
                        Cotizaciones
                     </span>
                  </NavLink>

                  <NavLink to="/admin/roles" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaUserCog />
                     </span>

                     <span className="text-[15px]">
                        Roles
                     </span>
                  </NavLink>

                  <NavLink to="/admin/trips" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <IoSubway />
                     </span>

                     <span className="text-[15px]">
                        Viajes
                     </span>
                  </NavLink>

                  <NavLink to="/admin/vehicles" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaTruck />
                     </span>

                     <span className="text-[15px]">
                        Vehículos
                     </span>
                  </NavLink>

                  <NavLink to="/admin/trucks/types" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <FaTruckLoading />
                     </span>

                     <span className="text-[15px]">
                        Tipos Vehículos
                     </span>
                  </NavLink>

                  <NavLink to="/admin/calendar" className={
                     ({ isActive }) =>
                        `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-purplePzHover hover:text-white '}`}
                  >
                     <span className="w-7 h-7 mr-3 bg-primaryHover text-white text-xl flex items-center justify-center">
                        <TbCalendarStats />
                     </span>

                     <span className="text-[15px]">
                        Agenda
                     </span>
                  </NavLink>
               </div>
            </nav>
         </div >
         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Contenido principal */}
         </div>
      </div >
   );
}