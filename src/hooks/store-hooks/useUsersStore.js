import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getUsersRequest, getUsersFailure, getUsersSuccess } from '../../store';

export const useUsersStore = () => {
  const { users, isLoading } = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  
  const getUsers = async () => {
    dispatch(getUsersRequest());

    try {
      const { data } = await geoTransApi.get('/users');

      dispatch(getUsersSuccess({ users: data.users }));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  }

  return {
    //* Properties
    users,
    isLoading,

    //* Methods
    getUsers
  }
}