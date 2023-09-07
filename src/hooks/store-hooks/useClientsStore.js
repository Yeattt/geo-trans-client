import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getClientsRequest, getClientsFailure, getClientsSuccess } from '../../store';

export const useClientsStore = () => {
  const { clients, isLoading } = useSelector(state => state.clients.clients);
  const dispatch = useDispatch();
  
  const getClients = async () => {
    dispatch(getClientsRequest());

    try {
      const { data } = await geoTransApi.get('/clients');

      dispatch(getClientsSuccess({ clients: data.clients }));
    } catch (error) {
      dispatch(getClientsFailure());
    }
  }

  return {
    //* Properties
    clients,
    isLoading,

    //* Methods
    getClients
  }
}