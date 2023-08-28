import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { geoTransApi } from '../api';

export const useForgotPassword = (initialValues = {}, id, token) => {
    const navigate = useNavigate();

    const onSubmitForm = (values) => {
        const dato = {
            newPassword: values.newPassword
        }

        geoTransApi
            .put(`/users/recovery/${id}/${token}`, dato) // Usar el objeto "data" en lugar de "values" para el cuerpo de la solicitud
            .then((res) => {
                Swal.fire('Recuperación de contraseña exitosa', res.data.message, 'success');
                navigate("/auth/signin");
                return;
            })
            .catch((err) => {
                Swal.fire('Error al recuperar contraseña', err.response.data.message, 'error');
                return;
            });
        console.log(dato)
    };
    return {
        initialValues,
        onSubmitForm,
    };
};