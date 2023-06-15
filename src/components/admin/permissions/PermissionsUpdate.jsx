import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm } from '../../../hooks';


export const PermissionsUpdate = ({ moduleInfo }) => {
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
        nombre: moduleInfo.nombre,
    }, 'permissions');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
                
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