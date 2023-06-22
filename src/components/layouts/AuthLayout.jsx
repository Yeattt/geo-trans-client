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

            <div className="relative z-10 w-[50%] h-full p-20 bg-primary rounded-s-md flex flex-col items-center bg-[url('../assets/aut.jpg')] bg-cover">
               <div className="relative z-10 w-44 h-44 border-4 border-primaryHover rounded-full overflow-hidden bg-white mb-10 flex items-center justify-center">
                  <Link to="/" className="relative z-10 w-full h-full flex items-center justify-center">
                     <IoSubway className="text-8xl text-primaryHover rounded-full" />
                  </Link>
               </div>

               <div className="relative z-10">
                  <h2 className="text-white text-4xl font-bold mb-10">Bienvenido a GeoTransporte!</h2>

                  <p className="text-white font-semibold">
                     Recuerda que si aún no estás registrado, puedes hacerlo dando click en "Registrar Cuenta",
                     lo cuál te redireccionará a la página con el formulario de registro.

                     <br />
                     <br />

                     Una vez registrado debes esperar a ser aceptado para que tu cuenta entre en funcionamiento.
                  </p>
               </div>
            </div>

            <div className="w-[50%] h-full py-10 bg-white rounded-e-md z-10">
               {children}
            </div>
         </div>
      </div>
   );
}
