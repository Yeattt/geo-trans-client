import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const RolesInfo = () => {
   const roles = [
    {id: 1, cantidad:'', codigoProducto:'',destino:'',empaque: '',naturaleza:'',
    numeroRemesa:'',origen:'',productoTransportar:'',saldoPagar:'',unidadMedida:'',valorPagar: '',},
   ];
   const [currentRole, setCurrentRole] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const role = roles.find((role) => role.id === parseInt(id));

      if (!role) {
         <Navigate to="/admin/Roles" />
      }

      setCurrentRole(role);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles del rol</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentRole.id}</div>

                     <div className="font-bold text-white">Cantidad:</div>
                     <div className="text-white">{currentRoles.nombre}</div>
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
   );
}