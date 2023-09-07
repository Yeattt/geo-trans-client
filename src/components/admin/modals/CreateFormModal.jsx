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

export const CreateFormModal = ({ handleIsCreateModalActive, module, handleRefreshData }) => {
   const components = {
      Clients: ClientsCreateForm,
      Companies: CompaniesCreateForm,
      Permissions: PermissionsCreateForm,
      Privileges: PrivilegesCreateForm,
      Quotes: QuotesCreateForm,
      Roles: RolesCreateForm,
      Trips: TripsCreateForm,
      Users: UsersCreateForm,
      Vehicles: VehiclesCreateForm,
      VehiclesType: VehiclesTypeCreateForm
   };

   const ComponentToRender = components[module];

   return (
      <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden z-30">
         <div className="w-2/3 h-auto bg-purplePz rounded-md">
            <div className="w-full h-[55px] bg-primary rounded-md flex items-center justify-between px-2">
               <h2 className="text-xl text-white font-semibold">Crear</h2>

               <span
                  className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                  onClick={() => handleIsCreateModalActive(false)}
               >
                  <AiOutlineClose />
               </span>
            </div>

            <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
               {ComponentToRender && <ComponentToRender handleRefreshData={handleRefreshData} />}
            </div>
         </div>
      </div>
   );
}