import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { geoTransApi } from '../api';
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



export const useCreateForm = (initialValues = {}, endpoint) => {
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
        geoTransApi.post(`/${endpoint}/create`, values)
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

                Swal.fire('Registro exitoso', res.data.message, 'success');
            })
            .catch(err => {
                console.log(err);
                Swal.fire('Error al registro', err.response.data.message, 'error');
                return;
            });
    };

    return {
        initialValues,
        onSubmitForm,
    };
};
