import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAssignPermissions, useCreateForm, useGetApiData } from '../../../../hooks';
import { useState, useEffect } from 'react';

const validationSchema = Yup.object().shape({
   nombre: Yup.string().required('Campo requerido'),
});

export const RolesCreateForm = ({ handleRefreshData }) => {
   const { data: permissions, isLoading: isPermissionsLoading } = useGetApiData('/permissions');
   const [permissionsList, setPermissionsList] = useState([]);
   const { initialValues, onSubmitForm } = useCreateForm({
      nombre: '',
      permissionsId: []
   }, 'roles', handleRefreshData);

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
         {({ handleSubmit }) => (
            <Form className="max-w-md mx-auto">
               <div className="mb-4">
                  <label htmlFor="nombre" className="text-black font-semibold text-lg mb-2 block">
                     Nombre: <span className='text-red-600 text-2xl'>*</span>
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

               <div className="mb-4">
                  <label htmlFor="permisos" className="text-black font-semibold text-lg block mb-2">
                     Permisos:
                  </label>
                  {permissionsList.map(({ nombre, id }) => (
                     <div key={id} className="mb-2">
                        <Field
                           type="checkbox"
                           name="permissionsId"
                           id={`permissionsId-${id}`}
                           value={id.toString()}
                           className="form-check"
                        />
                        <label htmlFor={`permissionsId-${id}`} className="ml-2">{nombre}</label>
                     </div>
                  ))}
                  <ErrorMessage name="permissions" component="div" className="text-red-600" />
               </div>

               <div className="text-center mt-4">
                  <button
                     type="submit"
                     className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 rounded-full"
                  >
                     Registrar
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
}
