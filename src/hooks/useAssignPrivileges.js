import { useNavigate } from 'react-router-dom';

import { geoTransApi } from '../api';

import { usePermissionsStore } from './';

export const useAssignPrivileges = (id = '', initialValues = {}) => {
   const { getPermissions } = usePermissionsStore();

   const onSubmitForm = (values) => {
      console.log(values);

      geoTransApi.put(`/roles/privileges/assign/${id}`, values)
         .then(() => {
            getPermissions();
         })
         .catch(err => {
            console.log(err);

            // * Acá se verifica si hay errores y se ve cuál es el tipo de error (404, 400, etc)
            if (err.response && err.response.data && err.response.data.errors) {
               // * Si sí hay errores, por ahora se imprimen en la consola
               console.log(err.response.data.errors[0]);
               return;
            }
         })
   };

   return {
      initialValues,
      onSubmitForm,
   }
}