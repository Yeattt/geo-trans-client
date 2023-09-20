import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';

import * as React from 'react';


import { DeleteModal, TripsStateModal, TripInfoModal, UpdateModal } from '../../';
import { useAllowedPrivileges, useGetApiData } from '../../../../hooks';

export const TripsCard = ({ trip }) => {
   const { isLoading: { isUserPrivilegesLoading }, userPrivileges } = useAllowedPrivileges();
   const [isTripsStateModalActive, setIsTripsStateModalActive] = useState(false);
   const [isOpenUpdate, setisOpenUpdate] = useState(false);

   const handleUpdateClick = () => {
      setisOpenUpdate(!isOpenUpdate)
   }

   const handleIsTripsStateModalActive = () => {
      setIsTripsStateModalActive((status) => !status);
   }

   const { data: vehicles, isLoading: isVehiclesLoading } = useGetApiData('/vehicles');
   const [vehiclesList, setVehiclesList] = useState({});

   const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

   const handleIsDeleteModalActive = (status) => {
      if (userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'eliminar'))
         setIsDeleteModalActive(status);
   };



   useEffect(() => {
      if (!isVehiclesLoading) {
         setVehiclesList(vehicles.vehicles);
      }
   }, [isVehiclesLoading]);

   return (
      <tr className="hover:bg-gray-200 border-b-2 border-t-2 border-gray-100">
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-black">{trip.id}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.nombreProducto}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.destino}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.fechaViaje}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.horaViaje}</td>
         {
            isTripsStateModalActive && <TripsStateModal handleIsTripsStateModalActive={handleIsTripsStateModalActive} trip={trip} />
         }
         <td className='px-7 py-5 text-center cursor-pointer font-bold text-white'>
            <button
               className={`py-2 px-4 rounded-full ${trip.estadoViaje == 'pendiente' ? 'bg-gray-800' :
                  trip.estadoViaje == 'emitido' ? 'bg-blue-600' :
                     trip.estadoViaje == 'en-proceso' ? 'bg-orange-600' :
                        trip.estadoViaje == 'facturado' ? 'bg-green-600' :
                           null
                  }`}
               onClick={handleIsTripsStateModalActive}
            >
               {trip.estadoViaje}
            </button>
         </td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.cantidad}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.empaque}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.naturaleza}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.numeroRemesa}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.origen}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.productoTransportar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.saldoPagar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.unidadMedida}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.valorPagar}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.tipoViaje}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.cliente}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.vehiculo.placa}</td>
         <td className="hidden 3xl:table-cell px-7 py-5 text-center cursor-pointer font-bold text-gray-500">{trip.usuario.email}</td>
         <td className="px-7 py-5 text-center cursor-pointer font-bold text-gray-500">
            {
               trip.estado
                  ?
                  <button className="bg-green-500 hover:bg-g-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Activo</button>
                  :
                  <button className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded-full" onClick={() => handleIsDeleteModalActive(true)}>Inactivo</button>
            }
            {
               isDeleteModalActive && <DeleteModal handleIsDeleteModalActive={handleIsDeleteModalActive} module={trip} value={'trips'} />
            }
         </td>

         <td className="px-7 py-5 text-center cursor-pointer font-bold flex items-center justify-center text-gray-500">
            <TripInfoModal trip={trip} />

            {
               userPrivileges.some(privilege => privilege.nombre.toLowerCase().trim() === 'actualizar') &&
               <Button onClick={handleUpdateClick} variant="outlined" endIcon={<EditNoteIcon />}>Editar</Button>
            }


            {/* <span className="text-2xl text-red-600 hover:text-red-700 cursor-pointer">
               <MdDeleteForever />
            </span> */}
         </td>
      </tr>
   );
}
