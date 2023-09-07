import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getCompaniesRequest, getCompaniesFailure, getCompaniesSuccess } from '../../store';

export const useCompaniesStore = () => {
  const { companies, isLoading } = useSelector(state => state.companies.companies);
  const dispatch = useDispatch();
  
  const getCompanies = async () => {
    dispatch(getCompaniesRequest());

    try {
      const { data } = await geoTransApi.get('/companies');

      dispatch(getCompaniesSuccess({ companies: data.companies }));
    } catch (error) {
      dispatch(getCompaniesFailure());
    }
  }

  return {
    //* Properties
    companies,
    isLoading,

    //* Methods
    getCompanies
  }
}