import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useCreateForm } from '../../../hooks';
import { GiTowTruck } from 'react-icons/gi';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   documento: Yup.number()
      .typeError('El documento debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length == 10),
   nombre: Yup.string()
      .required('Campo requerido'),
   razonSocial: Yup.string()
      .required('Campo requerido'),
   telefono: Yup.number()
      .typeError('El telefono debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length === 10),
});

export const ClientsCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      documento: '',
      nombre: '',
      razonSocial: '',
      telefono: ''
   }, 'clients');

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
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="documento"
                        name="documento"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
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
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Nombre..."
                     />
                  </div>

                  <ErrorMessage name="nombre" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="razonSocial" className="text-purplePz font-semibold block mb-2">
                     Razón social:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="razonSocial"
                        name="razonSocial"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Razón social..."
                     />
                  </div>

                  <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="telefono" className="text-purplePz font-semibold block mb-2">
                     Teléfono:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="telefono"
                        name="telefono"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Teléfono..."
                     />
                  </div>

                  <ErrorMessage name="telefono" component="div" className="text-red-500" />
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
