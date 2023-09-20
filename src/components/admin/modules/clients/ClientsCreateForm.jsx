import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateForm } from '../../../../hooks';
import { GiTowTruck } from 'react-icons/gi';

const validationSchema = Yup.object().shape({
   documento: Yup.number()
      .typeError('El documento debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length === 10),
   nombre: Yup.string()
      .required('Campo requerido')
      .test('len', 'El nombre no debe superar una longitud de 50 caracteres', val => val && val.toString().length <= 50),
   razonSocial: Yup.string()
      .required('Campo requerido'),
   telefono: Yup.number()
      .typeError('El teléfono debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length === 10),
});

export const ClientsCreateForm = ({ handleRefreshData }) => {
   const { initialValues, onSubmitForm } = useCreateForm({
      documento: '',
      nombre: '',
      razonSocial: '',
      telefono: ''
   }, 'clients', handleRefreshData);

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
                     Documento: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="number"
                     id="documento"
                     name="documento"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                  />

                  <ErrorMessage name="documento" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="nombre" className="text-black font-semibold block mb-2">
                     Nombre:  <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="nombre"
                     name="nombre"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                  />

                  <ErrorMessage name="nombre" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="razonSocial" className="text-black font-semibold block mb-2">
                     Razón social:  <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="razonSocial"
                     name="razonSocial"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"                     
                  />

                  <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="telefono" className="text-black font-semibold block mb-2">
                     Teléfono:  <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="number"
                     id="telefono"
                     name="telefono"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"                     
                  />

                  <ErrorMessage name="telefono" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}