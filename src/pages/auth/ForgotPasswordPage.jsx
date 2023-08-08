import { AuthLayout} from '../../components';
import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm';


export const ForgotPasswordPage = () => {
   
   return (
      <AuthLayout>
         <div className="w-full h-full">
            <div className="w-[65%] h-14 font-bold text-lg rounded-e-3xl bg-purplePz text-white flex items-center px-5">
               Finaliza tu proceso de recuperacion de contraseña!
            </div>

            <div className="flex flex-col items-center justify-center mt-24">
               <h2 className="text-xl text-purplePz font-bold">Ingresa tu nueva contraseña</h2>

               <br />

               <div className="px-16 w-full h-full">
                  <ForgotPasswordForm />
               </div>
            </div>
         </div>

      </AuthLayout>
   );
}
