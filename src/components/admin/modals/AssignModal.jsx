import { AiOutlineClose } from 'react-icons/ai';
import { useAssignPermissions,useGetApiData} from '../../../hooks'
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
   rol: Yup.string('Solo se acepta letras')
      .required('Campo requerido'),
   permisos: Yup.string('Solo se acepta letras')
      .required('Campo requerido'),
});

export const AssignModal = ({ handleIsAssignModalActive, id }) => {
    const { data: permissions, isLoading: isPermissionsLoading } = useGetApiData('/permissions');
    const [permissionsList, setPermissionsList] = useState([]);
    const [checkedValues, setValue] = useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(permissions.length).fill(false)
    );

    
    const { initialValues, onSubmitForm } = useAssignPermissions(id,{
        permisos: ''
     }, 'roles');
  


    useEffect(() => {
        if (!isPermissionsLoading) {
            setPermissionsList(permissions.permissions);
        }
    }, [isPermissionsLoading]);

    const handleOnChange = (position) => {
      const { value, checked } = event.target

      const updatedCheckedState = checkedState.map((item, index) =>
         index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);

      if (checked) {
         setValue(pre => [...pre, value]);
      }
      else {
         setValue(pre => {
            return [...pre.filter(permission => permission !== value)]


         })
      }
   }
   console.log(checkedValues)

    return (
        <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center overflow-hidden">
            <div className="w-2/3 h-auto bg-purplePz rounded-md">
                <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
                    <h2 className="text-xl text-white font-semibold">Asignar permisos a rol</h2>

                    <span
                        className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                        onClick={() => handleIsAssignModalActive(false)}
                    >
                        <AiOutlineClose />
                    </span>
                </div>

                <div className="w-full h-[calc(100% - 55px)] bg-white px-7 py-5">
                <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="permisos" className="text-black font-semibold block mb-2">
                                    Permisos:
                                </label>
                                {
                                    permissionsList.map(({ nombre, id }) => {
                                        return (
                                            <div className="toppings-list-item">
                                                <Field
                                                    type="checkbox"
                                                    id={nombre}
                                                    name={nombre}
                                                    value={nombre}
                                                    className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:border-purplePzHover mr-2"
                                                    checked={checkedState[id]}
                                                    onChange={() => handleOnChange(id)}
                                                />
                                                <label htmlFor={nombre}>{nombre}</label>
                                            </div>
                                        );
                                    }
                                    )
                                }
                                <ErrorMessage name="permissions" component="div" className="text-red-500" />
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
                </div>
            </div>
        </div >
    );
}

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// import { useAssignPermissions, useCreateForm } from '../../hooks';

// // * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
// const validationSchema = Yup.object().shape({
//    nombre: Yup.string().required('Campo requerido'),
// });

// export const AssignModal = () => {
//    const { initialValues, onSubmitForm } = useAssignPermissions({
//       permisos: Yup.string()
//                   .required('Campo requerido')
//    }, 'roles');

//    return (
//       <Formik
//          initialValues={initialValues}
//          validationSchema={validationSchema}
//          onSubmit={onSubmitForm}
//       >
//          <Form>
//                             <div className="mb-4">
//                                 <label htmlFor="permisos" className="text-black font-semibold block mb-2">
//                                     Permisos:
//                                 </label>
//                                 {
//                                     permissionsList.map(({ nombre, id }) => {
//                                         return (
//                                             <div className="toppings-list-item">
//                                                 <Field
//                                                     type="checkbox"
//                                                     id={nombre}
//                                                     name={nombre}
//                                                     value={nombre}
//                                                     className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:border-purplePzHover mr-2"
//                                                     checked={checkedState[id]}
//                                                     onChange={() => handleOnChange(id)}
//                                                 />
//                                                 <label htmlFor={nombre}>{nombre}</label>
//                                             </div>
//                                         );
//                                     }
//                                     )
//                                 }
//                                 <ErrorMessage name="permissions" component="div" className="text-red-500" />
//                             </div>

//                             <div className="text-center mt-2">
//                <button
//                   type="submit"
//                   className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
//                >
//                   Registrar
//                </button>
//             </div>
//          </Form>
//       </Formik>
//    );
// }