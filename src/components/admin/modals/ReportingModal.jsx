import { AiOutlineClose } from 'react-icons/ai';

import {
   ClientsCreateForm,
   CompaniesCreateForm,
   PermissionsCreateForm,
   PrivilegesCreateForm,
   QuotesCreateForm,
   RolesCreateForm,
   TripsCreateForm,
   UsersCreateForm,
   VehiclesCreateForm,
   VehiclesTypeCreateForm,
} from '../../';

import {QuotesReporting} from '../modules/quotes/QuotesReporting'
import {ReporteViajes} from '../modules/trips/ReporteViajes'

export const ReportingModal = ({ handleIsReportingModalActive, module }) => {
   const components = {
      Clients: ClientsCreateForm,
      Companies: CompaniesCreateForm,
      Permissions: PermissionsCreateForm,
      Privileges: PrivilegesCreateForm,
      Quotes: QuotesReporting,
      Roles: RolesCreateForm,
      Trips: ReporteViajes,
      Users: UsersCreateForm,
      Vehicles: VehiclesCreateForm,
      VehiclesType: VehiclesTypeCreateForm
   };

   const ComponentToRender = components[module];

   return (
      <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden z-10">
         <div className="w-3/3 h-auto bg-primary rounded-md">
            <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
               <h2 className="text-xl text-white font-semibold">Generar Informe</h2>

               <span
                  className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                  onClick={() => handleIsReportingModalActive(false)}
               >
                  <AiOutlineClose />
               </span>
            </div>

            <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
            <h3 className="mb-5 text-lg text-center font-normal text-gray-500 dark:text-gray-400">¿En que deseas generar el informe?</h3>
            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {ComponentToRender && <ComponentToRender />}
               <div class="p-6 text-center">
                  
                  
               </div>
            </div>
         </div>
      </div>
   );
}