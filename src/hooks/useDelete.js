import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const useDelete = (endpoint) => {
    const navigate = useNavigate();

    const onDelete = (id) => {
        geoTransApi.delete(`/${endpoint}/delete/${id}`)
            .then(res => {
                Swal.fire('Cambio de estado satisfactorio', res.data.message, 'success');
                navigate(0);
            })
            .catch(err => {
                Swal.fire('Error al cambiar de estado', err.response.data.message, 'error');
                return;
            })
    };

    return {
        onDelete,
    }
}