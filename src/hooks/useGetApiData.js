import { useEffect, useState } from 'react';

import { geoTransApi } from '../api';

export const useGetApiData = (endpoint) => {
    // * IMPORTANTE: El endpoint es el url al que hay que hacer la petición, no se puede dejar vacío cuando usamos el hook en otro componente
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getVehicles = async() => {
        const { data } = await geoTransApi.get(endpoint);

        setData(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getVehicles();
    }, [endpoint]);

    return {
        isLoading,
        data
    }
}