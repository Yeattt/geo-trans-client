import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { geoTransApi } from '../api';
import { useEffect } from 'react';

export const useCreateForm = (initialValues = {}, endpoint) => {
    const navigate = useNavigate();

    //* Esta función solamente se va a aplicar cuando el endpoint sea vehículos
    const onVehiclesFileUpload = async () => {
        const formData = new FormData();

        //* Archivos a subir
        formData.append('tarjetaPropiedad', initialValues.tarjetaPropiedad);
        formData.append('tecnomecanica', initialValues.tecnomecanica);
        formData.append('soat', initialValues.soat);

        //* Petición para subir los archivos
        try {
            const resp = await geoTransApi.post('/files/upload', formData);
            console.log(resp.data); // Manejar la respuesta del servidor si es necesario
        } catch (error) {
            console.error(error);
        }
    };

    if (endpoint === 'vehicles') {
        useEffect(() => {
            onVehiclesFileUpload();
        }, []);
    }

    const onSubmitForm = (values) => {
        geoTransApi.post(`/${endpoint}/create`, values)
            .then(res => {
                Swal.fire('Registro exitoso', res.data.message, 'success');
                navigate(0);
            })
            .catch(err => {
                Swal.fire('Error al registro', err.response.data.message, 'error');
                return;
            });
    };

    return {
        initialValues,
        onSubmitForm,
    };
};
