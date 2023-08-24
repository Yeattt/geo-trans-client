import { useState, useEffect } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm, useGetApiData } from '../../../../hooks';

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
   nombrePlataforma: Yup.string()
      .required('Campo requerido'),
   linkPlataforma: Yup.string()
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
      nombrePlataforma: '',
      linkPlataforma: '',
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

                  <Field
                     type="number"
                     id="documento"
                     name="documento"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Documento..."
                  />

                  <ErrorMessage name="documento" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="nombre" className="text-purplePz font-semibold block mb-2">
                     Nombre: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="nombre"
                     name="nombre"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Nombre..."
                  />

                  <ErrorMessage name="nombre" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="edad" className="text-purplePz font-semibold block mb-2">
                     Edad: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="number"
                     id="edad"
                     name="edad"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Edad..."
                  />

                  <ErrorMessage name="edad" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="nombrePlataforma" className="text-purplePz font-semibold block mb-2">
                     Nombre Plataforma: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="nombrePlataforma"
                     name="nombrePlataforma"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="nombrePlataforma..."
                  />

                  <ErrorMessage name="nombrePlataforma" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="linkPlataforma" className="text-purplePz font-semibold block mb-2">
                     Link Plataforma: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="linkPlataforma"
                     name="linkPlataforma"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="linkPlataforma..."
                  />

                  <ErrorMessage name="linkPlataforma" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="email" className="text-purplePz font-semibold block mb-2">
                     Email: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="email"
                     id="email"
                     name="email"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Email..."
                  />

                  <ErrorMessage name="email" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="contrasena" className="text-purplePz font-semibold block mb-2">
                     Contraseña: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     type="password"
                     id="contrasena"
                     name="contrasena"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Contraseña..."
                  />

                  <ErrorMessage name="contrasena" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="roleId" className="text-purplePz font-semibold block mb-2">
                     Rol: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     as="select"
                     id="roleId"
                     name="roleId"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
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

                  <ErrorMessage name="roleId" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="companyId" className="text-purplePz font-semibold block mb-2">
                     Compañía: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     as="select"
                     id="companyId"
                     name="companyId"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
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

                  <ErrorMessage name="companyId" component="div" className="text-red" />
               </div>

               <div className="mb-4">
                  <label htmlFor="vehicleId" className="text-purplePz font-semibold block mb-2">
                     Vehículo: <small className='text-red text-2xl'>*</small>
                  </label>

                  <Field
                     as="select"
                     id="vehicleId"
                     name="vehicleId"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
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

                  <ErrorMessage name="vehicleId" component="div" className="text-red" />
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