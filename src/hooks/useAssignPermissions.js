import { useNavigate } from 'react-router-dom';

import { geoTransApi } from '../api';

export const useAssignPermissions = (initialValues = {}) => {
    const navigate = useNavigate();

    const onSubmitForm = (values) => {

        geoTransApi.post(`roles/create`, values)
            .then(res => {
                console.log('Asignación exitosa');

                navigate(0);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return {
        initialValues,
        onSubmitForm,
    }
}