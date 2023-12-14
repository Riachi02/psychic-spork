import { Calendar } from '../@fullcalendar-6.1.10/@fullcalendar/core';
import googleCalendarPlugin from '../@fullcalendar-6.1.10/google-calendar';
import dayGridPlugin from '../@fullcalendar-6.1.10/daygrid';
import timeGridPlugin from '../@fullcalendar-6.1.10/timegrid';

document.addEventListener('DOMContentLoaded', function() 
{
  let calendar_div = document.getElementById("calendar");
  let calendar = new Calendar(calendar_div, {
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    }
  })
  calendar.render();
})