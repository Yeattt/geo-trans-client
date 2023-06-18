import { useNavigate } from 'react-router-dom';

import { geoTransApi } from '../api';

export const useDelete = (endpoint) => {
    const navigate = useNavigate();

    const onDelete = (id) => {
        geoTransApi.delete(`/${endpoint}/delete/${id}`)
            .then(() => {
                console.log('Cambio de estado exitoso');
                navigate(0);
            })
            .catch(err => {
                // * Acá se verifica si hay errores y se ve cuál es el tipo de error (404, 400, etc)
                if (err.response && err.response.data && err.response.data.errors) {
                    // * Si sí hay errores, por ahora se imprimen en la consola
                    console.log(err.response.data.errors[0]);
                    return;
                }
            })


    };

    return {
        onDelete,
    }
}