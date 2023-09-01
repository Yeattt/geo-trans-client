import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useAssignPermissions, useCreateForm, useGetApiData } from '../../../../hooks';
import { useState, useEffect } from 'react';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nombre: Yup.string().required('Campo requerido'),

});

export const RolesCreateForm = () => {
   const { data: permissions, isLoading: isPermissionsLoading } = useGetApiData('/permissions');
   const [permissionsList, setPermissionsList] = useState([]);
   const { initialValues, onSubmitForm } = useCreateForm({
      nombre: '',
      permissionsId: []
   }, 'roles');

   useEffect(() => {
      if (!isPermissionsLoading) {
         setPermissionsList(permissions.permissions);
      }
   }, [isPermissionsLoading]);


   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="nombre" className="text-primary font-semibold block mb-2">
                     Nombre: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="nombre"
                     name="nombre"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Nombre..."
                  />

                  <ErrorMessage name="nombre" component="div" className="text-red-600" />
               </div>

            </div>
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
                              name="permissionsId"
                              id="permissionsId"
                              value={id.toString()}
                              className="form-check"
                           />
                           <label htmlFor={nombre}>{nombre}</label>
                        </div>
                     );
                  }
                  )
               }
               <ErrorMessage name="permissions" component="div" className="text-red-600-500" />
            </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}