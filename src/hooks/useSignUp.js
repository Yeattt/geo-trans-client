import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useSignUp = (initialValues = {}) => {
   const onSubmitForm = (values) => {
      geoTransApi.post('/auth/signup', values)
         .then(res => {
            Swal.fire('Registro de usuario correcto', 'Ahora debes esperar a ser aceptado por un administrador para poder iniciar sesión', 'success');
            return;
         })
         .catch(err => {
            Swal.fire('Registro de usuario incorrecto', err.response.data.message, 'error');
            return;
         })
   }

   return {
      initialValues,
      onSubmitForm
   }
}