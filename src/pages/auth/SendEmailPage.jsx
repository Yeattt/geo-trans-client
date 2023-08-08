import { AuthLayout } from '../../components';
import { SendEmailForm } from '../../components/auth/SendEmailForm';

export const SendEmailPage = () => {
   return (
      <AuthLayout>
         <div className="w-full h-full">
            <div className="w-[65%] h-14 font-bold text-lg rounded-e-3xl bg-purplePz text-white flex items-center px-5">
               Recupera tu contraseña!
            </div>

            <div className="flex flex-col items-center justify-center mt-24">
               <h2 className="text-xl text-purplePz font-bold">Ingresa correo registrado</h2>

               <br />

               <div className="px-16 w-full h-full">
                  <SendEmailForm />
               </div>
            </div>
         </div>

      </AuthLayout>
   );
}
