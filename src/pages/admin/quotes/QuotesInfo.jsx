import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const QuotesInfo = () => {
   const prices = [
      { id: 1, codigoProducto: 'John Do', empaque: 'johndoe@example.com' },
      { id: 2, codigoProducto: 'Jane Smith', empaque: 'janesmith@example.com' },
      { id: 3, codigoProducto: 'Michael Johnson', empaque: 'michaeljohnson@example.com' },
   ];
   const [currentPrice, setCurrentPrice] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const price = prices.find((price) => price.id === parseInt(id));

      if (!price) {
         <Navigate to="/admin/prices" />
      }

      setCurrentPrice(price);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles de los precios</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentPrice.id}</div>

                     <div className="font-bold text-white">Codigo del producto:</div>
                     <div className="text-white">{currentPrice.codigoProducto}</div>

                     <div className="font-bold text-white">Empaque:</div>
                     <div className="text-white">{currentPrice.empaque}</div>

                     {/* <div className="font-bold text-white">Año:</div>
                     <div className="text-white">{currentPrice.year}</div>

                     <div className="font-bold text-white">Color:</div>
                     <div className="text-white">{currentPrice.color}</div> */}
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