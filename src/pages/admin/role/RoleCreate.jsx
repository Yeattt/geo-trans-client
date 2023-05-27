import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const RoleCreate = () => {
   const [roleData, setRoleData] = useState({
      nombre: '',
      rol:'',
      permiso:'',
   });

   const navigate = useNavigate();

   const handleInputChange = (e) => {
      setRoleData({
         ...roleData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // TODO: Make the HTTP POST request to the server

      console.log(roleData);
   };

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar rol</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="nombre" className="text-white block mb-2">
                           Nombre:
                        </label>
                        <input
                           type="text"
                           id="nombre"
                           name="nombre"
                           value={roleData.nombre}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="rol" className="text-white block mb-2">
                           Rol:
                        </label>
                        <select
                           id="rol"
                           name="rol"
                           value={roleData.rol}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        >
                           <option value="">Seleccione un rol</option>
                           <option value="rol1">Rol 1</option>
                           <option value="rol2">Rol 2</option>
                           <option value="rol3">Rol 3</option>
                        </select>
                     </div>

                     <div className="mb-4">
                        <label htmlFor="permiso" className="text-white block mb-2">
                           Permiso:
                        </label>
                        <select
                           id="permiso"
                           name="permiso"
                           value={roleData.permiso}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        >
                           <option value="">Seleccione un permiso</option>
                           <option value="permiso1">Permiso 1</option>
                           <option value="permiso2">Permiso 2</option>
                           <option value="permiso3">Permiso 3</option>
                        </select>
                     </div>
                     <div className="flex justify-between">
                        <Link to="/admin/role/create">
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