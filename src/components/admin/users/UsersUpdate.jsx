import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm, useGetApiData } from '../../../hooks';
import { useState, useEffect } from 'react';


export const UsersUpdate = ({ moduleInfo }) => {
   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: companies, isLoading: isCompaniesLoading } = useGetApiData('/companies');
   const { data: roles, isLoading: isRolesLoading } = useGetApiData('/roles');

   const [vehiclesList, setVehiclesList] = useState([]);
   const [companiesList, setCompaniesList] = useState([]);
   const [rolesList, setRolesList] = useState([]);

   const validationSchema = Yup.object().shape({
      documento: Yup.number('Este campo solo debe contener números')
         .test('len', 'El campo debe ser 10 caracteres', val => val && val.toString().length == 10),
      edad: Yup.number('Este campo solo debe contener números')
         .test('len', 'Máximo 2 caracteres', val => val && val.toString().length == 2),
      email: Yup.string(),
      contrasena: Yup.string()
         .min(3, 'Mínimo 3 caracteres'),
      roleId: Yup.string(),
      companyId: Yup.string(),
      vehicleId: Yup.string(),
   });


   const { initialValues, onSubmitForm } = useUpdateForm({
      id: moduleInfo.id,
      documento: moduleInfo.documento,
      edad: moduleInfo.edad,
      email: moduleInfo.email,      
      roleId: moduleInfo.roleId,
      companyId: moduleInfo.companyId,
      vehicleId: moduleInfo.vehicleId,
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
         onSubmit={(values) => onSubmitForm(values)}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="documento" className="text-black font-semibold block mb-2">
                     Documento:
                  </label>
                  <Field
                     type="text"
                     id="documento"
                     name="documento"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Documento..."
                  />
                  <ErrorMessage name="documento" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="edad" className="text-black font-semibold block mb-2">
                     Edad:
                  </label>
                  <Field
                     type="text"
                     id="edad"
                     name="edad"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Edad..."
                  />
                  <ErrorMessage name="edad" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="email" className="text-black font-semibold block mb-2">
                     Email:
                  </label>
                  <Field
                     type="text"
                     id="email"
                     name="email"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Email..."
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
               </div>
                           
               <div className="mb-4">
                  <label htmlFor="roleId" className="text-black font-semibold block mb-2">
                     Rol:
                  </label>
                  <Field
                     as="select"
                     id="roleId"
                     name="roleId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Rol..."
                  >
                     {
                        rolesList.map(role => (
                           <option value={role.id} key={role.id}>{role.nombre}</option>
                        ))
                     }
                  </Field>
                  <ErrorMessage name="roleId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="companyId" className="text-black font-semibold block mb-2">
                     Compañia:
                  </label>
                  <Field
                     as="select"
                     id="companyId"
                     name="companyId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Compañía..."
                  >
                     {
                        companiesList.map(company => (
                           <option value={company.id} key={company.id}>{company.nombreEmpresa}</option>
                        ))
                     }
                  </Field>
                  <ErrorMessage name="companyId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="vehicleId" className="text-black font-semibold block mb-2">
                     Vehiculo:
                  </label>

                  <Field
                     as="select"
                     id="vehicleId"
                     name="vehicleId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Vehículo..."
                  >
                     {
                        vehiclesList.map(vehicle => (
                           <option value={vehicle.id} key={vehicle.id}>{vehicle.placa}</option>
                        ))
                     }
                  </Field>

                  <ErrorMessage name="vehicleId" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
                  onClick={() => console.log(initialValues)}
               >
                  Editar
               </button>
            </div>
         </Form>
      </Formik>
   );
}     