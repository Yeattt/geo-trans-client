import { useState, useEffect } from 'react';
import { FaTruckLoading, FaTruck } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import * as Yup from 'yup';

import { useCreateForm, useGetApiData, useAuthStore } from '../../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   numeroRemesa: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 10 caracteres', val => val && val.toString().length <= 10)
      .required('Campo requerido'),
   unidadMedida: Yup.string('Este campo solo debe contener letras')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
   cantidad: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 50 caracteres', val => val && val.toString().length <= 50)
      .required('Campo requerido'),
   naturaleza: Yup.string('Este campo solo debe contener letras')
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   empaque: Yup.string('Este campo solo debe contener letras')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
   productoTransportar: Yup.string('Este campo solo debe contener letras')
      .max(25, 'Máximo 25 caracteres')
      .required('Campo requerido'),
   origen: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   destino: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   saldoPagar: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 80 caracteres', val => val && val.toString().length <= 80)
      .required('Campo requerido'),
   valorPagar: Yup.number()
      .typeError('El documento debe ser un número')
      .test('len', 'Máximo 80 caracteres', val => val && val.toString().length <= 80)
      .required('Campo requerido'),
   cliente: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   horaViaje: Yup.string()
      .required('Campo requerido'),
   tipoViaje: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
});

export const TripsCreateForm = () => {

   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const { data: users, isLoading: isUsersLoading } = useGetApiData('/users');
   const { data: clients, isLoading: isLoadingClients } = useGetApiData('/clients');

   const [usersList, setUsersList] = useState([]);
   const [clientsList, setClientsList] = useState([]);
   const [vehiclesList, setVehiclesList] = useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      cantidad: '',
      nombreProducto: '',
      destino: '',
      empaque: '',
      naturaleza: '',
      numeroRemesa: '',
      origen: '',
      productoTransportar: '',
      saldoPagar: '',
      unidadMedida: '',
      valorPagar: '',
      tipoViaje: '',
      fechaViaje: '',
      cliente: '',
      horaViaje: '',
      conductorId: '',
      vehiculoId: ''
   }, 'trips');

   useEffect(() => {
      if (!isVehiclesLoading && !isUsersLoading && !isLoadingClients) {
         setVehiclesList(vehicles.vehicles);
         setUsersList(users.users);
         setClientsList(clients.clients);
      }
   }, [isVehiclesLoading, isUsersLoading, isLoadingClients]);

   ;

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-4 gap-4">
               <div className="mb-4">
                  <label htmlFor="tipoViaje" className="text-purplePz font-semibold block mb-2">
                     Tipo de viaje: <small className='text-red text-2xl'>*</small>
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaTruckLoading />
                     </div>

                     <Field
                        as="select"
                        id="tipoViaje"
                        name="tipoViaje"
                        className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                        placeholder="Tipo de viaje..."
                     >
                        <option value="" disabled defaultValue>
                           Tipo de viaje...
                        </option>

                        <option value="interno">Interno</option>
                        <option value="externo">A terceros</option>
                     </Field>
                  </div>

                  <ErrorMessage name="tipoViaje" component="div" className="text-red-500" />
               </div>
            </div>

            <div className="mb-4">
               <label htmlFor="clienteId" className="text-purplePz font-semibold block mb-2">
                  Cliente: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruckLoading />
                  </div>

                  <Field
                     as="select"
                     id="cliente"
                     name="cliente"
                     className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                     placeholder="Cliente..."
                  >
                     <option value="" disabled defaultValue>
                        Cliente...
                     </option>

                     {clientsList.map(client => (
                        <option value={client.id} key={client.id}>
                           {client.nombre}
                        </option>
                     ))}
                  </Field>
                  <ErrorMessage name="cliente" component="div" className="tet-red-50x0" />
               </div>
            </div>
            <div className="mb-4">
               <label htmlFor="numeroRemesa" className="text-purplePz font-semibold block mb-2">
                  Número de remesa: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="numeroRemesa"
                     name="numeroRemesa"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Número de remesa..."
                  />
               </div>

               <ErrorMessage name="numeroRemesa" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="unidadMedida" className="text-purplePz font-semibold block mb-2">
                  Unidad de medida: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                  <div className="w-[15%] lg:w-[7%] h-full  focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruckLoading />
                  </div>

                  <Field
                     as="select"
                     id="unidadMedida"
                     name="unidadMedida"
                     className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                     placeholder="Unidad de medida..."
                  >
                     <option value="" disabled defaultValue>
                        Unidad de medida...
                     </option>

                     <option value="galon">GALONES</option>
                     <option value="unidad">UNIDADES</option>
                     <option value="tonelada">TONELADAS</option>
                  </Field>
               </div>

               <ErrorMessage name="unidadMedida" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="cantidad" className="text-purplePz font-semibold block mb-2">
                  Cantidad: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full  border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="cantidad"
                     name="cantidad"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Cantidad..."
                  />
               </div>

               <ErrorMessage name="cantidad" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="naturaleza" className="text-purplePz font-semibold block mb-2">
                  Naturaleza: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full  border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="naturaleza"
                     name="naturaleza"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Naturaleza..."
                  />
               </div>

               <ErrorMessage name="naturaleza" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="empaque" className="text-purplePz font-semibold block mb-2">
                  Empaque: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                  <div className="w-[15%] lg:w-[7%] h-full  focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruckLoading />
                  </div>

                  <Field
                     as="select"
                     id="empaque"
                     name="empaque"
                     className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                     placeholder="Empaque..."
                  >
                     <option value="" disabled defaultValue>
                        Empaque...
                     </option>

                     <option value="016">BIDON O ENVASE PLASTICO</option>
                     <option value="018">CAJA DE CARTON</option>
                     <option value="017">CAJA DE MADERA NATURAL</option>
                     <option value="019">CAJA DE PLASTICO</option>
                     <option value="010">CARGA ESTIBADA</option>
                     <option value="011">CILINDROS</option>
                     <option value="015">CONTENEDOR 45 PIES</option>
                     <option value="008">DOS CONTENEDORES DE 20 PIES</option>
                     <option value="004">GENERAL FRACCIONADA</option>
                     <option value="006">GRANEL LIQUIDO</option>
                     <option value="014">GRANEL SOLIDO</option>
                     <option value="000">PAQUETES</option>
                     <option value="020">SACO O TALEGO POLIETI/PROLIP</option>
                     <option value="021">SACO TALEGA YUTE FIQUE CABUYA</option>
                     <option value="007">UN CONTENEDOR DE 20 PIES</option>
                     <option value="009">UN CONTENEDOR DE 40 PIES</option>
                     <option value="013">UNIDAD SIN EMPAQUES</option>
                     <option value="012">VARIOS</option>
                  </Field>
               </div>

               <ErrorMessage name="empaque" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="nombreProducto" className="text-purplePz font-semibold block mb-2">
                  Código de producto: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                  <div className="w-[15%] lg:w-[7%] h-full  focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruckLoading />
                  </div>

                  <Field
                     as="select"
                     id="nombreProducto"
                     name="nombreProducto"
                     className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                     placeholder="Código de producto..."
                  >
                     <option value="" disabled defaultValue>
                        Código de producto...
                     </option>

                     <option value="0001">ACERO</option>
                     <option value="0002">CONCENTRADO</option>
                     <option value="0003">CERDOS</option>
                     <option value="0004">ANIMALES VIVOS</option>
                     <option value="0005">CABALLOS</option>
                     <option value="0006">VACAS</option>
                     <option value="0007">FRUTAS</option>
                     <option value="0008">QUIMICOS VARIOS</option>
                     <option value="0009">MADERA</option>
                     <option value="00010">PRODUCTOS VARIOS</option>
                     <option value="00011">TRASTEOS</option>
                     <option value="00012">POLVORA</option>
                     <option value="00013">SONIDO</option>
                     <option value="00014">GRASAS</option>
                     <option value="00015">GASEOSAS</option>
                  </Field>
               </div>

               <ErrorMessage name="nombreProducto" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="productoTransportar" className="text-purplePz font-semibold block mb-2">
                  Producto a transportar: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="productoTransportar"
                     name="productoTransportar"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Producto a transportar..."
                  />
               </div>

               <ErrorMessage name="productoTransportar" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="origen" className="text-purplePz font-semibold block mb-2">
                  Origen: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="origen"
                     name="origen"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Origen..."
                  />
               </div>

               <ErrorMessage name="origen" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="destino" className="text-purplePz font-semibold block mb-2">
                  Destino: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="destino"
                     name="destino"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Destino..."
                  />
               </div>

               <ErrorMessage name="destino" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="fechaViaje" className="text-purplePz font-semibold block mb-2">
                  Fecha del viaje: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="date"
                     id="fechaViaje"
                     name="fechaViaje"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Fecha del viaje..."
                  />
               </div>

               <ErrorMessage name="fechaViaje" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="horaViaje" className="text-purplePz font-semibold block mb-2">
                  Hora del viaje: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="time"
                     id="horaViaje"
                     name="horaViaje"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Hora del viaje..."
                  />
               </div>

               <ErrorMessage name="horaViaje" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="saldoPagar" className="text-purplePz font-semibold block mb-2">
                  Saldo a pagar: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="saldoPagar"
                     name="saldoPagar"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Saldo a pagar..."
                  />
               </div>

               <ErrorMessage name="saldoPagar" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="valorPagar" className="text-purplePz font-semibold block mb-2">
                  Valor a pagar: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="valorPagar"
                     name="valorPagar"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                     placeholder="Valor a pagar..."
                  />
               </div>

               <ErrorMessage name="valorPagar" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
               <label htmlFor="conductorId" className="text-purplePz font-semibold block mb-2">
                  Conductor: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruckLoading />
                  </div>

                  <Field
                     as="select"
                     id="conductorId"
                     name="conductorId"
                     className="w-[85%] lg:w-[93%] h-[115%] px-4 pl-0 py-2.5 pb-3 font-semibold text-[15px]"
                     placeholder="Conductor..."
                     onChange={(event) => {
                        const { vehicleId } = usersList.find(user => user.id === event.target.value);
                        const { placa } = vehiclesList.find(vehicle => vehicle.id === vehicleId);
                        setFieldValue('vehiculoId', placa);
                     }}
                  >
                     <option value="" disabled defaultValue>
                        Conductor...
                     </option>

                     {
                        usersList.map(user => (
                           <option value={user.id} key={user.id}>{user.email}</option>
                        ))
                     }
                  </Field>
               </div>

               <ErrorMessage name="conductorId" component="div" className="text-red-500" />
            </div>

            {/* // TODO: MOSTRAR EL VEHÍCULO AL SELECCIONAR EL CONDUCTOR AUTOMÁTICAMENTE */}
            <div className="mb-4">
               <label htmlFor="vehiculoId" className="text-purplePz font-semibold block mb-2">
                  Vehículo: <small className='text-red text-2xl'>*</small>
               </label>

               <div className="bg-white rounded-full  border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center hover:cursor-not-allowed">
                  <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                     <FaTruck />
                  </div>

                  <Field
                     type="text"
                     id="vehiculoId"
                     name="vehiculoId"
                     className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] hover:cursor-not-allowed"
                     placeholder="Vehículo..."
                     disabled
                  />
               </div>

               <ErrorMessage name="vehiculoId" component="div" className="text-red-500" />
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