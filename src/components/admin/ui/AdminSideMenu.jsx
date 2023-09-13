import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

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
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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

            <List
               className="bg-primary text-white"
               component="nav"
               aria-labelledby="nested-list-subheader"
            >
               {hasPermission('roles') && (
                  <ListItemButton onClick={handleRolesDropMenu}>
                     <ListItemIcon>
                        <EngineeringIcon className="text-white" />
                     </ListItemIcon>

                     <ListItemText primary="Roles" />

                     {rolesDropMenu ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
               )}

               <Collapse in={rolesDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <Link to="/admin/permissions">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Permisos" />
                        </ListItemButton>
                     </Link>

                     <Link to="/admin/privileges">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Privilegios" />
                        </ListItemButton>
                     </Link>

                     <Link to="/admin/roles">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Roles" />
                        </ListItemButton>
                     </Link>
                  </List>
               </Collapse>

               {hasPermission('usuarios') && (
                  <ListItemButton onClick={handleUsersDropMenu}>
                     <ListItemIcon>
                        <ManageAccountsIcon className="text-white" />
                     </ListItemIcon>

                     <ListItemText primary="Usuarios" />

                     {usersDropMenu ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
               )}

               <Collapse in={usersDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <Link to="/admin/users">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Usuarios" />
                        </ListItemButton>
                     </Link>

                     <Link to="/admin/users/allow">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Pendientes" />
                        </ListItemButton>
                     </Link>
                  </List>
               </Collapse>

               {hasPermission('vehiculos') && (
                  <ListItemButton onClick={handleVehiclesDropMenu}>
                     <ListItemIcon>
                        <LocalShippingIcon className="text-white" />
                     </ListItemIcon>

                     <ListItemText primary="Vehículos" />

                     {vehiclesDropMenu ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
               )}

               <Collapse in={vehiclesDropMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <Link to="/admin/vehicles">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Vehículos" />
                        </ListItemButton>
                     </Link>

                     <Link to="/admin/trucks/types">
                        <ListItemButton sx={{ pl: 11, listStyleType: 'disc' }}>
                           <ListItemText sx={{ display: 'list-item' }} primary="Tipos Vehículos" />
                        </ListItemButton>
                     </Link>
                  </List>
               </Collapse>

               {hasPermission('clientes') && (
                  <Link to="/admin/clients">
                     <ListItemButton>
                        <ListItemIcon>
                           <SupervisedUserCircleIcon className="text-white" />
                        </ListItemIcon>

                        <ListItemText primary="Clientes" className="text-white" />
                     </ListItemButton>
                  </Link>
               )}

               {hasPermission('compañias') && (
                  <Link to="/admin/companies">
                     <ListItemButton>
                        <ListItemIcon>
                           <ApartmentIcon className="text-white" />
                        </ListItemIcon>

                        <ListItemText primary="Compañías" className="text-white" />
                     </ListItemButton>
                  </Link>
               )}

               {hasPermission('viajes') && (
                  <Link to="/admin/trips">
                     <ListItemButton>
                        <ListItemIcon>
                           <ModeOfTravelIcon className="text-white" />
                        </ListItemIcon>

                        <ListItemText primary="Viajes" className="text-white" />
                     </ListItemButton>
                  </Link>
               )}

               {hasPermission('cotizaciones') && (
                  <Link to="/admin/quotes">
                     <ListItemButton>
                        <ListItemIcon>
                           <RequestQuoteIcon className="text-white" />
                        </ListItemIcon>

                        <ListItemText primary="Cotizaciones" className="text-white" />
                     </ListItemButton>
                  </Link>
               )}

               {hasPermission('agenda') && (
                  <Link to="/admin/calendar">
                     <ListItemButton>
                        <ListItemIcon>
                           <CalendarMonthIcon className="text-white" />
                        </ListItemIcon>

                        <ListItemText primary="Agenda" className="text-white" />
                     </ListItemButton>
                  </Link>
               )}
            </List>

         </div >
         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Contenido principal */}
         </div>
      </div >
   );
}











