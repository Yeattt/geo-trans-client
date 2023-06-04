import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   dni: Yup.string().required('Campo requerido'),
   edad: Yup.string().required('Campo requerido'),
   email: Yup.string().required('Campo requerido'),
   contrasena: Yup.string().required('Campo requerido'),
   roleId: Yup.string().required('Campo requerido'),
   companyId: Yup.string().required('Campo requerido'),
   vehicleId: Yup.string().required('Campo requerido'),
});

export const UsersCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      dni: '',
      edad: '',
      email: '',
      contrasena: '',
      roleId: '',
      companyId: '',
      vehicleId: '',
   }, 'users');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="dni" className="text-white block mb-2">
                  Dni:
               </label>
               <Field
                  type="text"
                  id="dni"
                  name="dni"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="dni" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="edad" className="text-white block mb-2">
                  Edad:
               </label>
               <Field
                  type="text"
                  id="edad"
                  name="edad"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="edad" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="email" className="text-white block mb-2">
                  Email:
               </label>
               <Field
                  type="text"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="contrasena" className="text-white block mb-2">
                  Contrasena:
               </label>
               <Field
                  type="text"
                  id="contrasena"
                  name="contrasena"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="contrasena" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="roleId" className="text-white block mb-2">
                  Rol:
               </label>
               <Field
                  type="text"
                  id="roleId"
                  name="roleId"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="roleId" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="companyId" className="text-white block mb-2">
                  Compañia:
               </label>
               <Field
                  type="text"
                  id="companyId"
                  name="companyId"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="companyId" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="vehicleId" className="text-white block mb-2">
                  Vehiculo:
               </label>
               <Field
                  type="text"
                  id="vehicleId"
                  name="vehicleId"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="vehicleId" component="div" className="text-red-500" />
            </div>

            <div className="flex justify-between">
               <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}