import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { AdminLayout, AdminNavbar, InfoModal } from '../../components';
import { localizer, getMessagesES } from '../../helpers';
import { useGetApiData } from '../../hooks';

// const events = [{
//    title: 'Test',
//    notes: 'Test two',
//    start: new Date(),
//    end: addHours(new Date(), 2),
//    bgColor: '#fafafa'
// }];

export const CalendarPage = () => {
   const [tripsList, setTripsList] = useState([]);
   const [currentTripToShow, setCurrentTripToShow] = useState({});
   const [isInfoModalActive, setIsInfoModalActive] = useState(false);
   const { data, isLoading } = useGetApiData('trips');

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

      console.log(tripToShow);
      
      setIsInfoModalActive(!isInfoModalActive);
      setCurrentTripToShow(tripToShow);
   }

   const onViewChange = () => {
      
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
         start: new Date(trip.fechaViaje),
         end: addHours(new Date(trip.fechaViaje), 2),
         bgColor: '#fafafa',
         tripId: trip.id
      }
   });

   return (
      <AdminLayout>
         <AdminNavbar module="Agenda" />

         {/* // * IMPORTANTE: Prueba del modal para ver información */}
         {
            isInfoModalActive && <InfoModal handleIsInfoModalActive={onSelect} module={currentTripToShow} />
         }

         <Calendar
            culture='es'
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 70px)' }}
            messages={getMessagesES()}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={onSelect}
         />
      </AdminLayout>
   );
}