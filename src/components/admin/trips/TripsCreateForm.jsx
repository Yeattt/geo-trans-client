import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   cantidad: Yup.string().required('Campo requerido'),
   codigoProducto: Yup.string().required('Campo requerido'),
   destino: Yup.string().required('Campo requerido'),
   empaque: Yup.string().required('Campo requerido'),
   naturaleza: Yup.string().required('Campo requerido'),
   numeroRemesa: Yup.string().required('Campo requerido'),
   origen: Yup.string().required('Campo requerido'),
   productoTransportar: Yup.string().required('Campo requerido'),
   saldoPagar: Yup.string().required('Campo requerido'),
   unidadMedida: Yup.string().required('Campo requerido'),
   valorPagar: Yup.string().required('Campo requerido'),
});

export const TripsCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      cantidad: '',
      codigoProducto: '',
      destino: '',
      empaque: '',
      naturaleza: '',
      numeroRemesa: '',
      origen: '',
      productoTransportar: '',
      saldoPagar: '',
      unidadMedida: '',
      valorPagar: '',
   }, 'trips');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="mb-4">
               <label htmlFor="cantidad" className="text-white block mb-2">
                  Cantidad:
               </label>
               <Field
                  type="text"
                  id="cantidad"
                  name="cantidad"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="cantidad" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="codigoProducto" className="text-white block mb-2">
                  codigoProducto:
               </label>
               <Field
                  type="text"
                  id="codigoProducto"
                  name="codigoProducto"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="codigoProducto" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="destino" className="text-white block mb-2">
                  Destino:
               </label>
               <Field
                  type="text"
                  id="destino"
                  name="destino"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="destino" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="empaque" className="text-white block mb-2">
                  Empaque:
               </label>
               <Field
                  type="text"
                  id="empaque"
                  name="empaque"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="empaque" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="naturaleza" className="text-white block mb-2">
                  Naturaleza:
               </label>
               <Field
                  type="text"
                  id="naturaleza"
                  name="naturaleza"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="naturaleza" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="numeroRemesa" className="text-white block mb-2">
                  numeroRemesa:
               </label>
               <Field
                  type="text"
                  id="numeroRemesa"
                  name="numeroRemesa"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="numeroRemesa" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="origen" className="text-white block mb-2">
                  Origen:
               </label>
               <Field
                  type="text"
                  id="origen"
                  name="origen"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="origen" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="productoTransportar" className="text-white block mb-2">
                  productoTransportar:
               </label>
               <Field
                  type="text"
                  id="productoTransportar"
                  name="productoTransportar"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="productoTransportar" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="saldoPagar" className="text-white block mb-2">
                  saldoPagar:
               </label>
               <Field
                  type="text"
                  id="saldoPagar"
                  name="saldoPagar"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="saldoPagar" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="unidadMedida" className="text-white block mb-2">
                  unidadMedida:
               </label>
               <Field
                  type="text"
                  id="unidadMedida"
                  name="unidadMedida"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="unidadMedia" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
               <label htmlFor="valorPagar" className="text-white block mb-2">
                  valorPagar:
               </label>
               <Field
                  type="text"
                  id="valorPagar"
                  name="valorPagar"
                  className="w-full px-3 py-2 rounded"
               />
               <ErrorMessage name="valorPagar" component="div" className="text-red-500" />
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
