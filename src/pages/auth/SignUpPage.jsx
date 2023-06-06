import { AuthLayout, SignUpForm } from '../../components';

export const SignUpPage = () => {
   return (
      <AuthLayout>
         <div className="w-full h-full">
            <div className="w-[65%] h-14 font-bold text-lg rounded-e-3xl bg-purplePz text-white flex items-center px-5">
               Únete a nosotros!
            </div>

            <div className="flex flex-col items-center justify-center mt-8">
               <h2 className="text-xl text-purplePz font-bold">Registrar cuenta</h2>

               <br />

               <div className="px-16 w-full h-full">
                  <SignUpForm />
               </div>
            </div>
         </div>

      </AuthLayout>
   );
}