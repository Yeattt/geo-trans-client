import { useState, useEffect } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm, useGetApiData } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   rol:           Yup.string('Solo se acepta letras')
                     .required('Campo requerido'),
   permisos:   Yup.string('Solo se acepta letras')
                     .required('Campo requerido'),
});

export const AssignPermissionsCreateForm = () => {
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');
   const { data: permissions, isLoading: isPermissionsLoading } = useGetApiData('/permissions');

   const [rolesList, setRolesList] = useState([]);
   const [permissionsList, setPermissionsList] = useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      rol: '',
      permisos: ''
   }, 'assignpermissions');

   useEffect(() => {
      if (!isRolesLoading && !isPermissionsLoading) {
         setRolesList(roles.roles);
         setPermissionsList(permissions.permissions);
      }
   }, [isRolesLoading, isPermissionsLoading]);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="rol" className="text-black font-semibold block mb-2">
                     Rol:
                  </label>
                  <Field
                     as="select"
                     id="rol"
                     name="rol"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Rol..."
                  >
                     <option value="" disabled defaultValue>
                        Rol...
                     </option>

                     {
                        rolesList.map(role => (
                           <option value={role.id} key={role.id}>{role.nombre}</option>
                        ))
                     }
                  </Field>
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
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}