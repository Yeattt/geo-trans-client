import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useForgotPassword, useGetApiData } from '../../hooks';
import { Link, useParams } from 'react-router-dom';

const validationSchema = Yup.object().shape({
   newPassword: Yup.string()
      .min(3, 'La contraseña debe ser mínimo de 3 caracteres')
      .required('Este campo es obligatorio'),
   repeatPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 
      'Las contraseñas no  coinciden')
      .required('Campo Obligatorio'),
});

export const ForgotPasswordForm = () => {
   
   const {id,token}=useParams();
   const { initialValues, onSubmitForm } = useForgotPassword({
      newPassword: '',
      repeatPassword:''
   },id,token);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form className="w-full flex justify-center items-center flex-col">
            
            <div className="mb-4">
               <label htmlFor="newPassword" className="text-purplePz font-semibold block mb-2">
                 Nueva Contraseña:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[19px] flex items-center justify-center">
                     <RiLockPasswordLine />
                  </div>

                  <Field
                     type="password"
                     id="newPassword"
                     name="newPassword"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Contraseña..."
                  />
               </div>

               <ErrorMessage name="newPassword" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="repeatPassword" className="text-purplePz font-semibold block mb-2">
                 Confirmar Contraseña:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[19px] flex items-center justify-center">
                     <RiLockPasswordLine />
                  </div>

                  <Field
                     type="password"
                     id="repeatPassword"
                     name="repeatPassword"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Confirmar Contraseña..."
                  />
               </div>

               <ErrorMessage name="repeatPassword" component="div" className="text-red-500" />
            </div>

            <button
               type="submit"
               className="w-[53%] bg-purplePz hover:bg-primaryHover transition-all text-white font-semibold py-2 rounded-full mt-2 mb-5"
            >
               Cambiar contraseña
            </button>

            <span className="text-sm font-bold text-gray-500 transition-all">
               Ya está registrado? <Link to="/auth/signin" className="cursor-pointer text-primary hover:text-primaryHover">Inicie sesión ahora</Link>
            </span>
         </Form>
      </Formik>
   )
}
