import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../../api';
import { getQuotesRequest, getQuotesFailure, getQuotesSuccess } from '../../store';

export const useQuotesStore = () => {
  const { quotes, isLoading } = useSelector(state => state.quotes.quotes);
  const dispatch = useDispatch();
  
  const getQuotes = async () => {
    dispatch(getQuotesRequest());

    try {
      const { data } = await geoTransApi.get('/quotes');

      dispatch(getQuotesSuccess({ quotes: data.quotes }));
    } catch (error) {
      dispatch(getQuotesFailure());
    }
  }

  return {
    //* Properties
    quotes,
    isLoading,

    //* Methods
    getQuotes
  }
}