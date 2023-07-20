import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm } from '../../../hooks';


export const ClientsUpdate = ({ moduleInfo }) => {
    const validationSchema = Yup.object().shape({
        documento: Yup.number()
            .typeError('El documento debe ser un número')
            .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length == 10),
        nombre: Yup.string(),
        razonSocial: Yup.string(),
        telefono: Yup.number()
            .typeError('El telefono debe ser un número')
            .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length === 10),
    });

    const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        documento: moduleInfo.documento,
        nombre: moduleInfo.nombre,
        razonSocial: moduleInfo.razonSocial,
        telefono: moduleInfo.telefono
    }, 'clients');


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
                        className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
                        type="submit"
                    >
                        Actualizar
                    </button>
                </div>
            </Form>
        </Formik>
    );
}
