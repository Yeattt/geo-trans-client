import { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { useSearchModule } from '../../hooks/useSearchModule';

export const SearchModal = ({ setIsSearchModalActive, isSearchModalActive, module, query }) => {
   const [queryResults, setQueryResults] = useState({});
   const { isLoading, data } = useSearchModule(module, query);

   useEffect(() => {
      if (!isLoading) {
         const moduleToLowerCase = module.toLowerCase();

         setQueryResults(data[moduleToLowerCase][0]);

         console.log(queryResults);
      }
   });

   return (
      <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden">
         <div className="w-2/3 h-auto bg-purplePz rounded-md">
            <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
               <h2 className="text-xl text-white font-semibold">Resultados de la búsqueda</h2>

               <span
                  className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                  onClick={() => setIsSearchModalActive(!isSearchModalActive)}
               >
                  <AiOutlineClose />
               </span>
            </div>

            <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
               <div className="grid grid-cols-3 gap-4">
                  {
                     data
                        ? 
                           Object.entries(queryResults).map(([key, value]) => (
                              <td key={key} className="px-7 py-5 text-center font-bold text-black">
                                 {`${key}: ${value}`}
                              </td>
                           ))
                        : 
                           <p className="text-black">No hay resultados para su búsqueda.</p>
                  }
               </div>
            </div>
         </div>
      </div>
   )
}