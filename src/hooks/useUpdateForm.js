import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useUpdateForm = (initialValues = {}, endpoint) => {
    const navigate = useNavigate();

    const onSubmitForm = (values) => {
        geoTransApi.put(`/${endpoint}/update/${values.id}`, values)
            .then(res => {
                Swal.fire('Actualización exitosa', res.data.message, 'success');
                if (endpoint == "quotes") {
                    navigate(`/admin/quotes`);
                } else {
                    navigate(0);
                }
            })
            .catch(err => {
                Swal.fire('Error al actualizar', err.response.data.message, 'error');
                return;
            })


        console.log(initialValues);
    };

    return {
        initialValues,
        onSubmitForm,
    }
}