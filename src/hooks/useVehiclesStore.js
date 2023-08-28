import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../api';
import { getVehiclesRequest, getVehiclesFailure, getVehiclesSuccess } from '../store';

export const useVehiclesStore = () => {
  const { vehicles, isLoading } = useSelector(state => state.vehicles.vehicles);
  const dispatch = useDispatch();
  
  const getVehicles = async () => {
    dispatch(getVehiclesRequest());

    try {
      const { data } = await geoTransApi.get('/vehicles');

      dispatch(getVehiclesSuccess({ vehicles: data.vehicles }));
    } catch (error) {
      dispatch(getVehiclesFailure());
    }
  }

  return {
    //* Properties
    vehicles,
    isLoading,

    //* Methods
    getVehicles
  }
}