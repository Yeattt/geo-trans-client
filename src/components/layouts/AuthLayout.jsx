import { IoSubway } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const AuthLayout = ({ children }) => {
   return (
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center overflow-hidden">
         <div className="w-[70%] h-[75%] flex relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
               <div className="w-80 h-80 border-8 border-blue-900 rounded-full bg-primary absolute -top-44 -left-96"></div>
               <div className="w-80 h-80 border-8 border-blue-900 rounded-full bg-primary absolute -bottom-44 -right-96"></div>
            </div>

            <div className="relative z-10 w-[10%] sm:w-[30%] md:w-[35%] lg:w-[40%] xl:w-[50%] h-full p-20 bg-primary rounded-s-md flex flex-col items-center justify-center bg-[url('../assets/aut.jpg')] bg-cover">
               <div className="relative z-10 w-32 h-32 border-4 border-primaryHover rounded-full overflow-hidden bg-white mb-10 flex items-center justify-center">
                  <Link to="/" className="relative z-10 w-full h-full flex items-center justify-center">
                     <IoSubway className="text-[500%] text-primaryHover rounded-full" />
                  </Link>
               </div>

               <div className="relative z-10">
                  <h2 className="text-white text-[150%] text-center font-bold mb-10">Bienvenido a GeoTransporte!</h2>
               </div>
            </div>

            <div className="w-[50%] h-full py-10 bg-white rounded-e-md z-10">
               {children}
            </div>
         </div>
      </div>
   );
}
