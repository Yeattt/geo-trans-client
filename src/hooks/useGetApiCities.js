import { useEffect, useState } from 'react';

export const useGetApiCities = () => {
    
   // * IMPORTANTE: El endpoint es el url al que hay que hacer la petición, no se puede dejar vacío cuando usamos el hook en otro componente
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState([]);

   const getCity = async () => {
      const { data } = await geoTransApi.get(endpoint);

      setData(data);
      setIsLoading(false);
   }

   useEffect(() => {
    getCity();
   });

   return {
      isLoading,
      data
   }
}