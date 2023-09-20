import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm} from '../../../../hooks';


export const TripsUpdate = ({ moduleInfo }) => {
    const validationSchema = Yup.object().shape({
   numeroRemesa: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 10 caracteres', val => val && val.toString().length <= 10),
   unidadMedida: Yup.string('Este campo solo debe contener letras')
      .max(20, 'Máximo 20 caracteres'),
   cantidad: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 50 caracteres', val => val && val.toString().length <= 50),
   naturaleza: Yup.string('Este campo solo debe contener letras')
      .max(30, 'Máximo 30 caracteres'),
   empaque: Yup.string('Este campo solo debe contener letras')
      .max(20, 'Máximo 20 caracteres'),
   codigoProducto: Yup.number('Este campo solo debe contener números')
      .test('len', 'Máximo 10 caracteres', val => val && val.toString().length <= 10),
   productoTransportar: Yup.string('Este campo solo debe contener letras')
      .max(25, 'Máximo 25 caracteres'),
   origen: Yup.string()
      .max(30, 'Máximo 30 caracteres'),
   destino: Yup.string()
      .max(30, 'Máximo 30 caracteres'),
   saldoPagar: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 80 caracteres', val => val && val.toString().length <= 80),
   valorPagar: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 80 caracteres', val => val && val.toString().length <= 80),
   cliente: Yup.string()
      .max(30, 'Máximo 30 caracteres'),
   tipoViaje: Yup.string()
      .max(30, 'Máximo 30 caracteres'),
     });

     const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        numeroRemesa: moduleInfo.numeroRemesa,
        unidadMedida: moduleInfo.unidadMedida,
        cantidad: moduleInfo.cantidad,
        naturaleza: moduleInfo.naturaleza,
        empaque: moduleInfo.empaque,
        codigoProducto: moduleInfo.codigoProducto,
        productoTransportar: moduleInfo.productoTransportar,
        origen: moduleInfo.origen,
        destino: moduleInfo.destino,
        saldoPagar: moduleInfo.saldoPagar,
        valorPagar: moduleInfo.valorPagar,
        cliente: moduleInfo.cliente,
        tipoViaje: moduleInfo.tipoViaje,
     }, 'trips');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
                <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                        <label htmlFor="numeroRemesa" className="text-black font-semibold text-sm block mb-2">
                            Numero Remesa:
                        </label>
                        <Field
                            type="text"
                            id="numeroRemesa"
                            name="numeroRemesa"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="numeroRemesa" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="unidadMedida" className="text-gray-600 font-semibold text-sm block mb-2">
                            Unidad Medida:
                        </label>
                        <Field
                            type="text"
                            id="unidadMedida"
                            name="unidadMedida"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="unidadMedida" component="div" className="text-red-500 text-sm" />
                    </div>



                    <div className="mb-4">
                        <label htmlFor="cantidad" className="text-black font-semibold text-sm block mb-2">
                            Cantidad:
                        </label>
                        <Field
                            type="text"
                            id="cantidad"
                            name="cantidad"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="cantidad" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="naturaleza" className="text-black font-semibold text-sm block mb-2">
                            Naturaleza:
                        </label>
                        <Field
                            type="text"
                            id="naturaleza"
                            name="naturaleza"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="naturaleza" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="empaque" className="text-black font-semibold text-sm block mb-2">
                            Empaque:
                        </label>
                        <Field
                            type="text"
                            id="empaque"
                            name="empaque"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="empaque" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="codigoProducto" className="text-black font-semibold text-sm block mb-2">
                            Codigo Producto:
                        </label>
                        <Field
                            type="text"
                            id="codigoProducto"
                            name="codigoProducto"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="codigoProducto" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productoTransportar" className="text-black font-semibold text-sm block mb-2">
                            Producto Transportar:
                        </label>
                        <Field
                            type="text"
                            id="productoTransportar"
                            name="productoTransportar"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="productoTransportar" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="origen" className="text-black font-semibold text-sm block mb-2">
                            Origen:
                        </label>
                        <Field
                            type="text"
                            id="origen"
                            name="origen"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="origen" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="destino" className="text-black font-semibold text-sm block mb-2">
                            Destino:
                        </label>
                        <Field
                            type="text"
                            id="destino"
                            name="destino"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="destino" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="saldoPagar" className="text-black font-semibold text-sm block mb-2">
                            Saldo Pagar:
                        </label>
                        <Field
                            type="text"
                            id="saldoPagar"
                            name="saldoPagar"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="saldoPagar" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="valorPagar" className="text-black font-semibold text-sm block mb-2">
                            Valor Pagar:
                        </label>
                        <Field
                            type="text"
                            id="valorPagar"
                            name="valorPagar"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="valorPagar" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cliente" className="text-black font-semibold text-sm block mb-2">
                            Cliente:
                        </label>
                        <Field
                            type="text"
                            id="cliente"
                            name="cliente"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="cliente" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tipoViaje" className="text-black font-semibold text-sm block mb-2">
                            Tipo Viaje:
                        </label>
                        <Field
                            type="text"
                            id="tipoViaje"
                            name="tipoViaje"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition text-sm"
                        />
                        <ErrorMessage name="tipoViaje" component="div" className="text-red-500" />
                    </div>
                </div>

                <div className="text-center mt-2">
                    <button
                        type="submit"
                        className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
                        onClick={() => console.log(initialValues)}
                    >
                        Editar
                    </button>
                </div>
            </Form>
        </Formik>
    );
}