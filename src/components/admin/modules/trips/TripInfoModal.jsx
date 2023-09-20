import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

export const TripInfoModal = ({ trip }) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Button onClick={handleOpen} variant="outlined" endIcon={<InfoIcon />}>Info</Button>
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
                     Viaje {trip.id}
                  </Typography>

                  <div className="grid grid-cols-4 gap-5 mt-8 border-b-2 pb-7 mb-5">
                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Conductor</Typography>
                        <Typography fontWeight="light">{trip.usuario.email}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Vehículo</Typography>
                        <Typography fontWeight="light">{trip.vehiculo.placa}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Cliente</Typography>
                        <Typography fontWeight="light">{trip.cliente.nombre}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Cantidad</Typography>
                        <Typography fontWeight="light">{trip.cantidad}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Empaque</Typography>
                        <Typography fontWeight="light">{trip.empaque}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Estado viaje</Typography>
                        <Typography fontWeight="light">{trip.estadoViaje}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Fecha viaje</Typography>
                        <Typography fontWeight="light">{trip.fechaViaje}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Hora viaje</Typography>
                        <Typography fontWeight="light">{trip.horaViaje}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Naturaleza</Typography>
                        <Typography fontWeight="light">{trip.naturaleza}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Nombre producto</Typography>
                        <Typography fontWeight="light">{trip.nombreProducto}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Número remesa</Typography>
                        <Typography fontWeight="light">{trip.numeroRemesa}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Origen</Typography>
                        <Typography fontWeight="light">{trip.origen}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Producto transportar</Typography>
                        <Typography fontWeight="light">{trip.productoTransportar}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Saldo pagar</Typography>
                        <Typography fontWeight="light">{trip.saldoPagar}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Valor pagar</Typography>
                        <Typography fontWeight="light">{trip.valorPagar}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Tipo viaje</Typography>
                        <Typography fontWeight="light">{trip.tipoViaje}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Unidad medida</Typography>
                        <Typography fontWeight="light">{trip.unidadMedida}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Destino</Typography>
                        <Typography fontWeight="light">{trip.destino}</Typography>
                     </div>

                     <div className="mr-5 ml-5">
                        <Typography className="mb-2 text-primary" fontWeight="medium">Número remesa</Typography>
                        <Typography fontWeight="light">{trip.numeroRemesa}</Typography>
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
      </>
   );
};
