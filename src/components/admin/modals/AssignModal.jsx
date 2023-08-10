import { AiOutlineClose } from 'react-icons/ai';
import { useAssignPermissions, useAssignPrivileges, useGetApiData } from '../../../hooks'
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const AssignModal = ({ handleIsAssignModalActive, id }) => {
    const { data: permissions, isLoading: isPermissionsLoading } = useGetApiData('/permissions');
    const { data: privileges, isLoading: isPrivilegesLoading } = useGetApiData('/privileges');

    const [permissionsList, setPermissionsList] = useState([]);
    const [privilegesList, setPrivilegesList] = useState([]);

    const { initialValues, onSubmitForm } = useAssignPermissions(id, {
        permissionsId: []
    });

    const { initialValues: initialPrivilegesValues, onSubmitForm: onPrivilegesSubmitForm} = useAssignPrivileges(id, {
        privilegesId: []
    });

    useEffect(() => {
        if (!isPermissionsLoading || !isPrivilegesLoading) {
            setPermissionsList(permissions.permissions);
            setPrivilegesList(privileges.privileges);
        }
    }, [isPermissionsLoading, isPrivilegesLoading]);

    return (
        <div className="w-screen h-screen bg-black bg-opacity-50 cursor-default absolute top-0 left-0 flex justify-center items-center overflow-hidden z-10">
            <div className="w-2/3 h-auto bg-primary rounded-md">
                <div className="w-full h-[55px] rounded-md flex items-center justify-between px-2">
                    <h2 className="text-xl text-white font-semibold">Asignar permisos a rol</h2>

                    <span
                        className="w-8 h-8 text-lg text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer rounded-full flex items-center justify-center"
                        onClick={() => handleIsAssignModalActive(false)}
                    >
                        <AiOutlineClose />
                    </span>
                </div>

                <div className="w-full h-[calc(100% - 55px)] bg-white px-80 py-5 flex justify-between">
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={onSubmitForm}
                    >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="permisos" className="text-black font-semibold block mb-2">
                                    Permisos:
                                </label>
                                {
                                    permissionsList.map(({ nombre, id }) => {
                                        return (
                                            <div className="toppings-list-item">
                                                <Field
                                                    type="checkbox"
                                                    id="permissionsId"
                                                    name="permissionsId"
                                                    value={id}
                                                    className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:border-purplePzHover mr-2"
                                                />
                                                <label htmlFor="permissionsId">{nombre}</label>
                                            </div>
                                        );
                                    }
                                    )
                                }
                                <ErrorMessage name="permissionsId" component="div" className="text-red-500" />
                            </div>

                            <div className="text-center mt-2">
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 rounded"
                                >
                                    Registrar
                                </button>
                            </div>
                        </Form>
                    </Formik>

                    {/* //* ESTO ES SOLO UNA VERSIÓN INICIAL DEL FORMULARIO, TODAVÍA NO ESTÁ TERMINADO */}

                    <Formik
                        initialValues={initialPrivilegesValues}
                        // validationSchema={validationSchema}
                        onSubmit={onPrivilegesSubmitForm}
                    >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="permisos" className="text-black font-semibold block mb-2">
                                    Privilegios:
                                </label>
                                {
                                    privilegesList.map(({ nombre, id }) => {
                                        return (
                                            <div className="toppings-list-item">
                                                <Field
                                                    type="checkbox"
                                                    id="privilegesId"
                                                    name="privilegesId"
                                                    value={id}
                                                    className="appearance-none mt-[0px] w-[13px] h-[13px] border-2 border-black cursor-pointer checked:border-purplePzHover mr-2"
                                                />
                                                <label htmlFor="privilegesId">{nombre}</label>
                                            </div>
                                        );
                                    }
                                    )
                                }
                                <ErrorMessage name="privilegesId" component="div" className="text-red-500" />
                            </div>

                            <div className="text-center mt-2">
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-primaryHover transition-all text-white font-semibold py-2 px-4 rounded"
                                >
                                    Registrar
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div >
    );
}