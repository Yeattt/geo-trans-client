import { useEffect, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { AdminLayout, AdminNavbar } from '../../../components';
import { localizer, getMessagesES } from '../../../helpers';
import { useGetApiData } from '../../../hooks';

export const CalendarPage = () => {
   const [tripsList, setTripsList] = useState([]);
   const [currentTripToShow, setCurrentTripToShow] = useState({});
   const { data, isLoading } = useGetApiData('trips');
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const eventStyleGetter = (event, start, end, isSelected) => {
      const style = {
         backgroundColor: '#347CF7',
         borderRadius: '0px',
         opacity: 0.8,
         color: 'white'
      };

      return {
         style
      };
   }

   const onSelect = (event) => {
      const tripToShow = data.trips.find(trip => trip.id === event.tripId);

      setCurrentTripToShow(tripToShow);
      handleOpen(true);
   }

   useEffect(() => {
      if (!isLoading) {
         setTripsList(data.trips);
      }
   }, [data]);

   const events = tripsList.map(trip => {
      return {
         title: trip.destino,
         notes: trip.tipoViaje,
         start: new Date(`${trip.fechaViaje}T${trip.horaViaje}`),
         end: addHours(new Date(`${trip.fechaViaje}T${trip.horaViaje}`), 2),
         bgColor: '#fafafa',
         tripId: trip.id
      }
   });

   return (
      <AdminLayout>
         <AdminNavbar module="Agenda" />

         {
            Object.keys(currentTripToShow).length > 0 && (
               <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                     timeout: 500,
                  }}
               >
                  <Fade in={open}>
                     <Box
                        sx={{
                           position: 'absolute',
                           top: '50%',
                           left: '50%',
                           transform: 'translate(-50%, -50%)',
                           bgcolor: 'background.paper',
                           borderRadius: '7px',
                           boxShadow: 24,
                           display: 'flex',
                           flexDirection: 'column',
                           p: 4,
                        }}
                        className="border-primary"
                     >
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ color: '#2249c9' }}>
                           Viaje {currentTripToShow?.id}
                        </Typography>

                        <div className="grid grid-cols-4 gap-5 mt-8 border-b-2 pb-7 mb-5">
                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Conductor</Typography>
                              <Typography fontWeight="light">{currentTripToShow.usuario.email}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Vehículo</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.vehiculo.placa}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Cliente</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.cliente}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Cantidad</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.cantidad}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Empaque</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.empaque}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Estado viaje</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.estadoViaje}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Fecha viaje</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.fechaViaje}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Hora viaje</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.horaViaje}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Naturaleza</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.naturaleza}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Nombre producto</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.nombreProducto}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Número remesa</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.numeroRemesa}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Origen</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.origen}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Producto transportar</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.productoTransportar}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Saldo pagar</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.saldoPagar}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Valor pagar</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.valorPagar}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Tipo viaje</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.tipoViaje}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Unidad medida</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.unidadMedida}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Destino</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.destino}</Typography>
                           </div>

                           <div className="mr-5 ml-5">
                              <Typography className="mb-2 text-primary" fontWeight="medium">Número remesa</Typography>
                              <Typography fontWeight="light">{currentTripToShow?.numeroRemesa}</Typography>
                           </div>
                        </div>

                        <Button
                           variant="contained"
                           size="medium"
                           onClick={handleClose}
                           sx={{
                              bgcolor: '#2249c9'
                           }}
                        >
                           Aceptar
                        </Button>
                     </Box>
                  </Fade>
               </Modal>
            )
         }


         <div className="flex items-center justify-center">
            <div className="bg-white rounded-md w-[94%] flex flex-col justify-between px-2 py-2 h-[70vh] mt-12">
               <Calendar
                  culture='es'
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: '100%', width: '100%' }}
                  messages={getMessagesES()}
                  eventPropGetter={eventStyleGetter}
                  onSelectEvent={onSelect}
               />
            </div>
         </div>
      </AdminLayout>
   );
}