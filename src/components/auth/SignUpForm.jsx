import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../hooks';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .email('Formato de email inválido')
      .required('Este campo es obligatorio'),
   nombre: Yup.string()
      .required('Este campo es obligatorio'),
   documento: Yup.number()
      .typeError('El documento es un campo numérico')
      .required('Este campo es obligatorio'),
   contrasena: Yup.string()
      .min(3, 'La contraseña debe ser mínimo de 3 caracteres')
      .required('Este campo es obligatorio'),
})

export const SignUpForm = () => {
   const { initialValues, onSubmitForm } = useAuth({
      email: '',
      contrasena: ''
   }, 'signup');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form className="w-full">
            <div className="mb-4">
               <label htmlFor="email" className="text-purplePz font-semibold block mb-2">
                  Email:
               </label>

               <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  placeholder="Email..."
               />
               <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="nombre" className="text-purplePz font-semibold block mb-2">
                  Nombre:
               </label>

               <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  placeholder="Nombre..."
               />
               <ErrorMessage name="nombre" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="documento" className="text-purplePz font-semibold block mb-2">
                  Documento:
               </label>

               <Field
                  type="text"
                  id="documento"
                  name="documento"
                  className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  placeholder="Documento..."
               />
               <ErrorMessage name="documento" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="contrasena" className="text-purplePz font-semibold block mb-2">
                  Contraseña:
               </label>

               <Field
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  placeholder="Contraseña..."
               />
               <ErrorMessage name="contrasena" component="div" className="text-red-500" />
            </div>

            <div className="flex justify-between items-center">
               <div className="flex items-center justify-center">
                  <Field
                     type="checkbox"
                     id="remember"
                     name="remember"
                     className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:border-purplePzHover mr-2"
                     placeholder="Recordar"
                  />

                  <label htmlFor="remember" className="text-sm text-purplePz hover:text-purplePzHover font-bold block cursor-pointer mt-[9px] mb-2">
                     Recordar Sesión
                  </label>
               </div>
            </div>

            <div className="text-center mt-4">
               <button
                  type="submit"
                  className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-10 rounded mb-2"
               >
                  Registrar cuenta
               </button>
            </div>

            <div className="text-center">
               <Link to="/auth/signin">
                  <span className="text-sm font-bold text-purplePz hover:text-purplePzHover transition-all cursor-pointer">
                     Iniciar sesión
                  </span>
               </Link>
            </div>
         </Form>
      </Formik>
   )
}