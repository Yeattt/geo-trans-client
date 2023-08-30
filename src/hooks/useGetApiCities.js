import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetApiCities = (endpoint) => {
    // * IMPORTANTE: El endpoint es el url al que hay que hacer la petición, no se puede dejar vacío cuando usamos el hook en otro componente
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCity = async() => {
        const { data } = await axios.get(endpoint);

        setData(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getCity();
    }, [endpoint]);

    return {
        isLoading,
        data
    }
}

// export const useGetApiCities= async(state)=>{
//    const peticion = await axios.get("https://api-colombia.com/api/v1/City")
//    state(peticion.data)
// }
