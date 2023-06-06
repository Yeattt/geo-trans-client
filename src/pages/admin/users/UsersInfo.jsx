import { useState, useEffect } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const UsersInfo = () =>{
    const users = [
        { id: 1, dni: 103, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:2 },
        { id: 2, dni: 104, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:5 },
        { id: 3, dni: 105, edad: 20 , email: 'CamiloMejiaexamplecom', rolId: 2, companyId: 2, vehicleId:9 }
        // Agrega más usuarios si  necesario
     ];
   const [currentUsers, setCurrentUsers] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const user = users.find((user) => user.id === parseInt(id));

      if (!user) {
         <Navigate to="/admin/users" />
      }

      setCurrentUsers(user);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles del usuario</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentUsers.id}</div>

                     <div className="font-bold text-white">Dni:</div>
                     <div className="text-white">{currentUsers.dni}</div>

                     <div className="font-bold text-white">Edad:</div>
                     <div className="text-white">{currentUsers.edad}</div>

                     <div className="font-bold text-white">Email:</div>
                     <div className="text-white">{currentUsers.email}</div>

                     <div className="font-bold text-white">Rol Id:</div>
                     <div className="text-white">{currentUsers.rolId}</div>
                     <div className="font-bold text-white">Compañia Id:</div>
                     <div className="text-white">{currentUsers.companyId}</div>
                     <div className="font-bold text-white">Vehiculos Id:</div>
                     <div className="text-white">{currentUsers.vehicleId}</div>
                  </div>

                  <br />

                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                     onClick={onNavigateBack}
                  >
                     Volver
                  </button>
               </div>
            </div>
         </div>
      </AdminLayout>
   )
}