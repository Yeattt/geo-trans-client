import { useState, useEffect } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm, useGetApiData } from '../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nombreOrigen: Yup.string()
      .required('Campo requerido'),

   nombreDestino: Yup.string()
      .required('Campo requerido'),
   
   ciudadOrigen: Yup.string()
      .required('Campo requerido'),

   ciudadDestino: Yup.string()
      .required('Campo requerido'),
         
   direccion: Yup.string()
      .required('Campo requerido'),

   contacto: Yup.number()
      .typeError('Solo se reciben valores numericos')
      .required('Campo requerido'),

   fechaSolicitud: Yup.string()
      .required('Campo requerido'),

   fechaServicio: Yup.string()
      .required('Campo requerido'),
   
   horaCargue: Yup.string()
      .required('Campo requerido'),
      
   tipoCamion: Yup.string()
      .required('Campo requerido'),

   pesoAproximado: Yup.number()
      .typeError('Solo se reciben valores numericos')
      .required('Campo requerido'),

   valorMercancia: Yup.number()
      .typeError('Solo se reciben valores numericos')
      .required('Campo requerido'),
   
   contenido: Yup.string()
      .required('Campo requerido'),

   valorTransporte: Yup.number()
      .typeError('Solo se reciben valores numericos')
      .required('Campo requerido'),

   userId: Yup.string()
      .required('Campo requerido'),
   
   companyId: Yup.string()
      .required('Campo requerido'),
});

