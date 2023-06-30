import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_GEO_API_URL } = getEnvVariables();

const geoTransApi = axios.create({
   baseURL: VITE_GEO_API_URL
});

geoTransApi.interceptors.request.use(config => {
   config.headers = {
      ...config.headers,
      'x-token': localStorage.getItem('token') 
   }

   return config;
});

export default geoTransApi;