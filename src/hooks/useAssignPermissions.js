import { useNavigate } from 'react-router-dom';

import { geoTransApi } from '../api';

import { useRolesStore } from './';

export const useAssignPermissions = (id, initialValues = {}) => {
    const navigate = useNavigate();
    const { getRoles } = useRolesStore();

    const onSubmitForm = (values) => {
        geoTransApi.put(`/roles/assign/${id}`, values)
            .then(res => {
                getRoles();

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