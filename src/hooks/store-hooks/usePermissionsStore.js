import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getPermissionsRequest, getPermissionsFailure, getPermissionsSuccess } from '../../store';

export const usePermissionsStore = () => {
  const { permissions, isLoading } = useSelector(state => state.permissions.permissions);
  const dispatch = useDispatch();
  
  const getPermissions = async () => {
    dispatch(getPermissionsRequest());

    try {
      const { data } = await geoTransApi.get('/permissions');

      dispatch(getPermissionsSuccess({ permissions: data.permissions }));
    } catch (error) {
      dispatch(getPermissionsFailure());
    }
  }

  return {
    //* Properties
    permissions,
    isLoading,

    //* Methods
    getPermissions
  }
}