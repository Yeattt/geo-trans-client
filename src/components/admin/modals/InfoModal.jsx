import { AiOutlineClose } from 'react-icons/ai';
import { useGetApiData } from '../../../hooks';
import { useState, useEffect } from 'react';

export const InfoModal = ({ handleIsInfoModalActive, module }) => {
   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');

   const [vehiclesList, setVehiclesList] = useState([]);
   const [companiesList, setCompaniesList] = useState([]);
   const [rolesList, setRolesList] = useState([]);

   useEffect(() => {
      if (!isVehiclesLoading && !isCompaniesLoading && !isRolesLoading) {
         setVehiclesList(vehicles.vehicles);
         setCompaniesList(companies.companies);
         setRolesList(roles.roles);
      }
   }, [isVehiclesLoading, isCompaniesLoading, isRolesLoading]);

   return (
      <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden z-50">
         <div className="w-2/3 h-auto bg-purplePz rounded-md">
            <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
               <h2 className="text-xl text-white font-semibold">Detalles</h2>

               <span
                  className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                  onClick={() => handleIsInfoModalActive(false)}
               >
                  <AiOutlineClose />
               </span>
            </div>

            <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
               <div className="grid grid-cols-3 gap-4">
                  {
                     Object.entries(module).map(([key, value]) => (
                        // {
                        //    key=='estado' 
                        // }

                        <>
                           {
                              // key === 'registroPendiente' ? value ===
                              key === 'vehicleId' ? vehiclesList.map(vehicles =>(
                                 <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}> {`${key}`} {vehicles.placa}</td>
                              )):
                              key === 'companyId' ? companiesList.map(companies => (
                                 <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}> {`${key}`} {companies.nombreEmpresa}</td>
                              )) :
                                 key === 'roleId' ? rolesList.map(role => (
                                    <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}> {`${key}`} {role.nombre}</td>
                                 )) :
                                    key === 'contrasena' ? null :
                                       key === 'estado'
                                          ?
                                          value === true ?
                                             <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}>
                                                {`${key}:`} <>Activo</></td>
                                             :
                                             <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}>
                                                {`${key}:`}<>Inactivo</></td>
                                          :
                                          <td key={key} className="px-7 py-5 text-center cursor-pointer font-bold" style={{ color: 'blue', textTransform: 'uppercase' }}>
                                             {`${key}: ${value}`}
                                          </td>
                           }
                        </>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
