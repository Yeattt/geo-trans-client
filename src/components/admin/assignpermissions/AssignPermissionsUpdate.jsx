import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm} from '../../../hooks';


export const AssignPermissionsUpdate = ({moduleInfo}) => {
    

    const validationSchema = Yup.object().shape({
        rol:           Yup.string('Solo se acepta letras')
                     .required('Campo requerido'),
        permisos:   Yup.string('Solo se acepta letras')
                     .required('Campo requerido'),
    });


    const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        rol: moduleInfo.rol,
        permisos: moduleInfo.permisos,
    }, 'assignpermissions');

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitForm(values)}
        >
            <Form>
             <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="rol" className="text-black font-semibold block mb-2">
                     Rol:
                  </label>
                  <Field
                     type="text"
                     id="rol"
                     name="rol"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Rol..."
                  />
                  <ErrorMessage name="rol" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="permisos" className="text-black font-semibold block mb-2">
                     Permisos:
                  </label>
                  <Field
                     type="text"
                     id="permisos"
                     name="permisos"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Permisos..."
                  />
                  <ErrorMessage name="permisos" component="div" className="text-red-500" />
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