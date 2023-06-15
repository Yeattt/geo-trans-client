import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm } from '../../../hooks';


export const QuotesUpdate = ({ moduleInfo }) => {
    const validationSchema = Yup.object().shape({
        codigoCotizacion: Yup.number()
           .typeError('El codigo debe ser un numero'),                
        cantidad: Yup.number()
           .typeError('Solo se reciben valores numericos'),                
        codigoProducto: Yup.string(),
        destino: Yup.string(),
        empaque: Yup.string(),
        naturaleza: Yup.string().
           required('Campo requerido'),     
        numeroRemesa: Yup.string(),
        origen: Yup.string(),
        productoTransportar: Yup.string(),
        saldoPagar: Yup.number()
           .typeError('Solo valores numericos'),
        unidadMedida: Yup.string(),
        valorPagar: Yup.number()
           .typeError('Solo valores numericos'),
        userId: Yup.string()           
     });

     const { initialValues, onSubmitForm } = useCreateForm({
        codigoCotizacion: moduleInfo.codigoCotizacion,
        cantidad: moduleInfo.cantidad,
        codigoProducto: moduleInfo.codigoProducto,
        destino: moduleInfo.destino,
        empaque: moduleInfo.empaque,
        naturaleza: moduleInfo.naturaleza,
        numeroRemesa: moduleInfo.numeroRemesa,
        origen: moduleInfo.origen,
        productoTransportar: moduleInfo.productoTransportar,
        saldoPagar: moduleInfo.saldoPagar,
        unidadMedida: moduleInfo.unidadMedida,
        valorPagar: moduleInfo.valorPagar,
        userId: moduleInfo.userId,
     }, 'quotes');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="documento" className="text-black font-semibold block mb-2" on>
                            Documento:
                        </label>
                        <Field
                            type="text"
                            id="documento"
                            name="documento"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"

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
                        />
                        <ErrorMessage name="telefono" component="div" className="text-red-500" />
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