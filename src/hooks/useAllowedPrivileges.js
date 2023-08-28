import { useEffect, useState } from 'react';
import { useAuthStore } from '.';
import { geoTransApi } from '../api';

export const useAllowedPrivileges = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userPrivileges, setUserPrivileges] = useState([]);

  const { user } = useAuthStore();

  useEffect(() => {
    const roleId = user.roleId;

    const getApiData = async () => {
      try {
        const { data } = await geoTransApi.get(`/roles/${roleId}`);

        setUserPrivileges(data.role.privilegios);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }

    getApiData();
  }, [user]);

  return {
    isLoading,
    userPrivileges,
  }
}