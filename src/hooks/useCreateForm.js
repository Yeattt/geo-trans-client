import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useCreateForm = (initialValues = {}, endpoint) => {
    const navigate = useNavigate();

    const onSubmitForm = (values) => {
        geoTransApi.post(`/${endpoint}/create`, values)
            .then(res => {
                Swal.fire('Registro exitoso', res.data.message, 'success');
                return;
            })
            .catch(err => {
                Swal.fire('Error al registro', err.response.data.message, 'error');
                return;
            });
    };

    return {
        initialValues,
        onSubmitForm,
    }
}