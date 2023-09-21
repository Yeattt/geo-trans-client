import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUpdateForm, useUploadFiles } from '../../../../hooks';


export const CompaniesUpdate = ({moduleInfo}) => {
    

    const validationSchema = Yup.object().shape({
        nit:           Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .test('len', 'Debe tener 9 dígitos', val => val && val.toString().length <= 9),
   razonSocial:   Yup.string('Solo se accepta letras'),
   nombreEmpresa: Yup.string('Solo se accepta letras'),
   telefono:      Yup.number('Solo se accepta numeros')
                     .typeError('El telefono debe ser un número')
                     .test('len', 'Debe tener 10 dígitos', val => val && val.toString().length <= 10),
   duenoPoliza:   Yup.string('Solo se accepta letras'),
   hojaVida: Yup.string(),
    });

    const { fileData, handleFileChange, uploadFiles } = useUploadFiles();
    const { initialValues, onSubmitForm } = useUpdateForm({
        id: moduleInfo.id,
        nit: moduleInfo.nit,
        razonSocial: moduleInfo.razonSocial,
        nombreEmpresa: moduleInfo.nombreEmpresa,
        telefono: moduleInfo.telefono,
        duenoPoliza: moduleInfo.duenoPoliza,
        hojaVida: moduleInfo.hojaVida
    }, 'companies');

    const handleFormSubmit = async (values) => {
        try {
           const uploadedFilesData = await uploadFiles();
  
           //* Este hook nos devuelve un arreglo con los nombres de los archivos, entonces agarramos los datos
           //* Que tenemos inicialmente en los initialValues, y le pasamos los nombres de los archivos que nos
           //* Retorna el hook, ya que al subir archivos se les cambia el nombre y se genera un nombre único
  
           // Mapeamos los nombres de archivos en uploadedFilesData.files a un objeto para facilitar la asignación
           const finalFormValues = {
              ...values,
              hojaVida: uploadedFilesData?.files[0].nombre,
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
            onSubmit={(values) => handleFormSubmit(values)}
        >
            <Form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="nit" className="text-black font-semibold block mb-2" on>
                            Nit:
                        </label>
                        <Field
                            type="number"
                            id="nit"
                            name="nit"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                            
                        />
                        <ErrorMessage name="nit" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="razonSocial" className="text-black font-semibold block mb-2">
                            Razón Social:
                        </label>
                        <Field
                            type="text"
                            id="razonSocial"
                            name="razonSocial"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="razonSocial" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nombreEmpresa" className="text-black font-semibold block mb-2">
                            Nombre Empresa:
                        </label>
                        <Field
                            type="text"
                            id="nombreEmpresa"
                            name="nombreEmpresa"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="nombreEmpresa" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="telefono" className="text-black font-semibold block mb-2">
                            Teléfono:
                        </label>
                        <Field
                            type="number"
                            id="telefono"
                            name="telefono"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="telefono" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="duenoPoliza" className="text-black font-semibold block mb-2">
                            Dueño Póliza:
                        </label>
                        <Field
                            type="text"
                            id="duenoPoliza"
                            name="duenoPoliza"
                            className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                        />
                        <ErrorMessage name="duenoPoliza" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                  <label htmlFor="hojaVida" className="text-black font-semibold block mb-2">
                     Hoja de Vida:
                  </label>

                  {/* Input para subir archivo */}
                  <input
                     type="file"
                     id="hojaVida"
                     name="hojaVida"
                     className="w-full px-3 py-2 rounded bg-white text-gray-600 border border-gray-300 focus-within:border-purplePzHover transition"
                     onChange={(event) => handleFileChange('hojaVida', event)}
                  />

                  <ErrorMessage name="hojaVida" component="div" className="text-red-600" />
               </div>

                </div>

                <div className="text-center mt-2">
                    <button
                        type="submit"
                        className="bg-purplePz hover:bg-purplePzHover transition-all text-white font-semibold py-2 px-4 rounded"
                        onClick={() => console.log(initialValues)}
                    >
                        Editar
                    </button>
                </div>
            </Form>
        </Formik>
    );
}     