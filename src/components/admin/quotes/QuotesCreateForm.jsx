import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   codigoCotizacion: Yup.number()
      .typeError('El codigo debe ser un numero')
      .required('Campo requerido'),

   cantidad: Yup.number()
      .typeError('Solo se reciben valores numericos')
      .required('Campo requerido'),

   codigoProducto: Yup.string()
      .required('Campo requerido'),

   destino: Yup.string()
      .required('Campo requerido'),

   empaque: Yup.string()
      .required('Campo requerido'),

   naturaleza: Yup.string().
      required('Campo requerido'),

   numeroRemesa: Yup.string()
      .required('Campo requerido'),

   origen: Yup.string()
      .required('Campo requerido'),

   productoTransportar: Yup.string()
      .required('Campo requerido'),

   saldoPagar: Yup.number()
      .typeError('Solo valores numericos')
      .required('Campo requerido'),

   unidadMedida: Yup.string()
      .required('Campo requerido'),

   valorPagar: Yup.number()
      .typeError('Solo valores numericos')
      .required('Campo requerido'),

   userId: Yup.string()
      .required('Campo requerido'),
});

export const QuotesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      codigoCotizacion: '',
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
      userId: '',
   }, 'quotes');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-4 gap-3">
               <div className="mb-4">
                  <label htmlFor="codigoCotizacion" className="text-black font-semibold block mb-2">
                     Cod. Cotizacion:
                  </label>
                  <Field
                     type="text"
                     id="codigoCotizacion"
                     name="codigoCotizacion"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Cod. Cotizacion..."
                  />
                  <ErrorMessage name="codigoCotizacion" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="cantidad" className="text-black font-semibold block mb-2">
                     Cantidad:
                  </label>
                  <Field
                     type="text"
                     id="cantidad"
                     name="cantidad"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Cantidad..."
                  />
                  <ErrorMessage name="cantidad" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="codigoProducto" className="text-black font-semibold block mb-2">
                     Cod. Producto:
                  </label>
                  <Field
                     type="text"
                     id="codigoProducto"
                     name="codigoProducto"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Cod. Producto..."
                  />
                  <ErrorMessage name="codigoProducto" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="destino" className="text-black font-semibold block mb-2">
                     Destino:
                  </label>
                  <Field
                     type="text"
                     id="destino"
                     name="destino"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Destino..."
                  />
                  <ErrorMessage name="destino" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="empaque" className="text-black font-semibold block mb-2">
                     Empaque:
                  </label>
                  <Field
                     type="text"
                     id="empaque"
                     name="empaque"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Empaque..."
                  />
                  <ErrorMessage name="empaque" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="naturaleza" className="text-black font-semibold block mb-2">
                     Naturaleza:
                  </label>
                  <Field
                     type="text"
                     id="naturaleza"
                     name="naturaleza"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Naturaleza..."
                  />
                  <ErrorMessage name="naturaleza" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="numeroRemesa" className="text-black font-semibold block mb-2">
                     Nro. Remesa:
                  </label>
                  <Field
                     type="text"
                     id="numeroRemesa"
                     name="numeroRemesa"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Nro. Remesa..."
                  />
                  <ErrorMessage name="numeroRemesa" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="origen" className="text-black font-semibold block mb-2">
                     Origen:
                  </label>
                  <Field
                     type="text"
                     id="origen"
                     name="origen"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Origen..."
                  />
                  <ErrorMessage name="origen" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="productoTransportar" className="text-black font-semibold block mb-2">
                     Pdto. Transportar:
                  </label>
                  <Field
                     type="text"
                     id="productoTransportar"
                     name="productoTransportar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Pdto. Transportar..."
                  />
                  <ErrorMessage name="productoTransportar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="saldoPagar" className="text-black font-semibold block mb-2">
                     Sdo. Pagar:
                  </label>
                  <Field
                     type="text"
                     id="saldoPagar"
                     name="saldoPagar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Sdo. Pagar..."
                  />
                  <ErrorMessage name="saldoPagar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="unidadMedida" className="text-black font-semibold block mb-2">
                     Und. Medida:
                  </label>
                  <Field
                     type="text"
                     id="unidadMedida"
                     name="unidadMedida"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Und. Medida..."
                  />
                  <ErrorMessage name="unidadMedida" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="valorPagar" className="text-black font-semibold block mb-2">
                     Vlr. Pagar:
                  </label>
                  <Field
                     type="text"
                     id="valorPagar"
                     name="valorPagar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Vlr. Pagar..."
                  />
                  <ErrorMessage name="valorPagar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="userId" className="text-black font-semibold block mb-2">
                     User Id:
                  </label>
                  <Field
                     type="text"
                     id="userId"
                     name="userId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="User Id..."
                  />
                  <ErrorMessage name="userId" component="div" className="text-red-500" />
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