import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useCreateForm, useGetApiData } from '../../../hooks';
import { useState , useEffect} from 'react';

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
   codigoProducto: Yup.number('Este campo solo debe contener números')
      .test('len', 'Máximo 10 caracteres', val => val && val.toString().length <= 10)
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
   tipoViaje: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   vehiculo: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
   conductor: Yup.string()
      .max(30, 'Máximo 30 caracteres')
      .required('Campo requerido'),
});

export const TripsCreateForm = () => {

   const {data:vehicles, isLoading: isVehiclesLoading}=useGetApiData('/vehicles');
   const {data:users, isLoading: isUsersLoading}=useGetApiData('/users');

   const [vehiclesList, setVehiclesList]= useState([]);
   const [usersList, setUsersList]= useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      cantidad: '',
      codigoProducto: '',
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
      conductor:'',
   }, 'trips');

   useEffect(()=>{
      if (!isVehiclesLoading && !isUsersLoading) {
         setVehiclesList(vehicles.vehicles);
         setUsersList(users.users);
      }
         },
         [isVehiclesLoading,isUsersLoading]);

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-4 gap-4">
               <div className="mb-4">
                  <label htmlFor="tipoViaje" className="text-black font-semibold block mb-2">
                     Tipo de Viaje:
                  </label>

                  <Field
                     as="select"
                     name="tipoViaje"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  >
                     <option value="interno">Interno</option>
                     <option value="externo">A terceros</option>
                  </Field>

                  <ErrorMessage name="tipoViaje" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="cliente" className="text-black font-semibold block mb-2">
                     Cliente:
                  </label>
                  <Field
                     type="text"
                     id="cliente"
                     name="cliente"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Cliente..."
                  />
                  <ErrorMessage name="cliente" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tipoCamion" className="text-black font-semibold block mb-2">
                     Numero remesa:
                  </label>
                  <Field
                     type="text"
                     id="numeroRemesa"
                     name="numeroRemesa"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Numero remesa..."
                  />
                  <ErrorMessage name="numeroRemesa" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="unidadMedida" className="text-black font-semibold block mb-2">
                     Unidad de medida:
                  </label>

                  <Field
                     as="select"
                     name="unidadMedida"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  >
                     <option value="galon">GALONES</option>
                     <option value="unidad">UNIDADES</option>
                     <option value="tonelada">TONELADAS</option>
                  </Field>

                  <ErrorMessage name="unidadMedida" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="cantidad" className="text-black font-semibold block mb-2">
                     Cantidad:
                  </label>
                  <Field
                     type="text"
                     id="cantidad"
                     name="cantidad"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Cantidad..."
                  />
                  <ErrorMessage name="cantidad" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="naturaleza" className="text-black font-semibold block mb-2">
                     Naturaleza:
                  </label>
                  <Field
                     type="text"
                     id="naturaleza"
                     name="naturaleza"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Naturaleza..."
                  />
                  <ErrorMessage name="naturaleza" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="empaque" className="text-black font-semibold block mb-2">
                     Empaque:
                  </label>
                  <Field
                     as="select"
                     id="empaque"
                     name="empaque"
                     placeholder="Codigo..."
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  >
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
                  <ErrorMessage name="empaque" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="empaque" className="text-black font-semibold block mb-2">
                     Codigo producto:
                  </label>
                  <Field
                     as="select"
<<<<<<< HEAD
                     id="codigoProducto"
                     name="codigoProducto"
                     placeholder="Cod. Producto..."
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  >
                     <option value="05001">05001</option>
                     <option value="05002">05002</option>
=======
                     id="empaque"
                     name="empaque"
                     placeholder="empaque..."
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                  >
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
>>>>>>> b02ccf9fb0c4ac346536f1dd1ab56d138bfed566
                  </Field>
                  <ErrorMessage name="codigoProducto" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="productoTransportar" className="text-black font-semibold block mb-2">
                     Producto a transportar:
                  </label>
                  <Field
                     type="text"
                     id="productoTransportar"
                     name="productoTransportar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="productoTransportar..."
                  />
                  <ErrorMessage name="productoTransportar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="origen" className="text-black font-semibold block mb-2">
                     Origen:
                  </label>
                  <Field
                     type="text"
                     id="origen"
                     name="origen"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Origen..."
                  />
                  <ErrorMessage name="origen" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="destino" className="text-black font-semibold block mb-2">
                     Destino:
                  </label>

                  <Field
                     type="text"
                     id="destino"
                     name="destino"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Destino..."
                  />
                  <ErrorMessage name="destino" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="fechaViaje" className="text-black font-semibold block mb-2">
                     Fecha del viaje:
                  </label>
                  <Field
                     type="date"
                     id="fechaViaje"
                     name="fechaViaje"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Fecha del viaje..."
                  />
                  <ErrorMessage name="fechaViaje" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="saldoPagar" className="text-black font-semibold block mb-2">
                     Saldo a pagar:
                  </label>
                  <Field
                     type="text"
                     id="saldoPagar"
                     name="saldoPagar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Saldo a pagar..."
                  />
                  <ErrorMessage name="saldoPagar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="valorPagar" className="text-black font-semibold block mb-2">
                     Valor a pagar:
                  </label>
                  <Field
                     type="text"
                     id="valorPagar"
                     name="valorPagar"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Valor a pagar..."
                  />
                  <ErrorMessage name="valorPagar" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="conductor" className="text-black font-semibold block mb-2">
                     Conductor:
                  </label>
                  <Field
                     as="select"
                     name="conductor"
                     className="w-full px-3 py-2 rounded bg-gray-200 text-black border border-gray-300 focus-within:border-purplePzHover transition"
                     placeholder="Conductor..."
                  >
                     {
                        usersList.map(user=> (
                           <option value={user.id} key={user.id}>{user.nombre}</option>
                        ))
                     }
                  </Field>
                  <ErrorMessage name="conductor" component="div" className="text-red-500" />
               </div>
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
