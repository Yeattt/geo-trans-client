import { useNavigate } from 'react-router-dom';

import { geoTransApi } from '../api';

export const useAssignPermissions = (id, initialValues = {}) => {
    const navigate = useNavigate();

    const onSubmitForm = (values) => {
        // console.log('Test');
        console.log(values);

        geoTransApi.put(`/roles/assign/${id}`, values)
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