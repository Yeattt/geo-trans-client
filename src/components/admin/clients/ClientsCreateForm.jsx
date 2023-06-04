import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   documento: Yup.number().required('Campo requerido'),
   nombre: Yup.string().required('Campo requerido'),
   razonSocial: Yup.string().required('Campo requerido'),
   telefono: Yup.number().required('Campo requerido')
});

export const ClientsCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      documento: '',
      nombre: '',
      razonSocial: '',
      telefono: ''
   }, 'clients');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="documento" className="text-white block mb-2">
                  Documento:
               </label>
               <Field
                  type="text"
                  id="documento"
                  name="documento"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="documento" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="nombre" className="text-white block mb-2">
                  Nombre:
               </label>
               <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="nombre" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="razonSocial" className="text-white block mb-2">
                  Razon Social:
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