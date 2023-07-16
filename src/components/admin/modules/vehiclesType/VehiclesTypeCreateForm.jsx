import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FaTruckLoading } from 'react-icons/fa';

import { useCreateForm } from '../../../../hooks';


// * Yup es una librería que realiza y verifica las validaciones de los campos que se especifican
const validationSchema = Yup.object().shape({
   nombre: Yup.string().required('Campo requerido'),
});

export const VehiclesTypeCreateForm = () => {
   const { initialValues, onSubmitForm } = useCreateForm({
      nombre: ''
   }, 'trucks/types');

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmitForm}
      >
         <Form>
            <div className="grid grid-cols-2 gap-4">
               <div className="mb-4">
                  <label htmlFor="nombre" className="text-purplePz font-semibold block mb-2">
                     Nombre:
                  </label>

                  <div className="bg-white rounded-full text-gray-400 border-2 border-gray-300 focus-within:border-primary focus-within:text-primary transition w-full h-10 flex items-center">
                     <div className="w-[15%] lg:w-[7%] h-full focus-within:text-black text-[22px] flex items-center justify-center">
                        <FaTruckLoading />
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