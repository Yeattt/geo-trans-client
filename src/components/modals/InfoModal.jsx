import { AiOutlineClose } from 'react-icons/ai';
import { ClientsInfos } from '../admin/clients/ClientsInfos'

export const InfoModal = ({ isOpen, model }) => {
   return (
      <>
         {isOpen &&
            <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden">
               <div className="w-2/3 h-auto bg-purplePz rounded-md">
                  <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
                     <h2 className="text-xl text-white font-semibold">Detalles</h2>

                     <span
                        className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                     >
                        < AiOutlineClose />
                     </span>
                  </div>

                  <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
                     <ClientsInfos key={model.id} clients={model}/>
                  </div>
               </div>
            </div>
         }
      </>
   )
}
