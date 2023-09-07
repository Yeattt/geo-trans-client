import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getVehiclesTypesRequest, getVehiclesTypesFailure, getVehiclesTypesSuccess } from '../../store';

export const useVehiclesTypesStore = () => {
  const { vehiclesTypes, isLoading } = useSelector(state => state.vehiclesTypes.vehiclesTypes);
  const dispatch = useDispatch();
  
  const getVehiclesTypes = async () => {
    dispatch(getVehiclesTypesRequest());

    try {
      const { data } = await geoTransApi.get('/trucks/types');

      dispatch(getVehiclesTypesSuccess({ vehiclesTypes: data.vehiclesType }));
    } catch (error) {
      dispatch(getVehiclesTypesFailure());
    }
  }

  return {
    //* Properties
    vehiclesTypes,
    isLoading,

    //* Methods
    getVehiclesTypes
  }
}