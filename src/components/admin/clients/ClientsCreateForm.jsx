import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   documento:     Yup.number()
                     .typeError('El documento debe ser un número')
                     .required('Campo requerido')
                     .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length == 10),
   nombre:        Yup.string()
                     .required('Campo requerido'),
   razonSocial:   Yup.string()
                     .required('Campo requerido'),
   telefono:      Yup.number()
                     .typeError('El telefono debe ser un número')
                     .required('Campo requerido')
                     .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length === 10 ),
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
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="documento" className="text-black font-semibold block mb-2">
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
                  <label htmlFor="nombre" className="text-black font-semibold block mb-2">
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
                  <label htmlFor="razonSocial" className="text-black font-semibold block mb-2">
                     Razon Social:
                  </label>
                  <Field
                     type="text"
                     id="razonSocial"
                     name="razonSocial"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Razón social..."
                  />
                  <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="telefono" className="text-black font-semibold block mb-2">
                     Telefono:
                  </label>
                  <Field
                     type="text"
                     id="telefono"
                     name="telefono"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Teléfono..."
                  />
                  <ErrorMessage name="telefono" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}
