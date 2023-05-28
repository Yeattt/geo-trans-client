import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const UsersCreate = () => {
   const [usersData, setusersData] = useState({
    dni:'',
    edad:'',
    email:'',
    contrasena:'',
    roleId:'',
    companyId:'',
    vehicleId:''
   });

   const navigate = useNavigate();

   const handleInputChange = (e) => {
    setusersData({
         ...usersData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // TODO: Make the HTTP POST request to the server

      console.log(usersData);
   };

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar usuarios</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="make" className="text-white block mb-2">
                           Dni:
                        </label>
                        <input
                           type="text"
                           id="make"
                           name="make"
                           value={usersData.dni}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="model" className="text-white block mb-2">
                           Edad:
                        </label>
                        <input
                           type="text"
                           id="model"
                           name="model"
                           value={usersData.edad}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="year" className="text-white block mb-2">
                           Email:
                        </label>
                        <input
                           type="text"
                           id="year"
                           name="year"
                           value={usersData.email}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="color" className="text-white block mb-2">
                           Rol:
                        </label>
                        <input
                           type="text"
                           id="color"
                           name="color"
                           value={usersData.roleId}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="color" className="text-white block mb-2">
                           Compañia:
                        </label>
                        <input
                           type="text"
                           id="color"
                           name="color"
                           value={usersData.companyId}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div> <div className="mb-4">
                        <label htmlFor="color" className="text-white block mb-2">
                           Vehiculo:
                        </label>
                        <input
                           type="text"
                           id="color"
                           name="color"
                           value={usersData.vehicleId}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>

                     <div className="flex justify-between">
                        <Link to="/admin/users/create">
                           <button 
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={onNavigateBack}
                           >
                              Volver
                           </button>
                        </Link>

                        <button
                           type="submit"
                           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                           Registrar
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </AdminLayout>
   );
}