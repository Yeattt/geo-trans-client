import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getPrivilegesRequest, getPrivilegesFailure, getPrivilegesSuccess } from '../../store';

export const usePrivilegesStore = () => {
  const { privileges, isLoading } = useSelector(state => state.privileges.privileges);
  const dispatch = useDispatch();
  
  const getPrivileges = async () => {
    dispatch(getPrivilegesRequest());

    try {
      const { data } = await geoTransApi.get('/privileges');

      dispatch(getPrivilegesSuccess({ privileges: data.privileges }));
    } catch (error) {
      dispatch(getPrivilegesFailure());
    }
  }

  return {
    //* Properties
    privileges,
    isLoading,

    //* Methods
    getPrivileges
  }
}