import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import {
    useClientsStore,
    useCompaniesStore,
    usePermissionsStore,
    usePrivilegesStore,
    useQuotesStore,
    useRolesStore,
    useTripsStore,
    useUsersStore,
    useVehiclesStore,
    useVehiclesTypesStore
} from './';

import { geoTransApi } from '../api';

export const useUpdateForm = (initialValues = {}, endpoint) => {
    const { getClients } = useClientsStore();
    const { getCompanies } = useCompaniesStore();
    const { getPermissions } = usePermissionsStore();
    const { getPrivileges } = usePrivilegesStore();
    const { getQuotes } = useQuotesStore();
    const { getRoles } = useRolesStore();
    const { getTrips } = useTripsStore();
    const { getUsers } = useUsersStore();
    const { getVehicles } = useVehiclesStore();
    const { getVehiclesTypes } = useVehiclesTypesStore();


    const onSubmitForm = (values) => {
        geoTransApi.put(`/${endpoint}/update/${values.id}`, values)
            .then(res => {
                switch (endpoint) {
                    case 'vehicles':
                        getVehicles();
                        break;

                    case 'trucks/types':
                        getVehiclesTypes();
                        break;

                    case 'clients':
                        getClients();
                        break;

                    case 'companies':
                        getCompanies();
                        break;

                    case 'permissions':
                        getPermissions();
                        break;

                    case 'privileges':
                        getPrivileges();
                        break;

                    case 'quotes':
                        getQuotes();
                        break;

                    case 'roles':
                        getRoles();
                        break;

                    case 'trips':
                        getTrips();
                        break;

                    case 'users':
                        getUsers();
                        break;
                }

                Swal.fire('Actualización exitosa', res.data.message, 'success');

                if (endpoint == "quotes") {
                    navigate(`/admin/quotes`);
                }
            })
            .catch(err => {
                Swal.fire('Error al actualizar', err.response.data.message, 'error');
                return;
            })
    };

    return {
        initialValues,
        onSubmitForm,
    }
}