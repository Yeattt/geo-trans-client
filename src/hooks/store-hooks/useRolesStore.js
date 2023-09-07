import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getRolesRequest, getRolesFailure, getRolesSuccess } from '../../store';

export const useRolesStore = () => {
  const { roles, isLoading } = useSelector(state => state.roles.roles);
  const dispatch = useDispatch();
  
  const getRoles = async () => {
    dispatch(getRolesRequest());

    try {
      const { data } = await geoTransApi.get('/roles');

      dispatch(getRolesSuccess({ roles: data.roles }));
    } catch (error) {
      dispatch(getRolesFailure());
    }
  }

  return {
    //* Properties
    roles,
    isLoading,

    //* Methods
    getRoles
  }
}