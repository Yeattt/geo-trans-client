import { useSelector } from 'react-redux';

import { Link, NavLink } from 'react-router-dom';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import SendIcon from '@mui/icons-material/Send';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { RiCloseCircleLine } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../../hooks';
import { geoTransApi } from '../../../api';

export const AdminSideMenu = ({ toggleMenu }) => {
   const [vehiclesDropMenu, setVehiclesDropMenu] = useState(true);
   const [rolesDropMenu, setRolesDropMenu] = useState(true);
   const [usersDropMenu, setUsersDropMenu] = useState(true);
   const isSideMenuOpen = useSelector((state) => state.sideMenu);
   const { user } = useAuthStore();
   const [userPermissions, setUserPermissions] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const roleId = user.roleId;

      const getApiData = async () => {
         try {
            const { data } = await geoTransApi.get(`/roles/${roleId}`);

            setUserPermissions(data.role.permisos);
            setIsLoading(false);
         } catch (error) {
            throw new Error(error);
         }
      }

      getApiData();
   }, [user]);

   const handleVehiclesDropMenu = () => {
      setVehiclesDropMenu(!vehiclesDropMenu);
   }

   const handleRolesDropMenu = () => {
      setRolesDropMenu(!rolesDropMenu);
   }

   const handleUsersDropMenu = () => {
      setUsersDropMenu(!usersDropMenu);
   }

   const hasPermission = (permissionName) => {
      return userPermissions.some((permission) => permission.nombre.toLowerCase().trim() === permissionName.toLowerCase().trim());
   };

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
               <span className="w-36 h-36 border-4 border-gray-300 rounded-full overflow-hidden bg-white mb-10 cursor-pointer">
                  <Link to="/admin/vehicles" className="w-full h-full flex items-center justify-center">
                     <span className="text-8xl text-primary rounded-full">
                        <MdAdminPanelSettings />
                     </span>
                  </Link>
               </span>
            </div>


            {/* <nav className="mt-8 flex justify-end">
               <div className="space-y-1 w-[95%]">
                  {
                     hasPermission('usuarios') && (
                        <NavLink to="/admin/users" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                           ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaUsersCog />
                           </span>

                           <span className="text-[15px]">
                              Usuarios
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('usuarios') && (
                        <NavLink to="/admin/users/allow" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaUsersCog />
                           </span>

                           <span className="text-[15px]">
                              Usuarios Pendientes
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('clientes') && (
                        <NavLink to="/admin/clients" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <RiUserStarFill />
                           </span>

                           <span className="text-[15px]">
                              Clientes
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('compañias') && (
                        <NavLink to="/admin/companies" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <BsBuildingFillGear />
                           </span>

                           <span className="text-[15px]">
                              Compañías
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('permisos') && (
                        <NavLink to="/admin/permissions" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <BsClipboard2CheckFill />
                           </span>

                           <span className="text-[15px]">
                              Permisos
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('privilegios') && (
                        <NavLink to="/admin/privileges" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <BsClipboard2CheckFill />
                           </span>

                           <span className="text-[15px]">
                              Privilegios
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('cotizaciones') && (
                        <NavLink to="/admin/quotes" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaMoneyCheckAlt />
                           </span>

                           <span className="text-[15px]">
                              Cotizaciones
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('roles') && (
                        <NavLink to="/admin/roles" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaUserCog />
                           </span>

                           <span className="text-[15px]">
                              Roles
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('viajes') && (
                        <NavLink to="/admin/trips" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <IoSubway />
                           </span>

                           <span className="text-[15px]">
                              Viajes
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('vehiculos') && (
                        <NavLink to="/admin/vehicles" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaTruck />
                           </span>

                           <span className="text-[15px]">
                              Vehículos
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('tipos') && (
                        <NavLink to="/admin/trucks/types" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <FaTruckLoading />
                           </span>

                           <span className="text-[15px]">
                              Tipos Vehículos
                           </span>
                        </NavLink>
                     )
                  }

                  {
                     hasPermission('agenda') && (
                        <NavLink to="/admin/calendar" className={
                           ({ isActive }) =>
                              `transition-all cursor-pointer rounded-l-full flex items-center px-4 py-2 font-bold
                        ${isActive ? 'bg-gray-200' : 'text-white hover:bg-primaryHover hover:text-white '}`}
                        >
                           <span className="w-7 h-7 mr-3 text-xl flex items-center justify-center">
                              <TbCalendarStats />
                           </span>

                           <span className="text-[15px]">
                              Agenda
                           </span>
                        </NavLink>
                     )
                  }
               </div>
            </nav> */}

            <List
               className="bg-primary text-white"
               component="nav"
               aria-labelledby="nested-list-subheader"
            >
               <ListItemButton onClick={handleRolesDropMenu}>
                  <ListItemIcon>
                     <EngineeringIcon className="text-white" />
                  </ListItemIcon>

                  <ListItemText primary="Roles" />

                  {rolesDropMenu ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>

               <Collapse in={rolesDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Permisos" />
                     </ListItemButton>

                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Privilegios" />
                     </ListItemButton>

                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Roles" />
                     </ListItemButton>
                  </List>
               </Collapse>

               <ListItemButton onClick={handleUsersDropMenu}>
                  <ListItemIcon>
                     <ManageAccountsIcon className="text-white" />
                  </ListItemIcon>

                  <ListItemText primary="Usuarios" />

                  {usersDropMenu ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>

               <Collapse in={usersDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Usuarios" />
                     </ListItemButton>

                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Pendientes" />
                     </ListItemButton>
                  </List>
               </Collapse>

               <ListItemButton onClick={handleVehiclesDropMenu}>
                  <ListItemIcon>
                     <LocalShippingIcon className="text-white" />
                  </ListItemIcon>

                  <ListItemText primary="Vehículos" />

                  {vehiclesDropMenu ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>

               <Collapse in={vehiclesDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Vehículos" />
                     </ListItemButton>

                     <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                        <ListItemText sx={{ display: 'list-item' }} primary="Tipos Vehículos" />
                     </ListItemButton>
                  </List>
               </Collapse>
            </List>

         </div >
         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Contenido principal */}
         </div>
      </div >
   );
}











