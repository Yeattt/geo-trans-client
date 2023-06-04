import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nit:           Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .required('Campo requerido')
                     .test('len', 'Debe tener 9 dígitos', val => val && val.toString().length === 9),
   razonSocial:   Yup.string('Solo se accepta letras')
                     .required('Campo requerido'),
   nombreEmpresa: Yup.string('Solo se accepta letras')
                     .required('Campo requerido'),
   telefono:      Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .required('Campo requerido')
                     .test('len', 'Debe tener 9 dígitos', val => val && val.toString().length === 9),
   duenoPoliza:   Yup.string('Solo se accepta letras')
                     .required('Campo requerido'),
});

export const CompaniesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      nit: '',
      razonSocial: '',
      nombreEmpresa: '',
      telefono: '',
      duenoPoliza: ''
   }, 'companies');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="nit" className="text-black font-semibold block mb-2">
                     Nit:
                  </label>
                  <Field
                     type="text"
                     id="nit"
                     name="nit"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Nit..."
                  />
                  <ErrorMessage name="nit" component="div" className="text-red-500" />
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
                     placeholder="Razon Social..."
                  />
                  <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="nombreEmpresa" className="text-black font-semibold block mb-2">
                     Nombre Empresa:
                  </label>
                  <Field
                     type="text"
                     id="nombreEmpresa"
                     name="nombreEmpresa"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Nombre Empresa..."
                  />
                  <ErrorMessage name="nombreEmpresa" component="div" className="text-red-500" />
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
                     placeholder="Telefono..."
                  />
                  <ErrorMessage name="telefono" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="duenoPoliza" className="text-black font-semibold block mb-2">
                     Dueño Poliza:
                  </label>
                  <Field
                     type="text"
                     id="duenoPoliza"
                     name="duenoPoliza"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Dueño Poliza..."
                  />
                  <ErrorMessage name="duenoPoliza" component="div" className="text-red-500" />
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