import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import mockOrders from '../Data/orders';
import interactionPlugin from '@fullcalendar/interaction';
import Table from './Table';
import React from 'react';

function Calendar() {
  const[orderLayer,setOrderLayer] = React.useState(false);
  const [ordersOnDate, setOrdersOnDate] = React.useState(null);
  const events = mockOrders.map(order => ({
    title: order.orderId,
    start: order.expectedDelivery,
    extendedProps: { order }
  }));

  const handleDateClick = (info) => {
    // Fetch and display orders for the clicked date
    const ordersForDay = events.filter(event => event.start === info.dateStr).map(event => event.extendedProps.order);
    if(ordersForDay.length>0){
        console.log(ordersForDay);
        setOrderLayer(true);
        setOrdersOnDate(ordersForDay);
    }
  };

  function handleOrderLayer(event){
       if(event.currentTarget === event.target){
          setOrderLayer(false);
          setOrdersOnDate(null);
       }
  }

  return (
    <>
    <FullCalendar
      plugins={[dayGridPlugin,interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
    {orderLayer && ordersOnDate && 
     <div id='layerRoot' onClick={handleOrderLayer}>
        <div>
           <Table data={ordersOnDate} allowClick={false}/>
        </div>
     </div>
    }
    </>
  );
}

export default Calendar;
