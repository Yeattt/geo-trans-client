import { useEffect, useState } from 'react';
import { geoTransApi } from '../api'

export const useSearchModule = (module = '', query = '') => {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   
   const getData = async () => {
      try {
         const { data } = await geoTransApi.get(`${module}/${query}`);
         
         setData(data);
         setIsLoading(false);
      } catch (error) {
         console.log(error.response.data.message);
      }
   }

   useEffect(() => {
      getData();
   }, [module, query]);
   
   return {
      isLoading,
      data
   }
}