export const QuotesCreateForm = () => {
   const { data: users, isLoading: usersIsLoading } = useGetApiData('/users');
   const [usersList, setUsersList] = useState([]);
   const { data: companies, isLoading: companiesIsLoading } = useGetApiData('/companies');
   const [companiesList, setCompaniesList] = useState([]);
   const { data: vehiclesType, isLoading: isVehiclesTypeLoading } = useGetApiData('/trucks/types');
   const [vehiclesTypeList, setVehiclesTypeList] = useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      nombreOrigen: '',
      nombreDestino: '',
      ciudadOrigen: '',
      ciudadDestino: '',
      direccion: '',
      contacto: '',
      fechaSolicitud: '',
      fechaServicio: '',
      horaCargue: '',
      tipoCamion: '',
      pesoAproximado: '',
      valorMercancia: '',
      contenido: '',
      valorTransporte: '',
      observaciones: '',
      userId: '',
      companyId: '',
   }, 'quotes');

   useEffect(() => {
      if (!usersIsLoading) {
         setUsersList(users.users);
      }
   }, [usersIsLoading]);

   useEffect(() => {
      if (!companiesIsLoading) {
         setCompaniesList(companies.companies);
      }
   }, [companiesIsLoading]);

   useEffect(() => {
      if (!isVehiclesTypeLoading) {
         setVehiclesTypeList(vehiclesType.vehiclesType);
      }
   }, [isVehiclesTypeLoading]);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-4 gap-3">
               <div className="mb-4">
                  <label htmlFor="nombreOrigen" className="text-black font-semibold block mb-2">
                     Nombre de Origen:
                  </label>
                  <Field
                     type="text"
                     id="nombreOrigen"
                     name="nombreOrigen"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Nombre Origen..."
                  />
                  <ErrorMessage name="nombreOrigen" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="nombreDestino" className="text-black font-semibold block mb-2">
                     Nombre de Destino:
                  </label>
                  <Field
                     type="text"
                     id="nombreDestino"
                     name="nombreDestino"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Nombre de Destino..."
                  />
                  <ErrorMessage name="nombreDestino" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="ciudadOrigen" className="text-black font-semibold block mb-2">
                     Ciudad de origen:
                  </label>
                  <Field
                     type="text"
                     id="ciudadOrigen"
                     name="ciudadOrigen"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Ciudad de origen..."
                  />
                  <ErrorMessage name="ciudadOrigen" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="ciudadDestino" className="text-black font-semibold block mb-2">
                     Ciudad de Destino:
                  </label>
                  <Field
                     type="text"
                     id="ciudadDestino"
                     name="ciudadDestino"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Ciudad de Destino..."
                  />
                  <ErrorMessage name="ciudadDestino" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="direccion" className="text-black font-semibold block mb-2">
                     Direccion:
                  </label>
                  <Field
                     type="text"
                     id="direccion"
                     name="direccion"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Direccion..."
                  />
                  <ErrorMessage name="direccion" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="contacto" className="text-black font-semibold block mb-2">
                     Contacto:
                  </label>
                  <Field
                     type="text"
                     id="contacto"
                     name="contacto"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Contacto..."
                  />
                  <ErrorMessage name="contacto" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="fechaSolicitud" className="text-black font-semibold block mb-2">
                     Fecha de solicitud:
                  </label>
                  <Field
                     type="date"
                     id="fechaSolicitud"
                     name="fechaSolicitud"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Fecha de solicitud..."
                  />
                  <ErrorMessage name="fechaSolicitud" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="fechaServicio" className="text-black font-semibold block mb-2">
                     Fecha de servicio:
                  </label>
                  <Field
                     type="date"
                     id="fechaServicio"
                     name="fechaServicio"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Fecha de servicio..."
                  />
                  <ErrorMessage name="fechaServicio" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="horaCargue" className="text-black font-semibold block mb-2">
                     Hora de cargue:
                  </label>
                  <Field
                     type="time"
                     id="horaCargue"
                     name="horaCargue"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Hora de cargue..."
                  />
                  <ErrorMessage name="horaCargue" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tipoCamion" className="text-purplePz font-semibold block mb-2">
                     Tipo Camión:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[9%] text-[22px] flex items-center justify-center">
                        <FaTruckLoading />
                     </div>

                     <Field
                        as="select"
                        id="tipoCamion"
                        name="tipoCamion"
                        className="bg-transparent w-[130%] h-full px-4 pl-0 py-3 pb-3 text-[15px] text-gray-400 focus-within:text-black"
                        placeholder="Tipo Camión..."
                     >
                        <option value="" disabled defaultValue>
                           Tipo Camión...
                        </option>

                        {vehiclesTypeList.map(vehicleType => (
                           <option value={vehicleType.id} key={vehicleType.id}>
                              {vehicleType.nombre}
                           </option>
                        ))}
                     </Field>
                  </div>

                  <ErrorMessage name="tipoCamion" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="pesoAproximado" className="text-black font-semibold block mb-2">
                     Peso Aproximado:
                  </label>
                  <Field
                     type="text"
                     id="pesoAproximado"
                     name="pesoAproximado"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Peso Aproximado..."
                  />
                  <ErrorMessage name="pesoAproximado" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="valorMercancia" className="text-black font-semibold block mb-2">
                     Vlr. Mercancia:
                  </label>
                  <Field
                     type="text"
                     id="valorMercancia"
                     name="valorMercancia"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Vlr. Mercancia..."
                  />
                  <ErrorMessage name="valorMercancia" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="contenido" className="text-black font-semibold block mb-2">
                     Contenido:
                  </label>
                  <Field
                     type="text"
                     id="contenido"
                     name="contenido"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Contenido..."
                  />
                  <ErrorMessage name="contenido" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="valorTransporte" className="text-black font-semibold block mb-2">
                     Vlr. Transporte:
                  </label>
                  <Field
                     type="text"
                     id="valorTransporte"
                     name="valorTransporte"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Vlr. Transporte..."
                  />
                  <ErrorMessage name="valorTransporte" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="userId" className="text-black font-semibold block mb-2">
                     User Id:
                  </label>
                  <Field
                     as="select"
                     id="userId"
                     name="userId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="User Id..."
                  >
                     <option value="" disabled defaultValue>
                        Usuario...
                     </option>

                     {
                        usersList.map(user => (
                           <option value={user.id} key={user.id}>{user.email}</option>
                        ))
                     }
                  </Field>
                  <ErrorMessage name="userId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="companyId" className="text-black font-semibold block mb-2">
                     Company Id:
                  </label>
                  <Field
                     as="select"
                     id="companyId"
                     name="companyId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Company Id..."
                  >
                     <option value="" disabled defaultValue>
                        Compañia...
                     </option>

                     {
                        companiesList.map(company => (
                           <option value={company.id} key={company.id}>{company.razonSocial}</option>
                        ))
                     }
                  </Field>
                  <ErrorMessage name="companyId" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="mb-4">
                  <label htmlFor="observaciones" className="text-black font-semibold block mb-2">
                     Observaciones:
                  </label>
                  <Field
                     type="textarea"
                     id="observaciones"
                     name="observaciones"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Observaciones..."
                  />
                  <ErrorMessage name="observaciones" component="div" className="text-red-500" />
               </div>

            <div className="text-center mt-2">
               <button
                  type="submit"
                  className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
               >
                  Registrar
               </button>
            </div>
         </Form>
      </Formik>

   );
}