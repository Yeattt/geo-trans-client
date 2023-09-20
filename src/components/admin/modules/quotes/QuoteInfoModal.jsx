import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

export const QuoteInfoModal = ({ quote }) => {
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
              Cotización {quote.id}
            </Typography>

            <div className="grid grid-cols-4 gap-5 mt-8 border-b-2 pb-7 mb-5">
              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Nombre origen</Typography>
                <Typography fontWeight="light">{quote.nombreOrigen}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Nombre destino</Typography>
                <Typography fontWeight="light">{quote.nombreDestino}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Ciudad origen</Typography>
                <Typography fontWeight="light">{quote.ciudadOrigen}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Ciudad destino</Typography>
                <Typography fontWeight="light">{quote.ciudadDestino}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Dirección</Typography>
                <Typography fontWeight="light">{quote.direccion}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Contacto</Typography>
                <Typography fontWeight="light">{quote.contacto}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Fecha solicitud</Typography>
                <Typography fontWeight="light">{quote.fechaSolicitud}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Fecha servicio</Typography>
                <Typography fontWeight="light">{quote.fechaServicio}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Hora cargue</Typography>
                <Typography fontWeight="light">{quote.horaCargue}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Tipo camión</Typography>
                  <Typography fontWeight="light">{quote.tipos_camion.nombre}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Peso aproximado</Typography>
                <Typography fontWeight="light">{quote.pesoAproximado}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Valor mercancia</Typography>
                <Typography fontWeight="light">{quote.valorMercancia}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Observaciones</Typography>
                <Typography fontWeight="light">{quote.observaciones}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Usuario</Typography>
                <Typography fontWeight="light">{quote.usuario.email}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Compañía</Typography>
                <Typography fontWeight="light">{quote.compania.nombreEmpresa}</Typography>
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
