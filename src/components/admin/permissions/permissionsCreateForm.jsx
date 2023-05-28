import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({    
    name: Yup.string().required('Campo requerido')
});

export const PermissionsCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
    name:''
   });

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>           
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