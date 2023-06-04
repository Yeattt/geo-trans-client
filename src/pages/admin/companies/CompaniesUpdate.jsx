import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const CompaniesUpdate = () => {
   const [companyData, setCompanyData] = useState({
      nit: '',
      businessname: '',
      companyname: '',
      phone: '',
      ownerpolicy: '',
   });

   const navigate = useNavigate();

   const handleInputChange = (e) => {
      setCompanyData({
         ...companyData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // TODO: Make the HTTP request to update the vehicle

      console.log(companyData);
   };

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Editar Compañia</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="make" className="text-white block mb-2">
                           Nit:
                        </label>
                        <input
                           type="text"
                           id="make"
                           name="make"
                           value={companyData.nit}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="model" className="text-white block mb-2">
                           Razon social:
                        </label>
                        <input
                           type="text"
                           id="model"
                           name="model"
                           value={companyData.businessname}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="year" className="text-white block mb-2">
                           Nombre empresa:
                        </label>
                        <input
                           type="text"
                           id="year"
                           name="year"
                           value={companyData.companyname}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="color" className="text-white block mb-2">
                           Telefono:
                        </label>
                        <input
                           type="text"
                           id="color"
                           name="color"
                           value={companyData.phone}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="color" className="text-white block mb-2">
                           Dueño poliza:
                        </label>
                        <input
                           type="text"
                           id="color"
                           name="color"
                           value={companyData.ownerpolicy}
                           onChange={handleInputChange}
                           className="w-full px-3 py-2 rounded"
                        />
                     </div>

                     <div className="flex justify-between">
                        <Link to="/admin/companies/create">
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