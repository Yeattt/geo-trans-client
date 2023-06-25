import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import { geoTransApi } from '../api';

export const usePending = (endpoint) => {
    const navigate = useNavigate();

    const onPending = (id) => {
        geoTransApi.put(`/${endpoint}/allow/${id}`)
            .then(res => {
                Swal.fire('Activación satisfactoria', res.data.message, 'success');
                navigate(0);
            })
            .catch(err => {
                Swal.fire('Activación incorrecta', err.response.data.message, 'error');
            })
    };

    return {
        onPending,
    }
}