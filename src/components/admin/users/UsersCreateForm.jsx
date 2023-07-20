import { useState, useEffect } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FaTruck, FaUserCog, FaUsers, FaUsersCog } from 'react-icons/fa';
import { BsBuildingFillGear } from 'react-icons/bs';
import { RiLockPasswordLine, RiUserSettingsLine } from 'react-icons/ri';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

import { useCreateForm, useGetApiData } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   documento: Yup.number('Este campo solo debe contener números')
      .test('len', 'El campo debe ser 10 caracteres', val => val && val.toString().length == 10)
      .required('Campo requerido'),
   edad: Yup.number('Este campo solo debe contener números')
      .test('len', 'Máximo 2 caracteres', val => val && val.toString().length == 2)
      .required('Campo requerido'),
   email: Yup.string()
      .required('Campo requerido'),
   contrasena: Yup.string()
      .min(3, 'Mínimo 3 caracteres').required('Campo requerido'),
   roleId: Yup.string(),
   companyId: Yup.string(),
   vehicleId: Yup.string()
});

export const UsersCreateForm = () => {
   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');

   const [vehiclesList, setVehiclesList] = useState([]);
   const [companiesList, setCompaniesList] = useState([]);
   const [rolesList, setRolesList] = useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      documento: '',
      nombre: '',
      edad: '',
      email: '',
      contrasena: '',
      roleId: '',
      companyId: '',
      vehicleId: '',
   }, 'users');

   useEffect(() => {
      if (!isVehiclesLoading && !isCompaniesLoading && !isRolesLoading) {
         setVehiclesList(vehicles.vehicles);
         setCompaniesList(companies.companies);
         setRolesList(roles.roles);
      }
   }, [isVehiclesLoading, isCompaniesLoading, isRolesLoading]);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="documento" className="text-purplePz font-semibold block mb-2">
                     Documento:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <MdOutlineDocumentScanner />
                     </div>

                     <Field
                        type="text"
                        id="documento"
                        name="documento"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Documento..."
                     />
                  </div>

                  <ErrorMessage name="documento" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="nombre" className="text-purplePz font-semibold block mb-2">
                     Nombre:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <MdOutlineDocumentScanner />
                     </div>

                     <Field
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Nombre..."
                     />
                  </div>

                  <ErrorMessage name="nombre" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="edad" className="text-purplePz font-semibold block mb-2">
                     Edad:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <RiUserSettingsLine />
                     </div>

                     <Field
                        type="text"
                        id="edad"
                        name="edad"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Edad..."
                     />
                  </div>

                  <ErrorMessage name="edad" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="email" className="text-purplePz font-semibold block mb-2">
                     Email:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <HiOutlineMail />
                     </div>

                     <Field
                        type="email"
                        id="email"
                        name="email"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Email..."
                     />
                  </div>

                  <ErrorMessage name="email" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="contrasena" className="text-purplePz font-semibold block mb-2">
                     Contraseña:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <RiLockPasswordLine />
                     </div>

                     <Field
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Contraseña..."
                     />
                  </div>

                  <ErrorMessage name="contrasena" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="roleId" className="text-purplePz font-semibold block mb-2">
                     Rol:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full text-gray-400 focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaUsersCog />
                     </div>

                     <Field
                        as="select"
                        id="roleId"
                        name="roleId"
                        className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                        placeholder="Rol..."
                     >
                        <option value="" disabled defaultValue>
                           Rol...
                        </option>

                        {
                           rolesList.map(role => (
                              <option value={role.id} key={role.id}>{role.nombre}</option>
                           ))
                        }
                     </Field>
                  </div>

                  <ErrorMessage name="roleId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="companyId" className="text-purplePz font-semibold block mb-2">
                     Compañía:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full text-gray-400 focus-within:text-black text-[22px] flex items-center justify-center">
                        <BsBuildingFillGear />
                     </div>

                     <Field
                        as="select"
                        id="companyId"
                        name="companyId"
                        className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                        placeholder="Compañía..."
                     >
                        <option value="" disabled defaultValue>
                           Compañía...
                        </option>

                        {
                           companiesList.map(company => (
                              <option value={company.id} key={company.id}>{company.nombreEmpresa}</option>                           
                           ))                           
                        }
                     </Field>
                  </div>

                  <ErrorMessage name="companyId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="vehicleId" className="text-purplePz font-semibold block mb-2">
                     Vehículo:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full text-gray-400 focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaTruck />
                     </div>

                     <Field
                        as="select"
                        id="vehicleId"
                        name="vehicleId"
                        className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                        placeholder="Vehículo..."
                     >
                        <option value="" disabled defaultValue>
                           Vehículo...
                        </option>

                        {
                           vehiclesList.map(vehicle => (
                              !vehicle.enUso && <option value={vehicle.id} key={vehicle.id}>{vehicle.placa}</option>
                           ))
                        }
                     </Field>
                  </div>

                  <ErrorMessage name="vehicleId" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>
   );
}