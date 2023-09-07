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

export const usePending = (endpoint) => {
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

    const onPending = (id) => {
        geoTransApi.put(`/${endpoint}/allow/${id}`)
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

                Swal.fire('Activación satisfactoria', res.data.message, 'success');
            })
            .catch(err => {
                Swal.fire('Activación incorrecta', err.response.data.message, 'error');
            })
    };

    return {
        onPending,
    }
}