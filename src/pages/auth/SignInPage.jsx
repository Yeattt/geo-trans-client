import { AuthLayout, SignInForm } from '../../components';

export const SignInPage = () => {
   return (
      <AuthLayout>
         <div className="w-full h-full">
            <div className="w-[65%] h-14 font-bold text-lg rounded-e-3xl bg-primary text-white flex items-center px-5">
               Bienvenido de vuelta!
            </div>

            <div className="flex flex-col items-center justify-center mt-24">
               <h2 className="text-xl text-primary font-bold">Inicia sesión</h2>

               <br />

               <div className="px-16 w-full h-full">
                  <SignInForm />
               </div>
            </div>
         </div>

      </AuthLayout>
   );
}