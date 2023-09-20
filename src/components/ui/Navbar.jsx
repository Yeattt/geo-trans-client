import { Link } from 'react-router-dom';

export const Navbar = () => {

   return (
      <header className="flex items-center justify-between font-bold xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
         <div className="xl:w-1/6 text-center -mt-4">
            <span className="text-2xl font-bold relative p-1 bg-white">
               <span className="cursor-pointer">GeoTransporte</span>
            </span>
         </div>
         <nav
            className={
               `bg-white w-full h-full "-left-full"
               }
               top-0 static flex-1 flex flex-row items-center justify-center gap-10 transition-all duration-500 z-50`
            }
         >
            <ul className="flex gap-10">
               <Link to="auth/signin">
                  <li className="cursor-pointer transition duration-300 border-transparent hover:border-b-4 hover:border-b-primary">
                     Iniciar sesión
                  </li>
               </Link>
            </ul>
         </nav>
      </header>
   );
}