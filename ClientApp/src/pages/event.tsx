import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./event.css";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

const EventCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("https://localhost:7037/api/calendar")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="eventHeading">Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id} className="event">
            <hr className="divider"></hr>
            <div className="eventInfo">
              <strong>{event.title}</strong>
              <p className="eventText">{new Date(event.date).toLocaleDateString()}</p>
              <p className="eventText">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
