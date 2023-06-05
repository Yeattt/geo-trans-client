import { IoSubway } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const AuthLayout = ({ children }) => {
   return (
      <div className="w-screen h-screen bg-gradient-to-br from-pinkPz to-purplePz flex items-center justify-center">
         <div className="w-[70%] h-[75%] flex">
            <div className="w-[60%] h-full p-20 bg-purplePz rounded-s-md flex flex-col items-center bg-[url('../assets/auth-banner.jpg')] bg-cover">
               <div className="w-44 h-44 border-4 border-purplePz rounded-full overflow-hidden bg-white mb-10 flex items-center justify-center cursor-pointer">
                  <Link to="/" className="w-full h-full flex items-center justify-center">
                     <span className="text-8xl text-purplePz rounded-full">
                        <IoSubway />
                     </span>
                  </Link>
               </div>


               <h2 className="text-white text-4xl font-bold mb-10">Bienvenido a GeoTransporte!</h2>

               <p className="text-white font-semibold">
                  Recuerda que si aún no estás registrado, puedes hacerlo dando click en "Registrar Cuenta",
                  lo cuál te redireccionará a la página con el formulario de registro.

                  <br />
                  <br />

                  Una vez registrado debes esperar a ser aceptado para que tu cuenta entre en funcionamiento.
               </p>
            </div>

            <div className="w-[40%] h-full py-10 bg-white rounded-e-md">
               {children}
            </div>
         </div>
      </div>
   );
}