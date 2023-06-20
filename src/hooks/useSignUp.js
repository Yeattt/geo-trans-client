import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useSignUp = (initialValues = {}) => {
   const onSubmitForm = (values) => {
      geoTransApi.post('/auth/signup', values)
         .then(() => {
            Swal.fire('Registro de usuario correcto', 'Ahora debes esperar a ser aceptado por un administrador para poder iniciar sesión', 'success');

            console.log('Registro exitoso');
         })
         .catch(err => {
            // * Acá se verifica si hay errores y se ve cuál es el tipo de error (404, 400, etc)
            if (err.response && err.response.data && err.response.data.errors) {
               // * Si sí hay errores, por ahora se imprimen en la consola

               Swal.fire('Registro de usuario incorrecto', err.response.data.errors[0].msg, 'error');
               console.log(err.response.data.errors[0]);
               return;
            }
         })
   }

   return {
      initialValues,
      onSubmitForm
   }
}