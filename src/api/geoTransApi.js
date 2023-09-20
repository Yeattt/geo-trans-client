import axios from 'axios';

const geoTransApi = axios.create({
   baseURL: import.meta.env.VITE_GEO_API_URL
});

geoTransApi.interceptors.request.use(config => {
   config.headers = {
      ...config.headers,
      'x-token': localStorage.getItem('token') 
   }

   return config;
});

export default geoTransApi;