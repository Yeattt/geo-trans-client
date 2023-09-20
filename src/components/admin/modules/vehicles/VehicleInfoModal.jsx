import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

export const VehicleInfoModal = ({ vehicle }) => {
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
              Vehículo {vehicle.id}
            </Typography>

            <div className="grid grid-cols-4 gap-5 mt-8 border-b-2 pb-7 mb-5">
              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Modelo</Typography>
                <Typography fontWeight="light">{vehicle.model}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Marca</Typography>
                <Typography fontWeight="light">{vehicle.marca}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Placa</Typography>
                <Typography fontWeight="light">{vehicle.placa}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Placa semirremolque</Typography>
                <Typography fontWeight="light">{vehicle.placaSemirremolque}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Tarjeta propiedad</Typography>
                <Typography fontWeight="light">{vehicle.tarjetaPropiedad}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Tecnomecánica</Typography>
                <Typography fontWeight="light">{vehicle.tecnomecanica}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Soat</Typography>
                <Typography fontWeight="light">{vehicle.soat}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Vehículo en uso</Typography>
                <Typography fontWeight="light">{vehicle.enUso}</Typography>
              </div>

              <div className="mr-5 ml-5">
                <Typography className="mb-2 text-primary" fontWeight="medium">Tipo de camión</Typography>
                <Typography fontWeight="light">{vehicle.tipos_camion.nombre}</Typography>
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
