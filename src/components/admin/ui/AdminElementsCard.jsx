import { useEffect, useState } from 'react';

import { FaMoneyCheckAlt, FaTruck, FaTruckLoading, FaUsersCog, FaUserCog } from 'react-icons/fa';
import { BsBuildingFillGear, BsClipboard2CheckFill } from 'react-icons/bs';
import { RiUserStarFill } from 'react-icons/ri';
import { IoSubway } from 'react-icons/io5';
import { useVehiclesStore } from '../../../hooks';

const moduleConfig = {
   AssignPermissions: {
      translation: 'Asignar Permisos',
      icon: BsClipboard2CheckFill
   },
   Clients: {
      translation: 'Clientes',
      icon: RiUserStarFill
   },
   Companies: {
      translation: 'Compañías',
      icon: BsBuildingFillGear
   },
   Permissions: {
      translation: 'Permisos',
      icon: BsClipboard2CheckFill
   },
   Privileges: {
      translation: 'Privilegios',
      icon: FaUserCog
   },
   Quotes: {
      translation: 'Cotizaciones',
      icon: FaMoneyCheckAlt
   },
   Roles: {
      translation: 'Roles',
      icon: FaUserCog
   },
   Trips: {
      translation: 'Viajes',
      icon: IoSubway
   },
   Users: {
      translation: 'Usuarios',
      icon: FaUsersCog
   },
   Vehicles: {
      translation: 'Vehículos',
      icon: FaTruck
   },
   VehiclesType: {
      translation: 'Tipos de vehículos',
      icon: FaTruckLoading
   }
}

export const AdminElementsCard = ({ module = '', data }) => {
   const [activeData, setActiveData] = useState([]);
   const [inactiveData, setInactiveData] = useState([]);

   const handleCardStatus = () => {
      const activeDataArray = data.filter(data => data.estado === true);
      const inactiveDataArray = data.filter(data => data.estado === false);

      setActiveData(activeDataArray);
      setInactiveData(inactiveDataArray);
   }

   useEffect(() => {
      handleCardStatus();
   }, [data]);

   const moduleInfo = moduleConfig[module];
   const IconModule = moduleInfo.icon;

   return (
      <>
         <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="bg-primary rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
               <div className="flex flex-row justify-center items-center">
                  <div className="text-xl flex items-center justify-center">
                     <span className="border-[2.5px] border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                        <IconModule className="text-3xl text-greenPz" />
                     </span>

                     <div className="flex flex-col justify-center">
                        <span className="font-bold text-white">{activeData.length}</span>
                        <span className="text-sm text-white font-bold">{moduleInfo.translation} activos</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-primary rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4 mb-4 md:mb-0">
               <div className="flex flex-row justify-center items-center">
                  <div className="text-xl flex items-center justify-center">
                     <span className="border-[2.5px] border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                        <IconModule className="text-3xl text-orangePz" />
                     </span>

                     <div className="flex flex-col justify-center">
                        <span className="font-bold text-white">{inactiveData.length}</span>
                        <span className="text-sm text-white font-bold">{moduleInfo.translation} inactivos</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-primary rounded-md h-32 md:w-[27%] flex flex-col items-center justify-center px-6 py-4">
               <div className="flex flex-row justify-center items-center">
                  <div className="text-xl flex items-center justify-center">
                     <span className="border-[2.5px] border-gray-300 bg-white w-16 h-16 rounded-full flex justify-center items-center mr-6">
                        <IconModule className="text-3xl text-purplePz" />
                     </span>

                     <div className="flex flex-col justify-center">
                        <span className="font-bold text-white">{data.length}</span>
                        <span className="text-sm text-white font-bold">{moduleInfo.translation} en total</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}