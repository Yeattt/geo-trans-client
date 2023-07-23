import { useEffect, useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { GiTowTruck } from 'react-icons/gi';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { TbFiretruck } from 'react-icons/tb';
import { BsFillPersonVcardFill, BsCardHeading } from 'react-icons/bs';
import { CgToolbox } from 'react-icons/cg';
import { FaTruckLoading } from 'react-icons/fa';

import { useCreateForm, useGetApiData } from '../../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   tipoCamion: Yup.string()
      .max(15, 'Máximo 15 caracteres')
      .required('Campo requerido'),
   modelo: Yup.number()
      .typeError('El modelo debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 4 dígitos', val => val && val.toString().length === 4),
   marca: Yup.string()
      .max(15, 'Máximo 15 caracteres')
      .required('Campo requerido'),
   placa: Yup.string()
      .max(6, 'Máximo 4 caracteres')
      .required('Campo requerido'),
   placaSemirremolque: Yup.string()
      .max(6, 'Máximo 6 caracteres')
      .required('Campo requerido'),
   tarjetaPropiedad: Yup.string()
      .required('Campo requerido'),
   tecnomecanica: Yup.string()
      .required('Campo requerido'),
   soat: Yup.string()
      .required('Campo requerido'),
});

export const VehiclesCreateForm = () => {
   const { data: vehiclesType, isLoading: isVehiclesTypeLoading } = useGetApiData('/trucks/types');
   const [vehiclesTypeList, setVehiclesTypeList] = useState([]);

   const { initialValues, onSubmitForm } = useCreateForm({
      tipoCamion: vehiclesTypeList.length > 0 ? vehiclesTypeList[0].id : '',
      modelo: '',
      marca: '',
      placa: '',
      placaSemirremolque: '',
      tarjetaPropiedad: '',
      tecnomecanica: '',
      soat: ''
   }, 'vehicles');

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
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="tipoCamion" className="text-purplePz font-semibold block mb-2">
                     Tipo Camión:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center overflow-hidden">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
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
                  <label htmlFor="modelo" className="text-purplePz font-semibold block mb-2">
                     Modelo:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="modelo"
                        name="modelo"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Modelo..."
                     />
                  </div>

                  <ErrorMessage name="modelo" component="div" className="text-red-500" />
               </div>


               <div className="mb-4">
                  <label htmlFor="marca" className="text-purplePz font-semibold block mb-2">
                     Marca:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <TbFiretruck />
                     </div>

                     <Field
                        type="text"
                        id="marca"
                        name="marca"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px] focus-within:text-black"
                        placeholder="Marca..."
                     />
                  </div>

                  <ErrorMessage name="marca" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placa" className="text-purplePz font-semibold block mb-2">
                     Placa:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <HiOutlineCreditCard />
                     </div>

                     <Field
                        type="text"
                        id="placa"
                        name="placa"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Placa..."
                     />
                  </div>

                  <ErrorMessage name="placa" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placaSemirremolque" className="text-purplePz font-semibold block mb-2">
                     Placa semirremolque:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <HiOutlineCreditCard />
                     </div>

                     <Field
                        type="text"
                        id="placaSemirremolque"
                        name="placaSemirremolque"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Placa semirremolque..."
                     />
                  </div>

                  <ErrorMessage name="placaSemirremolque" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tarjetaPropiedad" className="text-purplePz font-semibold block mb-2">
                     Tarjeta propiedad:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <BsFillPersonVcardFill />
                     </div>

                     <Field
                        type="text"
                        id="tarjetaPropiedad"
                        name="tarjetaPropiedad"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Tarjeta propiedad..."
                     />
                  </div>

                  <ErrorMessage name="tarjetaPropiedad" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tecnomecanica" className="text-purplePz font-semibold block mb-2">
                     Tecnomecanica:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <CgToolbox />
                     </div>

                     <Field
                        type="text"
                        id="tecnomecanica"
                        name="tecnomecanica"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Tecnomecanica..."
                     />
                  </div>

                  <ErrorMessage name="tecnomecanica" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="soat" className="text-purplePz font-semibold block mb-2">
                     Soat:
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <BsCardHeading />
                     </div>

                     <Field
                        type="text"
                        id="soat"
                        name="soat"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Soat..."
                     />
                  </div>

                  <ErrorMessage name="soat" component="div" className="text-red-500" />
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