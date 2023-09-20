import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      clienteId: '',
      horaViaje: '',
      conductorId: '',
      vehiculoId: ''
   }, 'trips');

   useEffect(() => {
      if (!isVehiclesLoading && !isUsersLoading && !isLoadingClients) {
         setVehiclesList(vehicles?.vehicles?.filter(vehicle => vehicle.estado));
         setUsersList(users?.users?.filter(user => user.estado));
         setClientsList(clients?.clients?.filter(client => client.estado));
      }
   }, [isVehiclesLoading, isUsersLoading, isLoadingClients]);


   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         {({ values, setFieldValue }) => (
            <Form>
               <div className="bg-white rounded-md w-[100%] flex flex-col justify-between px-2 py-2">
                  <div className="max-h-[800px] overflow-y-scroll grid grid-cols-3 gap-3">
                     <div className="mb-4">
                        <label htmlFor="tipoViaje" className="text-black font-semibold block mb-2">
                           Tipo viaje: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <div className="mb-4">
                           <Field
                              as="select"
                              id="tipoViaje"
                              name="tipoViaje"
                              className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                           >
                              <option value="" disabled defaultValue>
                                 Tipo de viaje...
                              </option>

                              <option value="interno">Interno</option>
                              <option value="externo">A terceros</option>
                           </Field>

                           <ErrorMessage name="tipoViaje" component="div" className="text-red-600" />
                        </div>
                     </div>

                     <div className="mb-4">
                        <label htmlFor="clienteId" className="text-black font-semibold block mb-2">
                           Cliente: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="clienteId"
                           name="clienteId"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
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

                        <ErrorMessage name="clienteId" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="numeroRemesa" className="text-black font-semibold block mb-2">
                           Número de remesa: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="numeroRemesa"
                           name="numeroRemesa"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="numeroRemesa" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="unidadMedida" className="text-black font-semibold block mb-2">
                           Unidad de medida: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="unidadMedida"
                           name="unidadMedida"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        >
                           <option value="" disabled defaultValue>
                              Unidad de medida...
                           </option>

                           <option value="galon">GALONES</option>
                           <option value="unidad">UNIDADES</option>
                           <option value="tonelada">TONELADAS</option>
                        </Field>

                        <ErrorMessage name="unidadMedida" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="cantidad" className="text-black font-semibold block mb-2">
                           Cantidad: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="cantidad"
                           name="cantidad"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="cantidad" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="naturaleza" className="text-black font-semibold block mb-2">
                           Naturaleza: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="naturaleza"
                           name="naturaleza"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="naturaleza" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="empaque" className="text-black font-semibold block mb-2">
                           Empaque: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="empaque"
                           name="empaque"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
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

                        <ErrorMessage name="empaque" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="nombreProducto" className="text-black font-semibold block mb-2">
                           Nombre producto: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="nombreProducto"
                           name="nombreProducto"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        >
                           <option value="" disabled defaultValue>
                              Nombre producto...
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

                        <ErrorMessage name="nombreProducto" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="productoTransportar" className="text-black font-semibold block mb-2">
                           Producto a transportar: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="productoTransportar"
                           name="productoTransportar"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="productoTransportar" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="origen" className="text-black font-semibold block mb-2">
                           Origen: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="origen"
                           name="origen"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="origen" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="destino" className="text-black font-semibold block mb-2">
                           Destino: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="destino"
                           name="destino"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="destino" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="fechaViaje" className="text-black font-semibold block mb-2">
                           Fecha del viaje: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="date"
                           id="fechaViaje"
                           name="fechaViaje"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="fechaViaje" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="horaViaje" className="text-black font-semibold block mb-2">
                           Hora del viaje: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="time"
                           id="horaViaje"
                           name="horaViaje"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="horaViaje" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="saldoPagar" className="text-black font-semibold block mb-2">
                           Saldo a pagar: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="saldoPagar"
                           name="saldoPagar"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="saldoPagar" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="valorPagar" className="text-black font-semibold block mb-2">
                           Valor a pagar: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           type="text"
                           id="valorPagar"
                           name="valorPagar"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                        />

                        <ErrorMessage name="valorPagar" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="conductorId" className="text-black font-semibold block mb-2">
                           Conductor: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="conductorId"
                           name="conductorId"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                           onChange={(event) => {
                              const { id, vehicleId } = usersList.find(user => user.id == event.target.value);
                              const { placa } = vehiclesList.find(vehicle => vehicle.id === vehicleId);
                              setFieldValue('vehiculoId', vehicleId);
                              setFieldValue('vehiculoPlaca', placa)
                              setFieldValue('conductorId', id.toString());
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

                        <ErrorMessage name="conductorId" component="div" className="text-red-600" />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="vehiculoId" className="text-black font-semibold block mb-2">
                           Vehículo: <small className='text-red-600 text-2xl'>*</small>
                        </label>

                        <Field
                           as="select"
                           id="vehiculoId"
                           name="vehiculoId"
                           className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition cursor-not-allowed"
                           disabled
                        >
                           <option value="" disabled defaultValue>
                              Vehículo...
                           </option>

                           {
                              vehiclesList.map(vehicle => (
                                 <option value={vehicle.id} key={vehicle.id}>{vehicle.placa}</option>
                              ))
                           }
                        </Field>

                        <ErrorMessage name="vehiculoId" component="div" className="text-red-600" />
                     </div>

                  </div>

                  <div className="w-full mt-4 flex justify-center"> {/* Agregado justify-center para centrar */}
                     <button
                        type="submit"
                        className="rounded-full px-3 py-2 bg-primary text-white text-base font-semibold hover:bg-[#007ba7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-[25%] md:w-[15%] transition"
                     >
                        Registrar
                     </button>
                  </div>

               </div>
            </Form>
         )}
      </Formik>
   );
};
