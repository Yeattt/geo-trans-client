import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { geoTransApi } from '../../api';

export const VehiclesCreateForm = () => {
   const [vehicleData, setVehicleData] = useState({
      tipoCamion: '',
      modelo: '',
      marca: '',
      placa: '',
      placaSemirremolque: '',
      tarjetaPropiedad: '',
      tecnomecanica: '',
      soat: ''
   });

   const navigate = useNavigate();

   const onNavigateBack = () => {
      navigate(-1);
   }

   const handleInputChange = (e) => {
      setVehicleData({
         ...vehicleData,
         [e.target.name]: e.target.value,
      });
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();

      geoTransApi.post('/vehicles/create', vehicleData)
         .then(res => {
            console.log('Exito')
         })
         .catch(err => {
            if (err.response.data.errors) {
               return err.response.data.errors;
            }

            console.log(err);
         });
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="mb-4">
            <label htmlFor="tipoCamion" className="text-white block mb-2">
               Tipo Camion:
            </label>
            <input
               type="text"
               id="tipoCamion"
               name="tipoCamion"
               value={vehicleData.tipoCamion}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="modelo" className="text-white block mb-2">
               Modelo:
            </label>
            <input
               type="text"
               id="modelo"
               name="modelo"
               value={vehicleData.modelo}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="marca" className="text-white block mb-2">
               Marca
            </label>
            <input
               type="text"
               id="marca"
               name="marca"
               value={vehicleData.marca}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="placa" className="text-white block mb-2">
               Placa:
            </label>
            <input
               type="text"
               id="placa"
               name="placa"
               value={vehicleData.placa}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="placaSemirremolque" className="text-white block mb-2">
               Placa Semirremolque:
            </label>
            <input
               type="text"
               id="placaSemirremolque"
               name="placaSemirremolque"
               value={vehicleData.placaSemirremolque}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="tarjetaPropiedad" className="text-white block mb-2">
               Tarjeta Propiedad:
            </label>
            <input
               type="text"
               id="tarjetaPropiedad"
               name="tarjetaPropiedad"
               value={vehicleData.tarjetaPropiedad}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="tecnomecanica" className="text-white block mb-2">
               Tecnomecanica:
            </label>
            <input
               type="text"
               id="tecnomecanica"
               name="tecnomecanica"
               value={vehicleData.tecnomecanica}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>
         <div className="mb-4">
            <label htmlFor="soat" className="text-white block mb-2">
               Soat:
            </label>
            <input
               type="text"
               id="soat"
               name="soat"
               value={vehicleData.soat}
               onChange={handleInputChange}
               className="w-full px-3 py-2 rounded"
            />
         </div>

         <div className="flex justify-between">
            <Link to="/admin/vehicles/create">
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
   );
}
