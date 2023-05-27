import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   tipoCamion: Yup.string().required('Campo requerido'),
   modelo: Yup.string().required('Campo requerido'),
   marca: Yup.string().required('Campo requerido'),
   placa: Yup.string().required('Campo requerido'),
   placaSemirremolque: Yup.string().required('Campo requerido'),
   tarjetaPropiedad: Yup.string().required('Campo requerido'),
   tecnomecanica: Yup.string().required('Campo requerido'),
   soat: Yup.string().required('Campo requerido'),
});

export const VehiclesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      tipoCamion: '',
      modelo: '',
      marca: '',
      placa: '',
      placaSemirremolque: '',
      tarjetaPropiedad: '',
      tecnomecanica: '',
      soat: ''
   });

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="tipoCamion" className="text-white block mb-2">
                  Tipo Camion:
               </label>
               <Field
                  type="text"
                  id="tipoCamion"
                  name="tipoCamion"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="tipoCamion" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="modelo" className="text-white block mb-2">
                  Modelo:
               </label>
               <Field
                  type="text"
                  id="modelo"
                  name="modelo"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="modelo" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="marca" className="text-white block mb-2">
                  Marca:
               </label>
               <Field
                  type="text"
                  id="marca"
                  name="marca"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="marca" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="placa" className="text-white block mb-2">
                  Placa:
               </label>
               <Field
                  type="text"
                  id="placa"
                  name="placa"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="placa" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="placaSemirremolque" className="text-white block mb-2">
                  Placa Semirremolque:
               </label>
               <Field
                  type="text"
                  id="placaSemirremolque"
                  name="placaSemirremolque"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="placaSemirremolque" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="tarjetaPropiedad" className="text-white block mb-2">
                  Tarjeta Propiedad:
               </label>
               <Field
                  type="text"
                  id="tarjetaPropiedad"
                  name="tarjetaPropiedad"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="tarjetaPropiedad" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="tecnomecanica" className="text-white block mb-2">
                  Tecnomecanica:
               </label>
               <Field
                  type="text"
                  id="tecnomecanica"
                  name="tecnomecanica"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="tecnomecanica" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="soat" className="text-white block mb-2">
                  Soat:
               </label>
               <Field
                  type="text"
                  id="soat"
                  name="soat"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="soat" component="div" className="text-red-500" />
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