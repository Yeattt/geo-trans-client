import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getTripsRequest, getTripsFailure, getTripsSuccess } from '../../store';

export const useTripsStore = () => {
  const { trips, isLoading } = useSelector(state => state.trips.trips);
  const dispatch = useDispatch();
  
  const getTrips = async () => {
    dispatch(getTripsRequest());

    try {
      const { data } = await geoTransApi.get('/trips');

      dispatch(getTripsSuccess({ trips: data.trips }));
    } catch (error) {
      dispatch(getTripsFailure());
    }
  }

  return {
    //* Properties
    trips,
    isLoading,

    //* Methods
    getTrips
  }
}