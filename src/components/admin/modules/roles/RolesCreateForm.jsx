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
   const { initialValues, onSubmitForm } = useAssignPermissions({
      nombre: '',
      permissionsId: []
   });

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
                     Nombre: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="nombre"
                     name="nombre"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Nombre..."
                  />

                  <ErrorMessage name="nombre" component="div" className="text-red" />
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
                              value={id}
                              className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:bg-secondary mr-2"
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
                  className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}