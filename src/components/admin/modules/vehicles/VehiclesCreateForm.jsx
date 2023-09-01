import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm, useGetApiData, useUploadFiles } from '../../../../hooks';

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
      .max(6, 'Máximo 6 caracteres')
      .required('Campo requerido')
      .test('len', 'Debe tener 6 dígitos', val => val && val.toString().length === 6),
   placaSemirremolque: Yup.string()
      .max(6, 'Máximo 6 caracteres')
      .required('Campo requerido')
      .test('len', 'Debe tener 6 dígitos', val => val && val.toString().length === 6),
   tarjetaPropiedad: Yup.string(),
   // .required('Campo requerido'),
   tecnomecanica: Yup.string(),
   // .required('Campo requerido'),
   soat: Yup.string()
   // .required('Campo requerido'),
});

export const VehiclesCreateForm = () => {
   const { data: vehiclesType, isLoading: isVehiclesTypeLoading } = useGetApiData('/trucks/types');
   const [vehiclesTypeList, setVehiclesTypeList] = useState([]);

   const { fileData, handleFileChange, uploadFiles } = useUploadFiles();
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

   const handleFormSubmit = async (values) => {
      try {
         const uploadedFilesData = await uploadFiles();

         //* Este hook nos devuelve un arreglo con los nombres de los archivos, entonces agarramos los datos
         //* Que tenemos inicialmente en los initialValues, y le pasamos los nombres de los archivos que nos
         //* Retorna el hook, ya que al subir archivos se les cambia el nombre y se genera un nombre único

         // Mapeamos los nombres de archivos en uploadedFilesData.files a un objeto para facilitar la asignación
         const finalFormValues = {
            ...values,
            soat: uploadedFilesData?.files[0].nombre,
            tarjetaPropiedad: uploadedFilesData?.files[1].nombre,
            tecnomecanica: uploadedFilesData?.files[2].nombre
         };

         console.log(finalFormValues);

         //* Cuando todo se completa satisfactoriamente, se llama la función para crear el vehículo
         onSubmitForm(finalFormValues);
      } catch (error) {
         console.error('Error al enviar el formulario:', error);
      }
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleFormSubmit}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="tipoCamion" className="text-purplePz font-semibold block mb-2">
                     Tipo Camión: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     as="select"
                     id="tipoCamion"
                     name="tipoCamion"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Tipo Camión..."
                  >
                     <option value="" disabled defaultValue>
                        Tipo Camión...
                     </option>

                     {vehiclesTypeList.map(vehicleType => (
                        vehicleType.estado && (
                           <option value={vehicleType.id} key={vehicleType.id}>
                              {vehicleType.nombre}
                           </option>
                        )
                     ))}
                  </Field>

                  <ErrorMessage name="tipoCamion" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="modelo" className="text-primary font-semibold block mb-2">
                     Modelo: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="number"
                     id="modelo"
                     name="modelo"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Modelo..."
                  />

                  <ErrorMessage name="modelo" component="div" className="text-red-600" />
               </div>


               <div className="mb-4">
                  <label htmlFor="marca" className="text-primary font-semibold block mb-2">
                     Marca: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="marca"
                     name="marca"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Marca..."
                  />

                  <ErrorMessage name="marca" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placa" className="text-primary font-semibold block mb-2">
                     Placa: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="placa"
                     name="placa"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Placa..."
                  />

                  <ErrorMessage name="placa" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="placaSemirremolque" className="text-primary font-semibold block mb-2">
                     Placa semirremolque: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  <Field
                     type="text"
                     id="placaSemirremolque"
                     name="placaSemirremolque"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     placeholder="Placa semirremolque..."
                  />

                  <ErrorMessage name="placaSemirremolque" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tarjetaPropiedad" className="text-primary font-semibold block mb-2">
                     Tarjeta propiedad: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  {/* Input para subir archivo */}
                  <input
                     type="file"
                     id="tarjetaPropiedad"
                     name="tarjetaPropiedad"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     onChange={(event) => handleFileChange('tarjetaPropiedad', event)}
                  />

                  <ErrorMessage name="tarjetaPropiedad" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="tecnomecanica" className="text-purplePz font-semibold block mb-2">
                     Tecnomecanica: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  {/* Input para subir archivo */}
                  <input
                     type="file"
                     id="tecnomecanica"
                     name="tecnomecanica"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     onChange={(event) => handleFileChange('tecnomecanica', event)}
                  />

                  <ErrorMessage name="tecnomecanica" component="div" className="text-red-600" />
               </div>

               <div className="mb-4">
                  <label htmlFor="soat" className="text-purplePz font-semibold block mb-2">
                     Soat: <small className='text-red-600 text-2xl'>*</small>
                  </label>

                  {/* Input para subir archivo */}
                  <input
                     type="file"
                     id="soat"
                     name="soat"
                     className="w-full px-3 py-2 rounded bg-white text-black border border-gray-300 focus-within:border-primary transition"
                     onChange={(event) => handleFileChange('soat', event)}
                  />

                  <ErrorMessage name="soat" component="div" className="text-red-600" />
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
};