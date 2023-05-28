import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nit: Yup.number().required('Campo requerido'),
   razonSocial: Yup.string().required('Campo requerido'),
   nombreEmpresa: Yup.string().required('Campo requerido'),
   telefono: Yup.number().required('Campo requerido'),
   duenoPoliza: Yup.string().required('Campo requerido'),
});

export const CompaniesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      nit: '',
      razonSocial: '',
      nombreEmpresa: '',
      telefono: '',
      duenoPoliza: ''
   });

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="nit" className="text-white block mb-2">
                  Nit:
               </label>
               <Field
                  type="text"
                  id="nit"
                  name="nit"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="nit" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="razonSocial" className="text-white block mb-2">
                  Razon social:
               </label>
               <Field
                  type="text"
                  id="razonSocial"
                  name="razonSocial"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="nombreEmpresa" className="text-white block mb-2">
                  Nombre empresa:
               </label>
               <Field
                  type="text"
                  id="nombreEmpresa"
                  name="nombreEmpresa"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="nombreEmpresa" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="telefono" className="text-white block mb-2">
                  Telefono:
               </label>
               <Field
                  type="text"
                  id="telefono"
                  name="telefono"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="telefono" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="duenoPoliza" className="text-white block mb-2">
                  Dueño poliza:
               </label>
               <Field
                  type="text"
                  id="duenoPoliza"
                  name="duenoPoliza"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="duenoPoliza" component="div" className="text-red-500" />
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