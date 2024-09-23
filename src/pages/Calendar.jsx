import Headers from "../components/Headers";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title of your event!");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        addDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}?`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <div>
      <Headers
        title={"CALENDAR"}
        subtitle={"Stay Organized With The Calendar"}
      />
      <div className="flex justify-between m-4 space-x-4">
        {/* CALENDAR SIDEBAR */}
        <div className="bg-accent/20 rounded-xl text-black w-1/5">
          <div>
            {currentEvents.map((event) => (
              <div key={event.id} className="m-2">
                <div className="p-2 bg-accent rounded-lg">
                  <p className="font-semibold">{event.title}</p>
                  <p>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CALENDAR */}
        <div className="flex-1 bg-accent/10 rounded-lg p-4 font-semibold">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            eventColor="oklch(var(--a))"
            eventTextColor="black"
            eventBorderColor="black"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2024-09-12",
              },
              {
                id: "4142",
                title: "Timed event",
                date: "2024-09-24",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
