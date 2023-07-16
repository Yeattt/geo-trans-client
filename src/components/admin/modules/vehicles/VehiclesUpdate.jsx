import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm } from '../../../../hooks';


export const VehiclesUpdate = ({ moduleInfo }) => {
    const validationSchema = Yup.object().shape({
        tipoCamion: Yup.string()
            .max(15, 'Máximo 15 caracteres'),
        modelo: Yup.number()
            .typeError('El modelo debe ser un número')
            .test('len', 'Debe tener 4 dígitos', val => val && val.toString().length === 4),
        marca: Yup.string()
            .max(15, 'Máximo 15 caracteres'),
        placa: Yup.string()
            .max(6, 'Máximo 4 caracteres'),
        placaSemirremolque: Yup.string()
            .max(6, 'Máximo 6 caracteres'),
        tarjetaPropiedad: Yup.string(),
        tecnomecanica: Yup.string(),
        soat: Yup.string()
    });

    const { initialValues, onSubmitForm } = useUpdateForm({
        tipoCamion: moduleInfo.tipoCamion,
        modelo: moduleInfo.modelo,
        marca: moduleInfo.marca,
        placa: moduleInfo.placa,
        placaSemirremolque: moduleInfo.placaSemirremolque,
        tarjetaPropiedad: moduleInfo.tarjetaPropiedad,
        tecnomecanica: moduleInfo.tecnomecanica,
        soat: moduleInfo.soat
    }, 'vehicles');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="tipoCamion" className="text-black font-semibold block mb-2" on>
                        tipoCamion:
                        </label>
                        <Field
                            type="text"
                            id="tipoCamion"
                            name="tipoCamion"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"

                        />
                        <ErrorMessage name="documento" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="modelo" className="text-black font-semibold block mb-2">
                        modelo:
                        </label>
                        <Field
                            type="text"
                            id="modelo"
                            name="modelo"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="modelo" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="marca" className="text-black font-semibold block mb-2">
                            Razon Social:
                        </label>
                        <Field
                            type="text"
                            id="marca"
                            name="marca"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="marca" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="placa" className="text-black font-semibold block mb-2">
                            placa:
                        </label>
                        <Field
                            type="text"
                            id="placa"
                            name="placa"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="placa" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="placaSemirremolque" className="text-black font-semibold block mb-2">
                            placaSemirremolque:
                        </label>
                        <Field
                            type="text"
                            id="placaSemirremolque"
                            name="placaSemirremolque"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="placa" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tarjetaPropiedad" className="text-black font-semibold block mb-2">
                            tarjetaPropiedad:
                        </label>
                        <Field
                            type="text"
                            id="tarjetaPropiedad"
                            name="tarjetaPropiedad"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="tarjetaPropiedad" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tecnomecanica" className="text-black font-semibold block mb-2">
                            tecnomecanica:
                        </label>
                        <Field
                            type="text"
                            id="tecnomecanica"
                            name="tecnomecanica"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="tecnomecanica" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="soat" className="text-black font-semibold block mb-2">
                            soat:
                        </label>
                        <Field
                            type="text"
                            id="soat"
                            name="soat"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="soat" component="div" className="text-red-500" />
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