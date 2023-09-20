import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm } from '../../../../hooks';

export const PrivilegesUpdate = ({ moduleInfo }) => {
    const validationSchema = Yup.object().shape({
        nombre: Yup.string(),
    });

    const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        nombre: moduleInfo.nombre,
    }, 'privileges');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            {({ handleSubmit }) => (
                <Form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="text-black font-semibold text-lg mb-1 block">
                            Nombre:
                        </label>
                        <Field
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="w-full px-3 py-2 rounded bg-white text-sm text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="nombre" component="div" className="text-red-500" />
                    </div>

                    <div className="text-center mt-2">
                        <button
                            type="submit"
                            className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
                        >
                            Editar
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
