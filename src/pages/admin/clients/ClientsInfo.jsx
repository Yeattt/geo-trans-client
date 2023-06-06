import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const ClientsInfo = () => {
    const clients = [
        { id: 1,document:103, name: 'Camilo Mejia', Business_name: 'CamiloMejiaexamplecom', phone:301587 },
        { id: 2, document:105,name: 'Carlos Cadavid', Business_name: 'Calichepmexamplecom', phone:301587 },
        { id: 3,document:104, name: 'Falio', Business_name: 'michaeljohnsonexamplecom', phone:301587},
        // Agrega más usuarios si  necesario
     ];
   const [currentClients, setCurrentClients] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const client = clients.find((client) => client.id === parseInt(id));

      if (!client) {
         <Navigate to="/admin/clients" />
      }

      setCurrentClients(client);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles del Cliente</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentClients.id}</div>

                     <div className="font-bold text-white">Documento:</div>
                     <div className="text-white">{currentClients.document}</div>

                     <div className="font-bold text-white">Nombre:</div>
                     <div className="text-white">{currentClients.name}</div>

                     <div className="font-bold text-white">Razon Social:</div>
                     <div className="text-white">{currentClients.Business_name}</div>

                     <div className="font-bold text-white">Telefono:</div>
                     <div className="text-white">{currentClients.phone}</div>
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