import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useAssignPermissions, useCreateForm, useGetApiData } from '../../../../hooks';
import { useState, useEffect } from 'react';
import { FaTruck } from 'react-icons/fa';

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
                  <label htmlFor="nombre" className="text-purplePz font-semibold block mb-2">
                     Nombre:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaTruck />
                     </div>

                     <Field
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Nombre..."
                     />
                  </div>

                  <ErrorMessage name="nombre" component="div" className="text-red-500" />
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