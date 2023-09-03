import { AuthLayout, SignInForm } from '../../components';

export const SignInPage = () => {
   return (
      <AuthLayout>
         <div className="w-full h-full">
            <div className="w-[65%] h-[40px] text-sm font-bold sm:text-sm lg:text-lg xl:text-xl rounded-e-3xl bg-primary text-white flex items-center px-5">
               Inicia sesión
            </div>

            <div className="flex flex-col items-center justify-center mt-3 w-full h-full">
               <div className="px-16 w-full h-full mt-0 sm:mt-[-80px] md:mt-[-100px]">
                  <SignInForm />
               </div>
            </div>
         </div>

      </AuthLayout>
   );
}