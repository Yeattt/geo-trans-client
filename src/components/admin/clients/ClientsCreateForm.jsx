import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
    document: Yup.number().required('Campo requerido'),
    name: Yup.string().required('Campo requerido'),
    Business_name: Yup.string().required('Campo requerido'),
    phone: Yup.number().required('Campo requerido')
});

export const ClientsCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
    document:'',
    name:'',
    Business_name:'',
    phone:''
   });

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="document" className="text-white block mb-2">
               Documento:
               </label>
               <Field
                  type="text"
                  id="document"
                  name="document"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="document" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="name" className="text-white block mb-2">
                  Nombre:
               </label>
               <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="Business_name" className="text-white block mb-2">
                  Razon Social:
               </label>
               <Field
                  type="text"
                  id="Business_name"
                  name="Business_name"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="Business_name" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="phone" className="text-white block mb-2">
                  Telefono:
               </label>
               <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="phone" component="div" className="text-red-500" />
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