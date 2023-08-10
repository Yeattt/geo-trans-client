import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine, RiUserSettingsLine } from 'react-icons/ri';
import { MdOutlineDocumentScanner } from 'react-icons/md';

import { useAuthStore, useSendEmail } from '../../hooks';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .email('Formato de email inválido')
      .required('Este campo es obligatorio'),
});

export const SendEmailForm = () => {
   const { initialValues, onSubmitForm } = useSendEmail({
      email: ''
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

            
            <button
               type="submit"
               className="w-[53%] bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 rounded-full mt-2 mb-5"
            >
               Recuperar Contraseña
            </button>

            <span className="text-sm font-bold text-gray-500 transition-all">
               Ya está registrado? <Link to="/auth/signin" className="cursor-pointer text-primary hover:text-primaryHover">Inicie sesión ahora</Link>
            </span>
         </Form>
      </Formik>
   )
}
