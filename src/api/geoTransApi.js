import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_GEO_API_URL } = getEnvVariables();

const geoTransApi = axios.create({
   baseURL: VITE_GEO_API_URL
});

geoTransApi.interceptors.request.use(config => {
   config.headers = {
      ...config.headers,
      // 'x-token': // Todo: Acá se añade el token cuando se consuma el api, o sea, lo sacamos de las cookies o localStorage
   }

   return config;
});

export default geoTransApi;