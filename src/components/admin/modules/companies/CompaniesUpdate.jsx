import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm} from '../../../../hooks';


export const CompaniesUpdate = ({moduleInfo}) => {
    

    const validationSchema = Yup.object().shape({
        nit:           Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .test('len', 'Debe tener 9 dígitos', val => val && val.toString().length <= 9),
   razonSocial:   Yup.string('Solo se accepta letras'),
   nombreEmpresa: Yup.string('Solo se accepta letras'),
   telefono:      Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length <= 10),
   duenoPoliza:   Yup.string('Solo se accepta letras'),
    });


    const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        nit: moduleInfo.nit,
        razonSocial: moduleInfo.razonSocial,
        nombreEmpresa: moduleInfo.nombreEmpresa,
        telefono: moduleInfo.telefono,
        duenoPoliza: moduleInfo.duenoPoliza
    }, 'companies');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="nit" className="text-black font-semibold block mb-2" on>
                            Nit:
                        </label>
                        <Field
                            type="number"
                            id="nit"
                            name="nit"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                            
                        />
                        <ErrorMessage name="nit" component="div" className="text-red-500" />
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
                        <label htmlFor="nombreEmpresa" className="text-black font-semibold block mb-2">
                            Nombre Empresa:
                        </label>
                        <Field
                            type="text"
                            id="nombreEmpresa"
                            name="nombreEmpresa"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="nombreEmpresa" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="telefono" className="text-black font-semibold block mb-2">
                            Telefono:
                        </label>
                        <Field
                            type="number"
                            id="telefono"
                            name="telefono"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="telefono" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="duenoPoliza" className="text-black font-semibold block mb-2">
                            Dueño Poliza:
                        </label>
                        <Field
                            type="text"
                            id="duenoPoliza"
                            name="duenoPoliza"
                            className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="duenoPoliza" component="div" className="text-red-500" />
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