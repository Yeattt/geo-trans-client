import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';

import { InfoModal, PendingModal } from '../../';
import { useAllowedPrivileges, useGetApiData } from '../../../../hooks';
import { useEffect } from 'react';

export const PendingCard = ({ user }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpen, setIsOpen] = useState(false)
   const [isOpenUpdate, setisOpenUpdate] = useState(false)

   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');

   const [vehiclesList, setVehiclesList] = useState([]);
   const [companiesList, setCompaniesList] = useState([]);
   const [rolesList, setRolesList] = useState([]);


   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isPendingModalActive, setIsPendingModalActive] = useState(false);

   const handleIsPendingModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsPendingModalActive(status);
   };

   useEffect(() => {
      if (!isVehiclesLoading && !isCompaniesLoading && !isRolesLoading) {
         setVehiclesList(vehicles.vehicles);
         setCompaniesList(companies.companies);
         setRolesList(roles.roles);
      }
   }, [isVehiclesLoading, isCompaniesLoading, isRolesLoading]);

   return (

      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{user.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.documento}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.edad}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{user.email}</td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               rolesList.map(role => {
                  if (role.id === user.roleId) return role.nombre
               })
            }
         </td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               companiesList.map(company => {
                  if (company.id === user.companyId) return company.nombreEmpresa
               })
            }
         </td>
         <td className="hidden 2xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               vehiclesList.map(vehicle => {
                  if (vehicle.id === user.vehicleId) return vehicle.placa
               })
            }
         </td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               !user.registroPendiente
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsPendingModalActive(true)}>Registrado</button>
                  :
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => handleIsPendingModalActive(true)}>Sin Registrar</button>
            }
            {
               isPendingModalActive && <PendingModal handleIsPendingModalActive={handleIsPendingModalActive} module={user} value={'users'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span>
            {
             <Button onClick={() => handleIsInfoModalActive(true)} variant="outlined" endIcon={<InfoIcon />}>Info</Button>
            }
         </span>

         {/* // * IMPORTANTE: Prueba del modal para ver información */}
         {
            isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={user} />
         }


         {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
      </td>
      </tr >
   );
}