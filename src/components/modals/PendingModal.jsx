import { AiOutlineClose } from 'react-icons/ai';
import {usePending} from '../../hooks';

export const PendingModal = ({ handleIsPendingModalActive, module, value }) => {
   const { onPending } = usePending(value);
   return (
      <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden">
         <div className="w-3/3 h-auto bg-purplePz rounded-md">
            <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
               <h2 className="text-xl text-white font-semibold">Permitir Registro</h2>

               <span
                  className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                  onClick={() => handleIsPendingModalActive(false)}
               >
                  <AiOutlineClose />
               </span>
            </div>

            <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
               {/* <div className="grid grid-cols-1 gap-4">
                 <h3>¿Desea cambiar el estado de {module.id}?</h3>
                 <button onClick={() => onPending(module.id)}>
                    Si
                 </button>
                 <button onClick={() => handleIsPendingModalActive(false)}>
                    No
                 </button>
               </div> */}
               <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Seguro que deseas permitir el registro?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => onPending(module.id)}>
                    Si, Seguro
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => handleIsPendingModalActive(false)}>No, Cancelar</button>
            </div>
            </div>
         </div>
      </div>
   )
}