import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   tipoCamion:             Yup.string()
                              .max(15, 'Máximo 15 caracteres')
                              .required('Campo requerido'),
   modelo:                 Yup.number('Este campo solo debe contener números')
                              .max(6, 'Máximo 6 caracteres')
                              .required('Campo requerido'),
   marca:                  Yup.string()
                              .max(15, 'Máximo 15 caracteres')
                              .required('Campo requerido'),
   placa:                 Yup.string()
                              .max(6, 'Máximo 6 caracteres')
                              .required('Campo requerido'),
   placaSemirremolque:     Yup.string()
                              .max(6, 'Máximo 6 caracteres')
                              .required('Campo requerido'),
   tarjetaPropiedad:       Yup.string()
                              .required('Campo requerido'),
   tecnomecanica:          Yup.string()
                              .required('Campo requerido'),
   soat:                   Yup.string()
                              .required('Campo requerido'),
});

export const VehiclesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      tipoCamion        : '',
      modelo            : '',
      marca             : '',
      placa             : '',
      placaSemirremolque: '',
      tarjetaPropiedad  : '',
      tecnomecanica     : '',
      soat              : ''
   }, 'vehicles');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="tipoCamion" className="text-black font-semibold block mb-2">
                     Tipo Camion:
                  </label>
                  <Field
                     type="text"
                     id="tipoCamion"
                     name="tipoCamion"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Tipo Camión..."
                  />
                  <ErrorMessage name="tipoCamion" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="modelo" className="text-black font-semibold block mb-2">
                     Modelo:
                  </label>
                  <Field
                     type="text"
                     id="modelo"
                     name="modelo"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Modelo..."
                  />
                  <ErrorMessage name="modelo" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="marca" className="text-black font-semibold block mb-2">
                     Marca:
                  </label>
                  <Field
                     type="text"
                     id="marca"
                     name="marca"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Marca..."
                  />
                  <ErrorMessage name="marca" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placa" className="text-black font-semibold block mb-2">
                     Placa:
                  </label>
                  <Field
                     type="text"
                     id="placa"
                     name="placa"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Placa..."
                  />
                  <ErrorMessage name="placa" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placaSemirremolque" className="text-black font-semibold block mb-2">
                     Placa Semirremolque:
                  </label>
                  <Field
                     type="text"
                     id="placaSemirremolque"
                     name="placaSemirremolque"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Placa Semirremolque..."
                  />
                  <ErrorMessage name="placaSemirremolque" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tarjetaPropiedad" className="text-black font-semibold block mb-2">
                     Tarjeta Propiedad:
                  </label>
                  <Field
                     type="text"
                     id="tarjetaPropiedad"
                     name="tarjetaPropiedad"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Tarjeta Propiedad..."
                  />
                  <ErrorMessage name="tarjetaPropiedad" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tecnomecanica" className="text-black font-semibold block mb-2">
                     Tecnomecanica:
                  </label>
                  <Field
                     type="text"
                     id="tecnomecanica"
                     name="tecnomecanica"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Tecnomecanica..."
                  />
                  <ErrorMessage name="tecnomecanica" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="soat" className="text-black font-semibold block mb-2">
                     Soat:
                  </label>
                  <Field
                     type="text"
                     id="soat"
                     name="soat"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Soat..."
                  />
                  <ErrorMessage name="soat" component="div" className="text-red-500" />
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