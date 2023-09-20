import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../../hooks';

const validationSchema = Yup.object().shape({
   nombre: Yup.string().required('Campo requerido'),
});

export const PrivilegesCreateForm = ({ handleRefreshData }) => {
   const { initialValues, onSubmitForm } = useCreateForm({
      nombre: ''
   }, 'privileges', handleRefreshData);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         {({ handleSubmit }) => (
            <Form className="max-w-md mx-auto">
               <div className="mb-4">
                  <label htmlFor="nombre" className="text-black font-semibold text-lg mb-2 block">
                     Nombre: <span className='text-red-600 text-2xl'>*</span>
                  </label>

                  <Field
                     type="text"
                     id="nombre"
                     name="nombre"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                  />

                  <ErrorMessage name="nombre" component="div" className="text-red-600" />
               </div>

               <div className="text-center mt-2">
                  <button
                     type="submit"
                     className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 rounded-full"
                  >
                     Registrar
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
}
