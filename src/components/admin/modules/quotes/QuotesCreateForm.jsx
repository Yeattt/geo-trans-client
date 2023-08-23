import { useState, useEffect } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';



import * as Yup from 'yup';

import { useCreateForm, useGetApiData, useAuthStore } from '../../../../hooks';

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
   const { user } = useAuthStore();

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
      userId: user.uid,
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
         <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2">
         <div className="max-h-[800px] overflow-y-scroll">
            <h1 className="text-2xl text-black font-semibold block mb-2">Información del viaje:</h1>
            <div className="grid grid-cols-2 gap-3">
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
                     Fecha de servicio:  <small className='text-red text-2xl'>*</small>
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
                     Hora de cargue:  <small className='text-red text-2xl'>*</small>
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
                     Tipo Camión:  <small className='text-red text-2xl'>*</small>
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full text-gray-400 focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaTruckLoading />
                     </div>

                     <Field
                        as="select"
                        id="tipoCamion"
                        name="tipoCamion"
                        className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
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
                     Peso Aproximado:  <small className='text-red text-2xl'>*</small>
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
                     Vlr. Mercancia:  <small className='text-red text-2xl'>*</small>
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
                     Contenido:  <small className='text-red text-2xl'>*</small>
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
                     Vlr. Transporte:  <small className='text-red text-2xl'>*</small>
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
                     User:  <small className='text-red text-2xl'>*</small>
                  </label>
                  <Field
                     type="text"
                     id="userId"
                     name="userId"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="User Id..."
                     value={user.name}
                     disabled
                     // onChange={(event) => {
                     //    const { nombre } = usersList.find(user => user.id == event.target.value);
                        
                     //    setFieldValue('userId', nombre);
                       

                     //    console.log(nombre)
                     // }}
                   
                  >
                  </Field>
                  <ErrorMessage name="userId" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="companyId" className="text-black font-semibold block mb-2">
                     Compañia:  <small className='text-red text-2xl'>*</small>
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
            
            <div className="grid grid-cols-1 gap-3">
               <div className="mb-20">
                  <label htmlFor="observaciones" className="text-black font-semibold block mb-2">
                     Observaciones:  <small className='text-red text-2xl'>*</small>
                  </label>
                  <Field
                     type="textarea"
                     id="observaciones"
                     name="observaciones"
                     className="w-full px-3 py-10 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Observaciones..."
                  />
                  <ErrorMessage name="observaciones" component="div" className="text-red-500" />
               </div>
            </div>
            
            <h1 className="text-2xl text-black font-semibold block mb-2">Información del cliente:</h1>
            <div className="grid grid-cols-1 gap-3">
               <div className="mb-4">
                  <label htmlFor="nombreOrigen" className="text-black font-semibold block mb-2">
                     Nombre de Origen:  <small className='text-red text-2xl'>*</small>
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
               <div className="mb-20">
                  <label htmlFor="ciudadOrigen" className="text-black font-semibold block mb-2">
                     Ciudad de origen:  <small className='text-red text-2xl'>*</small>
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
            </div>
           
            <h1 className="text-2xl text-black font-semibold block mb-2">Información del destinatario:</h1>
            <div className="grid grid-cols-1 gap-3">
               <div className="mb-4">
                  <label htmlFor="nombreDestino" className="text-black font-semibold block mb-2">
                     Nombre de Destino:  <small className='text-red text-2xl'>*</small>
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
                  <label htmlFor="ciudadDestino" className="text-black font-semibold block mb-2">
                     Ciudad de Destino: <small className='text-red text-2xl'>*</small>
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
                     Direccion: <small className='text-red text-2xl'>*</small>
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
                     Contacto: <small className='text-red text-2xl'>*</small>
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
            </div>
            <div className="text-center mt-4">
               <button
                  type="submit"
                  className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 w-[20%] rounded-full"
                  
               >
                  Registrar
               </button>
            </div>
            </div>
            </div>



         </Form>
      </Formik>
      
   );
}
