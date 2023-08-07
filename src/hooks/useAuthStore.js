import { useDispatch, useSelector } from 'react-redux';

import { geoTransApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
   const { status, user, errorMessage } = useSelector(state => state.auth);
   const dispatch = useDispatch();

   const startLogin = async ({ email, contrasena }) => {
      dispatch(onChecking());

      try {
         const { data } = await geoTransApi.post('/auth/signin', { email, contrasena });

         localStorage.setItem('token', data.token);
         localStorage.setItem('token-init-date', new Date().getTime());

         dispatch(onLogin({ name: data.nombre, uid: data.uid, role: data.roleId }));
      } catch (error) {
         dispatch(onLogout('Credenciales incorrectas'));

         setTimeout(() => {
            dispatch(clearErrorMessage());
         }, 10);
      }
   }

   const checkAuthToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) return dispatch(onLogout());

      try {
         const { data } = await geoTransApi.get('/auth/renew');

         localStorage.setItem('token', data.token);
         localStorage.setItem('token-init-date', new Date().getTime());
         dispatch(onLogin({ name: data.nombre, uid: data.uid, role: data.roleId }));
      } catch (error) {
         localStorage.clear();
         dispatch(onLogout());
      }
   }

   const startLogout = () => {
      localStorage.clear();
      dispatch(onLogout());
   }

   return {
      //* Properties
      errorMessage,
      status,
      user,

      //* Methods
      checkAuthToken,
      startLogin,
      startLogout
   }
}