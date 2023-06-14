import { useState } from 'react';

import {
   RiMenu3Fill,
   RiCloseLine,
} from 'react-icons/ri';

export const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   return (
      <header className="flex items-center justify-between font-bold xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
         <div className="xl:w-1/6 text-center -mt-4">
            <span className="text-2xl font-bold relative p-1 bg-white">
               <span className="cursor-pointer">GeoTransporte</span>
            </span>
         </div>
         <nav
            className={
               `fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
               }
               top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`
            }
         >
            <ul className="flex gap-10">
               <li className="cursor-pointer transition duration-300 border-transparent hover:border-b-4 hover:border-b-primary">
                  Inicio
               </li>
               <li className="cursor-pointer transition duration-300 border-transparent hover:border-b-4 hover:border-b-primary">
                  Sobre Nosotros
               </li>
               <li className="cursor-pointer transition duration-300 border-b-4 border-transparent hover:border-b-primary">
                  Servicios
               </li>
            </ul>
         </nav>
         <button
            onClick={() => setShowMenu(!showMenu)}
            className="xl:hidden text-2xl p-2"
         >
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
         </button>
      </header>
   );
}