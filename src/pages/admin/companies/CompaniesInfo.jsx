import { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../components/layouts';

export const CompaniesInfo = () => {
   const companies = [
    { id: 1, nit: 24354654, businessname: 'Aventador', companyname: 'Mr company', phone: 245786453, ownerpolicy: 'Greem' },
    { id: 2, nit: 24354654, businessname: 'Aventador', companyname: 'Mr company', phone: 245786453, ownerpolicy: 'Greem' },
    { id: 3, nit: 24354654, businessname: 'Aventador', companyname: 'Mr company', phone: 245786453, ownerpolicy: 'Greem' },
   ];
   const [currentCompany, setCurrentCompany] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const company = companies.find((company) => company.id === parseInt(id));

      if (!company) {
         <Navigate to="/admin/companies" />
      }

      setCurrentCompany(company);
   }, [id]);

   const onNavigateBack = () => {
      navigate(-1);
   }

   return (
      <AdminLayout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-white font-bold my-4">Detalles de la Compañia</h2>
            <div className="overflow-hidden shadow-sm sm:rounded-lg">
               <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="font-bold text-white">ID:</div>
                     <div className="text-white">{currentCompany.id}</div>

                     <div className="font-bold text-white">Nit:</div>
                     <div className="text-white">{currentCompany.nit}</div>

                     <div className="font-bold text-white">Razon social:</div>
                     <div className="text-white">{currentCompany.businessname}</div>

                     <div className="font-bold text-white">Nombre empresa:</div>
                     <div className="text-white">{currentCompany.companyname}</div>

                     <div className="font-bold text-white">Telefono:</div>
                     <div className="text-white">{currentCompany.phone}</div>

                     <div className="font-bold text-white">Dueño poliza:</div>
                     <div className="text-white">{currentCompany.ownerpolicy}</div>
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