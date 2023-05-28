import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const PricesCreate = () => {
   const [priceData, setPriceData] = useState({
      codigoProducto: '',
      empaque: '',
   });

   const navigate = useNavigate();

   const handleInputChange = (e) => {
      setPriceData({
         ...priceData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // TODO: Make the HTTP POST request to the server

      console.log(priceData);
   };

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar Precio</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="codigoProducto" className="text-white block mb-2">
                           Codigo del Producto:
                        </label>
                        <input
                           type="integer"
                           id="codigoProducto"
                           name="codigoProducto"
                           value={priceData.codigoProducto}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="empaque" className="text-white block mb-2">
                           Empaque:
                        </label>
                        <input
                           type="text"
                           id="empaque"
                           name="empaque"
                           value={priceData.empaque}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="flex justify-between">
                        <Link to="/admin/prices/create">
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