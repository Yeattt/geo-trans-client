import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const TripsCreate = () => {
const [tripsData, setTripsData] = useState({
    cantidad:'',
    codigoProducto:'',
    destino:'',
    empaque: '',
    naturaleza:'',
    numeroRemesa:'',
    origen:'',
    productoTransportar:'',
    saldoPagar:'',
    unidadMedida:'',
    valorPagar: '',
});

   const navigate = useNavigate();

   const handleInputChange = (e) => {
      setTripsData({
         ...tripsData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // TODO: Make the HTTP POST request to the server

      console.log(tripsData);
   };

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Registrar viaje</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="cantidad" className="text-white block mb-2">
                           Cantidad:
                        </label>
                        <input
                           type="text"
                           id="cantidad"
                           name="cantidad"
                           value={tripsData.make}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="codigoProducto" className="text-white block mb-2">
                           codigoProducto:
                        </label>
                        <input
                           type="text"
                           id="codigoProducto"
                           name="codigoProducto"
                           value={tripsData.model}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="destino" className="text-white block mb-2">
                           Destino:
                        </label>
                        <input
                           type="text"
                           id="destino"
                           name="destino"
                           value={tripsData.year}
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
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="naturaleza" className="text-white block mb-2">
                            Naturaleza:
                        </label>
                        <input
                           type="text"
                           id="naturaleza"
                           name="naturaleza"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="numeroRemesa" className="text-white block mb-2">
                           numeroRemesa:
                        </label>
                        <input
                           type="text"
                           id="numeroRemesa"
                           name="numeroRemesa"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="origen" className="text-white block mb-2">
                           Origen:
                        </label>
                        <input
                           type="text"
                           id="origen"
                           name="origen"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="productoTransportar" className="text-white block mb-2">
                           productoTransportar:
                        </label>
                        <input
                           type="text"
                           id="productoTransportar"
                           name="productoTransportar"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="saldoPagar" className="text-white block mb-2">
                           saldoPagar:
                        </label>
                        <input
                           type="text"
                           id="saldoPagar"
                           name="saldoPagar"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="unidadMedida" className="text-white block mb-2">
                           unidadMedida:
                        </label>
                        <input
                           type="text"
                           id="unidadMedida"
                           name="unidadMedida"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="valorPagar" className="text-white block mb-2">
                           valorPagar:
                        </label>
                        <input
                           type="text"
                           id="valorPagar"
                           name="valorPagar"
                           value={tripsData.color}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="flex justify-between">
                        <Link to="/admin/trips/create">
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