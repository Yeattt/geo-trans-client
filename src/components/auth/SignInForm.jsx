import { useEffect } from 'react';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useAuthStore } from '../../hooks';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .email('Formato de email inválido')
      .required('Este campo es obligatorio'),
   contrasena: Yup.string()
      .min(3, 'La contraseña debe ser mínimo de 3 caracteres')
      .required('Este campo es obligatorio'),
})

export const SignInForm = () => {
   const { startLogin, errorMessage } = useAuthStore();

   const initialValues = {
      email: '',
      password: ''
   }

   const onSubmitForm = (values) => {
      startLogin(values);
   }

   useEffect(() => {
      if (errorMessage !== undefined) {
         Swal.fire('Error al iniciar sesión', errorMessage, 'error');
      }
   }, [errorMessage]);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form className="w-full flex justify-center items-center flex-col">
            <div className="mb-4">
               <label htmlFor="email" className="text-purplePz font-semibold block mb-2">
                  Email:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[22px] flex items-center justify-center">
                     <HiOutlineMail />
                  </div>

                  <Field
                     type="email"
                     id="email"
                     name="email"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Email..."
                  />
               </div>

               <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="email" className="text-purplePz font-semibold block mb-2">
                  Contraseña:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[19px] flex items-center justify-center">
                     <RiLockPasswordLine />
                  </div>

                  <Field
                     type="password"
                     id="contrasena"
                     name="contrasena"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Contraseña..."
                  />
               </div>

               <ErrorMessage name="contrasena" component="div" className="text-red-500" />
            </div>

            <p className="text-sm text-purplePz hover:text-primaryHover transition-all font-bold cursor-pointer">Olvidó su contraseña?</p>

            <button
               type="submit"
               className="w-[53%] bg-purplePz hover:bg-primaryHover transition-all text-white font-semibold py-2 rounded-full mt-5 mb-5"
            >
               Iniciar Sesión
            </button>

            <span className="text-sm font-bold text-gray-500 transition-all">
               No tiene una cuenta? <Link to="/auth/signup" className="cursor-pointer text-primary hover:text-primaryHover">Regístrese ahora</Link>
            </span>
         </Form>
      </Formik>
   )
}