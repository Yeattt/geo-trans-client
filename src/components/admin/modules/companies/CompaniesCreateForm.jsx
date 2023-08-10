import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { GiTowTruck } from 'react-icons/gi';

import { useCreateForm } from '../../../../hooks';

// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nit: Yup.number('Solo se accepta numeros')
      .typeError('El telefono debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 9 dígitos', val => val && val.toString().length <= 9),
   razonSocial: Yup.string('Solo se accepta letras')
      .required('Campo requerido'),
   nombreEmpresa: Yup.string('Solo se accepta letras')
      .required('Campo requerido'),
   telefono: Yup.number('Solo se accepta numeros')
      .typeError('El telefono debe ser un número')
      .required('Campo requerido')
      .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length <= 10),
   duenoPoliza: Yup.string('Solo se accepta letras')
      .required('Campo requerido'),
});

export const CompaniesCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      nit: '',
      razonSocial: '',
      nombreEmpresa: '',
      telefono: '',
      duenoPoliza: ''
   }, 'companies');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
                  <label htmlFor="nit" className="text-purplePz font-semibold block mb-2">
                     NIT:  <small className='text-red text-2xl'>*</small> 
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="number"
                        id="nit"
                        name="nit"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="NIT..."
                     />
                  </div>

                  <ErrorMessage name="nit" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="razonSocial" className="text-purplePz font-semibold block mb-2">
                     Razón social:  <small className='text-red text-2xl'>*</small> 
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
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
                  <label htmlFor="nombreEmpresa" className="text-purplePz font-semibold block mb-2">
                     Nombre de empresa:  <small className='text-red text-2xl'>*</small> 
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="nombreEmpresa"
                        name="nombreEmpresa"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Nombre de empresa..."
                     />
                  </div>

                  <ErrorMessage name="nombreEmpresa" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="telefono" className="text-purplePz font-semibold block mb-2">
                     Teléfono:  <small className='text-red text-2xl'>*</small> 
                  </label>

                  <div className="bg-white rounded-full border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="number"
                        id="telefono"
                        name="telefono"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Teléfono..."
                     />
                  </div>

                  <ErrorMessage name="telefono" component="div" className="text-red-500" />
               </div>

               <div className="mb-4">
                  <label htmlFor="duenoPoliza" className="text-purplePz font-semibold block mb-2">
                     Dueño póliza:  <small className='text-red text-2xl'>*</small> 
                  </label>

                  <div className="bg-white rounded-full  border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <GiTowTruck />
                     </div>

                     <Field
                        type="text"
                        id="duenoPoliza"
                        name="duenoPoliza"
                        className="bg-transparent w-[85%] lg:w-[93%] h-full px-4 pl-0 py-3 pb-3 font-semibold text-[15px]"
                        placeholder="Dueño poliza..."
                     />
                  </div>

                  <ErrorMessage name="duenoPoliza" component="div" className="text-red-500" />
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