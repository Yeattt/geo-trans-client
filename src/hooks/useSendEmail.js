import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useSendEmail = (initialValues = {}) => {
    const onSubmitForm = (values) => {
        geoTransApi.put('/users/sendEmail', values)
            .then(res => {
                Swal.fire('Link de recuperacion enviado correctamente', res.data.message, 'success');
                return;
            })
            .catch(err => {
                Swal.fire('NO se envio el link de forma correcta', err.response.data.message, 'error');
                return;
            })
    }

    return {
        initialValues,
        onSubmitForm
    }
}