// import { useEffect, useState } from 'react';
import axios from 'axios';
// import { QuotesCreateForm } from '../components/admin/modules/quotes';
// export const useGetApiCities = () => {
//    // * IMPORTANTE: El endpoint es el url al que hay que hacer la petición, no se puede dejar vacío cuando usamos el hook en otro componente
//    const [isLoading, setIsLoading] = useState(true);
//    const [ciudades, setCiudades] = useState([]);

//    const getCity = async () => {
//       const { data } = await axios.get("https://api-colombia.com/api/v1/City")
//       setCiudades(data)
//    }
//    useEffect(() => {
//       getCity()
//    }, [])
//    return (
//       ciudades,
//       isLoading
//    )
// }

export const useGetApiCities= async(state)=>{
   const peticion = await axios.get("https://api-colombia.com/api/v1/City")
   state(peticion.data)
}