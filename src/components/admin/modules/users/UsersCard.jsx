import { useState, useEffect } from 'react';

import { FaEdit } from 'react-icons/fa';
import { TbInfoHexagon } from 'react-icons/tb';
import { useAllowedPrivileges, useGetApiData } from '../../../../hooks';
import { InfoModal, DeleteModal, UpdateModal } from '../../';

export const UsersCard = ({ user }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');

   const [vehiclesList, setVehiclesList] = useState([]);
   const [companiesList, setCompaniesList] = useState([]);
   const [rolesList, setRolesList] = useState([]);

   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenUpdate, setisOpenUpdate] = useState(false);

   const handleViewDetails = () => {
      setIsOpen(!isOpen)
   }

   const handleUpdateClick = () => {
      setisOpenUpdate(!isOpenUpdate)
   }

   const handleIsInfoModalActive = (status) => {
      setIsInfoModalActive(status);
   };

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      setIsDeleteModalActive(status);
   };

   useEffect(() => {
      if (!isVehiclesLoading && !isCompaniesLoading && !isRolesLoading) {
         setVehiclesList(vehicles.vehicles);
         setCompaniesList(companies.companies);
         setRolesList(roles.roles);
      }
   }, [isVehiclesLoading, isCompaniesLoading, isRolesLoading]);
   console.log(user.linkPlataforma)
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
               user.estado
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={user} value={'users'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               <a href={user.linkPlataforma}>Plataforma</a>
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <span
               className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer mr-5"
               onClick={() => handleIsInfoModalActive(true)}
            >
               <TbInfoHexagon />
            </span>

            {/* // * IMPORTANTE: Prueba del modal para ver información */}
            {
               isInfoModalActive && <InfoModal handleIsInfoModalActive={handleIsInfoModalActive} module={user} />
            }

            <span className="text-2xl text-purplePz hover:text-purplePzHover cursor-pointer">
               {
                  userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
                  <FaEdit onClick={handleUpdateClick} />
               }
               <UpdateModal isOpenUpdate={isOpenUpdate} module="Users" moduleInfo={user} handleUpdateClick={handleUpdateClick} />
            </span>

            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}