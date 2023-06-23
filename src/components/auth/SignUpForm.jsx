import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine, RiUserSettingsLine } from 'react-icons/ri';
import { MdOutlineDocumentScanner } from 'react-icons/md';

import { useAuthStore, useSignUp } from '../../hooks';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .email('Formato de email inválido')
      .required('Este campo es obligatorio'),
   edad: Yup.number()
      .typeError('La edad es un campo numérico')
      .required('Este campo es obligatorio'),
   dni: Yup.number()
      .typeError('El documento es un campo numérico')
      .required('Este campo es obligatorio'),
   contrasena: Yup.string()
      .min(3, 'La contraseña debe ser mínimo de 3 caracteres')
      .required('Este campo es obligatorio'),
});

export const SignUpForm = () => {
   const { initialValues, onSubmitForm } = useSignUp({
      email: '',
      edad: '',
      dni: '',
      contrasena: '',
      roleId: 1,
      companyId: 1,
      vehicleId: 1
   });

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
               <label htmlFor="edad" className="text-purplePz font-semibold block mb-2">
                  Edad:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[19px] flex items-center justify-center">
                     <RiUserSettingsLine />
                  </div>

                  <Field
                     type="text"
                     id="edad"
                     name="edad"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Edad..."
                  />
               </div>

               <ErrorMessage name="edad" component="div" className="text-red-500" />
            </div>


            {/* <div className="mb-4">
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
            </div> */}

            <div className="mb-4">
               <label htmlFor="documento" className="text-purplePz font-semibold block mb-2">
                  Documento:
               </label>

               <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-72 h-10 flex items-center">
                  <div className="w-[13%] text-[19px] flex items-center justify-center">
                     <MdOutlineDocumentScanner />
                  </div>

                  <Field
                     type="text"
                     id="documento"
                     name="documento"
                     className="bg-transparent w-[87%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                     placeholder="Documento..."
                  />
               </div>

               <ErrorMessage name="documento" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="contrasena" className="text-purplePz font-semibold block mb-2">
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

            <button
               type="submit"
               className="w-[53%] bg-purplePz hover:bg-primaryHover transition-all text-white font-semibold py-2 rounded-full mt-2 mb-5"
            >
               Registrarse
            </button>

            <span className="text-sm font-bold text-gray-500 transition-all">
               Ya está registrado? <Link to="/auth/signin" className="cursor-pointer text-primary hover:text-primaryHover">Inicie sesión ahora</Link>
            </span>
         </Form>
      </Formik>
   )
}